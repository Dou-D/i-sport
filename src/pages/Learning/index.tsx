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
  const videoList = [
    'https://cdn.pixabay.com/video/2017/11/03/12740-241674224_large.mp4',
    'https://cdn.pixabay.com/video/2022/08/28/129423-744370596_large.mp4',
    'https://cdn.pixabay.com/video/2020/09/26/50889-462211383_large.mp4',
    'https://cdn.pixabay.com/video/2022/06/03/119140-716960472_large.mp4',
    'https://cdn.pixabay.com/video/2021/04/29/72564-543910238_large.mp4',
    'https://cdn.pixabay.com/video/2017/07/23/10783-226624891_large.mp4',
    'https://cdn.pixabay.com/video/2015/10/16/1059-142621447_large.mp4',
    'https://cdn.pixabay.com/video/2022/10/16/135156-761273546_large.mp4',
    'https://cdn.pixabay.com/video/2024/02/13/200399-912684154_large.mp4',
  ] // 视频链接

  return (
    <PageContainer ghost>{isUserForm ? <Video list={videoList}/> : <UserForm />}</PageContainer>
  );
};
