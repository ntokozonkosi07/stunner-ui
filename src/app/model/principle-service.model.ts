interface Attachment {
    fileUrl: string;
    id: string;
}

interface Self {
    href: string;
}

interface Links {
    self: Self;
}

interface ServiceList {
    serviceList: PrincipleService[];
}

export interface PrincipleServiceResponse {
    _embedded: ServiceList;
}

export interface PrincipleService {
    name: string;
    serviceProviders: any[];
    attachments: Attachment[];
    id: string;
    _links: Links;
}