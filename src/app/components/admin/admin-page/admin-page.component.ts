import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';


import { CakeService } from 'src/app/services/cake.service';
import Chart from 'chart.js/auto';
import { ToastService } from 'src/app/services/toast.service';
import { TOAST_ERROR } from 'src/app/const';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit, AfterViewInit {
  filterBy = "1";
  barchart: any;
  linechart:any;
  totalDashboard: any;
  @ViewChild('myLineChart') myLineChart: any;
  constructor(private cakeService: CakeService, private toastService: ToastService) { }
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.getTotalDashboard();
    this.getChart(this.filterBy);

  }
  getTotalDashboard() {

    this.cakeService.getTotalDashboard().subscribe(res => {
      this.totalDashboard = res;
      this.totalDashboard.totalMoney = this.totalDashboard.totalMoney.toLocaleString('vi-VN', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    }, (err) => {
      this.toastService.openSnackBar("Không thể tải thống kê", "cancel", "end", "top", TOAST_ERROR);
    })
  }
  getChart(by: any) {
    this.cakeService.getChartDashboard(this.filterBy).subscribe((res: any) => {
      const dates = Object.keys(res.dailyTotals);
      const values = Object.values(res.dailyTotals);
      const formattedLabels = dates.map(dateString => this.formatDate(dateString));
      this.buildBarchart(formattedLabels, values);
      this.buildLineChart(formattedLabels, values)
    }, (err) => {
      this.toastService.openSnackBar("Không thể tải thống kê", "cancel", "end", "top", TOAST_ERROR);
    })
  }

  detectDashboardChange(event: any) {
    this.getTotalDashboard();
    this.getChart(this.filterBy);
  }

  formatDate(dateString: any) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('vi-VN', { day: 'numeric', month: 'long' }).format(date);
  }
  handleOnChange(){
    this.getChart(this.filterBy);
  }

  buildBarchart(formattedLabels:any, values: any){
    if (this.barchart) {
      this.barchart.destroy(); // Destroy the existing chart before creating a new one
    }
    this.barchart = new Chart("myBarChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: formattedLabels,
        datasets: [
          {
            label: "Doanh thu",
            data: values,
            backgroundColor: 'limegreen'
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }

    });
  }


  buildLineChart(formattedLabels: any, values: any) {
    // Destroy existing line chart if exists
    if (this.linechart) {
      this.linechart.destroy(); // Destroy the existing chart before creating a new one
    }

    // Build new line chart
    this.linechart = new Chart('myLineChart', {
      type: 'line',
      data: {
        labels: formattedLabels,
        datasets: [{
          label: 'Line Chart',
          data: values,
          fill: false, // Do not fill area under the line
          borderColor: 'blue', // Line color
          tension: 0.1 // How much the line should bend
        }]
      }
   
    });
  }
}
