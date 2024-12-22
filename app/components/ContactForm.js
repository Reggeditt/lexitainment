"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
// import { toast } from '@/components/ui/use-toast'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e)=>{
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    // toast({
    //   title: "Message Sent!",
    //   description: "We'll get back to you as soon as possible.",
    // })
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, text: "contact@lexitainment.com" },
    { icon: <Phone className="w-5 h-5" />, text: "+1 (555) 123-4567" },
    { icon: <MapPin className="w-5 h-5" />, text: "123 Creative Ave, Los Angeles, CA 90001" },
  ]

  return (
    <section className="py-20 mt-20 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full">{item.icon}</div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                  <a
                    key={social}
                    href={`https://${social}.com/lexitainment`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <img src={`/icons/${social}.svg`} alt={social} className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full"
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection




// export default function ContactForm() {
//   return (
//     <section id="contact" className="bg-gray-100 py-20">
//       <div className="max-w-7xl mx-auto px-4 text-center">
//         <h2 className="text-3xl font-bold mb-10 text-dark-red">Contact Us</h2>
//         <form className="bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto">
//           <div className="mb-4">
//             <label htmlFor="fullName" className="block text-left font-bold mb-2">Full Name</label>
//             <input type="text" id="fullName" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Your Full Name" />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-left font-bold mb-2">Email</label>
//             <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Your Email" />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="phone" className="block text-left font-bold mb-2">Phone</label>
//             <input type="text" id="phone" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Your Phone Number" />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="details" className="block text-left font-bold mb-2">Details</label>
//             <textarea id="details" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Describe your needs" rows="4"></textarea>
//           </div>
//           <button type="submit" className="bg-dark-red text-white px-6 py-3 rounded-lg">Send Request</button>
//         </form>
//       </div>
//     </section>
//   );
// }
