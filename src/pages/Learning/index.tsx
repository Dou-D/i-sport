import type { ProFormInstance } from '@ant-design/pro-components';
import {
  PageContainer,
  ProForm,
  ProFormDatePicker,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import { message } from 'antd';
import moment from 'dayjs';
import { useRef } from 'react';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];

export default () => {
  const formRef = useRef<
    ProFormInstance<{
      name: string;
      company?: string;
      useMode?: string;
    }>
  >();
  return (
    <PageContainer ghost>
      <ProForm<{
        name: string;
        company?: string;
        useMode?: string;
      }>
        onFinish={async (values) => {
          console.log(values);
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
        // request={async () => {
        //   await waitTime(1500);
        //   return {
        //     name: '蚂蚁设计有限公司',
        //     useMode: 'chapter',
        //   };
        // }}
        autoFocusFirstInput
      >
        <ProFormSelect.SearchSelect
          width="md"
          options={[
            {
              value: 'accustomed',
              // type: 'time',
              options: [
                {
                  value: 'every',
                  label: '每天运动',
                },
                {
                  value: 'week',
                  label: '每个礼拜都会运动',
                },
                {
                  value: 'few',
                  label: '不怎么运动',
                },
                {
                  value: 'not',
                  label: '完全不运动',
                },
              ],
            },
          ]}
          name="sport_accustomed"
          label="选择您的运动习惯"
        />
        <ProForm.Group>
          <ProFormDatePicker
            name="birthTime"
            label="选择您的出生时间"
            transform={(value) => {
              return {
                birthTime: moment(value).unix(),
              };
            }}
          />
          <ProFormText
            width="md"
            name="height"
            label="输入您的身高"
            placeholder="单位：cm"
          />
          <ProFormText
            width="md"
            name="weight"
            label="输入您的体重"
            placeholder="单位：kg"
          />
        </ProForm.Group>

        <ProFormSelect.SearchSelect
          width="md"
          options={[
            {
              value: 'intensity',
              // type: '',
              options: [
                {
                  value: 'weak',
                  label: '弱',
                },
                {
                  value: 'middle',
                  label: '中等',
                },
                {
                  value: 'strong',
                  label: '强',
                },
              ],
            },
          ]}
          name="sport_intensity"
          label="选择运动强度"
        />

        <ProForm.Group>
          <ProFormSelect.SearchSelect
            width="md"
            options={[
              {
                value: 'frequency',
                // type: '',
                options: [
                  {
                    value: 'one',
                    label: '一天',
                  },
                  {
                    value: 'two',
                    label: '两天',
                  },
                  {
                    value: 'three',
                    label: '三天',
                  },
                  {
                    value: 'three',
                    label: '四天',
                  },
                  {
                    value: 'three',
                    label: '五天',
                  },
                  {
                    value: 'three',
                    label: '六天',
                  },
                  {
                    value: 'three',
                    label: '七天',
                  },
                ],
              },
            ]}
            name="sport_frequency"
            label="选择运动频率"
          />
          <ProFormSelect.SearchSelect
            width="md"
            options={[
              {
                value: 'duration',
                // type: '',
                options: [
                  {
                    value: '15',
                    label: '15min',
                  },
                  {
                    value: '30',
                    label: '30min',
                  },
                  {
                    value: '45',
                    label: '45min',
                  },
                  {
                    value: '60',
                    label: '60min',
                  },
                ],
              },
            ]}
            name="sport_duration"
            label="选择每次运动持续时间"
          />
        </ProForm.Group>
      </ProForm>
    </PageContainer>
  );
};
