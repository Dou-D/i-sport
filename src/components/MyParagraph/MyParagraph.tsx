import { Typography } from 'antd';
import { IProps } from './types';

const { Paragraph } = Typography;

const MyParagraph: React.FC<IProps> = (props) => {
  return (
    <>
      <Paragraph className="indent-8">{props.children}</Paragraph>
    </>
  );
};

export default MyParagraph;
