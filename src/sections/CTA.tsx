import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Mail } from 'lucide-react';

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-[#f8bb2c] via-[#f5d382] to-[#f6e2ba] relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Title */}
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1f1f1f] mb-6 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{
              fontFamily: "'Baloo Chettan 2', cursive",
              transitionTimingFunction: 'var(--ease-expo-out)',
            }}
          >
            准备好让你的宠物"活"起来了吗？
          </h2>

          {/* Subtitle */}
          <p
            className={`text-lg sm:text-xl text-[#1f1f1f]/80 mb-10 max-w-2xl mx-auto transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: '200ms',
              transitionTimingFunction: 'var(--ease-expo-out)',
            }}
          >
            立即下载PetAI，开启与宠物的全新互动方式
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap justify-center gap-4 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-90'
            }`}
            style={{
              transitionDelay: '400ms',
              transitionTimingFunction: 'var(--ease-elastic)',
            }}
          >
            <Button
              size="lg"
              className="bg-[#1f1f1f] hover:bg-[#2d2d2d] text-white font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            >
              <Download className="mr-2 w-5 h-5" />
              立即下载
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-[#1f1f1f]/30 hover:border-[#1f1f1f] bg-white/50 hover:bg-white text-[#1f1f1f] font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300"
            >
              <Mail className="mr-2 w-5 h-5" />
              联系我们
            </Button>
          </div>

          {/* Trust Badges */}
          <div
            className={`mt-12 flex flex-wrap justify-center gap-6 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: '600ms',
              transitionTimingFunction: 'var(--ease-expo-out)',
            }}
          >
            {[
              'iOS & Android',
              '免费下载',
              '隐私保护',
            ].map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm"
              >
                <div className="w-2 h-2 rounded-full bg-[#1f1f1f]" />
                <span className="text-sm font-medium text-[#1f1f1f]">
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
