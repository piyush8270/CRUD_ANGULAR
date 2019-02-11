import { Component, OnInit, Input } from '@angular/core';
import { Issue } from '../Issue';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  issue: Issue;

  constructor(
    private issueService: IssueService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getIssue();
  }

  getIssue(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.issueService.detailIssue(id).subscribe((i) => this.issue = i);
  }
  
}
