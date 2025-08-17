import { LoginSection } from "~/components/sections/login/login";

export function meta() {
  return [
    { title: "Pycon 2025" },
    { name: "Login page", content: "Login page" },
  ];
}

export default function Login() {
  return (
    <main>
      <LoginSection />
    </main>
  );
}
