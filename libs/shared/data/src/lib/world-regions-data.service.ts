import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Region, Country, CountryDetail } from '@a-boss/domain';

@Injectable()
export class WorldRegionsDataService {
  private apiUrl = 'https://api.worldbank.org/v2';
  private params: HttpParams;
  private defaultConfig = { format: 'json', perPage: 1000 }

  constructor(private http: HttpClient) {
    this.config = this.defaultConfig;
  }

  private filterPrimaryRegions = map(
    (regions: Region[]) => regions.filter(region => region.id)
  );
  private filterData = map((data: any) => data[1]);


  public getAllRegions = (): Observable<Region[]> =>
    this.get(`${this.apiUrl}/region`);

  public getPrimaryRegions = (): Observable<Region[]> =>
    this.getAllRegions().pipe(this.filterPrimaryRegions);

  public getCountry = (id: string): Observable<Country> =>
    this.get(`${this.apiUrl}/country/${id}`);

  public getRegionCountries = (code: string): Observable<Country[]> =>
    this.get(`${this.apiUrl}/region/${code}/country`)
      .pipe(map((res) => this.mapIDsFromNestedEntities(res)))

  public getIncomeLevels(): Observable<CountryDetail[]> {
    const endpoint = `${this.apiUrl}/incomeLevels`;
    return this.get(endpoint)
  }
  public getLendingTypes(): Observable<CountryDetail[]> {
    const endpoint = `${this.apiUrl}/lendingTypes`;
    return this.get(endpoint)
  }


  private get(endpoint: string): Observable<any> {
    return this.http
      .get<any>(endpoint, { params: this.params })
      .pipe(this.filterData)
  }

  set config({ format, perPage }) {
    this.params = new HttpParams();
    this.format = format;
    this.perPage = perPage;
  }

  set format(format: 'json' | 'csv' | 'excel') {
    this.params = this.params.set('format', format);
  }

  set perPage(quant: number) {
    this.params = this.params.set('per_page', quant.toString());
  }

  mapIDsFromNestedEntities(collection: object[], primaryKey = 'id'): any {
    const isNestedEntity = (object: any) => object[primaryKey];

    const mappedCollection = collection
      .map(item =>
        Object
          .keys(item)
          .reduce((acc, key: string) => (
            {
              ...acc,
              [key]: isNestedEntity(item[key]) ? item[key][primaryKey] : item[key]
            }
          ), {})
      )

    return mappedCollection;
  }

}
