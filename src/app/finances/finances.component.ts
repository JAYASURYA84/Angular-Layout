import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-finances',
  templateUrl: './finances.component.html',
  styleUrls: ['./finances.component.css']
})
export class FinancesComponent implements OnInit {
  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.createRevenueChart();
    this.createExpenseChart();
  }

  createRevenueChart(): void {
    const ctx = document.getElementById('revenueChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Revenue ($)',
            data: [4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000],
            borderColor: 'rgba(30, 150, 76, 1)',
            backgroundColor: 'rgba(30, 150, 76, 0.2)',
            borderWidth: 2,
            tension: 0.3, // Smooth line
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
            ticks: {
              callback: (value) => `$${value}`, // Add dollar sign to y-axis
            },
          },
        },
      },
    });
  }

  createExpenseChart(): void {
    const ctx = document.getElementById('expenseChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Marketing', 'Salaries', 'Rent', 'Utilities'],
        datasets: [
          {
            label: 'Expenses ($)',
            data: [1000, 500, 300, 200],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)', // Marketing
              'rgba(54, 162, 235, 0.6)', // Salaries
              'rgba(255, 206, 86, 0.6)', // Rent
              'rgba(75, 192, 192, 0.6)', // Utilities
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
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
      },
    });
  }
}
