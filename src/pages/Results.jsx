import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Share2,
  Download,
  Camera,
  Clock,
  Shield,
  DollarSign
} from 'lucide-react';

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get data from upload page or use mock data
  const { preview, result, qualityScore } = location.state || {
    preview: '/placeholder-leaf.jpg',
    result: {
      disease: 'Brown Spot',
      confidence: 87,
      severity: 'Moderate',
      treatment: 'Apply copper-based fungicide every 7-10 days',
      costSavings: '₹15,000'
    },
    qualityScore: 85
  };

  const getConfidenceColor = (confidence) => {
    if (confidence >= 85) return 'text-success';
    if (confidence >= 70) return 'text-warning';
    return 'text-destructive';
  };

  const getSeverityColor = (severity) => {
    switch (severity.toLowerCase()) {
      case 'mild': return 'text-success';
      case 'moderate': return 'text-warning';
      case 'severe': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const treatments = [
    {
      step: 1,
      action: 'Immediate Treatment',
      description: 'Apply copper-based fungicide (Copper oxychloride 50% WP) at 3g/liter',
      timeframe: 'Within 24 hours'
    },
    {
      step: 2,
      action: 'Follow-up Application',
      description: 'Repeat treatment after 7-10 days if symptoms persist',
      timeframe: 'Week 2'
    },
    {
      step: 3,
      action: 'Prevention',
      description: 'Improve field drainage and reduce plant density',
      timeframe: 'Ongoing'
    }
  ];

  const shareResults = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Crop Disease Detection Results',
        text: `Detected ${result.disease} with ${result.confidence}% confidence`,
        url: window.location.href
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="space-y-6 mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/upload')}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            New Detection
          </Button>
          
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
              Detection Results
            </h1>
            <p className="text-xl text-muted-foreground">
              Analysis completed • {new Date().toLocaleString()}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Results */}
          <div className="lg:col-span-2 space-y-6">
            {/* Disease Detection Card */}
            <Card className="p-6 bg-gradient-card">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className={`w-6 h-6 ${getSeverityColor(result.severity)}`} />
                    <h2 className="text-2xl font-bold text-foreground">{result.disease}</h2>
                  </div>
                  
                  <div className="grid sm:grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-muted rounded-lg">
                      <div className={`text-2xl font-bold ${getConfidenceColor(result.confidence)}`}>
                        {result.confidence}%
                      </div>
                      <div className="text-sm text-muted-foreground">Confidence</div>
                    </div>
                    
                    <div className="text-center p-3 bg-muted rounded-lg">
                      <div className={`text-lg font-bold ${getSeverityColor(result.severity)}`}>
                        {result.severity}
                      </div>
                      <div className="text-sm text-muted-foreground">Severity</div>
                    </div>
                    
                    <div className="text-center p-3 bg-muted rounded-lg">
                      <div className="text-lg font-bold text-success">
                        {result.costSavings}
                      </div>
                      <div className="text-sm text-muted-foreground">Potential Savings</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Image Analysis */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Image Analysis
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Uploaded Image</h4>
                  <div className="relative rounded-lg overflow-hidden bg-muted">
                    {preview ? (
                      <img 
                        src={preview} 
                        alt="Crop analysis" 
                        className="w-full h-48 object-cover"
                      />
                    ) : (
                      <div className="w-full h-48 flex items-center justify-center">
                        <Camera className="w-12 h-12 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    Quality Score: {qualityScore}%
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">Detection Overlay</h4>
                  <div className="relative rounded-lg overflow-hidden bg-muted">
                    <div className="w-full h-48 flex items-center justify-center border-2 border-dashed border-primary/30">
                      <div className="text-center text-muted-foreground">
                        <Shield className="w-8 h-8 mx-auto mb-2" />
                        <div className="text-sm">Disease markers identified</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Treatment Plan */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Treatment Recommendations
              </h3>
              
              <div className="space-y-4">
                {treatments.map((treatment, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-muted rounded-lg">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {treatment.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-foreground">{treatment.action}</h4>
                        <span className="text-sm text-muted-foreground">{treatment.timeframe}</span>
                      </div>
                      <p className="text-muted-foreground">{treatment.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-success/10 border border-success/20 rounded-lg">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-success">Expected Outcome</h4>
                    <p className="text-sm text-success/80">
                      With proper treatment, this condition typically shows improvement within 2-3 weeks. 
                      Early intervention can prevent spread to healthy plants.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="upload" size="touch" className="w-full justify-start gap-3">
                  <Camera className="w-5 h-5" />
                  Scan Another Crop
                </Button>
                
                <Button variant="farmer" size="touch" className="w-full justify-start gap-3" onClick={shareResults}>
                  <Share2 className="w-5 h-5" />
                  Share Results
                </Button>
                
                <Button variant="ghost" size="touch" className="w-full justify-start gap-3">
                  <Download className="w-5 h-5" />
                  Download Report
                </Button>
              </div>
            </Card>

            {/* Analysis Details */}
            <Card className="p-6 bg-gradient-hero">
              <h3 className="text-lg font-semibold text-foreground mb-4">Analysis Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Processing Time:</span>
                  <span className="font-medium">2.3 seconds</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">AI Model:</span>
                  <span className="font-medium">CropVision v2.1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Image Quality:</span>
                  <span className="font-medium">{qualityScore}% Good</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Detection ID:</span>
                  <span className="font-medium text-xs">CVD-{Date.now().toString().slice(-6)}</span>
                </div>
              </div>
            </Card>

            {/* Cost Impact */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-success" />
                Economic Impact
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-success/10 rounded-lg">
                  <div className="text-2xl font-bold text-success">{result.costSavings}</div>
                  <div className="text-sm text-success/80">Estimated crop loss prevented</div>
                </div>
                
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>• Treatment cost: ₹500-800</div>
                  <div>• Recovery time: 2-3 weeks</div>
                  <div>• Success rate: 85-90%</div>
                </div>
              </div>
            </Card>

            {/* Next Steps */}
            <Card className="p-6 bg-gradient-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">Next Steps</h3>
              <div className="space-y-3">
                <Button variant="detection" size="sm" className="w-full justify-start gap-2">
                  <Clock className="w-4 h-4" />
                  Set Treatment Reminder
                </Button>
                
                <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Monitor Progress
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Mobile bottom padding */}
      <div className="h-20 md:h-0"></div>
    </div>
  );
};

export default Results;