import { ChangeDetectionStrategy, Component, signal, WritableSignal } from '@angular/core';
import { Button, ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-signal-ejemplo4',
  standalone: true,
  imports: [InputTextModule, ButtonModule],
  templateUrl: './signal-ejemplo4.component.html',
  styleUrl: './signal-ejemplo4.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalEjemplo4Component {
  todoName = '';
  todos: WritableSignal<string[]> = signal([]);

  addTodo(todo: HTMLInputElement) {
    const item = todo.value;
    this.updateTodos(item);
    this.resetAndFocus(todo);
  }


  updateTodos(todo: string) {
    if (todo.length > 0) {
      this.todos.update((todos) => [...todos, todo]);
    }
  }


  resetAndFocus(todo: HTMLInputElement) {
    todo.value = '';
    todo.focus();
  }

}
