import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-planner-form',
  templateUrl: './planner-form.component.html',
  styleUrls: ['./planner-form.component.scss']
})
export class PlannerFormComponent implements OnInit {
  public plannerForm = this.formBuilder.group({
    name: this.formBuilder.control(''),
    aliases: this.formBuilder.array([])
  });

  public get aliases() {
    return this.plannerForm.get('aliases') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
