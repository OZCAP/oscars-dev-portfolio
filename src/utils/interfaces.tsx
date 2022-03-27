import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface LinksProps {
    links: Array<LinkData>
};
  
export interface LinkData {
    icon: IconProp,
    text: string,
    href: string
};

export interface PageProps {
    page: string
}

export interface HomeLink {
    text: string,
    num: number,
    href: string,
    iconType: string,
    iconName: string,
    type: string
}

interface Project {
    title: string,
    body: string,
    img: string,
    gitref: string,
    blogref: string
  }