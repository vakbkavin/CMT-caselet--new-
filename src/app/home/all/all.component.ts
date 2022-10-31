import { Component, OnInit } from '@angular/core';
import { NewLaunchService } from 'src/app/shared/new-launch.service';
import { ProductsService } from 'src/app/shared/products.service';
// import {FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms'


@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

productList:any = [];
newProductList:any;
compareList:any = [];


  constructor(private productapi:ProductsService, private newProductapi:NewLaunchService ) {}

  ngOnInit(): void {
    this.productapi.getNewProduct().subscribe((product:any)=>{
      const prodList:[] = product;
      prodList.forEach((item, index)=>{
       this.productList.push(Object.assign(item, {id: index} ));
      })
      console.log(product);
    })

    this.newProductapi.getNewLaunch().subscribe((newProduct:any)=>{
      this.newProductList = newProduct;
    })


}



onCheck(event:any, product:any, index:any){

  console.log(index);
  if(event.target.checked === true){
    this.compareList.push(product);
  }else{
   this.compareList.filter((item:any, index:any)=>{
    if(product.id=== item.id){
      this.compareList.splice(index,1);
    }
   })
  }



console.log(this.compareList);
console.log(event);
}

}
