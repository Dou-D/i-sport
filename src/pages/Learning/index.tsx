import UserForm from '@/components/UserForm';
import Video from '@/components/Video';
import { USER_FORM_KEY } from '@/constants';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';

export default () => {
  const { isUserForm, setUserForm } = useModel('isUserForm');
  if (localStorage.getItem(USER_FORM_KEY)) {
    setUserForm(true);
  }
  return (
    <PageContainer ghost>{isUserForm ? <Video /> : <UserForm />}</PageContainer>
  );
};
