import { USER_TOKEN_CARD } from '@/constants';
import { message } from 'antd';
import { useState } from 'react';
import './index.css';
import Video from '@/components/Video';

export default function Recover() {
  const today = new Date().toDateString()

  const [isCheckedIn, setIsCheckedIn] = useState(
    localStorage.getItem(USER_TOKEN_CARD) === today
  ); // 状态：是否已打卡
  const [isAnimating, setIsAnimating] = useState(false); // 控制动画效果

  const videoList = [] // 视频链接
  for (let i = 0; i < 9; i++) {
    videoList.push('https://cdn.pixabay.com/video/2016/04/18/2849-163375551_large.mp4')
  }

  const handleCheckIn = () => {
    // 防止多次点击打卡
    if (!isAnimating) {
      setIsAnimating(true)

      if (localStorage.getItem(USER_TOKEN_CARD) !== today) {
        localStorage.setItem(USER_TOKEN_CARD, new Date().toDateString());
        message.success('打卡成功哦！');
        setTimeout(() => {
          setIsCheckedIn(!isCheckedIn); // 切换打卡状态
        }, 600); // 动画时长与CSS同步
      } else {
        message.warning('今日已打卡');
      }
      setIsAnimating(false); // 动画完成后重置
    }
  };

  return (
    <div className="container">
      <p>{isCheckedIn ? '已打卡 ✔️' : '尚未打卡 ❌'}</p>

      <div
        className={`circle-button ${isAnimating ? 'animate' : ''} ${
          isCheckedIn ? 'checked-in' : ''
        }`}
        onClick={handleCheckIn}
      >
        {isCheckedIn ? '完成' : '打卡'}
      </div>
      <Video list={videoList}></Video>
    </div>
  );
}
