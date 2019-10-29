import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Region } from '@a-boss/domain';
import { RegionFacadeService } from '@a-boss/regions-store';


@Injectable({
  providedIn: 'root'
})
export class MainRegionsResolver implements Resolve<Region[]> {
  constructor(private regionService: RegionFacadeService) { }

  resolve(
    route: import('@angular/router').ActivatedRouteSnapshot,
    state: import('@angular/router').RouterStateSnapshot
  ) {
    return this.regionService.getPrimaryRegions()
  }
}

