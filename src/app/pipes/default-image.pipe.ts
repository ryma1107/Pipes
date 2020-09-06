import { Pipe, PipeTransform } from '@angular/core';

const  DEFAULT_PATH = 'rotating_card_profile2.png';
@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(path: string): string {
    //si le path est vide ou contient du blanc on retourne rotating_card_profile3.png
    if(path.trim().length === 0){
      return DEFAULT_PATH;
    }
    // sinon on retourne le path comm il est
    else{
      return path;
    }
  }

}
