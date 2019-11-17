
import { async, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { WorldRegionsDataService } from './world-regions-data.service';
import { Observable } from 'rxjs';

describe('GIVEN: A WorldRegionDataService', () => {

  describe('WHEN: The WorldRegionDataService is compiled', () => {
    let service: WorldRegionsDataService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [WorldRegionsDataService]
      })
      service = TestBed.get(WorldRegionsDataService);
    })


    it('THEN: service should be created', () => {
      expect(service).toBeTruthy()
    });

    it('THEN: should return a observable when calling .getAllRegions()', () => {
      expect(service.getRegions()).toBeInstanceOf(Observable)
    })

    it('THEN: should call the external API when calling .getAllRegions()',
      async(() => {
        // Nota : Necesito mejorar esto, no consigo lanzar el flush según el tutorial...!
        const mock = [{ "name": 'Europe', "code": 'EU' }];
        const endpoint = 'https://api.worldbank.org/v2/region';

        service.getRegions().subscribe(regions =>
          expect(regions).toBeTruthy()
        );

        const httpMock = TestBed.get(HttpTestingController);
        const req = httpMock
          .expectOne(req => req.method === 'GET' && req.url === 'https://api.worldbank.org/v2/region')

        httpMock.verify();
      }))


    it('THEN: should return a observable when calling .getPrimaryRegions()', () => {
      expect(service.getPrimaryRegions()).toBeInstanceOf(Observable)
    })

    it('THEN: should return a observable when calling .getCountry()', () => {
      expect(service.getCountry('USA')).toBeInstanceOf(Observable)
    })


    it('THEN: should return a observable when calling .getIncomeLevels()', () => {
      expect(service.getIncomeLevels()).toBeInstanceOf(Observable)
    })
    it('THEN: should return a observable when calling .getLendingTypes()', () => {
      expect(service.getLendingTypes()).toBeInstanceOf(Observable)
    })
  })
});
