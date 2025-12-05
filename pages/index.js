import Head from 'next/head';
import {
  HeroSection,
  AboutSection,
  FeaturesSection,
  ServicesSection,
  HealthTipsSection,
  LifestyleSection,
  Gallery,
  BeforeAfter,
  FAQSection,
  NewsletterSection,
  WellnessScore,
  BlogSection,
} from '../components';
import TestimonialsSlider from '../components/Testimonials';
// import BMICalculator from '../components/BmiCalculator';
// import WaterIntake from '../components/WaterIntake';
// import MorningRoutine from '../components/MorningRoutine';

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
        <WellnessScore />
        <HealthTipsSection />
        <Gallery />
        <BeforeAfter />
        <TestimonialsSlider />
        <FAQSection />
        <NewsletterSection />
        <BlogSection />
      </div>
    </>
  );
}