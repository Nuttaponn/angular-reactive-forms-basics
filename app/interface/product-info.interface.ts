export interface ProductInfo {
  companyId: string;
  productInfomation: ProductInfomation;
  contactInfomation: Array<ContactInfomation>;
  accountInfomation: Array<AccountInfomation>;
  userInfomation: Array<UserInfomation>;
  limit: Limit;
  periodFeeManagent: Array<PeriodFeeManagent>;
}

export interface ProductInfomation {
  packageName: string;
  serviceDetail: string;
}

export interface ContactInfomation {
  param1: string;
  param2: string;
  param3: string;
}

export interface AccountInfomation {
  param1: string;
  param2: string;
  param3: string;
}

export interface UserInfomation {
  param1: string;
  param2: string;
  param3: string;
}

export interface Limit {
  limitGroup: Array<LimitGroup>;
  dailyTransacLimit: DailyTransacLimit;
}

export interface LimitGroup {
  param1: string;
  param2: string;
  param3: string;
}

export interface DailyTransacLimit {
  companyOverall: Array<CompanyOverall>;
  billPayment: Array<BillPayment>;
  transfer: Array<Transfer>;
}

export interface CompanyOverall {
  param1: string;
  param2: string;
  param3: string;
}

export interface BillPayment {
  param1: string;
  param2: string;
  param3: string;
}

export interface Transfer {
  param1: string;
  param2: string;
  param3: string;
}

export interface PeriodFeeManagent {
  param1: string;
  param2: string;
  param3: string;
}
