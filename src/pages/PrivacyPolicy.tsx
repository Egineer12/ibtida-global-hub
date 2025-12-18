import Layout from "@/components/layout/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero-bg text-primary-foreground py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-primary-foreground/80">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border space-y-8">
              <div>
                <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                  1. Introduction
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  MD Ibtida Global Services (Pvt Ltd) ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                  2. Information We Collect
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect information about you in a variety of ways:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Personal data (name, email address, phone number)</li>
                  <li>Business information (company name, job title)</li>
                  <li>Communication data (messages, inquiries)</li>
                  <li>Technical data (IP address, browser type, device information)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide, operate, and maintain our services</li>
                  <li>Respond to your inquiries and communications</li>
                  <li>Send you marketing and promotional materials (with consent)</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                  4. Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                  5. Third-Party Disclosure
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent, except as required by law or as necessary to provide our services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                  6. Your Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                  7. Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at:
                  <br /><br />
                  <strong>Email:</strong> info@mdibtidaglobal.com
                  <br />
                  <strong>Location:</strong> Lahore, Pakistan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
