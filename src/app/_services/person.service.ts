import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Person } from '../_models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

getPeople(): Observable<Person[]> {
  return this.http.get<Person[]>(this.baseUrl + 'person');
}

getPerson(id): Observable<Person> {
  return this.http.get<Person>(this.baseUrl + 'person/' + id);
}

createPerson(person: Person) {
  return this.http.post(this.baseUrl + 'person', person);
}

updatePerson(id: number, person: Person) {
  return this.http.put(this.baseUrl + 'person/' + id, person);
}

deletePerson(id: number) {
  return this.http.delete(this.baseUrl + 'person/' + id);
}
}
