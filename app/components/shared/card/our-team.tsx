export interface OurTeamCardProps {
  title: string;
  time: string;
  description: string;
}

export const OurTeamCard = () => {
  return (
    <div className="aspect-24/37 w-72 md:w-96 flex-shrink-0 bg-white rounded-4xl p-5 pt-8 border border-black/15 shadow-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/svg/our-team-decoration-orange.svg')] bg-[100%_auto] bg-no-repeat" />
      <div className="absolute inset-0 bg-[url('/svg/our-team-decoration-blue.svg')] bg-[100%_auto] bg-no-repeat bg-bottom" />

      <div className="relative flex flex-col items-center justify-between h-full">
        <div className="flex flex-col gap-y-5">
          <img
            src="/images/logo-dark.webp"
            alt="PyconID 2025"
            className="h-6 md:h-10 mx-auto mt-5"
          />
          <div className="bg-black w-30 h-30 md:w-60 md:h-60 rounded-full"></div>

          <div className="text-center">
            <h1 className="text-xl md:text-3xl font-bold">JOHN DOE</h1>
            <p className="font-light text-xs mb-3 md:text-base md:mb-5 line-clamp-2">
              Job Title Affiliation In
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src="/svg/ig.svg" alt="IG" />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src="/svg/github.svg" alt="Github" />
          </a>

          <a href="https://x.com" target="_blank" rel="noreferrer noopener">
            <img src="/svg/x.svg" alt="X formerly known as Twitter" />
          </a>

          <a
            href="mailto:pycon@python.or.id"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src="/svg/mail.svg" alt="Email" />
          </a>
        </div>
      </div>
    </div>
  );
};
