import { Footer } from "~/components/layouts/navigation/footer";
import { FooterMobile } from "~/components/layouts/navigation/footer-mobile";
import { Header } from "~/components/layouts/navigation/header";
import { CallForProposalSection } from "~/components/sections/call-for-proposal/call-for-proposal";

export function meta() {
  return [
    { title: "Pycon 2025" },
    { name: "Call for proposal", content: "Call for proposal page" },
  ];
}

export default function Login() {
  return (
    <main>
      <Header />
      <CallForProposalSection />
      <Footer />
      <FooterMobile path="/call-for-sponsor" />
    </main>
  );
}
