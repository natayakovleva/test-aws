"use server";

import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function deleteTodo(formData: FormData) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const todoId = formData.get("id")?.toString();

  if (!todoId) {
    console.warn("The Todo ID is not provided");
    return;
  }

  const { error } = await supabase.from("todos").delete().eq("id", todoId);

  if (error) {
    throw new Error(`Failed to delete todo: ${error.message}`);
  }

  revalidatePath("/todos");

  redirect("/todos");
}
