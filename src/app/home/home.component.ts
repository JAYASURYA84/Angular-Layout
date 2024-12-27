import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto'; // Import Chart.js

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    // Initialize any component data or logic
  }

  ngAfterViewInit(): void {
    // Initialize the chart after the view is rendered
    this.initializeSalesChart();
  }

  // Initialize sales chart
  initializeSalesChart(): void {
    const ctx = document.getElementById('salesChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Confirmed', 'Packed', 'Refunded', 'Shipped'],
        datasets: [
          {
            label: 'Sales',
            data: [12, 19, 3, 5],
            backgroundColor: ['#8745df', '#a678e5', '#c9a6ec', '#e2cdf4'],
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
