export interface SystemItem {
    id :number;
    systemImage: string;
    main:string;
    images:{ src: string; title: string }[];
    title: string;
    features:string[];
    content:string;
}