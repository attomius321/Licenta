import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  public data: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): any {
      this.http.get('http://localhost:8080/api/v1/student').subscribe(res => this.data = res)
  }

}
