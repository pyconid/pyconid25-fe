import { Mail } from "lucide-react";
import {
  OurTeamCard,
  type OurTeamCardProps,
} from "~/components/shared/card/our-team";

const OURTEAM_CARDS: (OurTeamCardProps & { id: string })[] = Array.from({
  length: 10,
}).map((_, index) => ({
  id: `card-${index}`,
  title: "Event Title Too Long...",
  time: "09:00 - 09:30",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged...",
}));

const OTHER = ["Everyone who can, pay", "Be A Sponsor", "Check Schedule"];
const ABOUT = ["Terms of Service", "Privacy Policy", "Code of Conduct"];

export const Footer = () => {
  return (
    <section className="pt-36 pb-20 bg-[#F1F1F1] relative lg:min-h-[120svh]">
      {/* wing decoration */}
      <div className="absolute top-8 left-0">
        <img
          src="/svg/wing-decoration-blue.svg"
          alt=""
          className="w-10 md:w-16 lg:w-auto"
        />
      </div>
      <div className="absolute top-96 lg:top-[calc(24rem*2)] right-0">
        <img
          src="/svg/wing-decoration-orange.svg"
          alt=""
          className="w-10 md:w-16 lg:w-auto"
        />
      </div>

      <div className="container mx-auto">
        <div className="mb-8 relative w-max mx-auto z-10">
          {/* square decoration */}
          <div className="absolute -left-32 -top-10 hidden md:block">
            <img src="/svg/square-decoration.svg" alt="" />
          </div>
          <div className="absolute -right-32 -bottom-16 hidden md:block">
            <img src="/svg/square-decoration.svg" alt="" />
          </div>

          <h1 className="font-display text-center text-3xl md:text-4xl lg:text-[4rem] font-bold text-secondary">
            OUR TEAM
          </h1>
        </div>

        <div className="scrollbar overflow-x-auto relative pb-4 px-5 2xl:px-0">
          <div className="flex gap-x-4 overflow-x-auto">
            {OURTEAM_CARDS.map(({ id, ...props }) => (
              <OurTeamCard key={id} {...props} />
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between border rounded-xl bg-[#224083] min-h md:h-70 px-20 pt-10 pb-7 gap-7 md:items-start m-2">
          <div className="flex flex-col gap-y-4">
            <img
              src="/images/logo-light.webp"
              alt="logo light pycon"
              className="w-40"
            />
            <div className="flex flex-col items-center gap-y-2">
              <div className="font-sans text-white font-light">
                Organized by:
              </div>
              <img
                src="/images/logo-python-id.png"
                alt="logo light pycon"
                className="w-40"
              />
            </div>
          </div>

          <div className="w-70 flex flex-col gap-y-2">
            <p className="font-display font-bold text-white text-2xl">
              Contact Us
            </p>
            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-2">
                <Mail className="text-white" />
                <p className="text-white">
                  <a href="mailto:pycon@python.or.id">pycon@python.or.id</a>
                </p>
              </div>
              <p className="text-white">
                PyCon ID 2025 is organized by volunteers, so it may take more
                time for us to reply to inquiries. Thank you for your patience.
              </p>
            </div>
          </div>

          <div className="w-70 flex flex-col gap-y-2">
            <p className="font-display font-bold text-white text-2xl">Other</p>
            <ul className="flex flex-col gap-y-2">
              {OTHER.map((item) => (
                <li key={item} className="font-sans text-white">
                  <a href="https://" target="_blank" rel="noreferrer noopener">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-70 flex flex-col gap-y-2">
            <p className="font-display font-bold text-white text-2xl">About</p>
            <ul className="flex flex-col gap-y-2">
              {ABOUT.map((item) => (
                <li key={item} className="font-sans text-white">
                  <a href="https://" target="_blank" rel="noreferrer noopener">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-y-2 md:gap-y-0 justify-between mt-5 border rounded-xl bg-[#162D61] min-h md:h-15 pl-5 m-2">
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
          <div className="font-sans text-sm md:text-xl text-white mr-4">
            © PyCon ID 2025. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
};
