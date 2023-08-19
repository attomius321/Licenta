export type SidenavItem = {
    title: string;
    route: string;
    icon?: string;
    isLogout?: boolean;
}

export type SidenavConfig = {
    start: SidenavItem[];
    end: SidenavItem[];
}