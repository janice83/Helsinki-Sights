export interface Activities {
    offset: Offset
    count: Count;
    rows: Activity[];
   
}

// export interface Activity {
//     id: string;
//     updated: string;
//     descriptions: Descriptions;
//     company: Company;
//     open: Open;
//     media: Medium[];
//     address: Address;
//     companyAddress: CompanyAddress;
//     tags: string[];
//     siteUrl: string;
//     storeUrl: string;
//     priceEUR: PriceEUR;
//     availableMonths: string[];
//     meantFor: string[];
//     duration: string;
//     durationType: string;
// }

// export interface AdditionalProp1 {
//     name: string;
//     description: string;
//     siteUrl: string;
//     storeUrl: string;
// }

// export interface AdditionalProp2 {
//     name: string;
//     description: string;
//     siteUrl: string;
//     storeUrl: string;
// }

// export interface AdditionalProp3 {
//     name: string;
//     description: string;
//     siteUrl: string;
//     storeUrl: string;
// }

// export interface Descriptions {
//     additionalProp1: AdditionalProp1;
//     additionalProp2: AdditionalProp2;
//     additionalProp3: AdditionalProp3;
// }

// export interface Company {
//     name: string;
//     businessId: string;
//     email: string;
//     phone: string;
// }

// export interface AdditionalProp12 {
//     open: boolean;
//     from: string;
//     to: string;
// }

// export interface AdditionalProp22 {
//     open: boolean;
//     from: string;
//     to: string;
// }

// export interface AdditionalProp32 {
//     open: boolean;
//     from: string;
//     to: string;
// }

// export interface Open {
//     additionalProp1: AdditionalProp12;
//     additionalProp2: AdditionalProp22;
//     additionalProp3: AdditionalProp32;
// }

// export interface Medium {
//     id: string;
//     kind: string;
//     copyright: string;
//     name: string;
//     alt: string;
//     smallUrl: string;
//     originalUrl: string;
//     largeUrl: string;
// }

// export interface Address {
//     streetAddress: string;
//     postalCode: string;
//     locality: string;
//     neighbourhood: string;
// }

// export interface CompanyAddress {
//     streetAddress: string;
//     postalCode: string;
//     locality: string;
//     neighbourhood: string;
// }

// export interface From {
// }

// export interface To {
// }

// export interface PriceEUR {
//     from: From;
//     to: To;
//     pricingType: string;
// }



export interface Activity {
    id: string;
    name: Name;
    sourceType: SourceType;
    infoUrl: string;
    modifiedAt: Date;
    location: Location;
    description: Description;
    tags: Tag[];
    whereWhenDuration: WhereWhenDuration;
}

export interface Name {
    fi: string;
    en: string;
    sv: string;
    zh: string;
}

export interface SourceType {
}

export interface Lat {
}

export interface Lon {
}

export interface Address {
    streetAddress: string;
    postalCode: string;
    locality: string;
    neighbourhood: string;
}

export interface Location {
    lat: Lat;
    lon: Lon;
    address: Address;
}

export interface LicenseType {
}

export interface Image {
    url: string;
    copyrightHolder: string;
    licenseType: LicenseType;
    media_id: string;
}

export interface Description {
    intro: string;
    body: string;
    images: Image[];
}

export interface Tag {
    id: string;
    name: string;
}

export interface WhereWhenDuration {
    whereAndWhen: string;
    duration: string;
}

export interface RootObject {
    id: string;
    name: Name;
    sourceType: SourceType;
    infoUrl: string;
    modifiedAt: Date;
    location: Location;
    description: Description;
    tags: Tag[];
    whereWhenDuration: WhereWhenDuration;
}

export interface Count {
    count: number;
}

export interface Offset {
    
    name: number; 

}

