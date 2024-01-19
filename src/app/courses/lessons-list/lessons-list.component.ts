
import { Component, OnInit } from "@angular/core";
import {LessonSummary} from "../model/lesson-summary";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit {

  lessons!:LessonSummary[];

  constructor(private route:ActivatedRoute) {

  }

  ngOnInit() {

    this.lessons = this.route.snapshot.data["lessons"];

  }

}
