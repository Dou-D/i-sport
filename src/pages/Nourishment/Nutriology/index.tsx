import MyParagraph from '@/components/MyParagraph/MyParagraph';
import { Divider, Typography, Image } from 'antd';
import nutrition from '@/assets/nutrition.jpg'
import nutritionDevelop from '@/assets/nutritionDevelop.png'
const { Title, Paragraph } = Typography;

export default function FoodSciencePage() {
  return (
    <>
      <Typography>
        <Title>营养学专业介绍</Title>
        <Divider />
        <Image src={nutrition} />
        <MyParagraph>
          <a
            href={
              'https://baike.baidu.com/item/%E8%90%A5%E5%85%BB%E5%AD%A6/3574'
            }
          >
            营养学
          </a>
          是一门研究机体代谢与食物营养素之间的关系的一门学科。通过对
          <a
            href={
              'https://baike.baidu.com/item/%E8%90%A5%E5%85%BB%E5%AD%A6/3574'
            }
          >
            营养学
          </a>
          的历史、起源、发展、特征、层次等方面的描述，可以知道营养学的发展脉略。营养学对社会、家庭、行业、健康、政策具有深远影响。美国属于分子领域的营养学代表，中国是整体营养学的代表，而日本兼备了两者的特点。虽然日本并非营养学发达的国家，但是2015年的调查发现，日本临床营养学已经建立系统，而21世纪以来，各类催熟剂的使用使得食物营养素缺乏，国民的营养状况令人担忧。
        </MyParagraph>
        <Title>发展</Title>
        <Divider />
        <Image src={nutritionDevelop} />
        <MyParagraph>
          中国的饮食文化，中医文化和养生学是现代营养学的鼻祖。“
          <a
            href={
              'https://baike.baidu.com/item/%E8%8D%AF%E9%A3%9F%E5%90%8C%E6%BA%90/10695493'
            }
          >
            药食同源
          </a>
          ”是营养学从治病到预防疾病发展的趋势，
          <a
            href={
              'https://baike.baidu.com/item/%E4%B8%AD%E5%8C%BB%E5%9F%BA%E7%A1%80%E7%90%86%E8%AE%BA/807151'
            }
          >
            《中医基础理论》
          </a>
          详细介绍了五大脏腑与自然界五色、五味、四季等紧密联系在一起，人们可以通过简单易学基础衍生到日常生活习惯中，以不按照个人喜好暴饮暴食，严格按照食品的两性（温性、寒性）和个人体质选择适当的食品，达到体内外相对平衡的状态，使身体健康，达到预防疾病的功效。
        </MyParagraph>
        <MyParagraph>
          在7000多年前，古老的中国就把营养学的研究展开了。7000年前，人类的最初研究是从食物是否有毒开始的。神农尝百草的目的是确定是否有毒。在3000年前，社会安定，黄帝诞生，并把食物的研究推前了，有书
          <a
            href={
              'https://baike.baidu.com/item/%E9%BB%84%E5%B8%9D%E5%86%85%E7%BB%8F/97915'
            }
          >
            《黄帝内经》
          </a>
          ，记载了食物的核心：五谷为养，五果为助，五畜为益，五菜为充，气味和而服之，以补精益气。就是说，3000年前的祖宗认为谷米必吃，水果配合吃，肉类增加一下口味就可以了，各种蔬菜就是补充能量的食物，这些都一起吃，所以就合适人体了。总的来说是四份素，一份肉。这是一个非常美妙的比例，符合自然的法则。在2000年前的西方医学之父希·波克拉低，则提出了饮食的法则：“把你的食物当药物，而不是把你的药物当食物。”就是提出了多吃食物少吃药、提前预防疾病为主的医学思想。
        </MyParagraph>
        <MyParagraph>
          食品科学专业的学生将学习食品的化学组成、加工技术、质量控制、食品安全法规等课程，以及进行实验研究和生产实践，以掌握食品科学领域的最新技术和发展趋势。
        </MyParagraph>
        <Title>我国成就</Title>
        <Divider />
        <Paragraph>
          1938年中国中华医学会特刊第10号发表<a href='https://www.doc88.com/p-7347705926314.html' target='_blank'>《中国民众最低限度之营养需要》</a>。
        </Paragraph>
        <Paragraph>1945年中国营养学会成立。</Paragraph>
        <Paragraph>
          1952年中国出版
          <a
            href={
              'https://baike.baidu.com/item/%E9%A3%9F%E7%89%A9%E6%88%90%E5%88%86%E8%A1%A8'
            }
          >
            《食物成分表》
          </a>
          。
        </Paragraph>
        <Paragraph>
          1958年中国
          <a
            href={
              'https://baike.baidu.com/item/%E8%90%A5%E5%85%BB%E5%AD%A6%E6%8A%A5/5775829'
            }
          >
            《营养学报创刊》
          </a>
          。
        </Paragraph>
        <Paragraph>1959年中国进行首次全国性营养调查。</Paragraph>
        <Paragraph>
          1980年中国报告硒与克山病的研究工作，提出人体硒的最低需要量。
        </Paragraph>
        <Paragraph>
          1988年中国营养学会修订
          <a
            href={
              'https://baike.baidu.com/item/%E6%8E%A8%E8%8D%90%E7%9A%84%E6%AF%8F%E6%97%A5%E8%86%B3%E9%A3%9F%E4%B8%AD%E8%90%A5%E5%85%BB%E7%B4%A0%E4%BE%9B%E7%BB%99%E9%87%8F'
            }
          >
            《推荐的每日膳食中营养素供给量（RDA）》
          </a>
          。
        </Paragraph>
        <Paragraph>
          1989年中国营养学会发表第1版
          <a
            href={
              'https://baike.baidu.com/item/%E4%B8%AD%E5%9B%BD%E5%B1%85%E6%B0%91%E8%86%B3%E9%A3%9F%E6%8C%87%E5%8D%97%E7%B2%BE%E7%BC%96%E7%89%88?fromtitle=%E4%B8%AD%E5%9B%BD%E8%86%B3%E9%A3%9F%E6%8C%87%E5%8D%97&fromid=16775904'
            }
          >
            《中国膳食指南》
          </a>
          。
        </Paragraph>
        <Paragraph>
          1992年中国预防医学科学院营养与食品卫生研究所主编<a href='https://nlc.chinanutri.cn/fq/' target='_blank'>《食物成分表》</a>出版。
        </Paragraph>
        <Paragraph>1992年中国营养学会组织第3次全国性营养调查。</Paragraph>
        <Paragraph>
          1993年中国
          <a
            href={
              'https://baike.baidu.com/item/%E4%B8%AD%E5%8D%8E%E4%B8%B4%E5%BA%8A%E8%90%A5%E5%85%BB%E6%9D%82%E5%BF%97?fromtitle=%E4%B8%AD%E5%9B%BD%E4%B8%B4%E5%BA%8A%E8%90%A5%E5%85%BB%E6%9D%82%E5%BF%97&fromid=17202835'
            }
          >
            《中国临床营养杂志》
          </a>
          在北京创刊。
        </Paragraph>
        <Paragraph>
          1993年国务院颁布<a href='https://www.gansu.gov.cn/art/c103795/c104459/c104466/202007/210200.shtml' target='_blank'>《九十年代中国食物结构改革与发展纲要》</a>。
        </Paragraph>
        <Paragraph>
          1994年中国
          <a
            href={
              'https://baike.baidu.com/item/%E8%82%A0%E5%A4%96%E4%B8%8E%E8%82%A0%E5%86%85%E8%90%A5%E5%85%BB'
            }
          >
            《肠外与肠内营养》
          </a>
          在南京创刊。
        </Paragraph>
        <Paragraph>
          1997年中国营养学会发表第2版<a href='http://dg.cnsoc.org/' target='_blank'>《中国居民膳食指南》</a>，特殊人群膳食指南。
        </Paragraph>
        <Paragraph>
          2000年中华人民共和国卫生部首次举行营养师资格考试，并决定每年举行1次。
        </Paragraph>
        <Paragraph>
          2000年中国营养学会发表<a href='https://www.xinhuanet.com/health/20231103/046af7adb5774112bf311e7a1be05cc7/c.html#:~:text=%E6%96%B0%E7%89%88DRIs%E7%94%B1%E4%B8%AD,%E5%8D%B1%E9%99%A9%E7%9A%84%E4%B8%80%E6%9C%AC%E4%B8%93%E8%91%97%E3%80%82' target='_blank'>《中国居民膳食营养素参考摄入量（DRIs）》</a>。
        </Paragraph>
        <Paragraph>
          2001年国务院颁布<a href='https://www.gov.cn/zwgk/2014-02/10/content_2581766.htm' target='_blank'>《中国食物与营养发展的纲要》</a>，提出我国应该实行营养师制度。
        </Paragraph>
        <Paragraph>
          2003年中国疾病预防中心主编<a href='http://www.hyyhealth.com/food' target='_blank'>《中国食物成分表2002》</a>出版。
        </Paragraph>
        <Paragraph>2003年中国成立国家食品药品监督管理局（FDA）。</Paragraph>
        <Paragraph>
          2003年中国科学院在上海市成立中国科学院营养科学研究所。
        </Paragraph>
      </Typography>
    </>
  );
}
