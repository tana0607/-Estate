import React from 'react';
import { Building2, Users, Trophy, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Hero Section */}
      <div className="py-24 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800 text-center">
          Welcome to <span className="text-blue-600">Urban Estate</span>
        </h1>
        <p className="text-xl text-slate-600 text-center max-w-3xl mx-auto">
          Your trusted partner in finding the perfect place to call home
        </p>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <Building2 className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold text-slate-800">1000+</h3>
            <p className="text-slate-600">Properties Sold</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Users className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold text-slate-800">2000+</h3>
            <p className="text-slate-600">Happy Clients</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Trophy className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold text-slate-800">15+</h3>
            <p className="text-slate-600">Years Experience</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Heart className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold text-slate-800">98%</h3>
            <p className="text-slate-600">Client Satisfaction</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-800">Our Mission</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Our mission is to help our clients achieve their real estate goals by providing expert advice, 
              personalized service, and a deep understanding of the local market. Whether you are looking to 
              buy, sell, or rent a property, we are here to help you every step of the way.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-800">Our Expertise</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Our team of agents has a wealth of experience and knowledge in the real estate industry, and 
              we are committed to providing the highest level of service to our clients. We believe that 
              buying or selling a property should be an exciting and rewarding experience.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-blue-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Personalized Service</h3>
              <p className="text-slate-700">We understand that every client is unique, and we tailor our services to meet your specific needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Market Expertise</h3>
              <p className="text-slate-700">Our deep understanding of local markets helps you make informed decisions about your real estate investments.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Trusted Advisors</h3>
              <p className="text-slate-700">We build lasting relationships based on trust, transparency, and consistent communication.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}