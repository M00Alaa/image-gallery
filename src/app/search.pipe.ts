import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arrList: any[], term: string): any[] {
    return arrList.filter((item) => item.tags.join().toLowerCase().includes(term))
  }

}
