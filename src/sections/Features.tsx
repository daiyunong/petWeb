import { useEffect, useRef, useState } from 'react';
import { MessageCircle, Users, ShoppingCart, Brain, Heart, Sparkles } from 'lucide-react';

const Features = () => {
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

  const features = [
    {
      icon: MessageCircle,
      title: '宠物分身',
      description:
        'AI拟人化聊天、健康咨询、情感陪伴，解决"宠物在想什么"的永恒谜题。基于MBTI性格模型，让每只宠物都有独特的说话风格。',
      color: '#f8bb2c',
      offset: 0,
    },
    {
      icon: Users,
      title: '宠物圈',
      description:
        'AI自主发朋友圈、主人偷看/转发，强化宠物"人格"认知，创造社交传播裂变。不可编辑、不可删除的真实感设计。',
      color: '#f5d382',
      offset: 40,
    },
    {
      icon: ShoppingCart,
      title: 'AI买手',
      description:
        '智能商品推荐、全网比价，解决信息过载与决策疲劳。基于对话数据精准推荐，完成商业变现。',
      color: '#f6e2ba',
      offset: 80,
    },
  ];

  const additionalFeatures = [
    { icon: Brain, text: '长期记忆系统' },
    { icon: Heart, text: '情感陪伴' },
    { icon: Sparkles, text: '个性化推荐' },
  ];

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-[#fafafa]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            三大核心能力
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
            聊天、社交、购物，形成完整的用户体验闭环
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
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
                marginTop: `${feature.offset}px`,
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`relative bg-white rounded-3xl p-8 shadow-lg transition-all duration-500 ${
                  hoveredCard === index
                    ? 'shadow-2xl -translate-y-3'
                    : ''
                }`}
                style={{
                  transitionTimingFunction: 'var(--ease-expo-out)',
                  transform:
                    hoveredCard === index
                      ? 'perspective(1000px) rotateX(-5deg) translateY(-12px)'
                      : 'perspective(1000px) rotateX(0deg) translateY(0)',
                }}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
                    hoveredCard === index ? 'scale-110 rotate-6' : ''
                  }`}
                  style={{
                    backgroundColor: `${feature.color}30`,
                    transitionTimingFunction: 'var(--ease-elastic)',
                  }}
                >
                  <feature.icon
                    className="w-8 h-8"
                    style={{ color: feature.color }}
                  />
                </div>

                {/* Content */}
                <h3
                  className="text-xl font-bold text-[#1f1f1f] mb-3"
                  style={{ fontFamily: "'Baloo Chettan 2', cursive" }}
                >
                  {feature.title}
                </h3>
                <p className="text-[#6f6f6f] leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Border Effect */}
                <div
                  className={`absolute inset-0 rounded-3xl border-2 transition-all duration-500 pointer-events-none ${
                    hoveredCard === index
                      ? 'border-[#f8bb2c] opacity-100'
                      : 'border-transparent opacity-0'
                  }`}
                  style={{
                    boxShadow:
                      hoveredCard === index
                        ? '0 0 20px rgba(248, 187, 44, 0.3)'
                        : 'none',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div
          className={`mt-16 flex flex-wrap justify-center gap-6 transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionDelay: '700ms',
            transitionTimingFunction: 'var(--ease-expo-out)',
          }}
        >
          {additionalFeatures.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-full bg-[#f8bb2c]/20 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-[#f8bb2c]" />
              </div>
              <span className="font-medium text-[#1f1f1f]">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
