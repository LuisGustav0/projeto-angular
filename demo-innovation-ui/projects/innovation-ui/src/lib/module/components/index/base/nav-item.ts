export interface NavItem {
    title: string;
    visibled?: boolean;
    disabled?: boolean;
    icon: string;
    route?: string;
    children?: NavItem[];
}