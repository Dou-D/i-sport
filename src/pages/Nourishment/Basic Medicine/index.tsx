import MyParagraph from '@/components/MyParagraph/MyParagraph';
import { Divider, Table, TableProps, Typography } from 'antd';
import { data } from './data';
import { BasicMedicineTableType } from './types';

const { Title, Paragraph } = Typography;

export default function BasicMedicinePage() {
  const columns: TableProps<BasicMedicineTableType>['columns'] = [
    {
      title: '地区',
      dataIndex: 'region',
      key: 'region',
    },
    {
      title: '开设院校',
      dataIndex: 'college',
      key: 'college',
    },
  ];
  return (
    <>
      <Typography>
        <Title>背景</Title>
        <Divider />
        <MyParagraph>
          <a href={'https://baike.baidu.com/item/%E5%9F%BA%E7%A1%80%E5%8C%BB%E5%AD%A6/4684171'}>基础医学</a>是研究人的生命和疾病现象的本质及其规律的自然科学，是<a href={'https://baike.baidu.com/item/%E4%B8%B4%E5%BA%8A%E5%8C%BB%E5%AD%A6/201903'}>临床医学</a>乃至整个现代医学发展的源泉。鉴于基础医学在医学人才培养中的重要地位，基础医学涉及的二级学科所属课程均为中国高等院校医学生的必修课程。因此，高质量的基础医学教育是医学教育的根本和重要保障。鉴于此，中国国内部分高校自20世纪90年代起陆续设立了基础医学本科专业，旨在培养既拥有基础医学知识，又有一定的临床实践经验，更知晓<a href={'https://baike.baidu.com/item/%E7%8E%B0%E4%BB%A3%E7%94%9F%E5%91%BD%E7%A7%91%E5%AD%A6/5728473'}>现代生命科学理论</a>的复合型人才，充实到基础医学教师队伍，以提高医学人才培养的质量。
        </MyParagraph>
        <Title>发展历程</Title>
        <Divider />
        <Paragraph>
          1998年，教育部颁布<a href={'https://baike.baidu.com/item/%E6%99%AE%E9%80%9A%E9%AB%98%E7%AD%89%E5%AD%A6%E6%A0%A1%E6%9C%AC%E7%A7%91%E4%B8%93%E4%B8%9A%E7%9B%AE%E5%BD%95'}>《普通高等学校本科专业目录》</a>，基础医学专业位列其中，属基础医学类专业，专业代码为：100101*（专业代码后带“*”的表示目录内需一般控制设置的专业。）。
        </Paragraph>
        <Paragraph>
          2012年，教育部颁布《普通高等学校本科专业目录（2012版）》，基础医学专业代码由100101变更为100101K。
        </Paragraph>
        <Paragraph>
          2018年，教育部高等学校教学指导委员会发布《本科专业类教学质量国家标准》，基础医学授予医学学士学位。
        </Paragraph>
        <Paragraph>
          2020年，教育部颁布《普通高等学校本科专业目录（2020版）》，基础医学专业与生物医学专业、生物医学科学专业共同组成基础医学类专业，其中基础医学专业代码为100101K，授予医学学士学位，学制为五年。
        </Paragraph>
        <Title>发展前景</Title>
        <MyParagraph>
          该专业培养具备自然科学、生命科学和医学科学基础理论知识和实验技能，熟悉基础医学先进仪器设备，具有较高的外语水平、一定的教学实践能力和开展实验研究的能力，自主学习、独立分析问题和解决问题的能力的基础医学高级专门人才。
        </MyParagraph>
      </Typography>
      <Table<BasicMedicineTableType> columns={columns} dataSource={data} />;
    </>
  );
}
