type RateType = 'A+' | 'A' | 'B+' | 'B' | '-';

export interface BromatologyType {
  id: string;
  name: string;
  rate: RateType;
}
