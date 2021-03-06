import { Injectable } from '@angular/core';
import { Food } from '../../model/food.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Request } from '../../model/request.model';
import { User } from '../../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  foods:Array<Food> = [];
  user?:User;
  requestfinal:Array<Request> = [];
  request:Request = this.getDefaultUser();

  options = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  getDefaultUser(){
    return {
      namSnack: 'nome',
      price :0,
      amount : 0,
      nameClient : "string",
      payment :"string",
      address :"string"
      }
  }

  createcliente(user:User){
    this.user = user;
  }

  createRequestFood(user:User){
    this.user = user;
  }

  createRequestFoodfinal(){

    for (let index = 0; index < this.foods.length; index++) {
      let element = this.foods[index];
        this.request.namSnack = element.nam
        this.request.price = element.price
        this.request.price = element.price
        this.request.address = this.user?.address;
        this.request.nameClient = this.user?.name;
        this.request.payment = this.user?.payment;
        this.requestfinal.push(this.request);

    };
    /*for (let index = 0; index < this.requestfinal.length; index++) {
        let element = this.requestfinal[index];*/
        return this.httpClient.post<Request>(`${environment.baseUrlBackend}/request`,this.requestfinal, this.options);


    }

  getAll(){
    return this.foods;
  };

  addFood(food:Food){
      this.foods.push(food);
      console.log(this.foods.length)
      console.log("CHEGOU O LANCHE "+JSON.stringify(food));
  }

  numberFood(){
    sessionStorage.setItem("pedidos",this.foods.length.toString())
    return ;
  }

}
