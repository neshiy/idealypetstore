"use client";

import Image from "next/image";
import { useRef } from "react";
import { Gravitas_One } from "next/font/google";
import { Poppins } from "next/font/google";

const gravitasOne = Gravitas_One({ subsets: ['latin'], weight: '400' });
const poppins = Poppins({ subsets: ['latin'], weight: '600' });
const pawPatternStyle = {
  backgroundImage: 'url("/paw1.png")',
  backgroundRepeat: 'repeat',
  backgroundSize: '550px',
  backgroundPosition: 'center',
} as const;

const services = [
  {
    title: "Swift Delivery to Your Doorstep",
    description:
      "Get all their favorites delivered quickly. We partner with reliable carriers to minimize waiting time and maximize wagging tails!",
  },
  {
    title: "Never Run Out of Food Again!",
    description:
      "Set up recurring deliveries for food, litter, or treats. Save money and cancel anytime. The ultimate convenience for busy pet parents.",
  },
  {
    title: "Hassle-Free Guarantee",
    description:
      "If they don't love it, we'll take it back. Simple returns and exchanges within 30 days, because we want both of you to be happy.",
  },
  {
    title: "Find the Perfect Toy/Gear",
    description:
      "We curate the best of the best. Book a quick virtual consultation to find the ideal harness, calming bed, or training tool for their specific needs.",
  },
  {
    title: "Ask Our Pet Experts",
    description:
      "Not sure which food is right for your senior dog or picky cat? Chat with our certified nutrition specialists for free personalized recommendations.",
  },
] as const;


