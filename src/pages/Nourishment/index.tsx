import { PageContainer } from '@ant-design/pro-components';
import { Outlet } from '@umijs/max';

export default function Test({ children }: { children: React.ReactElement }) {
  return (
    <PageContainer ghost>
      <Outlet context={children} />
    </PageContainer>
  );
}
