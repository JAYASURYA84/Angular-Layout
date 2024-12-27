import { Component } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product = {
    name: '',
    description: '',
    price: null,
    stock: null,
    category: '',
    image: null
  };

  // Handle file selection
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.product.image = file;
    }
  }

  // Handle form submission
  onSubmit() {
    if (this.product.name && this.product.description && this.product.price != null && this.product.stock != null && this.product.category) {
      console.log('Product added:', this.product);
      // Add logic to send the product data to the backend
    } else {
      alert('Please fill in all fields.');
    }
  }
}
