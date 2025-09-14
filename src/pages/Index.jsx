import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { Camera, Leaf, TrendingUp, Users, CheckCircle, ArrowRight, Upload, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-farmer.jpg";

const Index = () => {
  const features = [
    {
      icon: Camera,
      title: "AI-Powered Detection",
      description: "Upload crop images for instant disease identification with 95%+ accuracy",
      color: "text-success"
    },
    {
      icon: Zap,
      title: "Real-time Results",
      description: "Get immediate diagnosis and treatment recommendations in seconds",
      color: "text-warning"
    },
    {
      icon: Shield,
      title: "Offline Ready",
      description: "Works seamlessly even with poor internet connectivity in rural areas",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      title: "Yield Protection",
      description: "Early detection saves up to 40% of potential crop losses",
      color: "text-accent"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Punjab, India",
      crop: "Wheat",
      savings: "₹45,000",
      quote: "Cropthena detected rust disease in my wheat field before I even noticed. Saved my entire harvest!"
    },
    {
      name: "Maria Santos",
      location: "São Paulo, Brazil", 
      crop: "Soybeans",
      savings: "$3,200",
      quote: "The app works perfectly even with poor internet. Helped me treat blight early and saved my season."
    },
    {
      name: "James Mitchell",
      location: "Iowa, USA",
      crop: "Corn",
      savings: "$8,500",
      quote: "Quick, accurate, and easy to use. This app has become essential for my farming operations."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-primary">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
                <Leaf className="w-4 h-4 mr-2" />
                AI-Powered Crop Protection
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Protect Your Crops with
                <span className="text-accent block mt-2">Smart Detection</span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Identify crop diseases instantly using your smartphone. Get expert treatment recommendations and save your harvest with cutting-edge AI technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  asChild 
                  variant="hero" 
                  size="xl"
                  className="group"
                >
                  <Link to="/upload" className="inline-flex items-center">
                    <Upload className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    Start Detection
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-radial from-accent/30 to-transparent rounded-3xl" />
              <img 
                src={heroImage}
                alt="Farmer using smartphone for crop detection in field"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl shadow-elegant transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">
              <Zap className="w-4 h-4 mr-2" />
              Core Features
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Why Choose <span className="text-primary">Cropthena?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI-powered platform combines cutting-edge computer vision with agricultural expertise 
              to deliver accurate, fast, and reliable crop disease detection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border-border/50">
                  <CardHeader className="text-center pb-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-card mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                      <IconComponent className={`w-8 h-8 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">
              <Camera className="w-4 h-4 mr-2" />
              Simple Process
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Crop Protection in <span className="text-primary">3 Easy Steps</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-primary text-white text-2xl font-bold mb-6 mx-auto group-hover:scale-110 transition-transform shadow-soft">
                1
              </div>
              <h3 className="text-2xl font-semibold mb-4">Capture</h3>
              <p className="text-muted-foreground text-lg">
                Take a clear photo of affected crop leaves using your smartphone camera
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-primary text-white text-2xl font-bold mb-6 mx-auto group-hover:scale-110 transition-transform shadow-soft">
                2
              </div>
              <h3 className="text-2xl font-semibold mb-4">Analyze</h3>
              <p className="text-muted-foreground text-lg">
                Our AI instantly processes the image and identifies potential diseases
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-primary text-white text-2xl font-bold mb-6 mx-auto group-hover:scale-110 transition-transform shadow-soft">
                3
              </div>
              <h3 className="text-2xl font-semibold mb-4">Act</h3>
              <p className="text-muted-foreground text-lg">
                Get immediate treatment recommendations and save your crops
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="farmer" size="lg">
              <Link to="/upload">
                Try It Now - It's Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">
              <Users className="w-4 h-4 mr-2" />
              Success Stories
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Trusted by <span className="text-primary">10,000+</span> Farmers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real farmers sharing how Cropthena helped them protect their crops and increase their yields.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300 border-border/50">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.location}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary">{testimonial.crop}</Badge>
                    <Badge className="bg-success/10 text-success border-success/20">
                      Saved {testimonial.savings}
                    </Badge>
                  </div>
                  <blockquote className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center mt-4 text-warning">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to Protect Your Crops?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of farmers who trust Cropthena for crop disease detection. 
            Start protecting your harvest today - completely free.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild variant="hero" size="xl" className="group">
              <Link to="/upload">
                <Upload className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Start Free Detection
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">10,000+</div>
              <div className="text-white/80">Happy Farmers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">95%+</div>
              <div className="text-white/80">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">40%</div>
              <div className="text-white/80">Yield Protection</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Cropthena</span>
              </div>
              <p className="text-muted-foreground mb-4">
                AI-powered crop disease detection for modern farmers. 
                Protecting harvests through smart technology.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/upload" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Disease Detection
                </Link>
                <Link to="/dashboard" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Dashboard
                </Link>
                <Link to="/history" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Detection History
                </Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>support@cropthena.com</p>
                <p>+1 (555) 123-4567</p>
                <p>Available 24/7 for farmers</p>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Cropthena. Empowering farmers through AI technology.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;