import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Sparkles } from 'lucide-react';

const Pricing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const plans = [
    {
      name: '基础版',
      price: '0',
      period: '月',
      description: '适合初次体验的用户',
      features: [
        '基础对话功能',
        '每日3条朋友圈',
        '基础商品推荐',
        '标准客服支持',
      ],
      cta: '开始使用',
      highlighted: false,
    },
    {
      name: '专业版',
      price: '19.9',
      period: '月',
      description: '解锁全部高级功能',
      features: [
        '无限对话次数',
        '无限朋友圈发布',
        '高级AI买手',
        '专属性格定制',
        '优先客服支持',
        '独家装扮道具',
      ],
      cta: '立即升级',
      highlighted: true,
    },
  ];

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-24 bg-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1f1f1f] mb-4 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-95'
            }`}
            style={{
              fontFamily: "'Baloo Chettan 2', cursive",
              transitionTimingFunction: 'var(--ease-expo-out)',
            }}
          >
            简单定价
          </h2>
          <p
            className={`text-lg text-[#6f6f6f] max-w-2xl mx-auto transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
            style={{
              transitionDelay: '100ms',
              transitionTimingFunction: 'var(--ease-expo-out)',
            }}
          >
            选择适合你的方案
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${200 + index * 150}ms`,
                transitionTimingFunction: 'var(--ease-expo-out)',
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`relative rounded-3xl p-8 h-full transition-all duration-500 ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-[#f8bb2c] to-[#f5d382] text-[#1f1f1f]'
                    : 'bg-white border-2 border-[#e5e5e5] hover:border-[#f8bb2c]'
                } ${
                  hoveredCard === index ? '-translate-y-3 shadow-2xl' : ''
                }`}
                style={{
                  transitionTimingFunction: 'var(--ease-expo-out)',
                  transform:
                    hoveredCard === index
                      ? 'perspective(1000px) rotateX(-3deg) rotateY(3deg) translateY(-12px)'
                      : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)',
                }}
              >
                {/* Recommended Badge */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#1f1f1f] text-white text-sm font-medium">
                      <Sparkles className="w-4 h-4" />
                      推荐
                    </div>
                  </div>
                )}

                {/* Plan Name */}
                <div
                  className={`text-xl font-bold mb-2 ${
                    plan.highlighted ? 'text-[#1f1f1f]' : 'text-[#1f1f1f]'
                  }`}
                  style={{ fontFamily: "'Baloo Chettan 2', cursive" }}
                >
                  {plan.name}
                </div>

                {/* Description */}
                <div
                  className={`text-sm mb-6 ${
                    plan.highlighted ? 'text-[#1f1f1f]/70' : 'text-[#6f6f6f]'
                  }`}
                >
                  {plan.description}
                </div>

                {/* Price */}
                <div className="mb-8">
                  <span
                    className={`text-5xl font-bold ${
                      plan.highlighted ? 'text-[#1f1f1f]' : 'text-[#1f1f1f]'
                    }`}
                    style={{ fontFamily: "'Baloo Chettan 2', cursive" }}
                  >
                    ¥{plan.price}
                  </span>
                  <span
                    className={`text-lg ${
                      plan.highlighted ? 'text-[#1f1f1f]/70' : 'text-[#6f6f6f]'
                    }`}
                  >
                    /{plan.period}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className={`flex items-center gap-3 transition-all duration-500 ${
                        isVisible
                          ? 'opacity-100 translate-x-0'
                          : 'opacity-0 -translate-x-4'
                      }`}
                      style={{
                        transitionDelay: `${400 + fIndex * 80}ms`,
                        transitionTimingFunction: 'var(--ease-smooth)',
                      }}
                    >
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          plan.highlighted
                            ? 'bg-[#1f1f1f]/20'
                            : 'bg-[#f8bb2c]/20'
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            plan.highlighted
                              ? 'text-[#1f1f1f]'
                              : 'text-[#f8bb2c]'
                          }`}
                        />
                      </div>
                      <span
                        className={`${
                          plan.highlighted
                            ? 'text-[#1f1f1f]/90'
                            : 'text-[#6f6f6f]'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={`w-full py-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-[#1f1f1f] hover:bg-[#2d2d2d] text-white'
                      : 'bg-[#f8bb2c] hover:bg-[#e5a820] text-[#1f1f1f]'
                  }`}
                  style={{ transitionTimingFunction: 'var(--ease-elastic)' }}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div
          className={`mt-12 text-center transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionDelay: '600ms',
            transitionTimingFunction: 'var(--ease-expo-out)',
          }}
        >
          <p className="text-sm text-[#6f6f6f]">
            所有方案均包含基础功能，可随时升级或取消
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
