
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WorldRegionsDataService } from './world-regions-data.service';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('GIVEN: A WorldRegionDataService', () => {

  describe('WHEN: The WorldRegionDataService is compiled', () => {
    let service: WorldRegionsDataService;
    const mockRegions = {};
    const mockPrimaryRegions = {};

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

    it('THEN: should emit a list of regions when calling .getAllRegions()', () => {
      service.getRegions().subscribe(regions =>
        expect(regions).toBe((mockRegions))
      )
    })

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


    /*     it('THEN: should return a mapped ietm that replaces nested objects for its entity key', () => {
        }) */


  })
});
