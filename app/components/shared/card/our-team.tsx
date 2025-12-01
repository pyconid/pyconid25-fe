export interface OurTeamCardProps {
  title?: string;
  time?: string;
  jobTitle?: string;
  affiliation?: string;
  description?: string;
  profile_picture?: string;
  instagram_username?: string;
  twitter_username?: string;
  email?: string;
  github?: string;
  name?: string;
}

export const OurTeamCard = ({
  name,
  jobTitle,
  affiliation,
  profile_picture,
  instagram_username,
  twitter_username,
  email,
  github,
}: OurTeamCardProps) => {
  return (
    <div className="aspect-24/37 w-72 sm:w-80 md:w-full lg:w-full xl:w-96 flex-shrink-0 bg-white rounded-4xl p-4 sm:p-5 md:p-4 lg:p-5 xl:p-6 pt-6 sm:pt-7 md:pt-6 lg:pt-7 xl:pt-8 border border-black/15 shadow-lg relative overflow-hidden mx-auto sm:mx-auto md:mx-0">
      <div className="absolute inset-0 bg-[url('/svg/our-team-decoration-orange.svg')] bg-[100%_auto] bg-no-repeat" />
      <div className="absolute inset-0 bg-[url('/svg/our-team-decoration-blue.svg')] bg-[100%_auto] bg-no-repeat bg-bottom" />

      <div className="relative flex flex-col items-center justify-between h-full">
        <div className="flex flex-col gap-y-4 sm:gap-y-4 md:gap-y-3 lg:gap-y-4 w-full">
          <img
            src="/images/logo-dark.webp"
            alt="PyconID 2025"
            className="h-6 sm:h-8 md:h-6 lg:h-8 xl:h-10 mx-auto mt-4 sm:mt-4 md:mt-1 lg:mt-4 xl:mt-6"
          />
          <div className="relative w-full flex justify-center mt-4 lg:mt-1">
            <div className="relative w-36 h-36 sm:w-36 sm:h-36 md:w-28 md:h-28 lg:w-40 lg:h-40 xl:w-60 xl:h-60 rounded-full">
              <img
                src={profile_picture?.trim() || '/images/default-avatar.webp'}
                alt={name}
                className="w-full h-full rounded-full object-cover z-0"
              />
            </div>
          </div>

          <div className="text-center px-2 sm:px-3 md:px-4">
            <h1 className="text-xl sm:text-xl md:text-lg lg:text-2xl xl:text-3xl font-bold break-words md:leading-tight">
              {name}
            </h1>
            <p className="font-light text-sm sm:text-sm md:text-sm lg:text-lg xl:text-lg mb-2 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-5 line-clamp-2 break-words">
              {jobTitle}
              <br /> <span>{affiliation}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-x-2">
          {instagram_username && (
            <a
              href={instagram_username}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src="/svg/ig.svg" alt="IG" />
            </a>
          )}

          {github && (
            <a href={github} target="_blank" rel="noreferrer noopener">
              <img src="/svg/github.svg" alt="Github" />
            </a>
          )}

          {twitter_username && (
            <a
              href={twitter_username}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src="/svg/x.svg" alt="X formerly known as Twitter" />
            </a>
          )}

          {email && (
            <a
              href={`mailto:${email}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src="/svg/mail.svg" alt="Email" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
