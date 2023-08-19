export type SidenavItem = {
    title: string;
    route: string;
    icon?: string;
}

export type SidenavConfig = {
    start: SidenavItem[];
    end: SidenavItem[];
}