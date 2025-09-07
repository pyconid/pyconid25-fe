import { InternalErrorSection } from "~/components/sections/internal-error/internal-error";

export function meta() {
  return [
    { title: "Pycon 2025" },
    { name: "Login page", content: "Login page" },
  ];
}

export default function InternalError() {
  return (
    <main>
      <InternalErrorSection />
    </main>
  );
}
