import { UniversityDTO } from "../../universities-view/types/universities-view.types";

export type TeacherDTO = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    universities: UniversityDTO[];
    courses: CourseDTO[];
}

export type CourseDTO = {
    id: string;
    name: string;
    scheduleColor: string;
}