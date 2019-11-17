import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCountries'
})
export class FilterCountriesPipe implements PipeTransform {

  transform(countries: any[], searchText: string, resultLimit?: number): any[] {
    if (!searchText) return countries;
    const searchTextCaseInsensitive = new RegExp(searchText.toLowerCase(), 'i');

    const results = [];
    for (let i = 0; i < countries.length; i++) {
      const country = countries[i];
      if (results.length === resultLimit) break;
      if (country.name.match(searchTextCaseInsensitive)) results.push(country)
    }

    return results
  }

}
