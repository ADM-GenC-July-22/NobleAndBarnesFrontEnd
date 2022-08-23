import {Pipe, PipeTransform} from '@angular/core';

//Implement your Code here

@Pipe({name: "custom"})
export class ShowLen implements PipeTransform {
   //Implement your Code here
   transform(value: String): number {
    return value.length;
  }
}