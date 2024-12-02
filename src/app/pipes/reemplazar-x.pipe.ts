import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    return value.replace(/[aA]/g, 'x').replace(/[oO]/g, 'x');
  }
}
