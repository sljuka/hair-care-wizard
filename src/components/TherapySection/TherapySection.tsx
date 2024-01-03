import Image, { StaticImageData } from "next/image";

type Props = {
  children: React.ReactNode;
};

export const TherapySection = ({ children }: Props) => (
  <div className="flex p-6 border md:flex-row md:border-none rounded-lg flex-col gap-4 md:gap-24 lg:flex-row justify-center items-center h-fit text-hero lg:p-0">
    {children}
  </div>
);
