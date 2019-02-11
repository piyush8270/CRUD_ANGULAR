import { Component, OnInit } from '@angular/core';
import { IssueService } from '../issue.service';
import { Issue } from '../Issue';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  constructor(
    private issueService: IssueService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  createIssue(description: string, severity: string, status: string, createdDate: any, resolvedDate: any){
    let issue = new Issue();
    issue.id = this.issueService.totalIssues() + 1;
    issue.description = description;
    issue.severity = severity;
    issue.status = status;
    issue.createdDate = createdDate;
    issue.resolvedDate = resolvedDate;
    this.issueService.addIssue(issue);
    this.router.navigate(['/list']);
  }

  log(value: string){
    console.log(value);
  }
}
