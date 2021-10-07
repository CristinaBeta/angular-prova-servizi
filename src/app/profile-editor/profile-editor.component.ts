import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),   //Utilizzare il costruttore di FormControl per impostarne il valore iniziale, che in questo caso è una stringa vuota.
    lastName: new FormControl(''),    //Creando questi controlli nella classe del componente, si ottiene l'accesso immediato per ascoltare, aggiornare e convalidare lo stato dell'input del form.
    //Per creare un gruppo nidificato in profileForm, aggiungere un elemento indirizzo nidificato all'istanza del Form group.
    address: new FormGroup({          // Le modifiche allo stato e al valore dal gruppo nidificato si propagano al gruppo padre, mantenendo la consistenza/coerenza con il modello generale.
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });
  /*I singoli controlli del modulo sono ora raccolti all'interno di un gruppo. Un'istanza di FormGroup fornisce il valore del proprio modello come oggetto ridotto dai valori di ogni controllo nel gruppo.
  Un'istanza del From group ha le stesse proprietà (come value e untouched) e metodi (come setValue()) di un'istanza del form control.*/

  onSubmit() {
    //Utilizzare EventEmitter per mantenere il modulo incapsulato e per fornire il valore del modulo all'esterno del componente.
    console.log(this.profileForm.value);
  }

  /*
    Quando si aggiorna il valore per un'istanza del Form group che contiene più controlli, potrebbe essere necessario aggiornare solo parti del modello. 
    Esistono due modi per aggiornare il valore del modello:
    Utilizzare il metodo setValue() per impostare un nuovo valore per un singolo controllo.
        Il metodo setValue() aderisce strettamente alla struttura del Form group e sostituisce l'intero valore per il controllo.
    Utilizzare il metodo patchValue() per sostituire qualsiasi proprietà definita nell'oggetto che è stata modificata nel Form.
  */

    updateProfile() {
      this.profileForm.patchValue({   //PatchValue() aggiorna solo le proprietà definite dal Form model.
        firstName: 'Pippo',
        address: {
          street: '123 Drew Street'
        }
      });
    }

}

