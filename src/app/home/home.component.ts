import { Component, OnInit } from '@angular/core';
import { Person } from '../_models/person';
import { PersonService } from '../_services/person.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  people: Person[];
  constructor(private personService: PersonService, private route: ActivatedRoute) { }

  ngOnInit() {
     this.loadPeople();
    //  this.route.data.subscribe(data => {
    //    this.people = data.people;
    // });
    //  console.log(this.people);
  }

   loadPeople() {
     this.personService.getPeople().subscribe((people: Person[]) => {
       this.people = people;
     }, error => {
       console.log(error);
     });
   }

   delete(id: number) {
    this.personService.deletePerson(id).subscribe(next => {
      console.log('törlésre került', id);
      this.loadPeople();
    }, error => {
      console.log(error);
    });
   }
}
