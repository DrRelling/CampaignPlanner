import { FormTemplateField } from "./form-template.field.interface";

export interface FormTemplate {
    id: string;
    fields: FormTemplateField[];
}