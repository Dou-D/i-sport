// 运行时配置
import logo from '@/assets/logo.jpg';
import {
  sport_accustomed as accustomed,
  sport_duration as duration,
  sport_frequency as frequency,
  sport_intensity as intensity,
} from '@/config/UserFormInfo';
import { UserOutlined } from '@ant-design/icons';
import { history, RunTimeLayoutConfig } from '@umijs/max';
import { Avatar, Button, Drawer } from 'antd';
import dayjs from 'dayjs';
import qs from 'qs';
import { useState } from 'react';
import { UserFormType } from './components/UserForm/types';
import { USER_FORM_KEY } from './constants';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

const userData = localStorage.getItem(USER_FORM_KEY);

export const layout: RunTimeLayoutConfig = () => {
  return {
    logo: logo,
    menu: {
      locale: false,
    },
    title: 'i运动',
    rightRender: () => {
      if (!userData) {
        return;
      }
      const {
        birthTime,
        height,
        sport_accustomed,
        sport_duration,
        sport_frequency,
        sport_intensity,
        weight,
      } = qs.parse(userData) as unknown as UserFormType;
      const [open, setOpen] = useState(false);

      const onClose = () => {
        setOpen(false);
      };
      const showDrawer = () => {
        setOpen(true);
      };
      const handleDelFormData = () => {
        localStorage.removeItem(USER_FORM_KEY);
        history.replace('/learning');
        history.go(0)
      };
      return (
        <div className="w-full text-center">
          <Avatar
            style={{ backgroundColor: '#87d068' }}
            icon={<UserOutlined />}
            onClick={showDrawer}
          />
          <Drawer title="您的个人信息" onClose={onClose} open={open}>
            <p>出生时间：{dayjs(birthTime * 1000).format('YYYY-MM-DD')}</p>
            <p>身高：{height}</p>
            <p>体重：{weight}</p>
            <p>运动习惯：{accustomed[sport_accustomed]}</p>
            <p>单次运动持续时间：{duration[sport_duration]}</p>
            <p>运动频率：{frequency[sport_frequency]}</p>
            <p>运动强度：{intensity[sport_intensity]}</p>
            <Button onClick={handleDelFormData}>修改个人数据</Button>
          </Drawer>
        </div>
      );
    },
  };
};
