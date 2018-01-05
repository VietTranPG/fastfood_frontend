import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  productForm: FormGroup;
  typeList = [
    { id: 1, name: "drink" },
    { id: 2, name: "fastfood" },
    { id: 3, name: "cake" },
    { id: 4, name: "acoholic drink" }
  ]
  ngOnInit() {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      type: [],
      provider: [],
      price: ['', Validators.required],
      newPrice: [],
      description: [],
      status: [false]
    });
  }
}
