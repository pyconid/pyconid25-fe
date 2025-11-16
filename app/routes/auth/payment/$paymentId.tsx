import { Footer } from "~/components/layouts/navigation/footer";
import { Header } from "~/components/layouts/navigation/header";
import { PaymentDetail } from "~/components/sections/payment/paymentDetail";

export function meta() {
	return [
		{ title: "Ticket Detail for PyCon ID 2025" },
		{ name: "PyCon ID 2025 Ticket Detail Page", content: "Ticket Detail Page for PyconID 2025" },
	];
}

export default function TicketDetail(){
  return (
    <main>
      <Header />
      <PaymentDetail />
      <Footer />
    </main>
  )
}

