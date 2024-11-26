import Image from 'next/image';

export default function TournamentSection() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center gap-4">
        <Image
          src="https://vidalco.in/uploads/hershey_summer_classic_049b4e952c.svg"
          alt="Hershey Summer Classic Logo"
          width={45}
          height={51}
          className="object-contain"
        />
        <div className="flex flex-col">
          <span className="font-semibold">Hershey Summer Classic</span>
          <span className="text-sm opacity-80">June 14-15, 2025</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <Image
          src="https://vidalco.in/uploads/2022_EDP_Summer_Sizzler_Logo_01_5c419f7507.png"
          alt="EDP Summer Sizzler Logo" 
          width={45}
          height={60}
          className="object-contain"
        />
        <div className="flex flex-col">
          <span className="font-semibold">EDP Summer Sizzler</span>
          <span className="text-sm opacity-80">July 26-27, 2025</span>
        </div>
      </div>
    </div>
  );
}