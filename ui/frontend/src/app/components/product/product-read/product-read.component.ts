import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-read',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule, RouterLink],
  templateUrl: './product-read.component.html',
  styleUrl: './product-read.component.css'
})
export class ProductReadComponent implements OnInit{

  products!: Product[]
  displayedColumns = ['id', 'name', 'price', 'action'];


  constructor(
    private productService: ProductService
  ){}

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }

}
