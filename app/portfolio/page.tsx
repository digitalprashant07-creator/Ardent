'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Play,
  X,
  ChevronRight,
  ExternalLink,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  ChevronsLeftRight,
  Monitor,
  Smartphone,
  PenTool,
  ShoppingCart,
  Layout,
  Filter,
  Target
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl md:text-2xl tracking-tighter flex items-center gap-2 text-white">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black">A</div>
          ARDENT & LEAP
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <Link href="#" className="hover:text-white transition-colors">Home</Link>
          <Link href="#" className="hover:text-white transition-colors">About</Link>
          <Link href="#" className="text-white font-semibold">Portfolio</Link>
          <Link href="#" className="hover:text-white transition-colors">Services</Link>
        </div>
        <button className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-200 transition-all hover:scale-105 active:scale-95">
          Book Call
        </button>
      </div>
    </nav>
  );
};

// --- CUSTOM UTILS ---

// Image Comparison Slider (Reused for Branding Section)
type ImageComparisonProps = {
  before: string;
  after: string;
  alt: string;
  className?: string;
};

const ImageComparison = ({
  before,
  after,
  alt,
  className,
}: ImageComparisonProps) => {

  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
const containerRef = useRef<HTMLDivElement | null>(null);

const handleMove = useCallback(
  (event: MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const clientX =
      event instanceof TouchEvent
        ? event.touches[0].clientX
        : event.clientX;

    const x = clientX - rect.left;
    const newPosition = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(newPosition);
  },
  []
);

const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
  handleMove(e.nativeEvent);
};



  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleTouchStart = () => setIsDragging(true);
  const handleTouchEnd = () => setIsDragging(false);

 useEffect(() => {
  const handleGlobalMove = (e: MouseEvent | TouchEvent) => {
    if (isDragging) handleMove(e);
  };

  const handleGlobalUp = () => setIsDragging(false);

  if (isDragging) {
    window.addEventListener('mousemove', handleGlobalMove);
    window.addEventListener('mouseup', handleGlobalUp);
    window.addEventListener('touchmove', handleGlobalMove);
    window.addEventListener('touchend', handleGlobalUp);
  }

  return () => {
    window.removeEventListener('mousemove', handleGlobalMove);
    window.removeEventListener('mouseup', handleGlobalUp);
    window.removeEventListener('touchmove', handleGlobalMove);
    window.removeEventListener('touchend', handleGlobalUp);
  };
}, [isDragging, handleMove]);

  return (
    <div
  ref={containerRef}
  className={`relative select-none group overflow-hidden cursor-ew-resize ${className}`}
  onMouseDown={handleMouseDown}
  onTouchStart={handleTouchStart}
  onClick={handleClick}
>

      {/* After Image (Background) */}
      <div className="absolute inset-0 w-full h-full">
        <Image width={400} height={400} src={after} alt={`After ${alt}`} className="w-full h-full object-cover" />
        <div className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
          <span className="text-[10px] font-bold text-white uppercase tracking-wider">After</span>
        </div>
      </div>
      {/* Before Image (Foreground Clipped) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden border-r-2 border-white" style={{ width: `${sliderPosition}%` }}>
        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none mix-blend-saturation" />
        <Image width={400} height={400} src={before} alt={`Before ${alt}`} className="w-full h-full max-w-none object-cover grayscale" style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100%' }} />
        <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Before</span>
        </div>
      </div>
      {/* Handle */}
      <div className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-30 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)]" style={{ left: `${sliderPosition}%` }}>
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg -ml-[1px]">
          <ChevronsLeftRight className="w-4 h-4 text-gray-900" />
        </div>
      </div>
    </div>
  );
};

