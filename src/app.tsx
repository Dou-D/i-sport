// 运行时配置

import { UserOutlined } from '@ant-design/icons';
import { RunTimeLayoutConfig } from '@umijs/max';
import { Avatar } from 'antd';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}
const gridStyle: React.CSSProperties = {
  width: '100%',
  textAlign: 'center',
};
export const layout: RunTimeLayoutConfig = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
    title: 'i运动',
    rightRender: (initialState, setInitialState) => {
      return (
        <div className='w-full text-center'>
          <Avatar
              style={{ backgroundColor: '#87d068' }}
              icon={<UserOutlined />}
            />
        </div>
      );
    },
  };
};
