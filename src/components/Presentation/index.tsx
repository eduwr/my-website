import { Translated } from "../Translated";
import { BaseButton } from "../BaseButton";
import { ProfilePicture } from "./ProfilePicture";
import { Variants, motion } from "framer-motion";

const variants: Variants = {
  hover: {
    scale: 1.2,
    originX: 0,
  },
};

export const Presentation = () => (
  <section className="overflow-hidden relative flex justify-evenly h-[calc(100vh-8rem)] md:h-[calc(100vh-10rem)] px-8 md:px-24 pb-8">
    <div className="flex flex-col justify-center md:max-w-1/2">
      <h1 className="text-primary text-4xl xl:text-5xl leading-relaxed uppercase font-bold">
        <Translated textKey="home.presentation.title" />
      </h1>
      <p className="text-xl xl:text-2xl text-tertiary mt-3 mb-8">
        <Translated textKey="home.presentation.description" />
      </p>
      <motion.div variants={variants} whileHover="hover" className="w-fit">
        <BaseButton
          outline
          onClick={() => {
            if (window) {
              window.scrollTo({
                behavior: "smooth",
                top: 5000,
              });
            }
          }}
        >
          <Translated textKey={"home.presentation.button"} />
        </BaseButton>
      </motion.div>
    </div>
    {/* Profile Image Container */}
    <div className="hidden relative md:flex items-center">
      <div className="bg-gradient-to-tl from-primary-content absolute top-0 right-0 left-0 bottom-0"></div>
      <ProfilePicture />
    </div>
  </section>
);
