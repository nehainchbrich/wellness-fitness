"use client";
import React from "react";
import HeroSection from "../../components/about/HeroSection";
import MissionSection from "../../components/about/MissionSection";
import TeamSection from "../../components/about/TeamSection";
import TestimonialsSection from "../../components/Testimonials";
import { CTASection } from "../../components";
import ApproachSection from "../../components/about/ApproachSection";

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <ApproachSection/>
      <TeamSection />
      <TestimonialsSection />
      <CTASection/>
    </>
  );
}
