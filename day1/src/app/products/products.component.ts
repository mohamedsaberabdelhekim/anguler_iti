import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { ICategory } from '../ViewModels/icategory';
import { DiscountOffers } from '../ViewModels/discount-offers';
import { IProduct } from '../ViewModels/iproduct';
import { Store } from '../ViewModels/store';
// import{appRounded} from '../DIR/rounded.directive';
// import {MatDialog} from '@angular/material/dialog';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent
  extends Store
  implements OnInit, IProduct, ICategory
{
  cd="123456789123";

  date = new Date();





  sr = 'mohamed';
  cat: number = 1;
  // Discount: DiscountOffers | undefined;
  //   const // @ts-ignore
  propertyType: Array<string> = Object.keys(DiscountOffers).filter((key) =>
    isNaN(+key)
  );

  Store = new Store();
  ClientName: string | undefined;
  ProductList = new Array<IProduct>(
    {
      id: 6,
      Name: 'HP Notebook',
      Quantity: 1,
      price: 100,
      image: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp',
      CateogryID: 1,
    },
    {
      id: 1,
      Name: 'Toshiba B77',
      Quantity: 3,
      price: 100,
      image: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/5.webp',
      CateogryID: 1,
    },
    {
      id: 2,
      Name: 'HP Envy',
      Quantity: 0,
      price: 100,
      image: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/7.webp',
      CateogryID: 2,
    },{
      id: 9,
      Name: 'HP Envy1',
      Quantity: 3,
      price: 100,
      image: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/7.webp',
      CateogryID: 2,
    }

  );
  //

  constructor(public dialog: MatDialog) {
    super();
  }
  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(ProductsComponent);
  }

  CateogryID: number = 1;
  Name: string = '';
  Quantity: number = 1;
  id: number = 1;
  image: string = '';
  price: number = 100;
}
