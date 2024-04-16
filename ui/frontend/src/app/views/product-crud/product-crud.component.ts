import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ProductReadComponent } from "../../components/product/product-read/product-read.component";
import { ProductUpdateComponent } from '../../components/product/product-update/product-update.component';
import { ProductDeleteComponent } from '../../components/product/product-delete/product-delete.component';

@Component({
    selector: 'app-product-crud',
    standalone: true,
    templateUrl: './product-crud.component.html',
    styleUrl: './product-crud.component.css',
    imports: [RouterModule, ProductReadComponent, ProductUpdateComponent, ProductDeleteComponent]
})
export class ProductCrudComponent implements OnInit{

  constructor(private router: Router){}

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.router.navigate(['products/create'])
  }
}
