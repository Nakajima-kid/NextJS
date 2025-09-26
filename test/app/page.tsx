import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold">Test</h1>
        <p className="mt-4">Description</p>
      </main>
    </div>
  );
}