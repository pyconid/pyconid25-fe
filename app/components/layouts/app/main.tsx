import type { ReactNode } from "react";
import { Header } from "~/components/layouts/navigation/header";

type MainProps = {
  children: ReactNode;
  className?: string;
};

export const Main = ({ children, className }: MainProps) => {
  return (
    <main className={`min-h-dvh ${className ?? ""}`}>
      <Header />
      <div className="flex items-center justify-center pt-[120px]">
        <div className="container pt-13">{children}</div>
      </div>
    </main>
  );
};
