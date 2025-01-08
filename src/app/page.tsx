import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        ToDO App
      </h1>
      <Link
        href="/todos"
        className="text-white bg-blue-500 hover:bg-blue-600 font-medium py-2 px-4 rounded shadow-md">
        Go to App
      </Link>
    </div>
  );
}
