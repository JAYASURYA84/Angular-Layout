import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    // You can initialize product data here if needed
  }

  ngAfterViewInit(): void {
    this.initializeSalesChart();
    this.initializeCategoriesChart();
  }

  // Function to initialize the product sales chart
  initializeSalesChart(): void {
    const ctx = document.getElementById('salesChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar', // You can change this to 'line', 'pie', etc.
      data: {
        labels: ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5'],
        datasets: [
          {
            label: 'Sales',
            data: [12, 19, 3, 5, 2], // Sales data for each product
            backgroundColor: ['#8745df', '#a678e5', '#c9a6ec', '#e2cdf4', '#d8e0f7'],
            borderColor: ['#6548d1', '#8b5fa3', '#9e8eb3', '#b7a9d2', '#d0c9d9'],
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Sales Count'
            }
          }
        }
      }
    });
  }

  // Function to initialize the product categories chart
  initializeCategoriesChart(): void {
    const ctx = document.getElementById('categoriesChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie', // You can change this to 'doughnut', etc.
      data: {
        labels: ['👕 Apparel', '🎩 Fashion', '👜 Accessories', '🛹 Sports', '🎒 Bags'],
        datasets: [
          {
            label: 'Product Categories',
            data: [25, 15, 20, 30, 10], // Category data for each product group
            backgroundColor: ['#ff9999', '#66b3ff', '#99ff99', '#ffcc99', '#c2c2f0'],
            borderColor: '#ffffff',
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          }
        }
      }
    });
  }
}
