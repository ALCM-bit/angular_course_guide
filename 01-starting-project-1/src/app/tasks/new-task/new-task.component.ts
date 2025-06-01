import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  //As abordagens não mudam muito podem ser usados signals ou a variável padrão
  // para o two-Waybinding
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  enteredTitle = '';
  enteredSummary = '';
  enteredDate: string = '';
  private tasksService = inject(TasksService);

  onCancel(){
    this.close.emit();
  }

  onSubmit(){
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    }, this.userId);

    this.close.emit();
  }
}
