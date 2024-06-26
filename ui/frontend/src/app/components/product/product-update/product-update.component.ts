import { Product } from '../product.model';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, RouterOutlet, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  standalone: true,
  imports: [RouterOutlet, FormsModule, MatFormFieldModule, MatInputModule, MatCardModule],
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})
export class ProductUpdateComponent implements OnInit{
      product!: Product

      constructor(
        private productService: ProductService,
        private router: Router,
        private route: ActivatedRoute){}

      ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id')
        this.productService.readById(id).subscribe(product => {
          this.product = product
        })
    }
      updateProduct(): void{
        this.productService.update(this.product).subscribe(() => {
          this.productService.showMessage('Produto atualizado com sucesso!')
          this.router.navigate(['products'])
      })
    }
      cancel(): void{
        this.router.navigate(['products'])
    }
}
