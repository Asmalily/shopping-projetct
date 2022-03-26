import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer,SafeHtml, SafeResourceUrl } from '@angular/platform-browser';
    
@Pipe({
  name: 'nonsanitize'
})
export class NonsanitizePipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) { }
  transform(Url: any,type:string): SafeResourceUrl {
    throw new Error('Method not implemented.');
  }

  public getSantizeUrl(url : string) { 
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
   
  }

}
