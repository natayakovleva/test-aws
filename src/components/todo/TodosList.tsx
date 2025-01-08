
import { SearchParams } from "@/types/todo";
import { getTodos } from "@/app/todos/actions/getTodos";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";
import { TodosForm } from "@/components/todo/TodosForm";
import { Priority } from "@/constants/todos";
import deleteTodo from "@/app/todos/actions/deleteTodo";

export async function TodosList({ searchParams }: { searchParams: SearchParams }) {
  const { data: todos } = await getTodos(searchParams);

  if (!todos?.length) {
    return null;
  }

  const getPriorityColor = (priority: string): string => {
    switch (priority) {
      case Priority.P1:
        return "text-red-600";
      case Priority.P2:
        return "text-orange-600";
      case Priority.P3:
        return "text-yellow-600";
      case Priority.P4:
        return "text-green-600";
      case Priority.ANY:
      default:
        return "text-gray-600";
    }
  };

  return (
<section className="p-6 bg-gray-50 rounded-lg shadow-md">
      <div className="max-w-lg mx-auto p-4 space-y-6 ">
        <Accordion type="single" collapsible>
          {todos?.map((todo) => (
            <AccordionItem
              value={todo.id}
              key={todo.id}
              className="border border-gray-300 rounded-lg mb-4 bg-white"
            >
              <AccordionTrigger className="flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 rounded-t-lg transition duration-200">
                <div className="flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition duration-200">
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <span
                        className={`mr-2 text-sm font-semibold ${getPriorityColor(
                          todo.priority
                        )}`}
                      >
                        {todo.priority}
                      </span>
                      <span className="text-sm font-medium text-gray-700">
                        Task: {todo.title}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Due: {new Date(todo.due_date).toISOString().slice(0, 10)}
                    </div>
                  </div>
                </div>
                <span
                  className={`text-sm font-semibold ${
                    todo.completed ? "text-green-600" : "text-yellow-600"
                  }`}
                >
                  {todo.completed ? "Completed" : "In Progress"}
                </span>
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-white rounded-b-lg">
                <form
                  action={deleteTodo}
                  className="flex items-center justify-start mb-4"
                >
                  <input type="hidden" name="id" value={todo.id} />
                  <Button
                    variant="destructive"
                    type="submit"
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
                  >
                    Delete
                  </Button>
                </form>
                <div className="mt-4">
                  <TodosForm todo={todo} isUpdateTodo />
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}