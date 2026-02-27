import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { PawPrint, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首页', href: '#hero' },
    { name: '功能', href: '#features' },
    { name: '关于', href: '#about' },
    { name: '定价', href: '#pricing' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
      style={{
        transitionTimingFunction: 'var(--ease-expo-out)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <PawPrint
                className={`w-8 h-8 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 ${
                  isScrolled ? 'text-[#f8bb2c]' : 'text-[#f8bb2c]'
                }`}
                style={{ transitionTimingFunction: 'var(--ease-elastic)' }}
              />
            </div>
            <span
              className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-[#1f1f1f]' : 'text-[#1f1f1f]'
              }`}
              style={{ fontFamily: "'Baloo Chettan 2', cursive" }}
            >
              PetAI
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`relative text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                  isScrolled
                    ? 'text-[#6f6f6f] hover:text-[#1f1f1f]'
                    : 'text-[#6f6f6f] hover:text-[#1f1f1f]'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  transitionTimingFunction: 'var(--ease-expo-out)',
                }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#f8bb2c] transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-[#f8bb2c] hover:bg-[#e5a820] text-[#1f1f1f] font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#f8bb2c]/30"
              style={{ transitionTimingFunction: 'var(--ease-elastic)' }}
            >
              下载应用
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#1f1f1f]" />
            ) : (
              <Menu className="w-6 h-6 text-[#1f1f1f]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-80 mt-4' : 'max-h-0'
          }`}
          style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
        >
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="block py-3 px-4 text-[#6f6f6f] hover:text-[#1f1f1f] hover:bg-[#f8bb2c]/10 rounded-lg transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full mt-4 bg-[#f8bb2c] hover:bg-[#e5a820] text-[#1f1f1f] font-semibold rounded-full">
              下载应用
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
