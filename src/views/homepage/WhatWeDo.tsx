import { useTextReveal } from "../../use-cases/common/useTextReveal";

const WhatWeDo = () => {
  const { textRef } = useTextReveal();
  return (
    <section className="kd-section-x-p pb-20 bg-primary-black text-white pt-20">
      <div className="container mx-auto">
        <h2 className="text-4xl mb-10">What we do</h2>
        <p
          ref={textRef}
          className="text-5xl sm:text-7xl px-7 lg:px-10 text-pretty text-center font-medium leading-15 sm:leading-23"
        >
          Art direction / Brands identity / Naming systems / Copywriting /
          Illustration / Storytelling / Graphic design / Digital presence /
          Packaging / Infographics and editorial / Animation - motion graphics /
          Icon design / Tipography and lettering / Web design / App development
          / Photography / Post production and retouch
        </p>

        <div className="flex-col sm:flex-row flex justify-center items-center gap-x-3 text-xl mt-20">
          <p>What are you waiting for?</p>
          <a href="mailto:info@kiddoestudio.com">info@kiddoestudio.com</a>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
