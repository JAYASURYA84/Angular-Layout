import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'Angular-Layout';

  @ViewChild('salesChart') salesChartElement!: ElementRef;

  ngAfterViewInit(): void {
    // Check if the element is available before initializing the chart
    if (this.salesChartElement) {
      this.initializeSalesChart();
    }
  }

  // Chart.js initialization for the sales chart
  initializeSalesChart(): void {
    const ctx = this.salesChartElement.nativeElement as HTMLCanvasElement;
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
