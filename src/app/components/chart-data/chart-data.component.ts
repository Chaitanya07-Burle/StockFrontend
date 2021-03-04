import { Component, Input, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { data } from 'jquery';
@Component({
  selector: 'app-chart-data',
  templateUrl: './chart-data.component.html',
  styleUrls: ['./chart-data.component.scss']
})
export class ChartDataComponent implements OnInit {
  title = 'stock';
  canvas: any;
  ctx: any;
  constructor() { }
  @Input() data: string;
  ngOnInit(): void {
  }
  graphMethod() {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
          labels: ["open", "high", "low", "close", "volume"],
          datasets: [{
              label: 'Stock Data',
              data:  this.data,
              backgroundColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
        responsive: false,
        display:true
      }
    });
  }
}
