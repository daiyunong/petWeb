import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import ProductShowcase from './sections/ProductShowcase';
import Features from './sections/Features';
import MarketData from './sections/MarketData';
import Testimonials from './sections/Testimonials';
import Pricing from './sections/Pricing';
import CTA from './sections/CTA';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ProductShowcase />
        <Features />
        <MarketData />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
