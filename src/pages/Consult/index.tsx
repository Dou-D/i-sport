import React, { useState } from 'react';
import './index.css';

interface ChatMessage {
    avatar: string;
    message: string;
    direction: 'left' | 'right';
}

const initialMessages: ChatMessage[] = [
    { avatar: 'AI', message: '你好，有什么可以帮助的吗？', direction: 'left' },
    { avatar: 'B', message: '您好，我想咨询一下康复医疗的服务。', direction: 'right' },
    { avatar: 'AI', message: '好的，请问您具体需要了解哪方面的内容？', direction: 'left' },
    { avatar: 'B', message: '我想了解一下理疗的具体流程。', direction: 'right' },
];

const ChatBox: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
    const [input, setInput] = useState<string>('');

    const handleSend = () => {
        if (input.trim() === '') return;

        const newMessage: ChatMessage = {
            avatar: 'B',
            message: input,
            direction: 'right'
        };

        setMessages([...messages, newMessage]);
        setInput('');
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
          </div>
          <div className="input-container">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="输入消息..."
              />
              <button onClick={handleSend}>发送</button>
          </div>
      </div>
    );
};

export default ChatBox;