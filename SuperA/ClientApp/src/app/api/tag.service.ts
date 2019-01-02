import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tag } from './models';

@Injectable()
export class TagService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Tag[]>('api/tags');
  }

  create(tag: Tag) {
    return this.http.post<Tag>('api/tags', tag);
  }
}
