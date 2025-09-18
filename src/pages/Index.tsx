import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Shield, Users, Globe, UserPlus, Hospital, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const Index = () => {
  const subNavItems = [
    { href: "/", label: "Overview" },
    { href: "/features", label: "Features" },
    { href: "/mobile-app", label: "Mobile Application" },
    { href: "/faqs", label: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Healthcare", href: "/" },
    { label: "Digital Records", href: "/" },
    { label: "Sanat Care Nexus" }
  ];

  return (
    <Layout 
      title="Sanat Care Nexus" 
      subNavItems={subNavItems}
      breadcrumbItems={breadcrumbItems}
    >
      {/* Main Content Section */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Sanat Care Nexus
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-4xl">
          Everything you need to access and manage secure digital healthcare records for migrant workers — in one web interface
        </p>
        
        <div className="mb-8">
          <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90">
            Sign in
          </Button>
        </div>
      </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center p-6">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <CardTitle className="mb-2">Secure & Private</CardTitle>
            <CardDescription>
              End-to-end encryption ensures your medical data stays private and secure
            </CardDescription>
          </Card>
          
          <Card className="text-center p-6">
            <Globe className="w-12 h-12 text-secondary mx-auto mb-4" />
            <CardTitle className="mb-2">Global Access</CardTitle>
            <CardDescription>
              Access your health records from any participating hospital or clinic worldwide
            </CardDescription>
          </Card>
          
          <Card className="text-center p-6">
            <FileText className="w-12 h-12 text-accent mx-auto mb-4" />
            <CardTitle className="mb-2">Complete Records</CardTitle>
            <CardDescription>
              Store medical history, prescriptions, allergies, and vaccination records
            </CardDescription>
          </Card>
          
          <Card className="text-center p-6">
            <Users className="w-12 h-12 text-success mx-auto mb-4" />
            <CardTitle className="mb-2">Multi-language</CardTitle>
            <CardDescription>
              Available in multiple languages to serve diverse migrant worker communities
            </CardDescription>
          </Card>
        </div>

        {/* Benefits Section */}
        <Card className="mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Why Choose Sanat Care Nexus?</CardTitle>
            <CardDescription className="text-lg">
              Bridging healthcare gaps for migrant workers worldwide
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">For Workers</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Carry your complete medical history wherever you work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Faster emergency treatment with instant access to critical info</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Track vaccinations and health checkups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Share emergency contacts with healthcare providers</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-secondary">For Healthcare Providers</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Instant access to patient medical history and allergies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Reduce medical errors with comprehensive patient data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Streamlined patient registration and documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Secure cross-border healthcare collaboration</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center p-6">
            <CardTitle className="text-3xl text-primary mb-2">50K+</CardTitle>
            <CardDescription>Registered Workers</CardDescription>
          </Card>
          <Card className="text-center p-6">
            <CardTitle className="text-3xl text-secondary mb-2">200+</CardTitle>
            <CardDescription>Partner Hospitals</CardDescription>
          </Card>
          <Card className="text-center p-6">
            <CardTitle className="text-3xl text-accent mb-2">15</CardTitle>
            <CardDescription>Countries Served</CardDescription>
          </Card>
          <Card className="text-center p-6">
            <CardTitle className="text-3xl text-success mb-2">99.9%</CardTitle>
            <CardDescription>Uptime Guarantee</CardDescription>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="text-center p-8 bg-primary text-primary-foreground">
          <CardTitle className="text-2xl mb-4">Ready to Get Started?</CardTitle>
          <CardDescription className="text-primary-foreground/80 mb-6 text-lg">
            Join thousands of migrant workers who trust Sanat Care Nexus with their health records
          </CardDescription>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/worker-registration">
                <UserPlus className="w-5 h-5 mr-2" />
                Register Now
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/health-records">
                <FileText className="w-5 h-5 mr-2" />
                View Demo Records
              </Link>
            </Button>
          </div>
        </Card>
    </Layout>
  );
};

export default Index;
