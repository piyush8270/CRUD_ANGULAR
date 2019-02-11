import { Component, OnInit } from '@angular/core';
import { IssueService } from '../issue.service';
import { Issue } from '../Issue';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  issues: Issue[];

  constructor(private issueService: IssueService ) { }

  ngOnInit() {
    this.getIssues();
  }

  getIssues(): void{
    // This function shows upto five issues
    this.issueService.listIssues().subscribe((issues) => this.issues = issues);
    if(this.issues.length > 5)
      this.issues = this.issues.slice(0, 5);
  }

}
