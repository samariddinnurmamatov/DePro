import { StaticImageData } from "next/image";

export type LangsType = "uz" | "en" | "ru";
export type ILangs = Record<LangsType, string>;


export interface ProductItem {
    id: string;
    imageSrc: StaticImageData;
    title: string
}

export interface ServiceItem {
    id: string;
    icon: StaticImageData;
    title: string
}

export interface TabItem {
    id: string;
    label: string;
}