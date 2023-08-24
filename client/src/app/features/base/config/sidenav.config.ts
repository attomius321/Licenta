import { SidenavConfig } from "../types/base.types";

const SNAdminConfig: SidenavConfig = {
    start: [
        {
            title: 'Orar',
            route: 'scheduler',
            icon: 'calendar_month'
        },
        {
            title: 'Cadre didactice',
            route: 'teachers',
            icon: 'person'
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

const SNStudentConfig: SidenavConfig = {
    start: [
        {
            title: 'Inscriere',
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

const SNTeacherConfig: SidenavConfig = {
    start: [
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

const SN_ROLE_MAPPING: { [k: string]: SidenavConfig } = {
    'ADMIN': SNAdminConfig,
    'USER_STUDENT': SNStudentConfig,
    'USER_TEACHER': SNTeacherConfig
}

export const getCurrentSNConfig = (role: string): SidenavConfig => {
    return SN_ROLE_MAPPING[role];
}