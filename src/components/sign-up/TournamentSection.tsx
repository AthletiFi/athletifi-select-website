import Image from 'next/image';

export default function TournamentSection() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center gap-4">
        <Image
          src="https://vidalco.in/uploads/hershey_summer_classic_049b4e952c.svg"
          alt="S3 Super Cup Logo"
          width={45}
          height={51}
          className="object-contain"
        />
        <div className="flex flex-col">
          <span className="font-semibold">S3 Super Cup</span>
          <span className="text-sm opacity-80">September 5-6, 2026 | United Sports, Downingtown, PA</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <Image
          src="https://vidalco.in/uploads/2022_EDP_Summer_Sizzler_Logo_01_5c419f7507.png"
          alt="EDP Cup Fall Logo"
          width={45}
          height={60}
          className="object-contain"
        />
        <div className="flex flex-col">
          <span className="font-semibold">EDP Cup Fall</span>
          <span className="text-sm opacity-80">October 10-11, 2026 (Columbus Day Weekend) | Various NJ/PA venues</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Image
          src="https://vidalco.in/uploads/hershey_summer_classic_049b4e952c.svg"
          alt="Columbus Day Explorer Cup Logo"
          width={45}
          height={51}
          className="object-contain"
        />
        <div className="flex flex-col">
          <span className="font-semibold">Columbus Day Explorer Cup</span>
          <span className="text-sm opacity-80">October 10-11, 2026 | Pennsylvania</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Image
          src="https://vidalco.in/uploads/2022_EDP_Summer_Sizzler_Logo_01_5c419f7507.png"
          alt="FC Delco Fall Showcase Logo"
          width={45}
          height={60}
          className="object-contain"
        />
        <div className="flex flex-col">
          <span className="font-semibold">FC Delco Fall Showcase</span>
          <span className="text-sm opacity-80">Girls: November 13-15, 2026 | Boys: November 20-22, 2026 | Turf facilities, Philadelphia metro area</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Image
          src="https://vidalco.in/uploads/2022_EDP_Summer_Sizzler_Logo_01_5c419f7507.png"
          alt="EDP Cup Fall Showcase Logo"
          width={45}
          height={60}
          className="object-contain"
        />
        <div className="flex flex-col">
          <span className="font-semibold">EDP Cup Fall Showcase</span>
          <span className="text-sm opacity-80">Girls: November 21-22, 2026 | Boys: November 28-29, 2026 | Tuckahoe Turf Farms, Hammonton, NJ</span>
        </div>
      </div>
    </div>
  );
}
