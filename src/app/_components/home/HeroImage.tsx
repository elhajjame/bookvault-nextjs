import Image from "next/image";
import heroImage from "@/app/assets/library_hero_1784035237468.jpg";

export default function HeroImage() {
  return (
    <div className="relative flex justify-center lg:col-span-5">
      <div className="relative aspect-[4/3] w-full max-w-[480px] sm:aspect-square md:aspect-[4/3]">
        <div className="group absolute inset-0 z-10 overflow-hidden rounded-[40px] rounded-t-[120px] border-[12px] border-ivory-card shadow-2xl transition-all duration-700 ease-out hover:rotate-0 dark:border-[#1C1612] rotate-1">
          <Image
            src={heroImage}
            width={500}
            height={500}
            alt="BookVault Premium Reading Lounge"
            className="h-full w-full scale-105 object-cover transition-transform duration-1000 ease-out group-hover:scale-100"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-walnut/30 via-transparent to-transparent opacity-80" />
        </div>

        <div className="absolute inset-0 translate-x-2 translate-y-3 -rotate-3 rounded-[40px] rounded-t-[120px] bg-bronze/10" />

        <div className="absolute inset-0 -translate-x-1 -translate-y-2 rotate-4 rounded-[40px] rounded-t-[120px] border border-ivory-border bg-gold/5 dark:border-[#2A201B]" />

        <div className="absolute -right-6 top-10 z-20 h-24 w-24 rounded-full bg-gradient-to-br from-gold/15 to-transparent blur-xl" />
      </div>
    </div>
  );
}
