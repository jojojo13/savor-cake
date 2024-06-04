import { Component, OnInit } from '@angular/core';
import { CakeService } from 'src/app/services/cake.service';

@Component({
  selector: 'app-bill-report',
  templateUrl: './bill-report.component.html',
  styleUrls: ['./bill-report.component.scss']
})
export class BillReportComponent implements OnInit {
  billStatus = "";
  billingReport: any;
  constructor(private cakeService: CakeService) { }

  ngOnInit(): void {
   this.getBillByStatus()
  }
  getBillByStatus(){
    this.cakeService.getAllBilling(this.billStatus).subscribe(bill =>{
      this.billingReport =bill;
   
    });
  }
  completeBill(bill:any){
    let obj ={
      billID:bill.billingId,
      status:'done'
    }
    this.cakeService.updateBill(obj).subscribe(bill =>{
      this.getBillByStatus()
    });
  }
}
