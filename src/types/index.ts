export type AudienceCategory = 'all' | 'genz' | 'professional' | 'corporate' | 'entrepreneur' | 'community';

export interface SpeakingTopic {
  id: string;
  title: string;
  category: 'Personal Growth' | 'Mindset' | 'Productivity' | 'AI' | 'Entrepreneurship' | 'Personal Branding';
  tagline: string;
  description: string;
  targetAudience: string[];
  formats: ('Keynote (60-90 mnt)' | 'Workshop (2-4 jam)' | 'Bootcamp (1-2 hari)' | 'Panel Discussion')[];
  keyTakeaways: string[];
  modules: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  organization: string;
  event: string;
  category: 'corporate' | 'campus' | 'community';
  highlight: string;
}

export interface EventFormat {
  id: string;
  name: string;
  duration: string;
  idealFor: string;
  deliverables: string[];
  vibe: string;
}

export interface BookingInquiry {
  organizerName: string;
  organizationName: string;
  email: string;
  whatsapp: string;
  eventType: 'Seminar Kampus' | 'Corporate Training' | 'Community Gathering' | 'Workshop / Bootcamp' | 'Keynote Conference' | 'Lainnya';
  eventDate: string;
  location: string;
  format: 'Offline' | 'Online (Zoom/Meet)' | 'Hybrid';
  estimatedAudience: string;
  selectedTopic: string;
  notes: string;
}
