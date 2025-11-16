import { Ticket } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { TicketBgGray } from "./ticket-bg-gray";

type props = {
  id: string
}

export const ETicketCard = ({id}:props) => {
  return (
    <div className="relative">
      <div>
        {" "}
        <TicketBgGray />
      </div>
      <div className="absolute top-0 py-2 px-10 flex flex-col gap-2">
        <div className='flex items-center justify-start font-sans font-bold text-[#224083] gap-x-1 text-lg'>
          <Ticket />
          <p>Ticket Details</p>
        </div>
        <div className='flex gap-x-2'>
          <QRCodeSVG value={id} className='w-30 h-30' />
          <div className='flex flex-col gap-y-4 font-sans text-black text-md font-semibold'>
            <div>
              <p className=''>Ticket Id</p>
              <p className='font-normal'>{}</p>
            </div>
            <div>
              <p>Participant Name</p>
              <p className='font-normal'></p>
            </div>
            <div>
              <p>Participant Type</p>
              <p className='font-normal'></p>
            </div>
          </div> 
        </div>
        <div>
          
        <div className='flex items-center justify-start font-sans font-bold text-[#224083] gap-x-1 text-lg'>
          <Ticket />
          <p>Event Details</p>
        </div>
        <div className='flex flex-col gap-y-2 font-sans text-black text-md font-semibold'>
          <div>
            <p>Date</p>
            <p className='font-light'>Saturday - Sunday, December 13th - 14th, 2025</p>
          </div>
          <div>
            <p>Location</p>
            <p className='font-light'>
              <p>Universitas Trilogi,</p>
              Jl. TMP. Kalibata No.1, RT.4/RW.04, Duren Tiga, Kec. Pancoran, 
              Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12760
            </p>
          </div>
        </div>
        </div>   
      </div>
    </div>
  );
};
