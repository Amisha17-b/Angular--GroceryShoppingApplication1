import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GrocessaryService {
  url: string = 'http://localhost:8085';
// Category definitions for products
  category: any = [{
    name: "VEGETABLES" , value: 0,
  }, {
    name: "FRUITS", value: 1,
  }, {
    name: "DAIRYPRODUCT", value: 2
  }, {
    name: "SNACKS", value:  3
  }, {
    name: "CERALS", value:  4
  }, {
    name: "FROZENFOODS", value:  5
  }
];


//Initializes the service with dependencies, including the HttpClient for making HTTP requests and the Angular Router for routing.
  constructor(

    private http: HttpClient,
    private router: Router

  ) { }


  /* Sends a POST request to register a new customer.*/
  signUp(body: any): Observable<any> {
    return this.http.post(this.url + "/api/customers/register", body);
  }
  //  Sends a POST request to authenticate a customer.
  clientSignIn(body: any): Observable<any> {
    return this.http.post(this.url + "/api/customers/login", body);
  }
//once we logged in that time we are storing client id into token
storeClientAuthorization(token: string): void {
  localStorage.setItem("token", token);
}

 // Retrieves the client's authorization token from local storage.
getClientAuthorization(): any {
  const token = localStorage.getItem("token");
  return token;
}

 // Store client username
storeClientUserName(name: string): void {
  localStorage.setItem("userName", name);
}


// Get client username
getClientName(): any {
  const name = localStorage.getItem("userName");
  return name;
}

// Clears the local storage and navigates the client back to the login page.
clientLogout(): void {
  localStorage.clear();
  this.router.navigate(['']);
}
//admin login
adminSignIn(body: any): Observable<any> {
  return this.http.post(this.url + "/api/admin/login", body);
}

  // Store admin authorization token
storeAdminAuthorization(token: string): void {
  localStorage.setItem("admin", token);
}
getAdminAuthorization(): any {
  const token = localStorage.getItem("admin");
  return token;
}

storeAdminUserName(name: string): void {
  localStorage.setItem("adminName", name);
}

getAdminName(): any {
  const name = localStorage.getItem("adminName");
  return name;
}

adminLogout(): void {
  localStorage.clear();
  this.router.navigate(['/']);
}

addProduct(body: any): Observable<any> {
  return this.http.post(this.url + "/api/products/add products", body);
}

getProductlist():Observable<any> {
  return this.http.get(this.url + "/api/products");
}

deleteProduct(id :any):Observable<any> {
  //return this.http.delete(this.url + "/api/products/" +id);
  //secondway
  return this.http.delete(`${this.url}/api/products/${id}`);
}

getProductById(id:any):Observable<any> {
  return this.http.get(this.url + "/api/products/products/"+id);
}

editProduct(body: any,id:any): Observable<any> {
  return this.http.put(this.url + "/api/products/"+id, body);
}

addToCart(body: any,pid:any,cid:any):Observable<any>{
  return this.http.post(this.url+"/api/cart/"+cid+"/"+pid,body);
}

getCustomerById(id:any):Observable<any> {
  return this.http.get(this.url + "/api/customers/customer/"+id);
}

cartList():Observable<any>{
  return this.http.get(this.url+"/api/cart/list");
}
placeOrder(cid:any,cartid:any,body:any):Observable<any> {
  return this.http.post(this.url + "/api/orders/"+cid+"/"+cartid, body);
}
deleteCart(id :any):Observable<any> {

  return this.http.delete(`${this.url}/api/cart/${id}`);
}

orderList(id:any):Observable<any>{
  return this.http.get(this.url+"/api/orders/"+id);
}

getCategoryList(): any {
  return this.category;
}
addPayment(body:any,orderid:any,cid:any):Observable<any> {
  return this.http.post(this.url + "/api/payements/"+orderid+"/"+cid, body);
}

 // Check if a client is logged in, if not, redirect to client login page
isClientLoginPresent(): void {
  if (this.getClientAuthorization() === null) {
    this.router.navigate(['/client-login']);
  }
}

// Check if an admin is logged in, if not, redirect to admin login page
isAdminLoginPresent(): void {
  if (this.getAdminAuthorization() === null) {
    this.router.navigate(['/admin-login']);
  }
}

forgotPassword(body: any):Observable<any> {
  return this.http.post(this.url + "/api/customers/forgotpassword", body);
}

updateCustomerInformation(body: any):Observable<any> {
  return this.http.put(this.url + "/api/customers/customer/"+body?.customerId, body);
}

changePassword(cid: any,password:any):Observable<any> {
  return this.http.post(this.url + "/api/customers/"+cid+"/"+password,{});
}

getProductByCategory(cid: any, offset: any, limit: any):Observable<any>{
  return this.http.get(this.url+"/api/products/" + cid + "/"+ offset + "/" + limit);
}

getAllProducts(offset: any, limit: any):Observable<any>{
  return this.http.get(this.url+"/api/products/" + offset + "/" + limit);
}

}
