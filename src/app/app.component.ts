import { Component , OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task';

  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart: any;

  ngOnInit(): void {

  }
  ngAfterViewInit() {
      this.canvas = this.mychart.nativeElement;
      this.ctx = this.canvas.getContext('2d');

      new Chart(this.ctx, {
          type: 'polarArea',
          data: {
            labels: [
              'Red',
              'Green',
              'Yellow',
              'Grey',
              'Blue'
            ],
            datasets: [{
              label: 'My First Dataset',
              data: [11, 16, 7, 3, 14],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)'
              ]
            }]
          },
      });
  }


}
