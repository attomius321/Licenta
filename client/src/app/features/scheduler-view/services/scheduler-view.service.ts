import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CourseScheduleDTO } from "../types/scheduler-view.types";
import { Observable } from "rxjs";
import { CourseDTO, TeacherDTO } from "../../teachers-view/types/teachers-view.types";
import { CourseLocationDTO } from "../../sport-bases-view/types/sport-bases-view.types";

const COURSE_SCHEDULE_API = 'http://localhost:8080/api/v1/courseSchedule';

const TEACHER_API = 'http://localhost:8080/api/v1/teacher';
const COURSE_API = 'http://localhost:8080/api/v1/course';
const BASES_API = 'http://localhost:8080/api/v1/courseLocation';
const ENROLL_API = 'http://localhost:8080/api/v1/courseSchedule/student';

@Injectable()
export class SchedulerViewService {

    constructor(private http: HttpClient) { }

    public getCourseSchedules(): Observable<CourseScheduleDTO[]> {
        return <Observable<CourseScheduleDTO[]>>this.http.get(COURSE_SCHEDULE_API);
    }

    public createCourseSchedule(courseScheduleDTO: Partial<CourseScheduleDTO>): Observable<CourseScheduleDTO> {
        return <Observable<CourseScheduleDTO>>this.http.post(COURSE_SCHEDULE_API, courseScheduleDTO);
    }

    public updateCourseSchedule(courseScheduleDTO: CourseScheduleDTO): Observable<CourseScheduleDTO> {
        return <Observable<CourseScheduleDTO>>this.http.put(COURSE_SCHEDULE_API, courseScheduleDTO);
    }

    public deleteCourseSchedules(ids: string[]): Observable<any> {
        return this.http.delete(COURSE_SCHEDULE_API, { body: ids });
    }

    public getCourses(teacherId: string): Observable<CourseDTO[]> {
        let queryParams = new HttpParams();
        if (teacherId) {
            queryParams = queryParams.append("teacherId", teacherId || '');
        }

        return <Observable<CourseDTO[]>>this.http.get(COURSE_API, { params: queryParams });
    }

    public getTeachersByCourse(courseDTO: CourseDTO): Observable<TeacherDTO[]> {

        let queryParams = new HttpParams();
        if (courseDTO) {
            queryParams = queryParams.append("courseId", courseDTO?.id || '');
        }

        return <Observable<TeacherDTO[]>>this.http.get(TEACHER_API, { params: queryParams });
    }

    public getCourseLocations(): Observable<CourseLocationDTO[]> {
        return <Observable<CourseLocationDTO[]>>this.http.get(BASES_API);
    }

    public enrollToCourse(courseScheduleId: string, studentId: string): Observable<any> {
        return <Observable<any>>this.http.put(ENROLL_API + '/' + studentId, { csId: courseScheduleId });
    }
}
