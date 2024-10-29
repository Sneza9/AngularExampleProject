import { Injectable } from "@angular/core";
import { NewTaskData } from "./task/task.model";

// Registrujemo je kao injectable i dodajemo konfiguracioni objekat 
// Sada Angular zna kada nam je potreban objekat ove klase, on ga kreira 
@Injectable({providedIn:'root'})
export class TaskServise{
    // Operacije i upravljanje podacima koji su potrebni jednoj ili vise komponenti 
    // Dodajemo tasks kako private property 
    tasks = [
        {
          id: 't1',
          userId: 'u1',
          title: 'Master Angular',
          summary:
            'Learn all the basic and advanced features of Angular & how to apply them.',
          dueDate: '2025-12-31',
        },
        {
          id: 't2',
          userId: 'u3',
          title: 'Build first prototype',
          summary: 'Build a first prototype of the online shop website',
          dueDate: '2024-05-31',
        },
        {
          id: 't3',
          userId: 'u3',
          title: 'Prepare issue template',
          summary:
            'Prepare and describe an issue template which will help with project management',
          dueDate: '2024-06-15',
        },
      ];

      constructor(){
        // Ono sto dobijamo iz lovalStoreage-a je uvek string 
        // Inace iz browser-a dobijamo JSON format 
        const tasks=localStorage.getItem('tasks'); 

        if(tasks)
        {
            this.tasks=JSON.parse('tasks');
        }
      }

      // Metode koje se mogu koristiti van ove klase 
      getUserTasks(userId:string){
        return this.tasks.filter((task) => task.userId === userId);
      }

      addTask(taskData:NewTaskData, userId: string){
        this.tasks.unshift({
            // time u ms 
            id: new Date().getTime().toString(), 
            userId: userId,
            title: taskData.tittle,
            summary: taskData.summary,
            dueDate: taskData.date
          })
        this.saveTasks();
      }

      removeTask(taskId:string){
        this.tasks = this.tasks.filter((task) => task.id !== taskId); 
        this.saveTasks();
      }

      // Helper metoda za save tasks 
      private saveTasks(){
        // Konvertuje se u JSON format 
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }

}