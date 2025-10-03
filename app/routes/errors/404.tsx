import { Main as MainLayout } from "~/components/layouts/app/main";

export function meta() {
  return [
    { title: "PyconID 2025" },
    { name: "description", content: "Website for PyconID 2025" },
  ];
}

export default function Home() {
  return (
    <MainLayout className="bg-[#F1F1F1]">
      <div className="flex flex-col gap-4">
        <img
          src="/svg/oops.svg"
          className="mx-auto h-10 lg:h-auto"
          alt="Oops"
        />
        <img
          src="/svg/error-not-found.svg"
          className="mx-auto h-25 lg:h-auto"
          alt="Oops"
        />

        <div className="flex flex-col gap-3 text-center">
          <h1 className="text-2xl lg:text-[60px] text-general-blue lg:leading-20 font-bold">
            Ouups! <br /> You’ve found a 404 page
          </h1>

          <p className="max-w-[674px] mx-auto leading-7">
            In case you keep encountering this issue or have any questions about
            our Pythonic adventures, feel free to contact our Python wranglers
            at pycon@python.or.id.
          </p>

          <div>
            <button className="bg-general-orange hover:bg-general-orange/80 cursor-pointer text-background text-sm px-5 py-2.5 font-bold rounded-xl lg:text-base">
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
