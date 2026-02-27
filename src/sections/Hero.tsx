import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, PawPrint, Play } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setMousePosition({ x: x * 8, y: y * 8 });
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const titleWords = ['让宠物"活"在', '手机里的', '数字生命体'];

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#fafafa] via-white to-[#f6e2ba]/30"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Circles */}
        <div
          className="absolute top-20 left-10 w-20 h-20 rounded-full bg-[#f8bb2c]/20 animate-float"
          style={{ animationDelay: '0s' }}
        />
        <div
          className="absolute top-40 right-20 w-32 h-32 rounded-full bg-[#f5d382]/20 animate-float-slow"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute bottom-40 left-1/4 w-16 h-16 rounded-full bg-[#f6e2ba]/40 animate-float"
          style={{ animationDelay: '2s' }}
        />
        
        {/* Paw Print Decorations */}
        <div
          className="absolute top-32 right-1/3 opacity-20 animate-float-slow"
          style={{ animationDelay: '0.5s' }}
        >
          <PawPrint className="w-16 h-16 text-[#f8bb2c]" />
        </div>
        <div
          className="absolute bottom-32 left-20 opacity-15 animate-float"
          style={{ animationDelay: '1.5s' }}
        >
          <PawPrint className="w-12 h-12 text-[#f8bb2c]" />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-[#f8bb2c]/20 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-[#f5d382]/20 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Title */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1f1f1f] leading-tight"
              style={{ fontFamily: "'Baloo Chettan 2', cursive" }}
            >
              {titleWords.map((word, index) => (
                <span
                  key={index}
                  className={`inline-block transition-all duration-700 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: `${200 + index * 80}ms`,
                    transitionTimingFunction: 'var(--ease-expo-out)',
                  }}
                >
                  {word}
                  {index < titleWords.length - 1 && <br />}
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            <p
              className={`text-lg sm:text-xl text-[#6f6f6f] max-w-xl leading-relaxed transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: '500ms',
                transitionTimingFunction: 'var(--ease-expo-out)',
              }}
            >
              PetAI通过AI技术创造具有独立数字人格的交互主体，让宠物从物理世界的被动存在，转化为数字世界的主动参与者。
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: '700ms',
                transitionTimingFunction: 'var(--ease-expo-out)',
              }}
            >
              <Button
                size="lg"
                className="bg-[#f8bb2c] hover:bg-[#e5a820] text-[#1f1f1f] font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#f8bb2c]/30 group"
                style={{ transitionTimingFunction: 'var(--ease-elastic)' }}
              >
                立即体验
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#d1d1d1] hover:border-[#f8bb2c] text-[#1f1f1f] font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:bg-[#f8bb2c]/10 group"
              >
                <Play className="mr-2 w-5 h-5 text-[#f8bb2c]" />
                了解更多
              </Button>
            </div>

            {/* Stats */}
            <div
              className={`flex gap-8 pt-4 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: '900ms',
                transitionTimingFunction: 'var(--ease-expo-out)',
              }}
            >
              {[
                { value: '3126亿', label: '市场规模(元)' },
                { value: '69%', label: '年轻用户占比' },
                { value: '24h', label: '全天候陪伴' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div
                    className="text-2xl sm:text-3xl font-bold text-[#f8bb2c]"
                    style={{ fontFamily: "'Baloo Chettan 2', cursive" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#6f6f6f]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div
            ref={imageRef}
            className={`relative transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-x-0 rotate-0'
                : 'opacity-0 translate-x-20 -rotate-3'
            }`}
            style={{
              transitionDelay: '400ms',
              transitionTimingFunction: 'var(--ease-expo-out)',
              transform: `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)`,
            }}
          >
            {/* Main Image Container */}
            <div className="relative">
              {/* Decorative Elements Behind Image */}
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-[#f8bb2c]/30 animate-pulse-slow" />
              <div
                className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-[#f5d382]/40 animate-float"
                style={{ animationDelay: '1s' }}
              />
              
              {/* Paw Print Behind */}
              <div
                className="absolute -top-8 right-10 opacity-30 animate-float-slow"
                style={{ animationDelay: '0.8s' }}
              >
                <PawPrint className="w-20 h-20 text-[#f8bb2c]" />
              </div>

              {/* Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#f8bb2c]/20">
                <img
                  src="/hero-image.jpg"
                  alt="PetAI - 让宠物活在手机里"
                  className="w-full h-auto object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#f8bb2c]/10 to-transparent" />
              </div>

              {/* Floating Badge */}
              <div
                className={`absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-90'
                }`}
                style={{
                  transitionDelay: '1000ms',
                  transitionTimingFunction: 'var(--ease-elastic)',
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#f8bb2c]/20 flex items-center justify-center">
                    <PawPrint className="w-6 h-6 text-[#f8bb2c]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#1f1f1f]">AI 宠物分身</div>
                    <div className="text-xs text-[#6f6f6f]">正在在线互动</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