export default function Home() {
  const servicesRef = useRef<HTMLDivElement>(null);

  const scrollServices = (direction: "left" | "right") => {
    const container = servicesRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black">
        <nav className="sticky top-0 bg-white shadow-md z-50">
          <div className="flex items-center justify-between px-8 py-4">
            {/* Store Name */}
            <div className="text-2xl font-bold text-[#48065c]">IDEALY PET STORE</div>

            {/* Navigation Links */}
            <ul className="flex gap-8">
              <li>
                <a
                  href="#hero"
                  className="relative text-lg font-medium text-[#48065c] hover:underline group"
                >
                  Home
                  <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-[#48065c] transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="relative text-lg font-medium text-[#48065c] hover:underline group"
                >
                  Services
                  <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-[#48065c] transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="relative text-lg font-medium text-[#48065c] hover:underline group"
                >
                  About Us
                  <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-[#48065c] transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="relative text-lg font-medium text-[#48065c] hover:underline group"
                >
                  Contact
                  <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-[#48065c] transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="relative text-lg font-medium text-[#48065c] hover:underline group"
                >
                  FAQ
                  <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-[#48065c] transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
                </a>
              </li>
            </ul>

            {/* Call Button */}
            <a
              href="tel:+11234567890"
              className="px-6 py-2 bg-[#48065c] text-white font-semibold rounded-lg shadow-md hover:bg-[#48065c]"
            >
              Call: +1 (123) 456-7890
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <main id="hero" className="flex flex-1 items-center justify-center px-8 py-16" style={{ backgroundColor: '#8965df' }}>
          <div className="flex flex-col-reverse sm:flex-row items-center gap-8">
            {/* Tagline */}
            <div className="text-center sm:text-left">
              <h1 className={`text-[50px] font-bold leading-tight text-black dark:text-white ${gravitasOne.className}`}>
                Pawsitively <br /> Everything Your Pet Needs
              </h1>
              <p className={`mt-4 text-lg text-white ${poppins.className}`}>
                Discover the best products and services for your furry friends.
              </p>
              <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600">
                Call NOW
              </button>
            </div>

            {/* Dog Image */}
            <div>
              <Image
                src="/pup1.jpg"
                alt="Happy puppy"
                width={600}
                height={600}
                className="rounded-lg"
              />
            </div>
          </div>
        </main>

        {/* Services Section */}
        <section id="services" className="bg-white py-16" style={pawPatternStyle}>
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex items-center justify-between gap-4">
              <h2 className={`${gravitasOne.className} text-4xl font-bold text-[#48065c]`}>Our Services</h2>
              <div className="hidden md:flex gap-3">
                <button
                  type="button"
                  aria-label="Scroll services left"
                  onClick={() => scrollServices("left")}
                  className="h-12 w-12 rounded-full border border-[#48065c]/40 bg-white/70 text-[#48065c] shadow-md backdrop-blur hover:bg-[#48065c] hover:text-white transition-colors"
                >
                  ←
                </button>
                <button
                  type="button"
                  aria-label="Scroll services right"
                  onClick={() => scrollServices("right")}
                  className="h-12 w-12 rounded-full border border-[#48065c]/40 bg-white/70 text-[#48065c] shadow-md backdrop-blur hover:bg-[#48065c] hover:text-white transition-colors"
                >
                  →
                </button>
              </div>
            </div>

            <div className="relative mt-10">
              <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-16 bg-linear-to-r from-white to-transparent md:block" />
              <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-16 bg-linear-to-l from-white to-transparent md:block" />

              <div
                ref={servicesRef}
                className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {services.map((service) => (
                  <div
                    key={service.title}
                    className="min-w-[260px] md:min-w-[320px] p-6 bg-white/70 rounded-xl shadow-lg border border-white/40 backdrop-blur-lg snap-start"
                  >
                    <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
                    <p className="mt-3 text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-center gap-3 md:hidden">
                <button
                  type="button"
                  aria-label="Scroll services left"
                  onClick={() => scrollServices("left")}
                  className="h-12 w-12 rounded-full border border-[#48065c]/40 bg-white/70 text-[#48065c] shadow-md backdrop-blur hover:bg-[#48065c] hover:text-white transition-colors"
                >
                  ←
                </button>
                <button
                  type="button"
                  aria-label="Scroll services right"
                  onClick={() => scrollServices("right")}
                  className="h-12 w-12 rounded-full border border-[#48065c]/40 bg-white/70 text-[#48065c] shadow-md backdrop-blur hover:bg-[#48065c] hover:text-white transition-colors"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="bg-purple-500 py-9 text-center">
          <h2 className={`text-3xl font-bold text-white ${gravitasOne.className}`}>
            Built By Pet Lovers, For Pet Lovers
          </h2>
        </section>

  <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Pet Images */}
            <div className="flex gap-4">
              <Image
                src="/pets1.png"
                alt="Pet 1"
                width={300}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* About Us Details */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Quality First</h3>
              <p className="mt-2 text-gray-600">
                We only stock products we'd give to our own pets. No compromises on
                ingredients, safety, or ethical sourcing.
              </p>

              <h3 className="mt-6 text-2xl font-bold text-gray-800">
                Expert Curation
              </h3>
              <p className="mt-2 text-gray-600">
                We don't sell everything; we sell the best of everything. Our team
                researches and vets every brand.
              </p>

              <h3 className="mt-6 text-2xl font-bold text-gray-800">
                Community & Care
              </h3>
              <p className="mt-2 text-gray-600">
                We believe in supporting local shelters and fostering a community
                where every pet parent feels welcome and supported.
              </p>

              <h3 className="mt-6 text-2xl font-bold text-gray-800">
                Sustainable Paws
              </h3>
              <p className="mt-2 text-gray-600">
                Committed to offering eco-friendly products and minimizing our
                environmental footprint for a better planet.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-purple-500 py-16">
          <div className="max-w-7xl mx-auto px-8 text-center">
            <h2 className={`${gravitasOne.className} text-4xl md:text-5xl font-bold text-white`}>Our Impact So far:</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="p-6 bg-white/20 rounded-xl shadow-lg border border-white/30 backdrop-blur-sm">
                <h3 className="text-3xl font-extrabold text-white">
                  15,000+ Happy Paws Served
                </h3>
              </div>
              <div className="p-6 bg-white/20 rounded-xl shadow-lg border border-white/30 backdrop-blur-sm">
                <h3 className="text-3xl font-extrabold text-white">
                  200+ Vet-Approved Products Stocked
                </h3>
              </div>
              <div className="p-6 bg-white/20 rounded-xl shadow-lg border border-white/30 backdrop-blur-sm">
                <h3 className="text-3xl font-extrabold text-white">
                  $100,000 Donated to Local Rescues Annually
                </h3>
              </div>
            </div>
            <p className={`${poppins.className} mt-8 text-lg text-white`}>
              Ready to see the difference our passion makes? Shop the collection
              today and give your furry, feathered, or scaled family member the love
              they deserve.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-gray-100 py-16">
          <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <h2 className={`${gravitasOne.className} text-4xl md:text-5xl font-bold text-purple-900`}>
                Got a Question? We'd Love to Chat!
              </h2>
              <p className={`${poppins.className} mt-4 text-lg text-gray-600`}>
                We will contact you as soon as possible.
              </p>

              <form className="mt-8 space-y-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/20 text-gray-800 placeholder-gray-500 backdrop-blur-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/20 text-gray-800 placeholder-gray-500 backdrop-blur-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/20 text-gray-800 placeholder-gray-500 backdrop-blur-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/20 text-gray-800 placeholder-gray-500 backdrop-blur-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md transition-colors duration-200 hover:bg-orange-600"
                >
                  Submit
                </button>
              </form>
            </div>

            <div className="w-full h-80">
              <iframe
                title="IDEALY PET STORE Location"
                src="https://www.google.com/maps?q=7.4217,80.3297&z=14&output=embed"
                allowFullScreen
                loading="lazy"
                className="w-full h-full rounded-lg border-0 shadow-md"
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
  <section id="faq" className="bg-white py-16" style={pawPatternStyle}>
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-3xl font-bold text-center text-gray-800">
              Frequently Asked Questions
            </h2>
            <div className="mt-8 space-y-4">
              {/* FAQ 1 */}
              <details className="group p-4 bg-gray-100 rounded-lg shadow-md">
                <summary className="flex items-center justify-between text-lg font-semibold text-gray-800 cursor-pointer [&::-webkit-details-marker]:hidden">
                  <span>Are your products safe for sensitive pets?</span>
                  <span className="ml-4 text-2xl leading-none transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-2 text-gray-600">
                  Many of our brands specialize in products for sensitive skin,
                  allergies, and specific dietary needs. Look for the "Sensitive Pet
                  Approved" filter on our main shop page, or contact our nutrition
                  experts for personalized recommendations.
                </p>
              </details>

              {/* FAQ 2 */}
              <details className="group p-4 bg-gray-100 rounded-lg shadow-md">
                <summary className="flex items-center justify-between text-lg font-semibold text-gray-800 cursor-pointer [&::-webkit-details-marker]:hidden">
                  <span>Do you sell specific types of products?</span>
                  <span className="ml-4 text-2xl leading-none transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-2 text-gray-600">
                  We focus on premium nutrition, enrichment toys, and durable gear
                  for dogs and cats. We also offer a curated selection for small
                  animals like rabbits and hamsters. (No live animals.)
                </p>
              </details>

              {/* FAQ 3 */}
              <details className="group p-4 bg-gray-100 rounded-lg shadow-md">
                <summary className="flex items-center justify-between text-lg font-semibold text-gray-800 cursor-pointer [&::-webkit-details-marker]:hidden">
                  <span>What if a toy breaks quickly?</span>
                  <span className="ml-4 text-2xl leading-none transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-2 text-gray-600">
                  We stand by the durability of the toys we sell. If a toy breaks
                  under normal use within 15 days of delivery, please contact us for
                  a free replacement or a full refund.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-purple-500 py-8 text-white">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Side */}
            <div>
              <h3 className="text-2xl font-bold">IDEALY PET STORE</h3>
              <p className="mt-2 text-lg">Built By Pet Lovers, For Pet Lovers</p>
            </div>

            {/* Right Side */}
            <div>
              <p className="text-lg">
                <strong>Phone:</strong> +94 779789288
              </p>
              <p className="text-lg">
                <strong>Email:</strong> info@idealypetstore.com
              </p>
              <p className="text-lg">
                <strong>Address:</strong> 123 Pet Lane, Petville, PA 12345
              </p>

              <div className="mt-4 flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Facebook
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
