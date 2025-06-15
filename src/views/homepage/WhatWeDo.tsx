import { useTextReveal } from "../../hooks/common/useTextReveal";

interface WhatWeDoProps {
   text: string;
   footer: string;
}

const WhatWeDo = ({ text, footer }: WhatWeDoProps) => {
   const { textRef } = useTextReveal();
   return (
      <section className="kd-section-x-p pb-20 bg-primary-black text-white pt-20">
         <div className="container mx-auto">
            <h2 className="text-4xl mb-10">What we do</h2>
            <p
               ref={textRef}
               className="text-5xl sm:text-7xl px-7 lg:px-10 text-pretty text-center font-medium leading-15 sm:leading-23"
            >
               {text}
            </p>

            <div className="flex-col sm:flex-row flex justify-center items-center gap-x-3 text-xl mt-20">
               <p>{footer}</p>
            </div>
         </div>
      </section>
   );
};

export default WhatWeDo;
