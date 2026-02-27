import { useEffect, useRef, useState } from 'react';
import { ArrowRight, MessageCircle, Share2, ShoppingBag } from 'lucide-react';

const ProductShowcase = () => {
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections((prev) => new Set([...prev, index]));
            }
          });
        },
        { threshold: 0.2, rootMargin: '-50px' }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const products = [
    {
      title: '宠物分身——AI驱动的拟人化对话系统',
      description:
        '通过MBTI性格测试建立宠物人格模型，结合品种特征与长期记忆系统，让每只宠物拥有独特的说话风格和持续的情感连接。健康咨询、情感陪伴、养宠决策，一站式解决。',
      image: '/product-1.jpg',
      features: [
        { icon: MessageCircle, text: 'AI拟人化聊天' },
        { icon: Share2, text: '长期记忆系统' },
        { icon: ShoppingBag, text: '智能健康咨询' },
      ],
      reverse: false,
    },
    {
      title: '宠物圈——宠物自主的社交媒体系统',
      description:
        '宠物AI自主生成并发布内容，主人仅拥有"偷看"和"转发"权限。这种"失控感"设计创造了真实感和好奇心缺口，让主人每天想打开看看它在干啥。',
      image: '/product-2.jpg',
      features: [
        { icon: MessageCircle, text: 'AI自主发朋友圈' },
        { icon: Share2, text: '主人偷看/转发' },
        { icon: ShoppingBag, text: '创造社交裂变' },
      ],
      reverse: true,
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1f1f1f] mb-4"
            style={{ fontFamily: "'Baloo Chettan 2', cursive" }}
          >
            核心产品功能
          </h2>
          <p className="text-lg text-[#6f6f6f] max-w-2xl mx-auto">
            聊天、社交、购物三大能力，形成完整的用户体验闭环
          </p>
        </div>

        {/* Products */}
        <div className="space-y-32">
          {products.map((product, index) => (
            <div
              key={index}
              ref={(el) => { sectionRefs.current[index] = el; }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                product.reverse ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div
                className={`relative ${product.reverse ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <div
                  className={`relative transition-all duration-1000 ${
                    visibleSections.has(index)
                      ? 'opacity-100 translate-x-0 rotate-0'
                      : `opacity-0 ${product.reverse ? 'translate-x-20 rotate-3' : '-translate-x-20 -rotate-3'}`
                  }`}
                  style={{
                    transitionTimingFunction: 'var(--ease-expo-out)',
                  }}
                >
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl bg-[#f8bb2c]/20" />
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-[#f5d382]/30" />

                  {/* Image */}
                  <div className="relative rounded-3xl overflow-hidden shadow-xl">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div
                className={`${product.reverse ? 'lg:order-1' : 'lg:order-2'}`}
              >
                <div
                  className={`space-y-6 transition-all duration-700 ${
                    visibleSections.has(index)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: '200ms',
                    transitionTimingFunction: 'var(--ease-expo-out)',
                  }}
                >
                  <h3
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1f1f1f] leading-tight"
                    style={{ fontFamily: "'Baloo Chettan 2', cursive" }}
                  >
                    {product.title}
                  </h3>

                  <p className="text-lg text-[#6f6f6f] leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    {product.features.map((feature, fIndex) => (
                      <div
                        key={fIndex}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full bg-[#f8bb2c]/10 transition-all duration-500 ${
                          visibleSections.has(index)
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 -translate-x-4'
                        }`}
                        style={{
                          transitionDelay: `${400 + fIndex * 100}ms`,
                          transitionTimingFunction: 'var(--ease-expo-out)',
                        }}
                      >
                        <feature.icon className="w-4 h-4 text-[#f8bb2c]" />
                        <span className="text-sm font-medium text-[#1f1f1f]">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="#features"
                    className={`inline-flex items-center gap-2 text-[#f8bb2c] font-semibold group transition-all duration-500 ${
                      visibleSections.has(index)
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 -translate-x-4'
                    }`}
                    style={{
                      transitionDelay: '600ms',
                      transitionTimingFunction: 'var(--ease-expo-out)',
                    }}
                  >
                    了解更多
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                    <span className="h-0.5 w-0 bg-[#f8bb2c] transition-all duration-300 group-hover:w-12" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
