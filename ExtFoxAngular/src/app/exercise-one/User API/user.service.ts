import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { UserModel } from 'src/models/user-model';

@Injectable({ providedIn: 'root' })
export class UserService {
  USER_API_URL = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUserData() {
    return this.http.get(this.USER_API_URL).pipe(
      map((data: UserModel[]) => {
        return data;
      }),
      catchError((error) => {
        return throwError('Something went wrong!');
      })
    );
  }
}
