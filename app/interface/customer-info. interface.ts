export interface CustomerInfo {
  customerProfile: CustomerProfile;
  addressInfomation: AddressInfomation;
}

export interface CustomerProfile {
  identNumber: string;
  registContry: string;
  registDate: string;
  titleTh: string;
  nameTh: string;
  titleEn: string;
  nameEn: string;
}

export interface AddressInfomation {
  registAddress: string;
  officeAddress: string;
  mailingAddress: string;
}
