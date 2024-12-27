import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.renderSalesChart();
    this.renderLocationsChart();
  }

  // Render the Sales Chart
  private renderSalesChart(): void {
    const ctx = document.getElementById('salesChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Manchester', 'Yorkshire', 'Leicester', 'Hull'],
        datasets: [
          {
            label: 'Sales in USD',
            data: [30000, 25000, 20000, 15000],
            backgroundColor: ['#845EC2', '#FF6F91', '#FFC75F', '#008F7A'],
            borderWidth: 1,
            borderColor: '#333',
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  // Render the Locations Performance Chart
  private renderLocationsChart(): void {
    const ctx = document.getElementById('locationsChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Manchester', 'Yorkshire', 'Leicester', 'Hull', 'Oxford', 'Cambridge', 'Birmingham'],
        datasets: [
          {
            label: 'Performance',
            data: [30, 25, 20, 15, 5, 3, 2],
            backgroundColor: [
              '#845EC2',
              '#FF6F91',
              '#FFC75F',
              '#008F7A',
              '#D65DB1',
              '#FF9671',
              '#4B4453',
            ],
            borderWidth: 1,
            borderColor: '#fff',
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'right',
          },
        },
      },
    });
  }
}
