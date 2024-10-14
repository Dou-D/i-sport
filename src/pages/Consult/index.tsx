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
    {
      avatar: 'B',
      message: '您好，我想咨询一下康复医疗的服务。',
      direction: 'right',
    },
    {
      avatar: 'AI',
      message: "康复医疗服务是一个涉及多学科合作的领域，旨在帮助患者恢复身体功能、提高生活质量，并促进其重返社会。根据国家卫生健康委员会发布的信息，康复医疗服务正在逐步完善和发展。康复医疗服务的目标是到2022年，每10万人口康复医师达到6人、康复治疗师达到10人，到2025年，每10万人口康复医师达到8人、康复治疗师达到12人，实现全方位全周期的康复医疗服务",
      direction: 'left',
    },
];

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  // const [text, setText] = useState('');
  const [input, setInput] = useState('');
  const decoder = new TextDecoder('utf-8');
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
