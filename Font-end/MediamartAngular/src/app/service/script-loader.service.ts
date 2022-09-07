import { Injectable } from '@angular/core';
import {Observable, Observer} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScriptLoaderService {

  constructor() { }

  public load(script: string): Observable<string> {
    return new Observable<string>((observer: Observer<string>) => {

      let scriptElement = document.createElement("script");
      scriptElement.type = "text/javascript";
      scriptElement.src = script;

      scriptElement.onload = () => {
        observer.next(script);
        observer.complete();
      };

      scriptElement.onerror = (error: any) => {
        observer.error("Couldn't load script '" + script + "'");
      };

      document.getElementsByTagName('body')[0].appendChild(scriptElement);
    });
  }
}
