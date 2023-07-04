import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoItem } from '../todo/todo.types';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class TodoService {
    constructor(private httpClient: HttpClient) { }

    public load(): Observable<TodoItem[]> {
        return this.httpClient.get<TodoItem[]>('assets/todos.json')
    }
    
}