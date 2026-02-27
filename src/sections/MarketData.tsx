import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, DollarSign, Target } from 'lucide-react';

const MarketData = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    market: 0,
    users: 0,
    growth: 0,
    penetration: 0,
  });
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

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      market: 3126,
      users: 69,
      growth: 53,
      penetration: 30,
    };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts({
        market: Math.round(targets.market * easeOut),
        users: Math.round(targets.users * easeOut),
        growth: Math.round(targets.growth * easeOut),
        penetration: Math.round(targets.penetration * easeOut),
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  const stats = [
    {
      icon: DollarSign,
      value: counts.market,
      suffix: '亿',
      label: '市场规模(元)',
      description: '2025年中国城镇宠物消费市场规模',
      color: '#f8bb2c',
    },
    {
      icon: Users,
      value: counts.users,
      suffix: '%',
      label: '年轻用户占比',
      description: '90后/00后宠主合计占比',
      color: '#f5d382',
    },
    {
      icon: TrendingUp,
      value: counts.growth,
      suffix: '%',
      label: '年增长率',
      description: '快手电商宠物行业GMV增长',
      color: '#f6e2ba',
    },
    {
      icon: Target,
      value: counts.penetration,
      suffix: '%',
      label: '目标渗透率',
      description: '预计购买决策渗透比例',
      color: '#f8bb2c',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-[#1f1f1f] to-[#2d2d2d] relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#f8bb2c]/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#f5d382]/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{
              fontFamily: "'Baloo Chettan 2', cursive",
              transitionTimingFunction: 'var(--ease-expo-out)',
            }}
          >
            市场机会
          </h2>
          <p
            className={`text-lg text-gray-400 max-w-2xl mx-auto transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: '100ms',
              transitionTimingFunction: 'var(--ease-expo-out)',
            }}
          >
            中国宠物市场正处于高速增长期，AI技术将重塑行业格局
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${200 + index * 100}ms`,
                transitionTimingFunction: 'var(--ease-expo-out)',
              }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${stat.color}20` }}
                >
                  <stat.icon
                    className="w-7 h-7"
                    style={{ color: stat.color }}
                  />
                </div>

                {/* Value */}
                <div
                  className="text-4xl sm:text-5xl font-bold mb-2"
                  style={{
                    fontFamily: "'Baloo Chettan 2', cursive",
                    color: stat.color,
                  }}
                >
                  {stat.value}
                  <span className="text-2xl">{stat.suffix}</span>
                </div>

                {/* Label */}
                <div className="text-white font-semibold mb-2">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="text-sm text-gray-400">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 text-center transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionDelay: '600ms',
            transitionTimingFunction: 'var(--ease-expo-out)',
          }}
        >
          <p className="text-gray-400 mb-6">
            情绪经济市场规模预计2029年将达到{' '}
            <span className="text-[#f8bb2c] font-bold">46211亿元</span>
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#f8bb2c]/20 text-[#f8bb2c]">
            <TrendingUp className="w-5 h-5" />
            <span className="font-medium">宠物经济正成为情绪经济的重要组成部分</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketData;
