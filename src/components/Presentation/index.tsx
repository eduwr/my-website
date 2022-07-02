import Image from "next/image";
import { Translated } from "../Translated";
import { BaseButton } from "../BaseButton";

export const Presentation = () => (
  <section
    className="flex flex-col md:flex-row justify-center gap-8 items-center py-8 md:py-16 md:px-8 w-full md:h-1/2-screen md:min-h-[26rem] relative bg-light">
    <div className="h-96 w-96 rounded-full relative overflow-hidden">
      <Image
        src="/assets/images/profile.png"
        alt="Yoga"
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="md:w-1/2 px-5 h-full flex flex-col relative">
      <h3 className="lg:text-5xl text-4xl text-center md:text-left text-yellow font-bold mb-5 uppercase">
        <Translated textKey="home.presentation.title"/>
      </h3>
      <p className="text-2xl text-grey font-thin text-center md:text-left">
        <Translated textKey="home.presentation.description"/>
      </p>
      <BaseButton outline style={{
        alignSelf: "flex-end",
        marginTop: "2rem"
      }}>
        <Translated textKey="home.presentation.button"/>
      </BaseButton>
    </div>
  </section>
);
