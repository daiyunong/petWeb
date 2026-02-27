import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PawPrint, Send, MessageCircle } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const footerLinks = {
    quickLinks: [
      { name: '首页', href: '#hero' },
      { name: '功能', href: '#features' },
      { name: '关于', href: '#about' },
      { name: '定价', href: '#pricing' },
      { name: '博客', href: '#' },
    ],
    support: [
      { name: '帮助中心', href: '#' },
      { name: '联系我们', href: '#' },
      { name: '隐私政策', href: '#' },
      { name: '服务条款', href: '#' },
    ],
  };

  const socialLinks = [
    { name: '微信', icon: MessageCircle },
    { name: '微博', icon: MessageCircle },
    { name: '抖音', icon: MessageCircle },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#1f1f1f] text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="flex items-center gap-2 mb-6 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#f8bb2c]/20 flex items-center justify-center group-hover:bg-[#f8bb2c]/30 transition-colors">
                <PawPrint className="w-6 h-6 text-[#f8bb2c]" />
              </div>
              <span
                className="text-xl font-bold"
                style={{ fontFamily: "'Baloo Chettan 2', cursive" }}
              >
                PetAI
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              让宠物"活"在手机里的数字生命体。通过AI技术创造具有独立数字人格的交互主体，建立更深层的情感连接。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-lg font-bold mb-6"
              style={{ fontFamily: "'Baloo Chettan 2', cursive" }}
            >
              快速链接
            </h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-gray-400 hover:text-[#f8bb2c] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3
              className="text-lg font-bold mb-6"
              style={{ fontFamily: "'Baloo Chettan 2', cursive" }}
            >
              支持
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#f8bb2c] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3
              className="text-lg font-bold mb-6"
              style={{ fontFamily: "'Baloo Chettan 2', cursive" }}
            >
              订阅更新
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              获取最新产品动态和宠物养护知识
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="输入邮箱"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-[#f8bb2c] focus:ring-[#f8bb2c]/20"
              />
              <Button
                type="submit"
                className="bg-[#f8bb2c] hover:bg-[#e5a820] text-[#1f1f1f] px-4"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
            {isSubscribed && (
              <p className="text-[#f8bb2c] text-sm mt-2">订阅成功！</p>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © 2025 PetAI. 保留所有权利。
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#f8bb2c]/20 transition-all duration-300 hover:scale-110 group"
                  title={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-[#f8bb2c] transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
