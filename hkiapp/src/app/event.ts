export interface Events {
    meta: Meta;
    data: Event[];
    tags: Tags[];
}

export interface Event {
    id: string;
    name: Name;
    sourceType: SourceType;
    infoUrl: string;
    modifiedAt: Date;
    location: Location;
    description: Description;
    tags: Tag[];
    eventDates: EventDates;
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

export interface AdditionalDescription {
    langCode: string;
    text: string;
}

export interface EventDates {
    startingDay: Date;
    endingDay: Date;
    additionalDescription: AdditionalDescription[];
}

export interface Meta {
    count: string;
}

export interface Tags {
    id: string;
    name: string; 

}

