"use client"

import { motion } from "framer-motion"
import { Lightbulb, Target, Music, Palette } from 'lucide-react'
import { Card } from "@/components/ui/card"

const AboutSection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const features = [
    {
      icon: <Music className="w-6 h-6" />,
      title: "Music Production",
      description: "Expert guidance for producers, artists, and labels"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Creative Direction",
      description: "Strategic vision for your artistic endeavors"
    }
  ]

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Card className="p-8 backdrop-blur-sm bg-background/60 hover:bg-background/80 transition-all border-red-500/20 hover:border-red-500/40">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-red-500/10">
                  <Lightbulb className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To empower creatives in the entertainment industry by providing expert guidance 
                in intellectual property protection and monetization, enabling them to focus on 
                what they do best – creating exceptional art.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Card className="p-8 backdrop-blur-sm bg-background/60 hover:bg-background/80 transition-all border-blue-500/20 hover:border-blue-500/40">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <Target className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading force in transforming how creatives protect and monetize their work, 
                creating a future where artists can sustainably pursue their passion while maintaining 
                control over their intellectual property.
              </p>
            </Card>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{
                ...fadeIn,
                transition: { delay: 0.2 * index, duration: 0.6 }
              }}
            >
              <Card className="group p-6 backdrop-blur-sm bg-background/60 hover:bg-background/80 transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: "Clients Served", value: "500+" },
            { label: "Success Rate", value: "95%" },
            { label: "Industry Awards", value: "20+" },
            { label: "Years Experience", value: "15+" }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center"
            >
              <motion.h3 
                className="text-3xl font-bold text-primary mb-2"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                {stat.value}
              </motion.h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
