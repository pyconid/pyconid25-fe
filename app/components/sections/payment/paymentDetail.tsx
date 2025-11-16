import { ETicketCard } from "~/components/shared/ticket-card/e-ticket-card";

export function PaymentDetail(){
  
  return (
    <section className="bg-[#F1F1F1]">
      <div className="flex container justify-center m-auto pt-[6vh] sm:pt-[23vh]">
        <div className="flex flex-col items-center justify-center gap-y-4">
          <div className="font-display text-4xl text-[#224083] font-bold">
            PyCon ID 2025 E-Ticket
          </div>
          <ETicketCard />
        </div>
       
      </div>
      
    </section>
  )
}