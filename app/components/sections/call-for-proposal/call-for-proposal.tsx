import type { FC } from "react";
import { Header } from "~/components/layouts/navigation/header";

export const CallForProposalSection: FC = () => (
  <section className="h-screen relative">
    <div className="absolute inset-0 bg-[url('/images/bg-call-for-proposal.png')] bg-center bg-cover bg-no-repeat"></div>
    <div className="absolute inset-0 bg-black/40"></div>

    <div className="z-10 relative">
      <Header />
      <div>Call For Proposals</div>

      <div>
        <p>Let's talk at PyCon ID 2025</p>
        <p>We are open for talks submission</p>
      </div>
      <div>
        <div className="text-white">December, 2025</div>
        <div>Jakarta, Indonesia</div>
      </div>
      <button className="cursor-pointer" type="button">
        Submit Proposal
      </button>
      <div>
        <div>
          <p>Conference Format:</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the industry's standard dummy text
            ever since the 1500s when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
          <p>Conference Format:</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the industry's standard dummy text
            ever since the 1500s when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
          <p>Conference Format:</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the industry's standard dummy text
            ever since the 1500s when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="text-white">
          <p>Conference Format:</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the industry's standard dummy text
            ever since the 1500s when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>

      <div>
        <p>Proposal Deadline: Septermber 14, 2025</p>
        <p>Organized by</p>
      </div>
    </div>
  </section>
);
