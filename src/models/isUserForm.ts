// 全局共享数据示例
import { useState } from 'react';

const useUserForm = () => {
  const [isUserForm, setUserForm] = useState(false);

  return {
    isUserForm,
    setUserForm,
  };
};

export default useUserForm;
