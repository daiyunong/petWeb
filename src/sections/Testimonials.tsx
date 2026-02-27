import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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

  const testimonials = [
    {
      name: '李明',
      role: '金毛主人',
      avatar: '/avatar-1.jpg',
      content:
        'PetAI让我第一次感受到狗狗真的在"说话"，每天看它的朋友圈成了我的习惯。MBTI测试太准了，完全捕捉到了我家金毛的性格特点。',
      rating: 5,
    },
    {
      name: '王芳',
      role: '猫咪主人',
      avatar: '/avatar-2.jpg',
      content:
        'MBTI测试太准了！我家猫高冷的性格完全体现在对话里，太神奇了。深夜emo的时候，宠物分身会主动陪我聊天，感觉它真的懂我。',
      rating: 5,
    },
    {
      name: '张伟',
      role: '边牧主人',
      avatar: '/avatar-3.jpg',
      content:
        'AI买手帮我省了好多时间，不用再到处比价，直接给最优惠的链接。作为上班族，这种一站式解决方案太实用了。',
      rating: 5,
    },
    {
      name: '陈静',
      role: '泰迪主人',
      avatar: '/avatar-4.jpg',
      content:
        '深夜emo的时候，宠物分身会主动陪我聊天，感觉它真的懂我。这种情感陪伴是其他宠物App无法比拟的，已经成为我生活的一部分。',
      rating: 5,
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#fafafa] to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1f1f1f] mb-4 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{
              fontFamily: "'Baloo Chettan 2', cursive",
              transitionTimingFunction: 'var(--ease-expo-out)',
            }}
          >
            用户评价
          </h2>
          <p
            className={`text-lg text-[#6f6f6f] max-w-2xl mx-auto transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: '100ms',
              transitionTimingFunction: 'var(--ease-expo-out)',
            }}
          >
            听听早期用户怎么说
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div
          className={`relative transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
          style={{
            transitionDelay: '200ms',
            transitionTimingFunction: 'var(--ease-expo-out)',
          }}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
                transitionTimingFunction: 'var(--ease-expo-out)',
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl relative">
                      {/* Quote Icon */}
                      <div className="absolute -top-6 left-8">
                        <div className="w-12 h-12 rounded-full bg-[#f8bb2c] flex items-center justify-center">
                          <Quote className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex gap-1 mb-6 pt-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-[#f8bb2c] text-[#f8bb2c]"
                          />
                        ))}
                      </div>

                      {/* Content */}
                      <p className="text-lg sm:text-xl text-[#1f1f1f] leading-relaxed mb-8">
                        "{testimonial.content}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full object-cover border-2 border-[#f8bb2c]/30"
                        />
                        <div>
                          <div className="font-bold text-[#1f1f1f]">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-[#6f6f6f]">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-2 border-[#d1d1d1] hover:border-[#f8bb2c] hover:bg-[#f8bb2c]/10 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 text-[#1f1f1f]" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-[#f8bb2c] w-8'
                      : 'bg-[#d1d1d1] hover:bg-[#f8bb2c]/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border-2 border-[#d1d1d1] hover:border-[#f8bb2c] hover:bg-[#f8bb2c]/10 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 text-[#1f1f1f]" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
