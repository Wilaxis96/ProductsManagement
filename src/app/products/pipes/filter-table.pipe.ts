import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTable'
})
export class FilterTablePipe implements PipeTransform {

  transform(value: any, args?: any): Array<any> {
    let searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(data => {
        if (data.ProductName.search(searchText) !== -1 || data.ProductDescription.search(searchText) !== -1) {
          return data;
        }
      });
    }
  }
}
