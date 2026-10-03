import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { IntroductionSection } from './components/IntroductionSection';
import { StorySection } from './components/StorySection';
import { PhilosophySection } from './components/PhilosophySection';
import { SpeakingTopicsSection } from './components/SpeakingTopicsSection';
import { FrameworkSection } from './components/FrameworkSection';
import { ExperienceSection } from './components/ExperienceSection';
import { TestimonialSection } from './components/TestimonialSection';
import { InsightsSection } from './components/InsightsSection';
import { GallerySection } from './components/GallerySection';
import { CollaborationSection } from './components/CollaborationSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { ContactSection } from './components/ContactSection';
import { FooterSection } from './components/FooterSection';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedTopic, setPreselectedTopic] = useState('');

  const handleOpenBooking = (topic?: string) => {
    if (topic) {
      setPreselectedTopic(topic);
    } else {
      setPreselectedTopic('');
    }
    setIsBookingOpen(true);
  };

  const handleScrollToTopics = () => {
    const el = document.getElementById('topics');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F7F2] text-[#111111] flex flex-col font-sans selection:bg-[#F5A23A] selection:text-[#111111]">
      
      {/* 1. Sticky Minimal Navigation */}
      <Navigation onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection
          onOpenBooking={() => handleOpenBooking()}
          onExploreTopics={handleScrollToTopics}
        />

        {/* 3. Introduction Section */}
        <IntroductionSection
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 4. Personal Story Section & Timeline */}
        <StorySection />

        {/* 5. Philosophy Section (01 MINDSET, 02 ACTION, 03 AI, 04 IMPACT) */}
        <PhilosophySection />

        {/* 6. Speaking Topics (6 Premium Cards) */}
        <SpeakingTopicsSection
          onSelectTopicForBooking={(topic) => handleOpenBooking(topic)}
        />

        {/* 7. Signature Framework (ROFI 4A FRAMEWORK) */}
        <FrameworkSection />

        {/* 8. Speaking Experience (Stats & Logos with honest XX+ placeholders) */}
        <ExperienceSection />

        {/* 9. Testimonial Section (Apa Kata Mereka?) */}
        <TestimonialSection />

        {/* 10. Insights Section (Pikiran yang Saya Bagikan Bento Grid) */}
        <InsightsSection />

        {/* 11. Photo Gallery (Behind the Journey) */}
        <GallerySection />

        {/* 12. Collaboration Section (SPEAKER, TRAINER, MODERATOR, COLLABORATION) */}
        <CollaborationSection
          onSelectCollaboration={(type) => handleOpenBooking(`Format Kolaborasi: ${type}`)}
        />

        {/* 13. Final CTA Section */}
        <FinalCtaSection
          onOpenBooking={() => handleOpenBooking()}
          onScrollToContact={handleScrollToContact}
        />

        {/* 14. Contact Section */}
        <ContactSection />
      </main>

      {/* 15. Footer */}
      <FooterSection />

      {/* Global Interactive Booking & Proposal Brief Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedTopic={preselectedTopic}
      />

    </div>
  );
}
