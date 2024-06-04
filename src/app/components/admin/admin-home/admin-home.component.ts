import { Component, OnInit } from '@angular/core';




export class FileUpload {
  key: string | undefined;
  name = '';
  url: string | undefined;
  file: File;
  constructor(file: File) {
    this.file = file;
  }
}

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})

export class AdminHomeComponent implements OnInit {
  ngOnInit(): void {
 
  }


}
