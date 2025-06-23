"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Home
} from "lucide-react";

// Gallery images (add more as needed)
const galleryImages = [
  "/media/WhatsApp Image 2025-06-23 at 21.26.00_f3ab5d80.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.37_f0165984.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.37_bbcdd99e.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.37_3227bbf5.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.37_06d23d90.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.36_c3e69011.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.36_20f6f511.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.32_ea8c087e.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.32_cea207a0.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.32_5a9c11a9.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.31_c31a4ad7.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.09_8104c5e5.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.09_1086af8e.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.08_99d27c3e.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.08_889d36d7.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.08_54330b57.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.08_523f57cd.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.08_0a66d48f.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.07_a8fb4f11.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.07_7e487b0c.jpg",
];

export default function GalleryPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <Link href="/#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
              <Link href="/#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</Link>
              <Link href="/#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Reviews</Link>
              <Link href="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            </nav>
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-blue-600">
                <Phone className="h-4 w-4" />
                <span className="font-semibold">(555) 123-ROOF</span>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold">Free Estimate</button>
            </div>
          </div>
        </div>
      </header>
      {/* Gallery Section */}
      <main className="bg-white pb-20">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-10">
              <Badge className="bg-blue-100 text-blue-800">Gallery</Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Project Gallery</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our completed projects and see the quality of our work across New Jersey.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {galleryImages.map((src, idx) => (
                <Card key={idx} className="overflow-hidden shadow hover:shadow-lg transition-shadow">
                  <Image
                    src={src}
                    alt={`Gallery image ${idx + 1}`}
                    width={600}
                    height={400}
                    className="object-cover w-full h-56 md:h-64 transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
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
                <li><Link href="#" className="hover:text-white">Roof Repair</Link></li>
                <li><Link href="#" className="hover:text-white">Roof Replacement</Link></li>
                <li><Link href="#" className="hover:text-white">New Installation</Link></li>
                <li><Link href="#" className="hover:text-white">Roof Inspection</Link></li>
                <li><Link href="#" className="hover:text-white">Emergency Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white">About Us</Link></li>
                <li><Link href="#" className="hover:text-white">Our Team</Link></li>
                <li><Link href="#" className="hover:text-white">Careers</Link></li>
                <li><Link href="#" className="hover:text-white">Reviews</Link></li>
                <li><Link href="#" className="hover:text-white">Blog</Link></li>
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
              <Link href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">License Info</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
