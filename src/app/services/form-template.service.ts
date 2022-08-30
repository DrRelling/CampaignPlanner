import { Injectable } from '@angular/core';
import { FormTemplateOption } from '../interfaces/form-template-option.interface';
import { FormTemplate } from '../interfaces/form-template.interface';

@Injectable({
  providedIn: 'root'
})
export class FormTemplateService {

  private _availableTemplates: FormTemplateOption[] = [
    { id: '123', name: 'Location' },
    { id: '456', name: 'NPC' },
  ]
  public get availableTemplates(): FormTemplateOption[] {
    return this._availableTemplates;
  }

  private locationFormTemplate: FormTemplate = {
    id: 'location123',
    fields: [
      {id: 'population123', label: 'Population', defaultValue: '1000' },
      {id: 'wealth123', label: 'Wealth' },
    ]
  }

  private npcFormTemplate: FormTemplate = {
    id: 'npc123',
    fields: [
      {id: 'attitude123', label: 'Attitude' },
      {id: 'gear123', label: 'Gear' },
      {id: 'treasure123', label: 'Treasure' },
    ]
  }

  constructor() { }

  public getFormTemplate(id: string): FormTemplate {
    if (id === '123') {
      return this.locationFormTemplate;
    } 
    return this.npcFormTemplate;
  }
}
