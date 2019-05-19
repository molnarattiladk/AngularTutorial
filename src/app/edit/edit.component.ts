import { Component, OnInit, ViewChild } from '@angular/core';
import { Person } from '../_models/person';
import { NgForm } from '@angular/forms';
import { PersonService } from '../_services/person.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @ViewChild('editForm') editForm: NgForm;
  person: Person;
  constructor(private route: ActivatedRoute, private personService: PersonService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.person = data.person;
});
  }

  updatePerson() {
    this.personService.updatePerson(this.person.id, this.person).subscribe(next => {
      console.log(this.person);
      this.editForm.reset(this.person);
    }, error => {
      console.log(error);
    });
}

}
