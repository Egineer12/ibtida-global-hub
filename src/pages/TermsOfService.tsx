import Layout from "@/components/layout/Layout";

const TermsOfService = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero-bg text-primary-foreground py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Terms of Service
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
                  1. Agreement to Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using the services of MD Ibtida Global Services (Pvt Ltd), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                  2. Services
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We provide outsourcing services including but not limited to business process outsourcing, finance and accounting, customer support, data management, technology support, and tax & transfer pricing services. The specific scope of services will be defined in individual service agreements.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                  3. Client Responsibilities
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As a client, you agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the confidentiality of your account</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Pay for services as agreed in the service agreement</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                  4. Confidentiality
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain strict confidentiality of all client information and data. All team members are bound by non-disclosure agreements. We implement industry-standard security measures to protect your data.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                  5. Intellectual Property
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  All work product created by us for clients remains the property of the client unless otherwise specified in the service agreement. Our proprietary tools, methodologies, and processes remain our intellectual property.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                  6. Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by law, MD Ibtida Global Services shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to our services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                  7. Termination
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate the service agreement with written notice as specified in the individual agreement. Upon termination, all outstanding fees become due and payable.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                  8. Governing Law
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms of Service shall be governed by and construed in accordance with the laws of Pakistan. Any disputes arising shall be subject to the exclusive jurisdiction of the courts of Lahore, Pakistan.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                  9. Changes to Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms of Service at any time. Changes will be effective upon posting to our website. Your continued use of our services constitutes acceptance of the modified terms.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                  10. Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms of Service, please contact us at:
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

export default TermsOfService;
