import { Col, message, Row } from 'antd';
import ReactPlayer from 'react-player';

import { useState, useEffect } from 'react';

export default function Video({ list }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const videoList = [];

  let num = null
  if (screenWidth > 700) {
    num = 7
  }
  for (let i = 0; i < list.length; i++) {
    videoList.push(
      <Col span={num} style={{ margin: '10px' }}>
        <ReactPlayer
          url={list[i]} //地址
          width="100%" //宽度
          height="100%" //高度
          playing={false} //是否自动播放
          controls //控制
        />
      </Col>,
    );
  }
  
  return (
    <>
      <Row>{videoList}
      </Row>
    </>
  );
}
