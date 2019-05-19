import {Injectable} from '@angular/core';
import { Person } from '../_models/person';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import { PersonService } from '../_services/person.service';
import { Observable, of } from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable()
export class PersonDetailResolver implements Resolve<Person> {

    constructor(private personService: PersonService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Person> {
        // tslint:disable-next-line:no-string-literal
        return this.personService.getPerson(route.params['id']).pipe(
            catchError(error => {
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}
