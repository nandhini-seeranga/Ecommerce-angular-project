import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  data: any;
  baseurl = "";

  constructor(private api: ApiService, private router: Router) {
    this.baseurl = api.baseURL;
  }

  ngOnInit(): void {
    this.binddata();
  }

  binddata() {
    var reqdata = { "data": "" };
    var reply = this.api.callapi("admin/orders", reqdata);
    reply.subscribe((mydata: any) => {
      this.data = mydata;
      //Array.from(Object.keys(mydata), k=>mydata[k]);
      //console.log(this.data);
    });
  }

  // deleteproduct(id: any) {
  //   if (confirm("sure to delete?")) {
  //     var reqdata = { "data": { "id": id } };
  //     var reply = this.api.callapi("admin/deleteproduct", reqdata);
  //     reply.subscribe((mydata: any) => {
  //       let data = Array.from(Object.keys(mydata), k => mydata[k]);
  //       this.binddata();
  //     });
  //   }
  // }
  printPage() {
    window.print();
  }
}