import { HttpClient } from '@angular/common/http';

export class AppService  {

    constructor(private http: HttpClient)  {}

    getData() {
        return this.http.get('assets/libData.json');
      }
}