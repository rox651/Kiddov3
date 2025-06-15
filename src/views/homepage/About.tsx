import { useTextReveal } from "../../hooks/common/useTextReveal";

interface AboutProps {
   about: string;
   whatWeAreTitle: string;
   whatWeAreText: string;
}

const About = ({ about, whatWeAreTitle, whatWeAreText }: AboutProps) => {
   const { textRef } = useTextReveal();

   return (
      <>
         <section className="kd-section-x-p bg-primary-gray rounded-b-3xl -mb-16 relative z-10 pb-20">
            <div className="container mx-auto">
               <p
                  ref={textRef}
                  className="text-5xl  sm:text-7xl text-pretty text-center font-medium leading-15 sm:leading-23"
               >
                  {about}
               </p>
            </div>
         </section>

         <section className="kd-section-x-p pb-20 pt-42 text-center text-white bg-primary-black">
            <div className="container mx-auto">
               <h2 className="text-3xl sm:text-4xl">{whatWeAreTitle}</h2>
               <p className="text-lg sm:text-xl mt-5">{whatWeAreText}</p>
            </div>
         </section>
      </>
   );
};

export default About;
