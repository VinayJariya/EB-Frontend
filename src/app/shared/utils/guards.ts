import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

//////TODO

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate{

  constructor(private store: Store){

  }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      return true
      return this.store.select((state) => state.isLoggedIn && state.isAdmin)
    }
}

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate{

  constructor(private store: Store){

  }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      return true
      return this.store.select((state) => state.isLoggedIn)
    }
}

