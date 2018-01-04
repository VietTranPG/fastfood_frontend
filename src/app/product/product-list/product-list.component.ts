import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }
  productForm: FormGroup;
  typeList = [
    {id:1,name:"drink"},
    {id:2,name:"fastfood"},
    {id:3,name:"cake"},
    {id:4,name:"acoholic drink"}
  ]
  ngOnInit() {
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      type: new FormControl(),
      provider: new FormControl(),
      price: new FormControl(),
      newPrice: new FormControl(),
      description: new FormControl(),
      status: new FormControl()
    })
    console.log(this.productForm.value)
    this.setData();
  }
  setData(){
    this.productForm.value.description = 'test';
    this.productForm.value.type =  {id:2,name:"fastfood"};
  }
}
