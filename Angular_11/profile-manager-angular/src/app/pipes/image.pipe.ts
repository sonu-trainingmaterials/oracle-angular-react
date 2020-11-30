import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(photoUrl:string, sex:string):string {
      if(photoUrl) return photoUrl;
      else 
        if (sex==="M")return "/assets/male.jpg";
        else return "/assets/female.jpg"
  }

}
