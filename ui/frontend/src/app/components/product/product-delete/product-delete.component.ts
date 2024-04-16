import { Product } from '../product.model';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  standalone: true,
  imports: [RouterOutlet, FormsModule, MatFormFieldModule, MatInputModule, MatCardModule],
  templateUrl: './product-delete.component.html',
  styleUrl: './product-delete.component.css'
})
export class ProductDeleteComponent implements OnInit {
      product!: Product

      constructor(
        private router: Router,
        private productService: ProductService,
        private route: ActivatedRoute){}

      ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id')
        this.productService.readById(id).subscribe(product => {
          this.product = product
        })
      }
      deleteProduct(): void {
        this.productService.delete(this.product.id).subscribe(() => {
          this.productService.showMessage('Produto excluído com sucesso!')
          this.router.navigate(['products'])
          })
      }
      cancel(): void{
        this.router.navigate(['products'])
      }
}
