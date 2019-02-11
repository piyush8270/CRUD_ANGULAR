import { Component, OnInit } from '@angular/core';
import { Issue } from '../Issue';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  selectedIssue: Issue;
  issues: Issue[];
  filteredIssues: Issue[];
  ids: number[] = [];
  fields = {
    'id': true,
    'description': true,
    'severity': true,
    'status': true,
    'createdDate': true,
    'resolvedDate': true
  };
  filterSeverity: string = "All";
  filterStatus: string = "All";

  constructor(private issueService: IssueService) { }

  ngOnInit() {
    this.listIssues();
  }

  listIssues() {
    this.issueService.listIssues().subscribe(issues => this.issues = issues);
    this.filteredIssues = this.issues;
  }

  collectID(id: number, event: any) {
    if(event.target.checked)
      this.ids.push(id);
    else {
      const id = this.ids.find(id => id === id);
      this.ids.splice(this.ids.indexOf(id), 1);
    }
  }

  deleteIssue() {
    if(this.collectID.length)
      for(let id of this.ids) {
        this.issueService.deleteIssue(id);
        this.filterIssue();
      }
    this.ids = [];
  }

  deleteIssueID(id: number) {
    this.issueService.deleteIssue(id);
  }

  filterIssue() {
    if(this.filterStatus == "All" && this.filterSeverity == "All")
      this.filteredIssues = this.issues;
    else if(this.filterStatus === "All")
      this.filteredIssues = this.issues.filter((issue) => issue.severity === this.filterSeverity);
    else if (this.filterSeverity === "All")
      this.filteredIssues = this.issues.filter((issue) => issue.status === this.filterStatus);
    else
      this.filteredIssues = this.issues.filter((issue) => {
        return issue.status === this.filterStatus && issue.severity === this.filterSeverity;
      });
  }
}
