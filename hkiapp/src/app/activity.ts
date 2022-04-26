export interface Activities {
    meta: Meta;
    data: Activity[];
    tags: Tags[];
}

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

export interface Meta {
    count: string;
}

export interface Tags {
    
    name: string; 

}

