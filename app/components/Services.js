"use client"

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Copyright, Banknote, Megaphone, Users, Scale } from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  {
    title: "Intellectual Property Consultation",
    description: "Protect your creative assets with expert guidance on copyrights, trademarks, and licensing.",
    icon: <Copyright className="w-6 h-6" />,
    image: "/images/ip-consultation.jpg"
  },
  {
    title: "Monetization Strategies",
    description: "Maximize your earnings with tailored strategies for royalties, licensing, and digital platforms.",
    icon: <Banknote className="w-6 h-6" />,
    image: "/images/monetization.jpg"
  },
  {
    title: "Platform Marketing",
    description: "Amplify your reach across digital platforms with targeted marketing campaigns.",
    icon: <Megaphone className="w-6 h-6" />,
    image: "/images/platform-marketing.jpg"
  },
  {
    title: "Training and Positioning",
    description: "Elevate your brand with personalized training and strategic market positioning.",
    icon: <Users className="w-6 h-6" />,
    image: "/images/training.jpg"
  },
  {
    title: "Negotiation Support",
    description: "Secure favorable deals with our expert negotiation support and advocacy services.",
    icon: <Scale className="w-6 h-6" />,
    image: "/images/negotiation.jpg"
  }
]

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section className="py-20 mb-20 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:opacity-0" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-background/80 backdrop-blur-sm p-3 rounded-full">
                    {service.icon}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <Button variant="outline" className="group">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              {hoveredIndex === index && (
                <motion.div
                  className="absolute -inset-2 bg-primary/10 rounded-lg z-[-1]"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
