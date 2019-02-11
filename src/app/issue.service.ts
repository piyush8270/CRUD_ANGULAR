import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Issue } from './Issue';
import { ISSUES } from './mock-issues';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor() { }

  listIssues(): Observable<Issue[]> {
    return of(ISSUES);
  }

  addIssue(issue: Issue): void {
    ISSUES.push(issue);
  }

  totalIssues(): number {
    return ISSUES.length;
  }

  detailIssue(id: number): Observable<Issue> {
    let issue = ISSUES.find(issue => issue.id === id);
    return of(issue);
  }

  deleteIssue(id: number): void {
    const issue = ISSUES.find(issue => issue.id === id);
    ISSUES.splice(ISSUES.indexOf(issue), 1);
  }
}
