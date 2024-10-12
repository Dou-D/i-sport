import './index.css';
import React from 'react';
import ReactECharts from 'echarts-for-react'; // 引入 ECharts 组件

const HomePage: React.FC = () => {
  // 步数折线图数据（增加 14 天数据）
  const stepOption = {
    title: {
      text: '最近两周步数趋势',
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: [
        '9-30', '10-01', '10-02', '10-03', '10-04', '10-05', '10-06',
        '10-07', '10-08', '10-09', '10-10', '10-11', '10-12', '10-13',
      ],
    },
    yAxis: {
      type: 'value',
      name: '步数',
    },
    series: [
      {
        data: [6500, 7300, 8000, 9200, 7000, 7500, 6200, 8000, 9500, 10000, 12000, 11000, 13000, 14000],
        type: 'line',
        smooth: true,
        areaStyle: {},
      },
    ],
  };

  // 卡路里消耗柱状图（两周数据）
  const calorieOption = {
    title: {
      text: '每日卡路里消耗',
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: [
        '9-30', '10-01', '10-02', '10-03', '10-04', '10-05', '10-06',
        '10-07', '10-08', '10-09', '10-10', '10-11', '10-12', '10-13',
      ],
    },
    yAxis: {
      type: 'value',
      name: '卡路里 (kcal)',
    },
    series: [
      {
        data: [300, 500, 450, 400, 350, 600, 800, 700, 850, 900, 750, 950, 1000, 1100],
        type: 'bar',
        color: '#4caf50',
      },
    ],
  };

  // 运动时间饼图（增加更多运动类型）
  const timeOption = {
    title: {
      text: '运动时间占比',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        name: '运动类型',
        type: 'pie',
        radius: '60%',
        data: [
          { value: 35, name: '跑步' },
          { value: 20, name: '游泳' },
          { value: 15, name: '骑行' },
          { value: 10, name: '瑜伽' },
          { value: 8, name: '举重' },
          { value: 12, name: 'HIIT' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

  // 运动量与心率的折线图
  const heartRateOption = {
    title: {
      text: '运动量与心率趋势',
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['运动量 (分钟)', '心率 (次/分钟)'],
      bottom: 0,
    },
    xAxis: {
      type: 'category',
      data: ['10-01', '10-02', '10-03', '10-04', '10-05', '10-06', '10-07'],
    },
    yAxis: [
      { type: 'value', name: '运动量 (分钟)' },
      { type: 'value', name: '心率 (次/分钟)' },
    ],
    series: [
      {
        name: '运动量 (分钟)',
        type: 'line',
        data: [30, 45, 60, 50, 70, 90, 80],
        smooth: true,
      },
      {
        name: '心率 (次/分钟)',
        type: 'line',
        yAxisIndex: 1,
        data: [72, 78, 85, 88, 95, 100, 92],
        smooth: true,
        color: '#ff7043',
      },
    ],
  };

  // 卡路里消耗与体重的散点图
  const calorieWeightOption = {
    title: {
      text: '卡路里消耗与体重变化',
      left: 'center',
    },
    xAxis: {
      type: 'value',
      name: '卡路里消耗 (kcal)',
    },
    yAxis: {
      type: 'value',
      name: '体重 (kg)',
    },
    series: [
      {
        type: 'scatter',
        data: [
          [300, 75], [500, 72.5], [700, 70.2], [850, 69], [900, 68.8],
          [1000, 68.5], [1100, 67.7],
        ],
        symbolSize: 10,
        itemStyle: {
          color: '#4caf50',
        },
      },
    ],
  };

  // 运动与睡眠质量的雷达图
  const sleepRadarOption = {
    title: {
      text: '运动与睡眠质量',
      left: 'center',
    },
    tooltip: {},
    radar: {
      indicator: [
        { name: '睡眠时长 (小时)', max: 10 },
        { name: '深度睡眠 (小时)', max: 5 },
        { name: '入睡时间 (分)', max: 60 },
        { name: '醒来次数', max: 10 },
        { name: '运动量 (分钟)', max: 120 },
      ],
    },
    series: [
      {
        type: 'radar',
        data: [
          {
            value: [7, 3, 15, 2, 60],
            name: '运动日',
            areaStyle: { color: 'rgba(76, 175, 80, 0.4)' },
          },
          {
            value: [6, 2, 30, 5, 0],
            name: '非运动日',
            areaStyle: { color: 'rgba(255, 112, 67, 0.4)' },
          },
        ],
      },
    ],
  };


  return (
    <div className="container">
      <h1>运动与健康数据图表</h1>

      <div className="chart-container">
        <ReactECharts option={heartRateOption} style={{ height: 400, width: '100%' }} />
      </div>

      <div className="chart-container">
        <ReactECharts option={sleepRadarOption} style={{ height: 400, width: '100%' }} />
      </div>

      <div className="chart-container">
        <ReactECharts option={calorieWeightOption} style={{ height: 400, width: '100%' }} />
      </div>

      <div className="chart-container">
        <ReactECharts option={stepOption} style={{ height: 400, width: '100%' }} />
      </div>

      <div className="chart-container">
        <ReactECharts option={calorieOption} style={{ height: 400, width: '100%' }} />
      </div>

      <div className="chart-container">
        <ReactECharts option={timeOption} style={{ height: 400, width: '100%' }} />
      </div>
    </div>
  );
};

export default HomePage;

