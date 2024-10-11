import { defineConfig } from "@umijs/max";

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: "@umijs/max",
  },
  icons: {
    autoInstall: {},
  },
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      name: "首页",
      path: "/home",
      component: "./Home",
    },
    {
      name: "医疗咨询",
      path: "/consult",
      component: "./Consult",
    },
    {
      name: "运动医学",
      path: "/learning",
      component: "./Learning",
    },
    {
      name: "医学营养",
      path: "/nourishment",
      component: "./Nourishment",
    },
    {
      name: "康复医学",
      path: "/recover",
      component: "./Recover",
    },
  ],

  npmClient: "pnpm",
  tailwindcss: {},
});
