import { fetchData } from '@/services/chat/route';
import { Button, Input } from 'antd';
import React, { useState } from 'react';
import './index.css';

interface ChatMessage {
  avatar: string;
  message: string;
  direction: 'left' | 'right';
}

const initialMessages: ChatMessage[] = [
  { avatar: 'AI', message: '您好，有什么可以帮助的吗？', direction: 'left' },
];

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  // const [text, setText] = useState('');
  const [input, setInput] = useState('');
  const decoder = new TextDecoder('utf-8');
  const handleSubmit = async () => {
    const response = await fetchData(input);
    if (!response.ok) {
      // 处理错误
      console.error('Failed to fetch data:', response.statusText);
      return;
    }
    console.log(response);

    const reader = response.body?.getReader();
    let fullResponse = '';

    function read() {
      reader
        ?.read()
        .then(({ done, value }) => {
          if (done) {
            // 当流结束时，添加AI的消息到messages数组
            setMessages((prevMessages) => [
              ...prevMessages,
              { avatar: 'AI', message: fullResponse, direction: 'left' },
            ]);
            return;
          }
          console.log(value, 'value');

          const decodedValue = decoder.decode(value, { stream: true });
          const cleanedValue = decodedValue.replace(/data:\s*/g, ''); // 去除 "data: " 标识

          fullResponse += cleanedValue.replace(/\s+/g, ''); // 去除空格

          // 更新文本状态（如果你确实想用它来显示部分消息）
          // setText((value) => {
          //   return value + cleanedValue
          // });

          // 继续读取下一个数据块
          read();
        })
        .catch((error) => {
          console.error('Error while reading stream:', error);
        });
    }

    // 开始读取流
    read();
  };
  const handleSend = () => {
    if (input.trim() === '') return;

    const newMessage: ChatMessage = {
      avatar: 'B',
      message: input,
      direction: 'right',
    };

    setMessages([...messages, newMessage]);
    setInput('');
    handleSubmit();
  };
  
  return (
    <div className="chat-container">
      <div className="message-list">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.direction}`}>
            <div className="avatar">{msg.avatar}</div>
            <div className="message">{msg.message}</div>
          </div>
        ))}
        {/* 显示 AI 消息逐步接收的部分 */}
        {/* {text && (
          <div className="chat-message left">
            <div className="avatar">AI</div>
            <div className="message">{text}</div>
          </div>
        )} */}
      </div>

      <div className="input-container">
        <Input
          placeholder="输入消息..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={(e) => e.key === 'Enter' && handleSend()}
        />
        <Button onClick={handleSend} size="large">
          发送
        </Button>
      </div>
    </div>
  );
};

export default ChatBox;
