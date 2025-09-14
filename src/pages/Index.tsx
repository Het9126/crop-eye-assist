import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import { 
  Scan, 
  Shield, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  Star,
  ArrowRight,
  Leaf,
  Smartphone,
  Clock
} from 'lucide-react';
import heroImage from '@/assets/hero-farmer.jpg';

const Index = () => {
  const features = [
    {
      icon: Scan,
      title: 'AI-Powered Detection',
      description: 'Advanced computer vision identifies crop diseases with 95%+ accuracy in seconds'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design', 
      description: 'Works perfectly on any device, even with slow rural internet connections'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your crop data stays private - no external APIs or location tracking'
    },
    {
      icon: Clock,
      title: 'Instant Results',
      description: 'Get disease diagnosis and treatment recommendations in under 30 seconds'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Rice Farmer, Punjab',
      content: 'Cropthena helped me catch brown spot disease early. Saved my entire 5-acre crop!',
      rating: 5
    },
    {
      name: 'Priya Sharma', 
      role: 'Tomato Grower, Maharashtra',
      content: 'The app works even with my old phone. Already prevented ₹50,000 in crop losses.',
      rating: 5
    },
    {
      name: 'Mohammed Ali',
      role: 'Wheat Farmer, Haryana', 
      content: 'Simple to use, accurate results. My go-to tool for crop health monitoring.',
      rating: 5
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Farmers Protected' },
    { number: '95%+', label: 'Detection Accuracy' },
    { number: '₹2Cr+', label: 'Crop Loss Prevented' },
    { number: '15 Sec', label: 'Average Analysis Time' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Protect Your Crops with 
                  <span className="text-primary block">AI-Powered Detection</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Instantly detect crop diseases using just your smartphone camera. 
                  Get accurate diagnosis and treatment recommendations in seconds.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/upload">
                  <Button variant="hero" size="xl" className="w-full sm:w-auto gap-2">
                    <Scan className="w-6 h-6" />
                    Start Detection
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Button variant="farmer" size="xl" className="w-full sm:w-auto">
                  Watch Demo
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-border/50">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-strong">
                <img
                  src={heroImage}
                  alt="Farmer using Cropthena app in field"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-primary/10"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-success rounded-full flex items-center justify-center shadow-glow">
                <Leaf className="w-10 h-10 text-success-foreground" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Powerful Features for Modern Farmers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built specifically for Indian farmers with rural internet and diverse smartphone capabilities in mind
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 bg-gradient-card hover:shadow-medium transition-smooth">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Simple 3-Step Process
            </h2>
            <p className="text-xl text-muted-foreground">
              Get professional crop disease diagnosis in under a minute
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Capture Image', desc: 'Take a clear photo of the affected leaf or plant area' },
              { step: '2', title: 'AI Analysis', desc: 'Our computer vision analyzes the image for disease indicators' },
              { step: '3', title: 'Get Results', desc: 'Receive diagnosis, confidence score, and treatment recommendations' }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-primary-foreground">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Trusted by Farmers Across India
            </h2>
            <p className="text-xl text-muted-foreground">
              Real stories from farmers who've protected their crops with Cropthena
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-gradient-card hover:shadow-medium transition-smooth">
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground italic">"{testimonial.content}"</p>
                  <div className="space-y-1">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Protect Your Crops?
          </h2>
          <p className="text-xl opacity-90">
            Join thousands of farmers already using Cropthena to prevent crop diseases and increase yields
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/upload">
              <Button variant="secondary" size="xl" className="w-full sm:w-auto gap-2">
                <Scan className="w-6 h-6" />
                Start Free Detection
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile bottom padding */}
      <div className="h-20 md:h-0"></div>
    </div>
  );
};

export default Index;
