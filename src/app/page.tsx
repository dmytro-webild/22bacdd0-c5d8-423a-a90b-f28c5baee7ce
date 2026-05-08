"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="mediumSizeLargeTitles"
        background="circleGradient"
        cardStyle="glass-depth"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Guarantee",
          id: "#mission",
        },
        {
          name: "Reviews",
          id: "#reviews",
        },
        {
          name: "Emergency",
          id: "#emergency",
        },
      ]}
      brandName="Elite Plumbing"
      button={{
        text: "Book Now",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "gradient-bars",
      }}
      title="Mastery in Modern Plumbing"
      description="22 years of trust. 4.9-star dedication. Elite service for your sanctuary."
      leftCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/classical-background-house-bath-interior_1203-5614.jpg",
          imageAlt: "luxury professional bathroom renovation",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-shot-modern-house-bathroom-with-technology-art_181624-2980.jpg",
          imageAlt: "luxury professional bathroom renovation",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-mechanic-work_23-2148480413.jpg",
          imageAlt: "luxury professional bathroom renovation",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/elegant-bathtub-with-bath-elements_23-2148147452.jpg",
          imageAlt: "luxury professional bathroom renovation",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/basin-black-faucet-green-bathroom-with-lighting-cozy-spa-nook_169016-69326.jpg",
          imageAlt: "luxury professional bathroom renovation",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/tools-repairing-shop_23-2148138437.jpg",
          imageAlt: "luxury professional bathroom renovation",
        },
      ]}
      rightCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/female-artist-painting-studio_1303-11440.jpg",
          imageAlt: "luxury professional bathroom renovation",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/auto-service-salon-doign-car-wrapping_23-2149593824.jpg",
          imageAlt: "luxury professional bathroom renovation",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/spacious-bathtub-window_1203-1499.jpg",
          imageAlt: "luxury professional bathroom renovation",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-holding-cup_23-2149149680.jpg",
          imageAlt: "luxury professional bathroom renovation",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/construction-hammer-indoors-still-life_23-2150563172.jpg",
          imageAlt: "luxury professional bathroom renovation",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-soap-with-brush_23-2150829648.jpg",
          imageAlt: "luxury professional bathroom renovation",
        },
      ]}
      buttons={[
        {
          text: "Schedule Elite Care",
          href: "#contact",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/small-bathroom-space-with-modern-style-furniture_23-2150864622.jpg",
          alt: "Small bathroom space with modern style furniture",
        },
        {
          src: "http://img.b2bpic.net/free-photo/3d-rendering-modern-wood-stone-white-bathroom_105762-2136.jpg",
          alt: "3d rendering modern wood and stone white bathroom",
        },
        {
          src: "http://img.b2bpic.net/free-photo/bathroom-interior-background-white-spa-towels-wood_1258-111485.jpg",
          alt: "Bathroom interior background and white spa towels on wood",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-bathtub-with-faucet_1203-1500.jpg",
          alt: "Close-up of bathtub with faucet",
        },
        {
          src: "http://img.b2bpic.net/free-photo/interior-modern-bathroom-with-window-overlooking-city_169016-26294.jpg",
          alt: "Interior of a modern bathroom with a window overlooking the city",
        },
      ]}
      marqueeItems={[
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/male-plumber-working-with-client-fix-kitchen-problems_23-2150990686.jpg",
          alt: "Male plumber working with client to fix kitchen problems",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/bathtub_74190-4122.jpg",
          alt: "Bathtub",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/elegant-bathtub-with-bath-elements_23-2148147505.jpg",
          alt: "Elegant bathtub with bath elements",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/bathrobe-modern-bathtub_1203-1498.jpg",
          alt: "Bathrobe next to a modern bathtub",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/beautiful-woman-dancing-ballet-with-grace_23-2148461890.jpg",
          alt: "Beautiful woman dancing ballet with grace",
        },
      ]}
    />
  </div>

  <div id="trust" data-section="trust">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "22+",
          title: "Years Experience",
          description: "Serving with integrity",
          imageSrc: "http://img.b2bpic.net/free-photo/plumber-repair-experienced-attentive-middleaged-man-examining-bottom-kitchen-sink_259150-58266.jpg",
        },
        {
          id: "m2",
          value: "4.9",
          title: "Customer Rating",
          description: "Verified excellence",
          imageSrc: "http://img.b2bpic.net/free-photo/pro-kitchen-sprayer-sleek-sink-stone-backsplash_169016-69285.jpg",
        },
        {
          id: "m3",
          value: "1-Yr",
          title: "Service Guarantee",
          description: "We stand by our craft",
          imageSrc: "http://img.b2bpic.net/free-photo/two-men-crouched-near-pipe-construction-site_259150-57633.jpg",
        },
      ]}
      title="Unrivaled Standards"
      description="The gold standard of residential plumbing service."
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardSix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Emergency Care",
          description: "24/7 rapid response team.",
          imageSrc: "http://img.b2bpic.net/free-photo/mechanic-with-tools-workshop_329181-11873.jpg",
        },
        {
          title: "Fixture Upgrades",
          description: "Artisan installation services.",
          imageSrc: "http://img.b2bpic.net/free-photo/architectural-blueprints_1359-498.jpg",
        },
        {
          title: "Piping Solutions",
          description: "Modern leak-proof infrastructure.",
          imageSrc: "http://img.b2bpic.net/free-photo/plumbing-professional-doing-his-job_23-2150721544.jpg",
        },
      ]}
      title="Elite Service Suites"
      description="From emergency interventions to artisan fixture installations."
    />
  </div>

  <div id="mission" data-section="mission">
      <MediaAbout
      useInvertedBackground={false}
      title="A Legacy of Trust"
      description="Founded with a vision for perfection, we handle every home as our own. Woman-owned, locally operated, and entirely committed to excellence."
      imageSrc="http://img.b2bpic.net/free-photo/female-mechanic-with-pneumatic-wrench_1170-1393.jpg"
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          imageSrc: "http://img.b2bpic.net/free-photo/content-men-embracing-kitchen_23-2147744703.jpg",
        },
        {
          id: "2",
          name: "Michael C.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-pretty-curly-haired-lady-showing-thumb-up-park_1262-20821.jpg",
        },
        {
          id: "3",
          name: "Emily R.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-handsome-man-coffee-shop-listening-music-wireless-earphones-connects-cafe-wifi-enjoy-favourite-song-his-smartphone-playlist-sitting-drinking-cappuccino_1258-314232.jpg",
        },
        {
          id: "4",
          name: "David K.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-happy-man-office-guy-sits-coworking-space-looking-camera-smiling_1258-245272.jpg",
        },
        {
          id: "5",
          name: "Elena M.",
          imageSrc: "http://img.b2bpic.net/free-photo/couple-handling-carpet-together-their-new-home_23-2149086838.jpg",
        },
      ]}
      cardTitle="Verified Excellence"
      cardTag="4.9/5 Rating"
      cardAnimation="blur-reveal"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Do you offer financing?",
          content: "Yes, flexible options available.",
        },
        {
          id: "f2",
          title: "Are you licensed?",
          content: "Fully licensed, bonded, and insured.",
        },
        {
          id: "f3",
          title: "Do you offer weekends?",
          content: "24/7 emergency service available.",
        },
      ]}
      title="Common Inquiries"
      description="Expert answers to keep your home running smoothly."
      faqsAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/steel-bright-house-home-dripping_1203-4400.jpg"
    />
  </div>

  <div id="emergency" data-section="emergency">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Emergency Alert: Need Help?"
      description="We are available 24/7 for critical plumbing situations. Speak to a live expert now."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "phone",
          type: "tel",
          placeholder: "Phone Number",
          required: true,
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/plumber-holding-clock_1368-757.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#mission",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              label: "Emergency Repair",
              href: "#emergency",
            },
            {
              label: "Installations",
              href: "#services",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 Elite Plumbing. All rights reserved."
      bottomRightText="Crafted with Luxury."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
