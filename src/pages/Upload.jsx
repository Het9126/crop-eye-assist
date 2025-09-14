import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import ImageUploader from '@/components/ImageUploader';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Lightbulb, 
  Camera, 
  Sun, 
  Focus, 
  Leaf,
  ArrowLeft
} from 'lucide-react';

const Upload = () => {
  const navigate = useNavigate();
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = async (uploadData) => {
    setIsUploading(true);
    
    // Mock processing time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Navigate to results with mock data
    navigate('/results', { 
      state: { 
        ...uploadData,
        result: {
          disease: 'Brown Spot',
          confidence: 87,
          severity: 'Moderate',
          treatment: 'Apply copper-based fungicide',
          costSavings: '₹15,000'
        }
      } 
    });
  };

  const tips = [
    {
      icon: Sun,
      title: 'Good Lighting',
      description: 'Use natural daylight or bright indoor lighting'
    },
    {
      icon: Focus,
      title: 'Clear Focus',
      description: 'Ensure the affected area is sharp and in focus'
    },
    {
      icon: Leaf,
      title: 'Fill Frame',
      description: 'The leaf should fill most of the image frame'
    },
    {
      icon: Camera,
      title: 'Multiple Angles',
      description: 'Capture both sides of the leaf if possible'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="space-y-6 mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
          
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
              Crop Disease Detection
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Upload a clear image of your crop to get instant disease detection and treatment recommendations
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Upload Section */}
          <div className="lg:col-span-2">
            <ImageUploader 
              onUpload={handleUpload}
              className="w-full"
            />

            {/* Upload Guidelines */}
            <Card className="mt-6 p-6 bg-gradient-card">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-accent" />
                Photography Guidelines
              </h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Follow these tips to get the most accurate disease detection results:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Focus on a single leaf or small area showing symptoms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Avoid shadows and ensure even lighting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Keep the image sharp - avoid blur from movement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Include some healthy tissue for comparison</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>

          {/* Tips Sidebar */}
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-hero">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Pro Tips for Best Results
              </h3>
              <div className="space-y-4">
                {tips.map((tip, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <tip.icon className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{tip.title}</h4>
                      <p className="text-sm text-muted-foreground">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Supported Crops */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Supported Crops
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {[
                  'Rice', 'Wheat', 'Tomato', 'Potato', 
                  'Cotton', 'Sugarcane', 'Maize', 'Soybean',
                  'Onion', 'Chili', 'Cabbage', 'Beans'
                ].map((crop, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-muted-foreground">{crop}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                More crops being added regularly based on farmer feedback
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Mobile bottom padding */}
      <div className="h-20 md:h-0"></div>
    </div>
  );
};

export default Upload;