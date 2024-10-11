import UserForm from '@/components/UserForm';
import Video from '@/components/Video';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';

export default () => {
  const { isUserForm } = useModel('isUserForm');
  return (
    <PageContainer ghost>{isUserForm ? <Video /> : <UserForm />}</PageContainer>
  );
};
