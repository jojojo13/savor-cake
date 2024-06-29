import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CakeService } from 'src/app/services/cake.service';

@Component({
  selector: 'app-bill-report',
  templateUrl: './bill-report.component.html',
  styleUrls: ['./bill-report.component.scss']
})
export class BillReportComponent implements OnInit {
  @Output() dashBoardChange = new EventEmitter<string>();
  sortedData: any;
  billStatus = "";
  billingReport: any;
  
  displayedColumns: string[] = ['booker', 'receiver', 'detail', 'address', 'payment', 'date', 'hour', 'note', 'status','action'];
  dataSource: any = new MatTableDataSource();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private cakeService: CakeService) { }
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.getBillByStatus();

  }

  getBillByStatus() {
    this.cakeService.getAllBilling(this.billStatus).subscribe(bill => {
      this.billingReport = bill;
      this.dataSource = new MatTableDataSource(this.billingReport);
    });
  }
  completeBill(bill: any) {
    let obj = {
      billID: bill.billingId,
      status: 'done'
    }
    this.cakeService.updateBill(obj).subscribe(bill => {
      this.getBillByStatus()
      this.dashBoardChange.emit('change');
    });
  }
  rejectBill(bill: any) {
    let obj = {
      billID: bill.billingId,
      status: 'reject'
    }
    this.cakeService.updateBill(obj).subscribe(bill => {
      this.getBillByStatus();
      this.dashBoardChange.emit('change');
    });
  }
  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  sortData(sort: Sort) {
    const data = this.billingReport.slice();
    if (!sort.active || sort.direction === '') {
      this.billingReport = data;
      return;
    }
    this.billingReport = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc';
      let nameA = a.receiveDate.toUpperCase();
      let nameB = b.receiveDate.toUpperCase();
      switch (sort.active) {
        case "receiveDate":
          nameA = a.receiveDate.toUpperCase();
          nameB = b.receiveDate.toUpperCase();
          break;
        case "paymentType":
          nameA = a.paymentType.toUpperCase();
          nameB = b.paymentType.toUpperCase();
          break;
        case "status":
          nameA = a.status.toUpperCase();
          nameB = b.status.toUpperCase();
      }
     
      if (nameA < nameB) {
        return isAsc ? -1 : 1;
      } else if (nameA > nameB) {
        return isAsc ? 1 : -1;
      } else {
        return 0;
      }
    });
    this.dataSource = new MatTableDataSource(this.billingReport);
  }
}
