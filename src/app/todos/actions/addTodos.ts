"use server";

import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { Priority } from "@/constants/todos";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function addTodo(formData: FormData) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const todoData = {
    title: formData.get("title")?.toString() || "",
    description: formData.get("description")?.toString() || "",
    due_date: formData.get("due_date")
      ? new Date((formData.get("due_date") as object).toString())
      : null,
    priority: formData.get("priority")?.toString() || Priority.P4,
    completed: Boolean(formData.get("completed")),
  };

  const { error } = await supabase.from("todos").insert([todoData]);

  if (error) {
    throw new Error(`Failed to insert todo: ${error.message}`);
  }

  revalidatePath("/todos");
  redirect("/todos");
}
