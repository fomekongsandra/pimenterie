import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPiment } from '../intefaces/IPiment';
import { PimentServiceService } from '../services/piment-service.service';

@Component({
  selector: 'app-piment-details',
  templateUrl: './piment-details.component.html',
  styleUrls: ['./piment-details.component.css']
})
export class PimentDetailsComponent implements OnInit {

  @Input() Detail: any;
  constructor(
    private pimentService: PimentServiceService, private route: ActivatedRoute
  ) { }
  public piments!: IPiment[];

  ngOnInit(): void {
    this.pimentService.get().subscribe(x=> this.piments =x);

    this.Detail = this.route.snapshot.params['id'];
  }

}
