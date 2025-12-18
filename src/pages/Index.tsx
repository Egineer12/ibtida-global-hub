import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import WhoWeAre from "@/components/home/WhoWeAre";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Industries from "@/components/home/Industries";
import FinalCTA from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhoWeAre />
      <ServicesOverview />
      <WhyChooseUs />
      <Industries />
      <FinalCTA />
    </Layout>
  );
};

export default Index;
