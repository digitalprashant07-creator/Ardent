"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Zap,
  Trophy,
  Target,
  Sparkles,
  X,
  Send,
  ChevronDown,
  Cpu,
  Globe,
  ShoppingCart,
  Cloud,
  Bot,
  Palette,
  Layout,
  Video,
  PenTool,
  Monitor,
  MessageCircle,
  Linkedin,
  Instagram,
  Twitter,
  Menu
} from "lucide-react";


/* ================= NAVBAR ================= */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Portfolio");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isOpen]);

  const handleNavClick = (name) => {
    setActiveLink(name);
    setIsOpen(false);
  };

  return (
    <>
      {/* ================= TOP NAV ================= */}
      <nav
        className={`fixed top-0 w-full z-[120] transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md py-2" : "bg-transparent py-3"
          }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* LOGO */}
          <Link
            href="/"
            className="font-bold text-2xl tracking-tighter flex items-center gap-2 text-black"
          >
            <img
              src="/dark.png"
              alt="logo"
              className="w-60"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <Link href="/about-us" className="hover:text-black">About Us</Link>
            <Link href="/portfolio" className="hover:text-black">Portfolio</Link>

            <div className="group relative">
              <button className="flex items-center gap-1 hover:text-black">
                Services
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
              </button>
              <ServicesMegaMenu />
            </div>

            <Link href="why-us" className="hover:text-black">Why Us</Link>
            <Link href="/contact" className="hover:text-black">Contact Us</Link>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button className="hidden md:block bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium cursor-pointer">
              <a href="https://calendly.com/ardentandleap/30min" target="_blank">
                Schedule Audit Call
              </a>
            </button>

            {/* ✅ HAMBURGER — ALWAYS VISIBLE */}
            <button
              className="md:hidden p-2 relative z-[130] text-black"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 bg-black z-[110] md:hidden transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
      >
        {/* Mobile Top Bar (logo + close) */}
        <div className="absolute top-0 left-0 w-full px-6 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="font-bold text-2xl tracking-tighter flex items-center gap-2 text-white"
          >
            <img
              src="/light.png"
              alt="logo"
              className="w-40"
            />
          </Link>

          <button
            className="text-white"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-7 h-7" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
          {["Home", "About", "Portfolio", "Services"].map((item) => (
            <Link
              key={item}
              href="#"
              onClick={() => handleNavClick(item)}
              className={`text-3xl transition-colors ${activeLink === item
                ? "text-white font-bold"
                : "text-gray-500 hover:text-white"
                }`}
            >
              {item}
            </Link>
          ))}

          <button className="bg-white text-black px-8 py-4 rounded-xl font-bold">
            Book a Strategy Call
          </button>

          <div className="flex gap-6 text-gray-400 pt-10">
            <Twitter />
            <Instagram />
            <Linkedin />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;





const ServicesMegaMenu = () => {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
      <div className="relative bg-white rounded-2xl border border-gray-200 shadow-2xl shadow-purple-500/10 overflow-hidden">
        {/* Magic UI Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"></div>

        {/* Animated Border Beam */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-[shimmer_2s_infinite] opacity-50" />

        <div className="relative z-10 grid grid-cols-2 p-8 gap-8">

          {/* Tech & AI Solutions */}
          <div>
            <div className="flex items-center gap-2 mb-6 text-purple-600">
              <Cpu className="w-5 h-5" />
              <h4 className="font-bold text-sm uppercase tracking-wider">Tech & AI Solutions</h4>
            </div>
            <div className="space-y-2">
              {[
                { name: 'AWS Solutions', icon: <Cloud className="w-4 h-4" /> },
                { name: 'AI Chatbot Development', icon: <MessageCircle className="w-4 h-4" /> },
                { name: 'AI Agents', icon: <Bot className="w-4 h-4" /> },
                { name: 'Custom Web Applications', icon: <Globe className="w-4 h-4" /> },
                { name: 'Shopify Development', icon: <ShoppingCart className="w-4 h-4" /> },
              ].map((service, i) => (
                <Link key={i} href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-purple-50 group/item transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-white border border-purple-100 flex items-center justify-center text-gray-400 group-hover/item:text-purple-600 group-hover/item:border-purple-200 transition-all shadow-sm">
                    {service.icon}
                  </div>
                  <span className="text-gray-600 font-medium group-hover/item:text-gray-900">{service.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Creative Studio */}
          <div>
            <div className="flex items-center gap-2 mb-6 text-blue-600">
              <Palette className="w-5 h-5" />
              <h4 className="font-bold text-sm uppercase tracking-wider">Creative Studio</h4>
            </div>
            <div className="space-y-2">
              {[
                { name: 'Brand Identity', icon: <Target className="w-4 h-4" /> },
                { name: 'Custom Web Design', icon: <Monitor className="w-4 h-4" /> },
                { name: 'UI/UX Design', icon: <Layout className="w-4 h-4" /> },
                { name: 'Graphic Design', icon: <PenTool className="w-4 h-4" /> },
                { name: 'Video Editing', icon: <Video className="w-4 h-4" /> },
              ].map((service, i) => (
                <Link key={i} href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 group/item transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-white border border-blue-100 flex items-center justify-center text-gray-400 group-hover/item:text-blue-600 group-hover/item:border-blue-200 transition-all shadow-sm">
                    {service.icon}
                  </div>
                  <span className="text-gray-600 font-medium group-hover/item:text-gray-900">{service.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        {/* <div className="bg-gray-50 border-t border-gray-100 p-4 text-center">
            <Link href="/services" className="text-sm font-semibold text-gray-500 hover:text-black transition-colors flex items-center justify-center gap-1">
                View All Services <ArrowRight className="w-4 h-4" />
            </Link>
        </div> */}
      </div>
    </div>
  );
};