"use client";

import { Todo } from "@/types/todo";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Priority } from "@/constants/todos";
import { Button } from "../ui/button";

import addTodo from "@/app/todos/actions/addTodos";
import updateTodo from "@/app/todos/actions/updateTodo";

type Props = {
  isUpdateTodo?: boolean;
  todo?: Todo;
};

export const TodosForm: React.FC<Props> = ({ todo, isUpdateTodo = false }) => {

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; 
  };
  
  const formattedDueDate = todo?.due_date ? formatDate(todo.due_date) : '';
  

  return (
<form
  action={isUpdateTodo ? updateTodo : addTodo}
  className="space-y-6 max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg"
>
  <input type="hidden" name="id" value={todo?.id} />

  <div className="space-y-2">
    <Label htmlFor="title">Title</Label>
    <Input
      name="title"
      id="title"
      required
      defaultValue={todo?.title}
      className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-500"
    />
  </div>

  <div className="space-y-2">
    <Label htmlFor="description">Description</Label>
    <Textarea
      name="description"
      required
      defaultValue={todo?.description}
      className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-500"
    />
  </div>

  <div className="space-y-2">
    <Label htmlFor="due_date">Due Date</Label>
    <Input
      name="due_date"
      id="due_date"
      type="date"
      required
      defaultValue={formattedDueDate}
      className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-500"
    />
  </div>

  <div className="space-y-2">
    <Label htmlFor="priority">Priority</Label>
    <Select
      name="priority"
      required
      defaultValue={todo?.priority ?? Priority.ANY}
    >
      <SelectTrigger className="border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-500">
        <SelectValue placeholder="Select Priority" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={Priority.P1}>P1</SelectItem>
        <SelectItem value={Priority.P2}>P2</SelectItem>
        <SelectItem value={Priority.P3}>P3</SelectItem>
        <SelectItem value={Priority.P4}>P4</SelectItem>
      </SelectContent>
    </Select>
  </div>

  <div className="flex items-center space-x-2">
    <Checkbox
      name="completed"
      id="completed"
      defaultChecked={todo?.completed || false}
      className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
    />
    <Label htmlFor="completed">Is Completed</Label>
  </div>

  <Button type="submit" variant="default" className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg p-2 transition duration-200">
    {isUpdateTodo ? "Update" : "Add"}
  </Button>
</form>
  );
};
