import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Person } from '../_models/person';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PersonDetailResolver } from '../_resolver/persondetailedresolver.resolver';
import { PersonService } from '../_services/person.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  @Output() cancelCreate = new EventEmitter();
  model: any = {};
  person: Person;
  createForm: FormGroup;
  constructor(private personService: PersonService, private fb: FormBuilder, private route: Router, private router: ActivatedRoute) { }

  ngOnInit() {
    this.createAddForm();
    this.router.data.subscribe(data => {
      this.person = data.person;
    });
  }

  createAddForm() {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      birth: [null, Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      job: ['', Validators.required],
      interests: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  create() {
    if (this.createForm.valid) {
      this.person = Object.assign({}, this.createForm.value);
      this.personService.createPerson(this.person).subscribe(() => {
        console.log('sikeres felvétel');
      }, error => {
        console.log(error);
      });
    }
  }

  cancel() {
    this.cancelCreate.emit(false);
  }
}
