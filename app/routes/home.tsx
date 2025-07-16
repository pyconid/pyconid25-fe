import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "PyconID 2025" },
    { name: "description", content: "Website for PyconID 2025" },
  ];
}

export default function Home() {
  return <h1 className="text-lg font-bold">PyconID 2025</h1>;
}
