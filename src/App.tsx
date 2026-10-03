import React, { useState } from 'react';
import { TopAnnouncementBar } from './components/TopAnnouncementBar';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { MediaLogoBar } from './components/MediaLogoBar';
import { FeaturedSessionsSection } from './components/FeaturedSessionsSection';
import { FeaturedBookSection } from './components/FeaturedBookSection';
import { StorySection } from './components/StorySection';
import { ThreePillarsSection } from './components/ThreePillarsSection';
import { PodcastAppSection } from './components/PodcastAppSection';
import { TopicsArchiveSection } from './components/TopicsArchiveSection';
import { ExperienceSection } from './components/ExperienceSection';
import { TestimonialSection } from './components/TestimonialSection';
import { BottomCtaBanner } from './components/BottomCtaBanner';
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

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0E0E0E] flex flex-col font-sans selection:bg-[#E2872A] selection:text-white">
      
      {/* 1. Top Announcement Bar (Matching Lewis Howes Top Green Banner) */}
      <TopAnnouncementBar
        onLearnMore={() => handleScrollToSection('book')}
      />

      {/* 2. Modern Navigation with Pill CTA */}
      <Navigation
        onOpenBooking={() => handleOpenBooking()}
        onOpenSearch={() => handleScrollToSection('insights')}
      />

      <main className="flex-1">
        
        {/* 3. Theatrical Cinema Rounded Hero Card (Matching Lewis Howes Hero Banner) */}
        <HeroSection
          onOpenBooking={() => handleOpenBooking()}
          onExploreTopics={() => handleScrollToSection('topics')}
        />

        {/* 4. Grayscale Media & Partner Logo Strip */}
        <MediaLogoBar />

        {/* 5. Featured Keynotes & Sesi Pilihan (Matching Lewis Howes Featured Guests Carousel) */}
        <FeaturedSessionsSection
          onSelectTopic={(topic) => handleOpenBooking(`Topik Pilihan: ${topic}`)}
          onViewAllTopics={() => handleScrollToSection('insights')}
        />

        {/* 6. Featured Book & Signature Framework (Matching Lewis Howes Book Section) */}
        <FeaturedBookSection
          onLearnMore={() => handleOpenBooking('Konsultasi Framework ROFI 4A')}
        />

        {/* 7. My Story Section with Diagonal Geometric Slash & Cutout Portrait */}
        <StorySection />

        {/* 8. 3 Pillars of Impact (Matching Lewis Howes: Books, Summit, Documentary) */}
        <ThreePillarsSection
          onOpenBooking={() => handleOpenBooking()}
          onExploreBooks={() => handleScrollToSection('book')}
          onExploreTopics={() => handleScrollToSection('topics')}
        />

        {/* 9. The Naik Level Show / Podcast App Frame Feature */}
        <PodcastAppSection />

        {/* 10. Curated Topics & Episode Archive (Interactive Categories) */}
        <TopicsArchiveSection />

        {/* 11. Speaking Experience & Partner Proof */}
        <ExperienceSection />

        {/* 12. Client & Organizer Testimonials */}
        <TestimonialSection />

        {/* 13. Massive Bottom Community CTA Banner with Inline Form */}
        <BottomCtaBanner />

        {/* 14. Formal Speaking Booking Inquiry Form */}
        <ContactSection />

      </main>

      {/* 15. Clean Multi-Column Footer */}
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
