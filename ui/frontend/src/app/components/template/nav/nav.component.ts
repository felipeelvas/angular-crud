import { RouterModule } from '@angular/router';
import { ProductCrudComponent } from './../../../views/product-crud/product-crud.component';
import { HomeComponent } from './../../../views/home/home.component';
import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, MatSidenavModule, MatListModule, HomeComponent, ProductCrudComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{

constructor() {

}

  ngOnInit(): void {
  }

}
