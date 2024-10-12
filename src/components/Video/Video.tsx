import { Col, Row } from 'antd';
import ReactPlayer from 'react-player';

export default function Video({list}) {
  const videoList = [];

  for(let i = 0; i < list.length; i++) {
    videoList.push(
      <Col span={7} style={{ margin: '10px' }} >
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
      <Row>{videoList}</Row>
    </>
  );
}
