import { Calendar, MapPinned } from "lucide-react";
import type { FC } from "react";
import { Header } from "~/components/layouts/navigation/header";

export const CallForProposalSection: FC = () => (
  <section className="min-h-screen relative">
    <div className="absolute inset-0 bg-[url('/images/bg-call-for-proposal.png')] bg-center bg-cover bg-repeat"></div>
    <div className="absolute inset-0 bg-black/40"></div>
    <Header />

    <div className="z-10 relative h-screen">
      <div className="absolute inset-0  mt-[23vh]">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-black/30 hover:bg-black/50 backdrop-blur-lg text-white px-8 py-4 rounded-full font-display text-md lg:text-3xl pt-2 pr-4 pb-2 pl-4 outline-1 outline-white/30 outline-offset-1 shadow-white/20 hover:outline-2 hover:outline-white/40 hover:outline-offset-2 hover:shadow-white/30">
            Call for Proposals
          </div>
          <div className="font-display text-center text-[40px] lg:text-5xl mt-[0.4vh] font-bold font-weight-700">
            <p>
              <span className="text-[#F37F20]">Let's talk</span>{" "}
              <span className="text-white">at PyCon ID 2025</span>
            </p>
            <p>
              <span className="text-white">We are open for</span>{" "}
              <span className="text-[#224083] lg:underline lg:decoration-[#F37F20] lg:hover:decoration-[#224083]">
                talks submission
              </span>
            </p>
          </div>
          <div className="mt-[2vh] flex flex-row gap-x-10 font-sans ">
            <div className="text-[#F9F9F9BF] flex flex-row gap-2">
              <Calendar />
              December, 2025
            </div>
            <div className="text-[#F9F9F9BF] flex flex-row gap-2">
              <MapPinned />
              Jakarta, Indonesia
            </div>
          </div>
          <button
            className="cursor-pointer bg-[#224083]/25 hover:bg-[#224083]/50 backdrop-blur-lg text-white px-8 py-4 rounded-xl font-display text-lg lg:text-2xl pt-2 pr-4 pb-2 pl-4 mt-[3vh] font-bold outline-white/50 outline-offset-1 shadow-white/20"
            type="button"
          >
            Submit Proposal
          </button>
          <div className="mt-[5vh] flex gap-x-5 flex-col gap-y-3 lg:flex-row items-center justify-center ml-[8vw] mr-[8vw]">
            <div className="border border-[#224083] bg-[#224083]/15 rounded-lg backdrop-blur-xl p-2 w-100">
              <p className="border-b-1 border-[#F9F9F9]/25 font-display font-bold text-white">
                Conference Format:
              </p>
              <p className="font-sans font-normal text-[#909090]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem ipsum has been the industry's standard dummy
                text ever since the 1500s when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="border border-[#E8D41C] bg-[#E8D41C]/15 rounded-lg backdrop-blur-xl p-2 w-100">
              <p className="border-b-1 border-[#F9F9F9]/25 font-display font-bold text-white">
                Topics
              </p>
              <p className="font-sans font-normal text-[#909090]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem ipsum has been the industry's standard dummy
                text ever since the 1500s when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="border border-[#F37F20] bg-[#F37F20]/15 rounded-lg backdrop-blur-xl p-2 w-100">
              <p className="border-b-1 border-[#F9F9F9]/25 font-display font-bold text-white">
                Your Submission:
              </p>
              <p className="font-sans font-normal text-[#909090]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem ipsum has been the industry's standard dummy
                text ever since the 1500s when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
        <div className=" flex flex-row items-center justify-between ml-[1vw] mr-[1vw] mt-[1.5vh] ">
          <p>
            <span className="text-[#E81919] font-bold">Proposal Deadline:</span>{" "}
            <span className="font-semibold text-[#E81919] ">
              September 14, 2025
            </span>
          </p>
          <div className="flex flex-col gap-y-2">
            <p className="font-semibold text-[#E81919]">Organized by:</p>
            <img
              className="w-40 h-11"
              src="/images/logo-python-id.png"
              alt="Python Indonesia Logo"
            ></img>
          </div>
        </div>
      </div>
    </div>
  </section>
);
