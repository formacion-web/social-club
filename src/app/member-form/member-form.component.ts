import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.scss']
})
export class MemberFormComponent implements OnInit {

  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {

    this.myForm = fb.group({
      'name':['',Validators.required],
      'surname':['',Validators.required,Validators.minLength(5)],
      'category':''
    })

   }

  ngOnInit(): void {
  }

  sendData(){
    console.log(this.myForm.value);
    console.log(this.myForm.get('name')?.value.toUpperCase())
    console.log(this.myForm.valid)

  }
}
