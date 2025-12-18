import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, Cpu, Users, ShieldCheck } from "lucide-react";

const highlights = [
  { icon: Globe, text: "24/7 Global Delivery" },
  { icon: Cpu, text: "AI-Assisted Operations" },
  { icon: Users, text: "Skilled Talent in Pakistan" },
  { icon: ShieldCheck, text: "Secure & Compliant Outsourcing" },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden gradient-hero-bg text-primary-foreground">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 animate-slide-up">
            AI-Empowered Outsourcing for a Smarter, Faster, Global Business
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-3xl mx-auto animate-slide-up animation-delay-100">
            We help organizations accelerate performance, scale operations, and reduce costs through world-class outsourcing powered by expert talent and AI-driven workflows.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up animation-delay-200">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="font-heading font-semibold uppercase tracking-wide px-8">
                Get a Proposal
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="font-heading font-semibold uppercase tracking-wide px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Book a Discovery Call
              </Button>
            </Link>
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up animation-delay-300">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-primary-foreground/10 backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <item.icon className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium text-center">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
