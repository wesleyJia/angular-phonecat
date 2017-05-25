import { downgradeInjectable } from '@angular/upgrade/static';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

export interface PhoneData {
  name: string;
  snippet: string;
  images: string[];
}

@Injectable()
export class PhoneService {

  constructor(private http: Http) { }

  query(): Promise<PhoneData[]> {
    return this.http.get(`phones/phones.json`)
      .map((res: Response) => res.json())
      .toPromise();
  }

  get(id: string): Promise<PhoneData> {
    return this.http.get(`phones/${id}.json`)
      .map((res: Response) => res.json())
      .toPromise();
  }
}
