import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { FormTemplateOption } from 'src/app/interfaces/form-template-option.interface';
import { FormTemplateField } from 'src/app/interfaces/form-template.field.interface';
import { FormTemplateService } from 'src/app/services/form-template.service';

@Component({
  selector: 'app-entity-form-dialog',
  templateUrl: './entity-form-dialog.component.html',
  styleUrls: ['./entity-form-dialog.component.scss'],
})
export class EntityFormDialogComponent {
  public plannerForm = this.formBuilder.group({
    name: this.formBuilder.control(''),
    notes: this.formBuilder.control(''),
    aliases: this.formBuilder.array([]),
  });

  public get templates(): FormTemplateOption[] {
    return this.formTemplateService.availableTemplates;
  }

  public get name(): FormControl | null {
    return this.plannerForm.get('name') as FormControl;
  }

  public get aliases(): FormArray {
    return this.plannerForm.get('aliases') as FormArray;
  }

  public templateFields: FormTemplateField[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private formTemplateService: FormTemplateService
  ) {}

  public changeSelectedTemplate(event: MatSelectChange): void {
    const template = this.formTemplateService.getFormTemplate(event.value);
    this.templateFields = template.fields;
    this.aliases.clear();
    template.fields.forEach((field) => {
      this.aliases.push(this.formBuilder.control(field.defaultValue ?? ''));
    });
  }
}
