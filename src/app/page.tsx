import Image from "next/image";
import BG2 from "../../public/BG2.png";
import HairLoss from "../../public/hairLoss.png";
import ErectileDisfunction from "../../public/erectileDys.png";
import { Logo } from "./Logo";
import { TherapySection } from "@/components/TherapySection/TherapySection";
import { TherapySectionDetails } from "@/components/TherapySection/TherapySectionDetails";
import { Footer } from "@/components/Footer/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="gap-8 flex flex-col items-center justify-between">
      <section
        className="md:px-32 self-stretch py-6 flex flex-col bg-[90%] md:bg-right bg-cover items-left justify-between lg:justify-normal h-svh"
        style={{ backgroundImage: `url(${BG2.src})` }}
      >
        <div className="px-2 pb-4">
          <Logo className="w-10 h-10" />
        </div>
        <div className="flex flex-col flex-1 justify-end lg:justify-center">
          <div className="flex flex-col justify-center items-center lg:items-start h-fit text-hero bg-green-100/75 md:rounded-lg rounded-none p-10 lg:p-0 lg:bg-transparent">
            <h1 className="text-6xl flex flex-col text-center lg:text-left gap-6 justify-center pb-6 pt-8 leading-none lg:w-1/3">
              Be good to yourself
              <p className="text-sm leading-loose">
                We’re working around the clock to bring you a holistic approach
                to your wellness. From top to bottom, inside and out.
              </p>
            </h1>
            <Link
              href="/quiz"
              className="tracking-wider text-sm px-5 py-3 text-white bg-sonAccent rounded-lg hover:opacity-80 active:shadow-lg uppercase"
            >
              Take the quiz
            </Link>
          </div>
        </div>
      </section>

      <section className="lg:px-48 md:px-18 w-full p-6 flex gap-8 flex-col bg-right bg-cover items-center justify-between lg:justify-normal lg:gap-14">
        <h2 className="text-2xl text-center leading-none w-full">
          What we can help with
        </h2>

        <TherapySection>
          <Image src={HairLoss} alt="patch of hair missing from head" />
          <TherapySectionDetails
            category="hair loss"
            title="Hair loss needn’t be irreversible. We can help!"
            description="We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out."
          />
        </TherapySection>

        <TherapySection>
          <TherapySectionDetails
            category="Erecetile dysfunction"
            title="Erections can be a tricky thing. But no need to feel down!"
            description="We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out."
          />
          <Image src={ErectileDisfunction} alt="man smiling" />
        </TherapySection>
      </section>

      <Footer />
    </main>
  );
}
