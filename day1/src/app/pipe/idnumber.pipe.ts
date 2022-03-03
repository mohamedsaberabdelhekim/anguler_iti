import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iDnumber'
})
export class IDnumberPipe implements PipeTransform {

  transform(plainCreditCard: string): unknown {
    // return plainCreditCard.replace(/\s+/g, '-').replace(/(\d{4})/g, '$1-').trim();
    let output = [];
    for (var i = 0, len = plainCreditCard.length; i < len; i += 1) {
      output.push(+plainCreditCard.charAt(i));
  }
    return `${output[0]}${output[1]}-${output[2]}${output[3]}-${output[4]}${output[5]}${output[6]}${output[7]}`
  }

}
