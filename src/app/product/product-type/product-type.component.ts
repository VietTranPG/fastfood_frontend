import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.css']
})
export class ProductTypeComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  type_form :FormGroup;
  ngOnInit() {
    this.type_form = this.fb.group({
      name:['',Validators.required]
    })
  }

}
