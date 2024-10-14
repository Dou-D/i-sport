export interface AccustomedType {
  every: '每天运动';
  week: '每个礼拜都会运动';
  few: '不怎么运动';
  not: '完全不运动';
}

export interface FrequencyType {
  one: '一天';
  two: '两天';
  three: '三天';
  four: '四天';
  five: '五天';
  six: '六天';
  seven: '七天';
}

export interface IntensityType {
  weak: '弱';
  middle: '中等';
  strong: '强';
}

export interface DurationType {
  fifteen: '15min';
  thirty: '30min';
  'forty-five': '45min';
  sixty: '60min';
}

export const sport_accustomed: AccustomedType = {
  every: '每天运动',
  week: '每个礼拜都会运动',
  few: '不怎么运动',
  not: '完全不运动',
};

export const sport_frequency: FrequencyType = {
  one: '一天',
  two: '两天',
  three: '三天',
  four: '四天',
  five: '五天',
  six: '六天',
  seven: '七天',
};

export const sport_intensity: IntensityType = {
  weak: '弱',
  middle: '中等',
  strong: '强',
};

export const sport_duration: DurationType = {
  "forty-five": "45min",
  fifteen: "15min",
  sixty: "60min",
  thirty: "30min"
} 