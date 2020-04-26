import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {
    transform(items, value){
        return items.filter(item => {
            return item.name.includes(value)
        })
    }
 }