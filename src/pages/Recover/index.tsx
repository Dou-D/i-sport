import Video from '@/components/Video';
import { USER_TOKEN_CARD } from '@/constants';
import { PageContainer } from '@ant-design/pro-components';
import { Image, message } from 'antd';
import { useEffect, useState } from 'react';
import './index.css';

export default function Recover() {
  const today = new Date().toDateString();

  const [isCheckedIn, setIsCheckedIn] = useState(
    localStorage.getItem(USER_TOKEN_CARD) === today,
  ); // 状态：是否已打卡
  const [isAnimating, setIsAnimating] = useState(false); // 控制动画效果

  const videoList = [
    'https://cdn.pixabay.com/video/2015/08/13/445-136216234_tiny.mp4',
    'https://cdn.pixabay.com/video/2020/04/04/35009-405620783_tiny.mp4',
    'https://cdn.pixabay.com/video/2022/12/18/143431-782373969_tiny.mp4',
    'https://cdn.pixabay.com/video/2022/12/18/143436-782373975_large.mp4',
    'https://cdn.pixabay.com/video/2023/07/17/171959-846471974_large.mp4',
    'https://cdn.pixabay.com/video/2022/07/15/124251-730508536_large.mp4',
    'https://cdn.pixabay.com/video/2020/01/14/31247-385265613_large.mp4',
    'https://cdn.pixabay.com/video/2019/04/20/22913-336128301_large.mp4',
    'https://cdn.pixabay.com/video/2022/03/14/110734-688648666_large.mp4',
  ]; // 视频链接

  const handleCheckIn = () => {
    // 防止多次点击打卡
    if (!isAnimating) {
      setIsAnimating(true);

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
  useEffect(() => {
    message.info('最困难的事情就是下定决心行动,剩下的只不过是坚持而已');
  }, [])
  return (
    <PageContainer ghost className='text-center'>
      <Image src="https://cdn.pixabay.com/photo/2019/04/06/02/20/cyclist-4106536_1280.jpg"></Image>
      <div className="container" style={{ margin: '30px auto' }}>
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
    </PageContainer>
  );
}
