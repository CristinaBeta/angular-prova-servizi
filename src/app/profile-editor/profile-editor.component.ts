import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),   //Use the constructor of FormControl to set its initial value, which in this case is an empty string. By creating these controls in your component class, you get immediate access to listen for, update, and validate the state of the form input.
    lastName: new FormControl(''),
    //To create a nested group in profileForm, add a nested address element to the form group instance.
    address: new FormGroup({          // Changes in status and value from the nested form group propagate to the parent form group, maintaining consistency with the overall model.
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });
  /*The individual form controls are now collected within a group. A FormGroup instance provides its model value as an object reduced from the values of each control in the group. 
  A form group instance has the same properties (such as value and untouched) and methods (such as setValue()) as a form control instance.*/

  onSubmit() {
    //Da fare: Use EventEmitter to keep the form encapsulated and to provide the form value outside the component. 
    console.log(this.profileForm.value);
  }

  /*
    When updating the value for a form group instance that contains multiple controls, you might only want to update parts of the model. This section covers how to update specific parts of a form control data model.
    There are two ways to update the model value:
    Use the setValue() method to set a new value for an individual control. The setValue() method strictly adheres to the structure of the form group and replaces the entire value for the control.
    Use the patchValue() method to replace any properties defined in the object that have changed in the form model.
  */

    updateProfile() {
      this.profileForm.patchValue({   //PatchValue() only updates properties that the form model defines.
        firstName: 'Pippo',
        address: {
          street: '123 Drew Street'
        }
      });
    }

}

