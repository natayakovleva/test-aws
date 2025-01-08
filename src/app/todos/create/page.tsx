
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TodosForm } from "@/components/todo/TodosForm";

const CreateTodo = async () => {
  return (
    <section>
      <Card className="p-4 bg-white shadow-lg rounded-lg">
        <CardHeader className="border-b border-gray-200 pb-2">
          <CardTitle className="text-3xl font-semibold text-gray-800">
            Add new todo
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <TodosForm />
        </CardContent>
      </Card>
    </section>
  );
};

export default CreateTodo;
