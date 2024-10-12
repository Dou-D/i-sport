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
  const videoList = [] // 视频链接
  for (let i = 0; i < 9; i++) {
    videoList.push('https://cdn.pixabay.com/video/2016/04/18/2849-163375551_large.mp4')
  }
  return (
    <PageContainer ghost>{isUserForm ? <Video list={videoList}/> : <UserForm />}</PageContainer>
  );
};
