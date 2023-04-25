import Image, { StaticImageData } from "next/image";

interface LinkCardProps {
  link: string;
  label: string;
  title: string;
  icon: string;
  bg: string;
  photo: StaticImageData;
}

export function LinkCard({
  icon,
  label,
  link,
  title,
  bg,
  photo,
}: LinkCardProps) {
  return (
    <a
      href={link}
      className={`flex flex-row w-full h-[145px] justify-between items-center font-nunito mb-4`}
    >
      <div className="flex flex-row z-20 ml-8 gap-4">
        <Image src={icon} alt={`${title} Logo`} />
        <div className="flex flex-col gap-2">
          <p className="text-white text-xs">{label}</p>
          <h2 className="text-white font-main text-4xl">{title}</h2>
        </div>
      </div>

      <Image width={216} height={145} src={photo} alt={`${photo}`} />

      <div className={`absolute z-10 w-full h-[145px] ${bg}`} />
    </a>
  );
}
