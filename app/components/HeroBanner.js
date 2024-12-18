// export default function HeroBanner() {
//   return (
//     <section className="bg-dark-red text-white py-20 text-center">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-4xl font-bold mb-4">Maximize Your Creative Potential</h2>
//         <p className="mb-8">Helping creatives in the entertainment industry protect and monetize their intellectual property.</p>
//         <a href="#services" className="bg-black text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black">Learn More</a>
//       </div>
//     </section>
//   );
// }

import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroBanner = () => (
  <div className="hero w-screen relative py-20 lg:py-40">
    <div className="banner-overlay absolute top-0 left-0 bg-none rounded-md aspect-square z-10"></div>
    <div className="container mx-auto z-20 relative top-0 left-0">
      <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-4 flex-col">
          <div>
            {/* <Badge variant="outline">We&apos;re live!</Badge> */}
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular z-30">
              Maximize Your<br /> Creative Potential
            </h1>
            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              Helping creatives in the entertainment industry protect and monetize their intellectual property.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Button size="lg" className="gap-4" variant="outline">
              Jump on a call <PhoneCall className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4">
              Schedule an Appointment<MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeroBanner;