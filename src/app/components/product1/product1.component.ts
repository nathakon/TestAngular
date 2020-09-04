import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {
  public Product1ID: string
  public Product1Name: string
  public Product1Price: number

  constructor() { }

  ngOnInit(): void {
    this.Product1ID = '001'
    this.Product1Name= 'การใช้งาน ASP.NET Core MVC'
    this.Product1Price= 275
  }

}
