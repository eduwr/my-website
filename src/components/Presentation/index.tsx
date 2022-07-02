
import { Translated } from "../Translated";
import { BaseButton } from "../BaseButton";
import { ProfilePicture } from "./ProfilePicture";

export const Presentation = () => (
  <section className="bg-primary-content border-2 border-white px-8 md:px-24">
    <div className="max-w-1/2">
      <h1 className="text-primary text-5xl leading-relaxed uppercase font-bold">
        <Translated textKey="home.presentation.title" />
      </h1>
      <p className="text-2xl text-tertiary mt-3 mb-8">
        <Translated textKey="home.presentation.description" />
      </p>
      <BaseButton outline>
        <Translated textKey={"home.presentation.button"} />
      </BaseButton>
    </div>
    <ProfilePicture />
  </section>
);
