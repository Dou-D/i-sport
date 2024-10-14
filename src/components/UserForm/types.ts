import { AccustomedType, DurationType, FrequencyType, IntensityType } from "@/config/UserFormInfo";

export interface UserFormType {
  // 运动习惯
  sport_accustomed: keyof AccustomedType;
  // 出生日期 -> 时间戳
  birthTime: number;
  // 身高
  height: string;
  // 体重
  weight: string;
  // 运动强度
  sport_intensity: keyof IntensityType;
  // 运动频率
  sport_frequency: keyof FrequencyType;
  // 单次运动时间
  sport_duration: keyof DurationType;
}
