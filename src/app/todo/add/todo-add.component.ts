import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { TodoItem } from '../todo.types';

@Component({
    selector: 'todo-add',
    templateUrl: 'todo-add.component.html'
})

export class TodoAddComponent implements OnInit {
    @Output()
    public added = new EventEmitter<TodoItem>();

    @Input({required: true})
    public nextId:number=0;

    constructor() { }

    public newTodoForm = new FormGroup({description: new FormControl(null, [Validators.required, 
      Validators.minLength(3)])})

       public addNew(myForm: FormGroupDirective) {
        if (this.newTodoForm.valid && this.newTodoForm.dirty) {
          this.added.emit({
            id: this.nextId,
            description: this.newTodoForm.value.description ?? '',
            checked: false,
        });
          myForm.resetForm();
          this.newTodoForm.reset();
          this.newTodoForm.markAsUntouched();
    
      }
    }


    ngOnInit() { }
}