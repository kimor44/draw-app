import { App } from "./features/App";

export default async function Home() {
  return (
    <main className="flex h-full flex-col items-center gap-10 p-12">
      <App />
    </main>
  );
}
