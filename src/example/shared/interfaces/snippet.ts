import {Observable} from 'rxjs';

export interface Snippet {
  name?: string;
  lang: string;
  code?: Observable<string>;
  src?: string;
}
