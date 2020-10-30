export interface CustomerInfo {
  customerProfile: CustomerProfile;
  addressInfomation: AddressInfomation;
}

export interface CustomerProfile {
  ident_number: string;
  regist_contry: string;
  regist_date: string;
  title_th: string;
  name_th: string;
  title_en: string;
  name_en: string;
}

export interface AddressInfomation {
  registAddress: string;
  officeAddress: string;
  mailingAddress: string;
}
