"use client"

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Music Producer",
    image: "/images/banner.jpg",
    quote: "Lexitainment's expertise in IP protection has been invaluable for my music career. They've helped me secure my rights and maximize my earnings."
  },
  {
    id: 2,
    name: "Samantha Lee",
    role: "Fashion Designer",
    image: "/images/banner.jpg",
    quote: "The team at Lexitainment provided exceptional guidance in navigating the complex world of fashion IP. Their strategies have significantly boosted my brand's value."
  },
  {
    id: 3,
    name: "Michael Torres",
    role: "Digital Content Creator",
    image: "/images/banner.jpg",
    quote: "Thanks to Lexitainment's platform marketing strategies, my online presence has grown exponentially. They truly understand the digital landscape."
  }
]

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const variants = {
    enter: ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section className="py-10 bg-gradient-to-b from-background/80 to-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Our Clients Say
        </motion.h2>
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full"
            >
              <Card className="bg-background/50 backdrop-blur-sm border-primary/10 p-6 md:p-10">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="relative w-32 h-32 md:w-48 md:h-48 flex-shrink-0">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div className="flex-grow">
                    <Quote className="w-10 h-10 text-primary/50 mb-4" />
                    <p className="text-lg md:text-xl mb-4 italic">
                      {`"${testimonials[currentIndex].quote}"`}
                    </p>
                    <h3 className="text-xl font-semibold">{testimonials[currentIndex].name}</h3>
                    <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`w-3 h-3 rounded-full mx-1 transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-primary/30'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection



// export default function Testimonials() {
//   return (
//     <section id="testimonials" className="py-20 bg-gray-50 text-center">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-10 text-dark-red">What People Say</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           <div className="p-6 rounded-lg shadow bg-white">
//             <p className="mb-4">"Lexitainment helped me secure my intellectual property and boosted my revenue streams."</p>
//             <h3 className="text-xl font-bold">John Doe</h3>
//           </div>
//           <div className="p-6 rounded-lg shadow bg-white">
//             <p className="mb-4">"Their expertise in IP protection and marketing has been invaluable."</p>
//             <h3 className="text-xl font-bold">Jane Smith</h3>
//           </div>
//           <div className="p-6 rounded-lg shadow bg-white">
//             <p className="mb-4">"I highly recommend Lexitainment for any creative professional."</p>
//             <h3 className="text-xl font-bold">Michael Johnson</h3>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