// --- MAIN PORTFOLIO CONTENT ---

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-16 bg-black overflow-hidden">
      {/* Neon Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-5xl md:text-5xl font-bold text-white tracking-tighter mb-6">
          Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Works.</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          From full brand overhauls to high-conversion web apps. Explore how we turn vision into authority.
        </p>
      </div>
    </section>
  );
};

const ClientReels = () => {
  const reels = [
    { client: "TechFlow", result: "300% Growth", video: "https://www.youtube.com/shorts/vipCFhUahqs", type: 'youtube' },
    { client: "Flute CEO", result: "300% Growth", video: "https://www.youtube.com/shorts/JWkUwktw9jU", type: 'youtube' },
  ];

const scrollRef = useRef<HTMLDivElement | null>(null);

const scroll = (direction: 'left' | 'right') => {
  if (scrollRef.current) {
    const scrollAmount = direction === 'left' ? -340 : 340;
    scrollRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  }
};


  const getYoutubeEmbedUrl = (url: string) => {
    try {
      if (url.includes('shorts')) {
        const id = url.split('/shorts/')[1].split('?')[0];
        return `https://www.youtube.com/embed/${id}?autoplay=0&controls=1&rel=0`;
      }
      return url;
    } catch (e) {
      return url;
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Grid - Light Mode */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-60" />

      {/* Neon Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100/60 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2 tracking-tighter">Client Wins</h2>
            <p className="text-gray-500 text-lg">Real stories from the founders we scale.</p>
          </div>
          <div className="hidden md:flex gap-2">
            <button onClick={() => scroll('left')} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-colors"><ArrowRight className="w-4 h-4 rotate-180" /></button>
            <button onClick={() => scroll('right')} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-colors"><ArrowRight className="w-4 h-4" /></button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reels.map((reel, i) => (
            <div key={i} className="group relative min-w-[280px] md:min-w-[320px] aspect-[9/16] bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 hover:border-purple-400 transition-all duration-300 snap-center shadow-lg hover:shadow-2xl hover:shadow-purple-500/10">

              {reel.type === 'youtube' ? (
                <iframe
                  src={getYoutubeEmbedUrl(reel.video)}
                  className="w-full h-full object-cover"
                  title={reel.client}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  <Image width={400} height={400} src={reel.video} alt={reel.client} className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/50 scale-90 group-hover:scale-100 transition-transform">
                      <Play className="w-6 h-6 text-white fill-white" />
                    </div>
                  </div>
                </>
              )}

              <div className="absolute bottom-0 left-0 w-full p-6 pointer-events-none">
                <div className="inline-block px-2 py-1 bg-green-500 text-white text-[10px] font-bold uppercase tracking-wider mb-2 rounded shadow-sm">
                  {reel.result}
                </div>
                <h4 className="text-white font-bold text-lg">{reel.client}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const PortfolioGallery = () => {
  const webProjects = [
    { title: "IT Networking", img: "/portfolio12.png", tag: "Website", link: "https://globalxperts-one.vercel.app/" },
    { title: "Community Tracker", img: "/portfolio13.png", tag: "Website", link: "https://www.communitytracker.ai/" },
    { title: "Dry Dash", img: "/portfolio14.png", tag: "Website", link: "https://drydash.vercel.app/" },
    { title: "Playbook", img: "/portfolio15.png", tag: "Landing Page", link: "https://playbooksystems.io/" },
    { title: "Horizon Ventures", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop", tag: "Corporate Site", link: "" },
    { title: "Echo Audio", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop", tag: "Product Landing", link: "" },
  ];

  const uiuxProjects = [
    { title: "Sales Dashboard", img: "/uixux4.webp", tag: "Web App" },
    { title: "Homes", img: "/uixux5.webp", tag: "Web App" },
    { title: "Waffle", img: "/uiux3.webp", tag: "Mobile App" },
    { title: "Card Design", img: "/uixu1.webp", tag: "Web App" }
  ];

  return (
    <section className="py-24 bg-black min-h-screen relative">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 space-y-24">

        {/* Web Design Section */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
              <Monitor className="w-6 h-6 text-purple-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Web Design</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webProjects.map((project, i) => (
              <a key={i} href={project.link} target="_blank" rel="noopener noreferrer" className="group relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 hover:-translate-y-2 transition-all duration-300 shadow-2xl cursor-pointer">
                <Image width={400} height={400} src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-2 block">{project.tag}</span>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* UI/UX Design Section */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
              <Layout className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">UI/UX Design</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {uiuxProjects.map((project, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden aspect-video border border-white/10 hover:-translate-y-2 transition-all duration-300 shadow-2xl">
                <Image width={400} height={400} src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100" />
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2 block">{project.tag}</span>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

const CallToAction = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
      {/* Background Grid - White Theme */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

      {/* Neon Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-100/60 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/60 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tighter">Ready to start your project?</h2>
        <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto">
          We pick our partners carefully. If you're ready to build something that lasts, let's talk.
        </p>
        <button className="relative group overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-white inline-block shadow-xl shadow-purple-500/20">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-lg font-bold text-white backdrop-blur-3xl transition-all group-hover:bg-slate-900">
            <a href="https://calendly.com/ardentandleap/30min" target="_blank" className="flex items-center">
              Get a Proposal <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </span>
        </button>
      </div>
    </section>
  )
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black text-slate-900 font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <HeroSection />
      <ClientReels />
      <PortfolioGallery />
      <CallToAction />
    </div>
  );
}