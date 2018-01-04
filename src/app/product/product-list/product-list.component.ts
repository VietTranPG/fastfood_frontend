import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }
  productForm : FormGroup;
  ngOnInit() {
    this.productForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      type: new FormControl(),
      provider: new FormControl(),
      price: new FormControl(),
      newPrice: new FormControl(),
      description: new FormControl(),
      status:new FormControl()
    })
  }

}
