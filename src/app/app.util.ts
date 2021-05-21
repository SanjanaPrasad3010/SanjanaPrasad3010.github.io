import { FormControl, FormGroup, Validators } from "@angular/forms";

export function getFormGroup(): FormGroup {
    const form = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        email: new FormControl(''),
        phone: new FormControl('', [Validators.minLength(10), Validators.maxLength(10)]),
        status: new FormControl('Active'),
    });
    return form;
}