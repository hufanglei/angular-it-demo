import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  hasData(cartList,currentProduct){

        if(cartList && cartList.length>0){

            for(var i=0;i<cartList.length;i++){

                if(cartList[i].product_id==currentProduct.product_id && cartList[i].product_attrs==currentProduct.product_attrs){

                  return true;

                }
            }

            return false;

        }
        return false;
  }
  getCartNum(cartList){

    var sum=0;

    for(var i=0;i<cartList.length;i++){

      sum+=cartList[i].product_count;
    }

    return sum;



  }
}
