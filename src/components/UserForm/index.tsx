import { sport_accustomed, sport_frequency } from '@/config/UserFormInfo';
import { USER_FORM_KEY } from '@/constants';
import type { ProFormInstance } from '@ant-design/pro-components';
import {
  PageContainer,
  ProForm,
  ProFormDatePicker,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { message } from 'antd';
import moment from 'dayjs';
import qs from 'qs';
import { useRef } from 'react';
import { UserFormType } from './types';

const UserForm: React.FC = () => {
  const { setUIsUserForm } = useModel('isUserForm');

  const formRef = useRef<
    ProFormInstance<{
      name: string;
      company?: string;
      useMode?: string;
    }>
  >();
  return (
    <PageContainer ghost>
      <ProForm<UserFormType>
        // 点击提交逻辑
        onFinish={async (values) => {
          console.log('values:', values);
          if (values) {
            localStorage.setItem(USER_FORM_KEY, qs.stringify(values));
            setUIsUserForm(true);
          }
          const val1 = await formRef.current?.validateFields();
          console.log('validateFields:', val1);
          const val2 =
            await formRef.current?.validateFieldsReturnFormatValue?.();
          console.log('validateFieldsReturnFormatValue:', val2);
          message.success('提交成功');
        }}
        formRef={formRef}
        params={{ id: '100' }}
        formKey="base-form-use-demo"
        dateFormatter={(value, valueType) => {
          console.log('---->', value, valueType);
          return value.format('YYYY/MM/DD HH:mm:ss');
        }}
        autoFocusFirstInput
      >
        <ProFormSelect
          name="sport_accustomed"
          label="选择您的运动习惯"
          required
          valueEnum={sport_accustomed}
          rules={[{ required: true, message: '' }]}
        />

        <ProForm.Group>
          <ProFormDatePicker
            name="birthTime"
            rules={[{ required: true, message: '' }]}
            label="选择您的出生时间"
            transform={(value) => {
              return {
                birthTime: moment(value).unix(),
              };
            }}
          />
          <ProFormText
            width="md"
            rules={[{ required: true, message: '' }]}
            name="height"
            label="输入您的身高"
            placeholder="单位：cm"
          />
          <ProFormText
            width="md"
            rules={[{ required: true, message: '' }]}
            name="weight"
            label="输入您的体重"
            placeholder="单位：kg"
          />
        </ProForm.Group>

        <ProFormSelect
          width="md"
          valueEnum={{
            weak: '弱',
            middle: '中等',
            strong: '强',
          }}
          name="sport_intensity"
          label="选择运动强度"
          rules={[{ required: true, message: '' }]}
        />

        <ProForm.Group>
          <ProFormSelect
            width="md"
            rules={[{ required: true, message: '' }]}
            valueEnum={sport_frequency}
            name="sport_frequency"
            label="选择运动频率"
          />
          <ProFormSelect
            width="md"
            rules={[{ required: true, message: '' }]}
            valueEnum={{
              fifteen: '15min',
              thirty: '30min',
              'forty-five': '45min',
              sixty: '60min',
            }}
            name="sport_duration"
            label="选择每次运动持续时间"
          />
        </ProForm.Group>
      </ProForm>
    </PageContainer>
  );
};

export default UserForm;
