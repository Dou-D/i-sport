import MyParagraph from '@/components/MyParagraph/MyParagraph';
import { Divider, Table, TableProps, Typography, Image } from 'antd';
import { bromatologyData } from './data';
import { BromatologyType } from './types';
import food from '@/assets/food.webp'
import foodType from '@/assets/foodType.jpg'
import foodDevelop from '@/assets/foodDevelop.png'
const { Title } = Typography;

const columns: TableProps<BromatologyType>['columns'] = [
  {
    title: '大学',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '评级',
    dataIndex: 'rate',
    key: 'rate',
  },
];
export default function BromatologyPage() {
  return (
    <>
      <Typography>
        <Title>食品学专业介绍</Title>
        <Divider />
        <Image src={food} />
        <MyParagraph>
          <a href={'https://baike.baidu.com/item/%E9%A3%9F%E5%93%81%E7%A7%91%E5%AD%A6/5653074'}>食品科学</a>关键于跨学科，包括:
          化学类（有机化学、生物化学、食品化学、分析化学等）、生物学、食品科学、食品工程、微生物学、化工和食品技术、肉制品加工、乳制品加工、蛋制品加工等。
        </MyParagraph>
        <Title>分类</Title>
        <Divider />
        <Image src={foodType} />
        <MyParagraph>
          食品科学大致分为食品化学、食品工程、食品微生物学等几个分支。　
        </MyParagraph>
        <MyParagraph>
          <a href={'https://baike.baidu.com/item/%E9%A3%9F%E5%93%81%E5%8C%96%E5%AD%A6/8028056'}>食品化学</a>：从化学角度和分子水平上研究食品的化学组成、结构、理化性质、营养和安全性质以及他们在生产、加工、贮存和运销的过程中的变化及其对食品品质和食品安全性影响的科学，是为改善食品品质、开发食品新资源、革新食品加工工艺和贮运技术、科学调整膳食结构、改进食品包装、加强食品质量控制及提高食品原料加工和综合利用水平奠定理论基础的学科。
        </MyParagraph>
        <MyParagraph>
          <a href={'https://baike.baidu.com/item/%E9%A3%9F%E5%93%81%E5%B7%A5%E7%A8%8B/4191807'}>食品工程</a>：食品工程是粮食、油料加工，食品制造和饮料制造等工程技术领域的总称。一般会从事食品生物技术、食品化学及应用、食品加工与保藏、食品检测与分析、食品分离与重组、粮食与油脂加工、水产品加工、畜产品加工、果蔬加工、食品机械与包装、功能性食品的理论研究和技术开发的高级工程技术人才。
        </MyParagraph>
        <MyParagraph>
          <a href={'https://baike.baidu.com/item/%E9%A3%9F%E5%93%81%E5%BE%AE%E7%94%9F%E7%89%A9%E5%AD%A6/10624176'}>食品微生物学</a>：是微生物学的分支学科。它是自工业微生物学、微生物生态学和卫生学中转化出来的，主要研究微生物与食品制造、保藏等方面内容的一门科学。
        </MyParagraph>
        <MyParagraph>
          食品科学专业的学生将学习食品的化学组成、加工技术、质量控制、食品安全法规等课程，以及进行实验研究和生产实践，以掌握食品科学领域的最新技术和发展趋势。
        </MyParagraph>
        <Title>发展前景</Title>
        <Divider />
        <Image src={foodDevelop} />
        <MyParagraph>
          食品科学专业的毕业生可以在食品生产企业、质量监督部门、研究机构、教育机构等多个领域工作，从事食品研发、质量控制、生产管理、市场监管、教育科研等工作。随着人们对健康饮食的追求和食品科技的进步，食品科学专业的就业前景广阔。
        </MyParagraph>
      </Typography>
      <Table<BromatologyType> columns={columns} dataSource={bromatologyData} />;
    </>
  );
}
