import type { ReactNode } from "react";
import { Header } from "~/components/layouts/navigation/header";
// import { Footer } from "~/components/layouts/footer/Footer";

type MainProps = {
  children: ReactNode;
  className?: string;
};

export const Main = ({ children, className }: MainProps) => {
  return (
    <main className={`min-h-dvh relative overflow-hidden ${className ?? ""}`}>
      <Header />
      <div className="flex items-center justify-center pt-[120px]">
        <div className="container pt-13">{children}</div>
      </div>
      {/* <Footer /> */}
    </main>
  );
};
