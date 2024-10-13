import analysis from '@/assets/analysis.jpg';
import policy from '@/assets/policy.png';
import future from '@/assets/analysisFuture.png'
import MyParagraph from '@/components/MyParagraph/MyParagraph';
import { Divider, Image, Typography } from 'antd';
const { Title } = Typography;

export default function AnalysisPage() {
  return (
    <>
      <Typography>
        <Title>背景</Title>
        <Divider />
        <Image src={analysis} />
        <MyParagraph>
          《食品分析与检验》是食品科学与工程、食品质量与安全、食品营养与检验教育等专业的一门专业核心课。食品分析与检验课程专门研究食品中成分的检测方法及有关理论，是运用物理、化学、生物化学、分子生物学等学科的基本理论及各种科学技术，对食品工业生产中的原料、辅料、半成品、成品、副产品所含各种成分及其含量进行检测，进而评定食品品质和安全性的一门技术性学科。
        </MyParagraph>
        <MyParagraph>
          《食品分析与检验》作为一门专门技术直接服务于生产，通过它及时反映食品的质量，保证生产过程的顺利进行，并为改进生产工艺与技术、开发新型食品提供依据，也为控制食品污染，确保食品的卫生安全起着重要的作用。
        </MyParagraph>
        <Title>政策</Title>
        <Divider />
        <Image src={policy} />
        <MyParagraph>
          近年来，国家对食品安全领域的重视不断加强，政策扶持力度不断加大，为食品检测行业提供了广阔的发展空间。政府监管部门需要通过食品检测来对市场上的食品进行监督和管理，保障公众的健康和安全。
        </MyParagraph>
        <Title>未来</Title>
        <Divider />
        <Image src={future} />
        <MyParagraph>
          食品安全管理是健康中国发展过程中的重要环节，是促进社会安全稳定发展的基本需求。通过食品检测能够实现食品质量控制。随着食品产业的不断发展，新的食品安全隐患和问题层出不穷。为了应对这些挑战，相关部门需要不断改进和更新检测技术。政府、科研机构和企业应该加大资金和资源的投入，支持食品检测技术的研究和开发。
        </MyParagraph>
      </Typography>
    </>
  );
}
