import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { Country } from '@a-boss/domain';
import { UiModule } from '@a-boss/ui';
import { CountryComponent } from './country.component';

declare var cy;
declare var context;

const mockCountry: Country = {
  id: 'ASM',
  iso2Code: 'AS',
  name: 'American Samoa',
  region: 'EAS',
  incomeLevel: 'UMC',
  lendingType: 'LNX',
  capitalCity: 'Pago Pago',
  longitude: '-170.691',
  latitude: '-14.2846'
}

describe('GIVEN: CountryComponent declared in CountryModule', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [CountryComponent],
      imports: [RouterTestingModule, UiModule],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          data: new BehaviorSubject({ country: mockCountry })
        }
      }],
    }).compileComponents();
  });

  describe('WHEN: a CountryComponent is compiled', () => {
    function setup() {
      const fixture = TestBed.createComponent(CountryComponent);
      return {
        fixture,
        component: fixture.debugElement.componentInstance,
        template: fixture.debugElement.nativeElement,
      }
    }

    it('THEN: should create the component', () => {
      const { component, fixture } = setup();
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });

    it('THEN: should receive a country from ActivatedRoute data', () => {
      const { component } = setup();
      expect(component.country$).toBeInstanceOf(Observable);

      component.country$.subscribe(country =>
        expect(country).toBe(mockCountry)
      )
    });

    it('THEN: should render the country name in h1, and details in spans', () => {
      const { fixture, component, template } = setup();
      component.country$.subscribe(() => {
        fixture.detectChanges();

        const countryName = template.querySelector('h1');
        expect(countryName.textContent).toBe(mockCountry.name);

        const countryDataSpans = template.querySelector('span');
        countryDataSpans.forEach(span => expect(span.textContent).toBeTruthy());
      })
    });

  })
})
