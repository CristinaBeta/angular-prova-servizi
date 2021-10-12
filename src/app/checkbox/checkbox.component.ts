import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Task } from '../interfacce/Task';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  task: Task = {
    name: 'ToDo',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Importare angular material', completed: false, color: 'primary'},
      {name: 'Provare a fare un checkbox', completed: false, color: 'accent'},
      {name: 'Aggiungere titoli', completed: false, color: 'warn'}
    ]
  };
  daFare = new FormControl();
  tuttiCompletati: boolean = false;

  constructor(private title:Title){

  }

  ngOnInit(){
    this.title.setTitle('Checkbox');
  }
  
  updateTuttiCompletati() {
    this.tuttiCompletati = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  alcuniCompletati(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.tuttiCompletati;
  }

  setTutti(completed: boolean) {
    this.tuttiCompletati = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
  }

  aggiungiSubTask(){
    this.task.subtasks?.push( {name: this.daFare.value, completed: false, color: 'warn'});
  }
}