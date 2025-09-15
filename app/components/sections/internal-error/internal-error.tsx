import type { FC } from "react";

export const InternalErrorSection: FC = () => (
  <section className="h-screen flex flex-col items-center">
    <div className="mt-[19vh]">
      <img
        src="/images/logo-dark.svg"
        className="w-73 h-25"
        alt="pycon 25 logo"
      ></img>
    </div>

    <div className="font-sans text-[#282828] text-md mt-[46vh] text-center">
      You are going to be redirected back to the homepage.
    </div>
  </section>
);
