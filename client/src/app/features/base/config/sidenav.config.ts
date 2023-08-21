import { SidenavConfig } from "../types/base.types";

export const SNConfig: SidenavConfig = {
    start: [
        {
            title: 'Cadre didactice',
            route: 'teachers',
            icon: 'person'
        },
        {
            title: 'Studenti',
            route: 'students',
            icon: 'school'
        },
        {
            title: 'Orar',
            route: 'scheduler',
            icon: 'calendar_month'
        },
        {
            title: 'Baze sportive',
            route: 'sportbases',
            icon: 'sports_basketball'
        },
        {
            title: 'Facultati',
            route: 'universities',
            icon: 'domain'
        }
    ],
    end: [
        {
            title: 'Logout',
            route: 'login',
            icon: 'logout',
            isLogout: true
        }
    ]
}