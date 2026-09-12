"use client";

import React from "react";
import { Footer } from "@/components/layout/Footer";
import Hero from "@/components/public/Hero";

const CORE_VALUES = [
  "Integrity",
  "Professionalism",
  "Reliability",
  "Client-Centered Service",
  "Transparency",
  "Respect",
];

const WHY_RETIRE_WELL = [
  {
    title: "Personalized Guidance",
    description:
      "We take the time to understand your retirement plans and provide assistance suited to your needs.",
  },
  {
    title: "Professional Support",
    description:
      "Our team provides organized assistance throughout the SRRV journey.",
  },
  {
    title: "Clear Communication",
    description:
      "We keep clients informed and help explain the steps and requirements involved.",
  },
  {
    title: "Relocation Assistance",
    description:
      "Beyond SRRV assistance, we can provide additional support for clients preparing to transition to life in the Philippines.",
  },
  {
    title: "Client-First Approach",
    description:
      "Your goals, questions, and concerns are at the heart of our service.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-slate-800 flex flex-col">
      {/* Hero Section */}
      <Hero
        title="About RetireWell"
        description="Retire Well SRRV Marketing Consulting is dedicated to providing professional guidance and personalized support to individuals exploring retirement opportunities in the Philippines through the Special Resident Retiree's Visa (SRRV) program. As PRA-accredited marketers, we help prospective retirees better understand the SRRV process with reliable information, clear requirements, and dedicated support throughout their application journey."
      />

      {/* About Us Section */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <div className="text-center space-y-4 mb-10">
            <h2 className="text-3xl md:text-4xl font-display text-[#0F172A] leading-tight">
              About Us
            </h2>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              We understand that moving to another country is a significant
              decision. That&apos;s why we take a personalized approach to every
              client, providing clear guidance and practical support based on
              their individual retirement goals and circumstances.
            </p>
            <p>
              Our goal is simple:{" "}
              <strong>
                to make the SRRV journey clearer, more organized, and more
                convenient
              </strong>
              , so you can focus on preparing for the life you want to build in
              the Philippines.
            </p>
            <p>
              With professionalism, transparency, and genuine care for our
              clients, <strong>Retire Well SRRV Marketing Consulting</strong> is
              here to help you take the next step toward a fulfilling retirement
              experience in the Philippines.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-[#FAFAFA] py-20 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="text-center md:text-left space-y-3">
            <p className="text-sm font-semibold tracking-wide text-brand-primary-500 uppercase">
              Our Mission
            </p>
            <h3 className="text-2xl md:text-3xl font-display text-[#0F172A]">
              Making Your Retirement Journey Simpler and More Confident
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              To provide <em>professional, transparent, and personalized</em>{" "}
              retirement and relocation assistance that helps foreign nationals
              confidently navigate their journey toward living and retiring in
              the Philippines.
            </p>
          </div>

          <div className="text-center md:text-left space-y-3">
            <p className="text-sm font-semibold tracking-wide text-brand-primary-500 uppercase">
              Our Vision
            </p>
            <h3 className="text-2xl md:text-3xl font-display text-[#0F172A]">
              Your Trusted Partner for Life in the Philippines
            </h3>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <h2 className="text-3xl md:text-4xl font-display text-[#0F172A]">
            Our Core Values
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {CORE_VALUES.map((value) => (
              <div
                key={value}
                className="py-6 px-4 rounded-lg bg-[#FAFAFA] border border-gray-100"
              >
                <p className="font-semibold tracking-wide text-[#0F172A] uppercase text-sm">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Retire Well Section */}
      <section className="bg-[#FAFAFA] py-20 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-display text-[#0F172A]">
              Why Retire Well?
            </h2>
            <p className="text-xl text-gray-600">
              Guidance You Can Trust. Support You Can Rely On.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg max-w-2xl mx-auto">
              Choosing to retire in another country can involve unfamiliar
              procedures, requirements, and decisions. At Retire Well, we are
              here to help make the process easier to understand and navigate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {WHY_RETIRE_WELL.map(({ title, description }) => (
              <div
                key={title}
                className="bg-white rounded-lg border border-gray-100 p-6 space-y-2"
              >
                <h4 className="font-semibold text-[#0F172A]">{title}</h4>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment / Closing CTA Section */}
      <section className="bg-white py-20 flex-grow">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-4">
          <p className="text-sm font-semibold tracking-wide text-brand-primary-500 uppercase">
            Our Commitment
          </p>
          <h2 className="text-2xl md:text-3xl font-display text-[#0F172A] leading-snug">
            Retire Well. Relocate with Confidence. Live Well in the Philippines.
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Your retirement journey is more than an application. It&apos;s the
            beginning of a new chapter. Let Retire Well help you take that first
            step with confidence.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
