"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Priority, SortBy, Status } from "@/constants/todos";
import { SearchParams } from "@/types/todo";

export default function TodosActions({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return (
    <section className="p-6 bg-gray-50 sm:p-8 md:p-12">
      <Card className="shadow-lg border rounded-lg bg-white mx-auto max-w-md sm:max-w-lg md:max-w-2xl">
        <CardHeader className="px-6 py-4 border-b">
          <CardTitle className="text-2xl font-bold text-gray-800">
            Todos Query
          </CardTitle>
        </CardHeader>
        <form>
          <CardContent className="px-6 py-4 space-y-6">
            <div>
              <Label
                htmlFor="due_date"
                className="block text-sm font-medium text-gray-700"
              >
                Due date
              </Label>
              <Input
                id="due_date"
                name="due_date"
                type="date"
                lang="en"
                // defaultValue={searchParams.due_date}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <Label
                htmlFor="priority"
                className="block text-sm font-medium text-gray-700"
              >
                Priority
              </Label>
              <Select
                defaultValue={searchParams.priority ?? Priority.ANY}
                name="priority"
              >
                <SelectTrigger className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-md">
                  <SelectItem value={Priority.ANY}>ANY</SelectItem>
                  <SelectItem value={Priority.P1}>P1</SelectItem>
                  <SelectItem value={Priority.P2}>P2</SelectItem>
                  <SelectItem value={Priority.P3}>P3</SelectItem>
                  <SelectItem value={Priority.P4}>P4</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label
                htmlFor="completed"
                className="block text-sm font-medium text-gray-700"
              >
                Completion status
              </Label>
              <Select
                defaultValue={searchParams.completed ?? Status.ALL.toString()}
                name="completed"
              >
                <SelectTrigger className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-md">
                  <SelectItem value={Status.ALL}>All</SelectItem>
                  <SelectItem value={Status.COMPLETED}>Completed</SelectItem>
                  <SelectItem value={Status.IN_PROGRESS}>
                    In Progress
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label
                htmlFor="sortBy"
                className="block text-sm font-medium text-gray-700"
              >
                Sort by
              </Label>
              <Select
                defaultValue={
                  searchParams.sortBy?.toString() ?? SortBy.TITLE.toString()
                }
                name="sortBy"
              >
                <SelectTrigger className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-md">
                  <SelectItem value={SortBy.TITLE}>Title</SelectItem>
                  <SelectItem value={SortBy.PRIORITY}>Priority</SelectItem>
                  <SelectItem value={SortBy.DUE_DATE}>Due Date</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter className="px-6 py-4 border-t flex justify-end">
            <Button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Apply
            </Button>
          </CardFooter>
        </form>
      </Card>
    </section>
  );
}
