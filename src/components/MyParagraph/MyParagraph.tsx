import { Typography } from 'antd';
import { IProps } from './types';

const { Paragraph } = Typography;

const MyParagraph: React.FC<IProps> = (props) => {
  return (
    <>
      <Paragraph className="indent-8 leading-10 text-lg">{props.children}</Paragraph>
    </>
  );
};

export default MyParagraph;
