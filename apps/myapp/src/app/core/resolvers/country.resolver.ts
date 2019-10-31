import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Country } from '@a-boss/domain';
import { RegionFacadeService } from '@a-boss/regions-store';


@Injectable({
  providedIn: 'root'
})
export class CountryResolver implements Resolve<Country> {
  constructor(private regionService: RegionFacadeService) { }

  resolve(
    route: import('@angular/router').ActivatedRouteSnapshot,
    state: import('@angular/router').RouterStateSnapshot
  ) {
    const id = route.paramMap.get('id');
    return this.regionService.getCountry(id);
  }
}

