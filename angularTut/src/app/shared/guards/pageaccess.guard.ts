import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PageaccessGuard {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    debugger;
    console.log(route);
    console.log(state);
    let isAdmin = sessionStorage.getItem('isAdmin')
    if (isAdmin === 'false') {
      this.router.navigate(['restricted']);
      return false;
    }
    return true;
  }
}
