
// // import { createServerClient, type CookieOptions } from "@supabase/ssr";
// import { createServerClient } from "@supabase/ssr";
// import { cookies } from "next/headers";

//   export const createClient = (cookieStore: ReturnType<typeof cookies>) => {
    
//   return createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     {
//       cookies: {
//         getAll() {
//           return cookieStore.getAll()
//         },
//         setAll(cookiesToSet) {
//           try {
//             cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
//           } catch {
//             // The `setAll` method was called from a Server Component.
//             // This can be ignored if you have middleware refreshing
//             // user sessions.
//           }
//         },
//       },
//     },
//   );
// };


import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export const createClient = async () => {
  // Очікуємо результат cookies()
  const cookieStore = await cookies(); // Отримуємо ReadonlyRequestCookies

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        // Метод getAll для отримання cookies
        getAll() {
          return cookieStore.getAll();
        },
        // Метод setAll для встановлення cookies
        async setAll(cookiesToSet) {
          try {
            const mutableCookies = await cookies(); // Використовуємо новий об'єкт cookies
            cookiesToSet.forEach(({ name, value, options }) => {
              mutableCookies.set(name, value, options); // Використання метода set
            });
          } catch {
            // Ігноруємо помилки, якщо виклик з серверного компонента
          }
        },
      },
    }
  );
};
