import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  dva: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  esbuildMinifyIIFE: true,
  icons: {
    autoInstall: {},
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '医疗咨询',
      path: '/consult',
      component: './Consult',
    },
    {
      name: '运动医学',
      path: '/learning',
      component: './Learning',
    },
    {
      name: '医学营养',
      path: '/nourishment',
      component: './Nourishment',
      routes: [
        {
          name: '基础医学',
          path: '/nourishment/basic_medicine',
          component: './Nourishment/Basic Medicine',
        },
        {
          name: '食品学',
          path: '/nourishment/bromatology',
          component: './Nourishment/Bromatology',
        },
        {
          name: '营养学',
          path: '/nourishment/nutriology',
          component: './Nourishment/Nutriology',
        },
        {
          name: '食品分析与检验',
          path: '/nourishment/analysis',
          component: './Nourishment/Analysis',
        },
      ],
    },
    {
      name: '康复医学',
      path: '/recover',
      component: './Recover',
    },
  ],

  npmClient: 'pnpm',
  tailwindcss: {},
});
