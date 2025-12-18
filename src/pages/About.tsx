import Layout from "@/components/layout/Layout";
import { CheckCircle, Target, Eye, Heart, Award, Globe, Shield, Clock, Zap, Users } from "lucide-react";

const values = [
  { icon: Heart, name: "Integrity", description: "We conduct business with honesty and transparency." },
  { icon: Award, name: "Excellence", description: "We strive for the highest quality in everything we do." },
  { icon: Zap, name: "Innovation", description: "We embrace new technologies and creative solutions." },
  { icon: Shield, name: "Reliability", description: "We deliver consistent results you can count on." },
  { icon: Globe, name: "Global Mindset", description: "We think globally while acting locally." },
];

const differentiators = [
  "AI-powered workflows",
  "Trained offshore delivery teams",
  "Deep expertise in tax & transfer pricing",
  "Strong compliance culture",
  "Global coverage across GCC, UK, EU, US, Canada",
  "SLA-driven quality delivery",
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero-bg text-primary-foreground py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 animate-slide-up">
              Where Outsourcing Meets Intelligence
            </h1>
            <p className="text-lg text-primary-foreground/80 animate-slide-up animation-delay-100">
              Discover how MD Ibtida Global Services is transforming the outsourcing landscape with AI-powered solutions and expert talent.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-heading font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-6">
                A New Beginning in Global Outsourcing
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                MD Ibtida Global Services (Pvt Ltd) was founded to deliver world-class outsourcing solutions from Pakistan to the world.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "Ibtida" means <span className="text-primary font-semibold">beginning</span> — and we help businesses begin their journey toward smarter, faster, more efficient operations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We blend technology, AI, and human capability to create a powerful operational engine for modern global companies.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-64 h-64 bg-primary/10 rounded-3xl" />
              <div className="relative bg-card rounded-2xl shadow-custom-xl overflow-hidden border border-border">
                <div className="gradient-bg p-8 text-primary-foreground">
                  <Clock className="w-12 h-12 mb-4" />
                  <h3 className="font-heading font-bold text-2xl mb-2">Since Day One</h3>
                  <p className="text-primary-foreground/80">Committed to excellence and innovation</p>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-heading font-bold gradient-text">50+</div>
                      <div className="text-sm text-muted-foreground">Team Members</div>
                    </div>
                    <div>
                      <div className="text-3xl font-heading font-bold gradient-text">100+</div>
                      <div className="text-sm text-muted-foreground">Projects Delivered</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with technology-enabled outsourcing services that enhance efficiency, improve accuracy, and reduce cost.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become Pakistan's leading globally-recognized outsourcing partner delivering intelligent, reliable, and scalable solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-heading font-semibold text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">
              What Drives Us Forward
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="font-heading font-semibold text-lg text-foreground mb-2">{value.name}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-heading font-semibold text-sm uppercase tracking-wider">
                Our Edge
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-6">
                What Makes Us Different
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We combine cutting-edge AI technology with highly skilled professionals to deliver outsourcing solutions that exceed expectations.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {differentiators.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <Users className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-2xl font-heading font-bold text-foreground">GCC</div>
                <div className="text-sm text-muted-foreground">Coverage</div>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <Globe className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-2xl font-heading font-bold text-foreground">UK & EU</div>
                <div className="text-sm text-muted-foreground">Coverage</div>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-2xl font-heading font-bold text-foreground">US</div>
                <div className="text-sm text-muted-foreground">Coverage</div>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <Award className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-2xl font-heading font-bold text-foreground">Canada</div>
                <div className="text-sm text-muted-foreground">Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
