import { Navigate, Outlet } from '@umijs/max';

export default function Auth() {
  const isLogin = localStorage.getItem('token');
  if (isLogin) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}