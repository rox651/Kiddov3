import { useTextReveal } from "../../use-cases/common/useTextReveal";

const About = () => {
  const { textRef } = useTextReveal();

  return (
    <>
      <section className="kd-section-x-p bg-primary-gray rounded-b-3xl -mb-16 relative z-10 pb-20">
        <div className="container mx-auto">
          <p
            ref={textRef}
            className="text-5xl sm:text-7xl text-pretty text-center font-medium leading-15 sm:leading-23"
          >
            Kiddo™ is a mantra / human emotions / pride in being out of the
            ordinary / a commitment to our dreams / trusting our guts / doing
            things happily / passion before fashion / enjoying every coffee /
            really working / rebelling against ourselves / finding our voice / a
            funny dancing / our life’s work / freedom / breaking into the system
            / creative directors of life / design taking any risk / a punk
            anthem / be brave in the present / obsession with plants / do our
            job well / share with others / play in the playground / where do we
            go / have a nice day
          </p>
        </div>
      </section>

      <section className="kd-section-x-p pb-20 pt-42 text-center text-white bg-primary-black">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl">
            Kiddo™ We are an art direction and design studio.
          </h2>
          <p className="text-lg sm:text-xl mt-5">
            We seek to connect humans with experiences proudly out of the
            ordinary, being executors of authentic brands that inspire through
            their rebellious essence, the true way of shouting to the world,
            finding the balance between concept, graphics, illustration and
            animation.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
