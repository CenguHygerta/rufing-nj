"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Star,
  Shield,
  Clock,
  Award,
  Users,
  Wrench,
  Home,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic"

// Dynamically import Portfolio to avoid SSR issues
const Portfolio = dynamic(() => import("@/components/portfolio"), { ssr: false })

// Use real images from public/media for the homepage portfolio
const homepagePortfolioImages = [
  "/media/WhatsApp Image 2025-06-23 at 21.26.00_f3ab5d80.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.37_f0165984.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.37_bbcdd99e.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.37_3227bbf5.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.37_06d23d90.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.36_c3e69011.jpg",
]

export default function RoofingLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentProject, setCurrentProject] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: <Home className="h-8 w-8" />,
      title: "Roof Replacement",
      description: "Complete roof replacement with premium materials and expert installation.",
      features: ["Premium Materials", "Expert Installation", "Warranty Included"],
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Roof Repair",
      description: "Quick and reliable roof repairs to fix leaks and damage.",
      features: ["Emergency Service", "Quality Repairs", "Affordable Pricing"],
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "New Installation",
      description: "Professional new roof installation for residential and commercial properties.",
      features: ["Custom Design", "Quality Materials", "Professional Team"],
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Roof Inspection",
      description: "Comprehensive roof inspections to identify potential issues early.",
      features: ["Detailed Report", "Expert Analysis", "Preventive Solutions"],
    },
  ]

  const whyChooseUs = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Licensed & Insured",
      description: "Fully licensed and insured for your peace of mind",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "20+ Years Experience",
      description: "Two decades of roofing expertise in New Jersey",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Free Estimates",
      description: "No-obligation free estimates for all services",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Team",
      description: "Certified professionals with extensive training",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Princeton, NJ",
      rating: 5,
      text: "Exceptional service! They replaced our entire roof in just two days. Professional, clean, and the quality is outstanding.",
    },
    {
      name: "Mike Rodriguez",
      location: "Newark, NJ",
      rating: 5,
      text: "Quick response for emergency repair during a storm. Fair pricing and excellent workmanship. Highly recommend!",
    },
    {
      name: "Emily Chen",
      location: "Jersey City, NJ",
      rating: 5,
      text: "From estimate to completion, everything was perfect. The team was courteous and left our property spotless.",
    },
  ]

  const projects = [
    {
      image: "/placeholder.svg?height=300&width=400",
      title: "Modern Residential Roof",
      location: "Princeton, NJ",
      description: "Complete roof replacement with architectural shingles",
    },
    {
      image: "/placeholder.svg?height=300&width=400",
      title: "Commercial Flat Roof",
      location: "Newark, NJ",
      description: "Commercial flat roof installation with EPDM membrane",
    },
    {
      image: "/placeholder.svg?height=300&width=400",
      title: "Historic Home Restoration",
      location: "Morristown, NJ",
      description: "Slate roof restoration maintaining historic character",
    },
    {
      image: "/placeholder.svg?height=300&width=400",
      title: "Emergency Storm Repair",
      location: "Trenton, NJ",
      description: "Emergency repair after severe storm damage",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image
                src="/media/logo.jpg"
                alt="NJ Roofing Pro Logo"
                width={48}
                height={48}
                className="h-12 w-12 object-contain rounded-full bg-white shadow"
                priority
              />
              <span className="text-2xl font-bold text-gray-900">NJ Roofing Pro</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </Link>
              <Link href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">
                Portfolio
              </Link>
              <Link href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">
                Reviews
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-blue-600">
                <Phone className="h-4 w-4" />
                <span className="font-semibold">(555) 123-ROOF</span>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">Free Estimate</Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t">
              <nav className="flex flex-col space-y-4 mt-4">
                <Link href="#about" className="text-gray-700 hover:text-blue-600">
                  About
                </Link>
                <Link href="#services" className="text-gray-700 hover:text-blue-600">
                  Services
                </Link>
                <Link href="#portfolio" className="text-gray-700 hover:text-blue-600">
                  Portfolio
                </Link>
                <Link href="#testimonials" className="text-gray-700 hover:text-blue-600">
                  Reviews
                </Link>
                <Link href="#contact" className="text-gray-700 hover:text-blue-600">
                  Contact
                </Link>
                <div className="flex items-center space-x-2 text-blue-600 pt-2">
                  <Phone className="h-4 w-4" />
                  <span className="font-semibold">(555) 123-ROOF</span>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="space-y-4">
                <Badge className="bg-blue-500/20 text-blue-100 border-blue-400">#1 Roofing Contractor in NJ</Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Expert Roofing Services in
                  <span className="text-blue-300"> New Jersey</span>
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Protecting your home with premium roofing solutions. Licensed, insured, and trusted by thousands of
                  New Jersey homeowners for over 20 years.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg">
                  Get Free Estimate
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">20+</div>
                  <div className="text-blue-200 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">5000+</div>
                  <div className="text-blue-200 text-sm">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-blue-200 text-sm">Satisfaction</div>
                </div>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Professional roofing work in New Jersey"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-lg shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold">Licensed & Insured</div>
                      <div className="text-sm text-gray-600">NJ License #12345</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800">About Our Company</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  New Jersey's Most Trusted Roofing Experts
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  For over two decades, NJ Roofing Pro has been the premier choice for residential and commercial
                  roofing services throughout New Jersey. Our commitment to excellence, combined with our extensive
                  experience, makes us the trusted partner for all your roofing needs.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                    <Award className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Expert Craftsmanship</h3>
                    <p className="text-gray-600 text-sm">Skilled professionals with years of experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                    <Shield className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Quality Materials</h3>
                    <p className="text-gray-600 text-sm">Premium materials from trusted manufacturers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Timely Service</h3>
                    <p className="text-gray-600 text-sm">On-time completion of every project</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Customer Focus</h3>
                    <p className="text-gray-600 text-sm">Dedicated to exceeding expectations</p>
                  </div>
                </div>
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Professional roofing team"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -top-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold">A+</div>
                  <div className="text-blue-100 text-sm">BBB Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Comprehensive Roofing Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From emergency repairs to complete roof replacements, we provide all the roofing services you need with
              exceptional quality and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Free Quote</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Sets Us Apart</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're not just another roofing company. Here's what makes NJ Roofing Pro the best choice for your roofing
              needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center space-y-4 group">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow">
                  <div className="text-blue-600">{item.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Ready to Get Started?</h3>
                <p className="text-gray-600">
                  Contact us today for a free, no-obligation estimate. Our experts will assess your roofing needs and
                  provide you with a detailed quote.
                </p>
              </div>
              <div className="text-center lg:text-right">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Get Your Free Estimate
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section (AJAX Tabs) */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Portfolio images={homepagePortfolioImages} />
          <div className="text-center mt-8">
            <Link
              href="/gallery"
              className="inline-block px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800">Customer Reviews</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Customers Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about our roofing
              services.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Card className="bg-white shadow-lg">
                      <CardContent className="p-8 text-center space-y-6">
                        <div className="flex justify-center space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                          "{testimonial.text}"
                        </blockquote>
                        <div className="space-y-2">
                          <div className="font-semibold text-gray-900">{testimonial.name}</div>
                          <div className="text-gray-600 flex items-center justify-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{testimonial.location}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">Ready to Protect Your Home?</h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Don't wait for small problems to become big expenses. Get your free roofing estimate today and discover
              why thousands of New Jersey homeowners trust us with their most important investment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                <Phone className="mr-2 h-5 w-5" />
                Call (555) 123-ROOF
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
              >
                Get Free Estimate Online
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 pt-8 text-blue-100">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Free Estimates</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>24/7 Emergency Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800">Contact Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get In Touch Today</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to start your roofing project? Contact us for a free consultation and estimate.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">(555) 123-ROOF</p>
                    <p className="text-sm text-gray-500">Available 24/7 for emergencies</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@njroofingpro.com</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Service Area</h3>
                    <p className="text-gray-600">All of New Jersey</p>
                    <p className="text-sm text-gray-500">Licensed in all NJ counties</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>7:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Emergency Service Only</span>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Request Your Free Estimate</h3>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <Input type="tel" placeholder="(555) 123-4567" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                    <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Select a service</option>
                      <option>Roof Repair</option>
                      <option>Roof Replacement</option>
                      <option>New Installation</option>
                      <option>Roof Inspection</option>
                      <option>Emergency Service</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <Textarea placeholder="Tell us about your roofing needs..." rows={4} />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <div className="bg-gray-100 rounded-lg p-4 h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="h-12 w-12 mx-auto mb-2" />
                <p>Interactive Map Placeholder</p>
                <p className="text-sm">Google Maps integration would go here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Home className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">NJ Roofing Pro</span>
              </div>
              <p className="text-gray-400">
                New Jersey's premier roofing contractor, providing quality services for over 20 years.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Roof Repair
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Roof Replacement
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    New Installation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Roof Inspection
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Emergency Service
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(555) 123-ROOF</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@njroofingpro.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Serving all of New Jersey</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} NJ Roofing Pro. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                License Info
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
