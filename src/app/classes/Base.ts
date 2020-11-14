import {environment} from '../../environments/environment';
import {Observable, of, throwError} from 'rxjs';
import {delay, mergeMap, retryWhen} from 'rxjs/operators';
import {Injectable} from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class Base {
  static http_retry(acceptedError = []) {
    let retries = environment.retry_Count;
    return (src: Observable<any>) => src.pipe(
      retryWhen(obs => {
        return obs.pipe(
          mergeMap((response) => {
            if (!acceptedError.indexOf(response.status)) {
              throw({error: response});
            } else {
              return of(response).pipe(
                mergeMap(error => retries-- > 0 ? of(error) : throwError(error)),
                delay(1000),
              );
            }
            return throwError({error: 'Unknown error for asynchronous function:' + response});
          }),
        );
      })
    );
  }
}
