export interface Activities {
    offset: Offset
    count: Count;
    rows: Activity[];
}
export interface Activity {
    id: string;
    updated: string;
    descriptions: Descriptions;
    company: Company;
    open: Open;
    media?: (MediaEntity)[] | null;
    address: AddressOrCompanyAddress;
    companyAddress: AddressOrCompanyAddress;
    tags?: (string)[] | null;
    siteUrl: string;
    storeUrl: string;
    priceEUR: PriceEUR;
    availableMonths?: (string)[] | null;
    meantFor?: (string)[] | null;
    duration: string;
    durationType: string;
  }
  export interface Descriptions {
    additionalProp1: AdditionalProp1OrAdditionalProp2OrAdditionalProp3;
    additionalProp2: AdditionalProp1OrAdditionalProp2OrAdditionalProp3;
    additionalProp3: AdditionalProp1OrAdditionalProp2OrAdditionalProp3;
  }
  export interface AdditionalProp1OrAdditionalProp2OrAdditionalProp3 {
    name: string;
    description: string;
    siteUrl: string;
    storeUrl: string;
  }
  export interface Company {
    name: string;
    businessId: string;
    email: string;
    phone: string;
  }
  export interface Open {
    additionalProp1: AdditionalProp1OrAdditionalProp2OrAdditionalProp31;
    additionalProp2: AdditionalProp1OrAdditionalProp2OrAdditionalProp31;
    additionalProp3: AdditionalProp1OrAdditionalProp2OrAdditionalProp31;
  }
  export interface AdditionalProp1OrAdditionalProp2OrAdditionalProp31 {
    open: boolean;
    from: string;
    to: string;
  }
  export interface MediaEntity {
    id: string;
    kind: string;
    copyright: string;
    name: string;
    alt: string;
    smallUrl: string;
    originalUrl: string;
    largeUrl: string;
  }
  export interface AddressOrCompanyAddress {
    streetAddress: string;
    postalCode: string;
    locality: string;
    neighbourhood: string;
    location: Location
  }
  export interface PriceEUR {
    from: FromOrTo;
    to: FromOrTo;
    pricingType: string;
  }
  export interface FromOrTo {
  }
  
export interface Location{
    lat: number;
    long: number;
}
export interface Count {
   
}

export interface Offset {

}

