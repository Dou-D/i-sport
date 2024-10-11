// 全局共享数据示例
import { useState } from 'react';

const useUser = () => {
  const [isUserForm, setUIsUserForm] = useState(false);
  return {
    isUserForm,
    setUIsUserForm,
  };
};

export default useUser;
