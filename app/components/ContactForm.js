export default function ContactForm() {
  return (
    <section id="contact" className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 text-dark-red">Contact Us</h2>
        <form className="bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-left font-bold mb-2">Full Name</label>
            <input type="text" id="fullName" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Your Full Name" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-left font-bold mb-2">Email</label>
            <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Your Email" />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-left font-bold mb-2">Phone</label>
            <input type="text" id="phone" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Your Phone Number" />
          </div>
          <div className="mb-4">
            <label htmlFor="details" className="block text-left font-bold mb-2">Details</label>
            <textarea id="details" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Describe your needs" rows="4"></textarea>
          </div>
          <button type="submit" className="bg-dark-red text-white px-6 py-3 rounded-lg">Send Request</button>
        </form>
      </div>
    </section>
  );
}
