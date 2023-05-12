import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IPiment } from '../intefaces/IPiment';
import { PimentServiceService } from '../services/piment-service.service';

@Component({
  selector: 'app-piment-add',
  templateUrl: './piment-add.component.html',
  styleUrls: ['./piment-add.component.css']
})
export class PimentAddComponent implements OnInit {

  form!:FormGroup
  pim!:IPiment
  selectedFile!:File
  imageSrc!:string

  constructor(private pimentService :PimentServiceService, private mybuild : FormBuilder, private router : Router)
   {
      this.form = this.mybuild.group(
        {
          reference:[1000],
          description:[''],
          domaine:[''],
          nomPrestateur:[''],
          typeDePrestation:[''],
          contact:[''],
          email:[''],
          photos:['']
        })
  
      this.form.valueChanges.subscribe(piments=>this.pim = piments)
  }

  ngOnInit(): void {
  }
  createPiment()
  {
    this.pimentService.createPiment(this.pim)
    this.router.navigateByUrl('/piment-index')
  }

  onselectedFile (event: any){
    this.selectedFile = <File>event.target.files[0]
      let reader = new FileReader;
      reader.onload = () =>{
        this.imageSrc = reader.result as string
        console.log(this.imageSrc)
      }
      reader.readAsDataURL(this.selectedFile)
  }


}
