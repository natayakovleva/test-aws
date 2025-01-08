
import { Priority, SortBy, Status } from "@/constants/todos";

export type Todo = {
  id: string;
  title: string;
  due_date: string;
  description: string;
  priority: string;
  completed: boolean;
};

export type SearchParams = {
  sortBy: SortBy; 
  priority: Priority; 
  completed: Status; 
  due_date: Date; 
};