import { Component, OnInit } from '@angular/core';
import { IPiment } from '../intefaces/IPiment';
import { PimentServiceService } from '../services/piment-service.service';

@Component({
  selector: 'app-piment-index',
  templateUrl: './piment-index.component.html',
  styleUrls: ['./piment-index.component.css']
})
export class PimentIndexComponent implements OnInit {

  constructor(private pimentService:PimentServiceService) { }
  public piments:IPiment[]=[]

  ngOnInit(): void {
    this.pimentService.get().subscribe(x=>this.piments = x)
  }

}
