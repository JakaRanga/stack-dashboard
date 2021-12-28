import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FileModel } from '../models/file.model';
import { Service } from '../models/service.model';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  constructor(private http: HttpClient) { }

  getServices(): Observable<Service[]> {
    return from(this._getFileFromAssets()).pipe(
      map((data: FileModel) => {
        return data.services
      })
    )
  }

  private _getFileFromAssets(): Observable<FileModel> {
    return this.http.get<FileModel>('./assets/stack.json');
  }
}
