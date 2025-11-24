import Head from 'next/head';
import {
  HeroSection,
  AboutSection,
  FeaturesSection,
  ServicesSection,
  HealthTipsSection,
  CTASection,
} from '../components';
import TestimonialsSlider from '../components/Testimonials';
import WellnessScore from '../components/WellnessScore';
import BMICalculator from '../components/BmiCalculator';
import WaterIntake from '../components/WaterIntake';
import MorningRoutine from '../components/MorningRoutine';

export default function Home() {
  return (
    <>
      <Head>
        <title>Wellness - Your Journey to Better Health</title>
        <meta
          name="description"
          content="Discover personalized wellness programs designed to nurture your mind, body, and soul."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white dark:bg-black">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <ServicesSection />
        <HealthTipsSection />
        <WellnessScore/>
        <BMICalculator/>
        <WaterIntake/>
        <MorningRoutine/>
        <TestimonialsSlider />
        <CTASection />
      </div>
    </>
  );
}