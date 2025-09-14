import React from 'react';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  Scan, 
  Shield, 
  DollarSign,
  Calendar,
  Leaf,
  AlertTriangle,
  CheckCircle,
  BarChart3
} from 'lucide-react';

const Dashboard = () => {
  // Mock data for dashboard
  const stats = [
    { icon: Scan, label: 'Total Detections', value: '127', change: '+12 this month', color: 'text-primary' },
    { icon: Shield, label: 'Diseases Prevented', value: '23', change: '+5 this month', color: 'text-success' },
    { icon: DollarSign, label: 'Money Saved', value: '₹1,85,000', change: '+₹25,000', color: 'text-success' },
    { icon: TrendingUp, label: 'Success Rate', value: '94%', change: '+2% improvement', color: 'text-accent' }
  ];

  const recentDetections = [
    { date: '2024-01-15', crop: 'Rice', disease: 'Brown Spot', severity: 'Moderate', status: 'Treated' },
    { date: '2024-01-14', crop: 'Tomato', disease: 'Early Blight', severity: 'Mild', status: 'Monitoring' },
    { date: '2024-01-13', crop: 'Wheat', disease: 'Rust', severity: 'Severe', status: 'Treated' },
    { date: '2024-01-12', crop: 'Cotton', disease: 'Leaf Curl', severity: 'Mild', status: 'Resolved' },
  ];

  const monthlyData = [
    { month: 'Aug', detections: 18, prevented: 4 },
    { month: 'Sep', detections: 22, prevented: 6 },
    { month: 'Oct', detections: 31, prevented: 8 },
    { month: 'Nov', detections: 28, prevented: 7 },
    { month: 'Dec', detections: 34, prevented: 9 },
    { month: 'Jan', detections: 39, prevented: 12 }
  ];

  const getSeverityColor = (severity) => {
    switch (severity.toLowerCase()) {
      case 'mild': return 'text-success bg-success/10';
      case 'moderate': return 'text-warning bg-warning/10';
      case 'severe': return 'text-destructive bg-destructive/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'treated': return <CheckCircle className="w-4 h-4 text-success" />;
      case 'resolved': return <CheckCircle className="w-4 h-4 text-success" />;
      case 'monitoring': return <AlertTriangle className="w-4 h-4 text-warning" />;
      default: return <AlertTriangle className="w-4 h-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="space-y-6 mb-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
              Farmer Dashboard
            </h1>
            <p className="text-xl text-muted-foreground">
              Track your crop health and protection progress
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 bg-gradient-card hover:shadow-medium transition-smooth">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold text-foreground mt-1">{stat.value}</p>
                  <p className={`text-sm mt-1 ${stat.color}`}>{stat.change}</p>
                </div>
                <div className={`w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Monthly Overview Chart */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Monthly Overview
                </h3>
                <Button variant="ghost" size="sm">View Details</Button>
              </div>

              {/* Simple bar chart */}
              <div className="space-y-4">
                {monthlyData.map((month, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{month.month}</span>
                      <span className="text-muted-foreground">{month.detections} detections</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-3 bg-gradient-primary rounded-full transition-smooth"
                          style={{ width: `${(month.detections / 40) * 100}%` }}
                        ></div>
                      </div>
                      <div className="flex-1 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-3 bg-gradient-success rounded-full transition-smooth"
                          style={{ width: `${(month.prevented / 15) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="flex gap-6 pt-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gradient-primary rounded-full"></div>
                    <span className="text-muted-foreground">Total Detections</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gradient-success rounded-full"></div>
                    <span className="text-muted-foreground">Diseases Prevented</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Recent Detections */}
            <Card className="p-6 mt-6">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Recent Detections
              </h3>
              
              <div className="space-y-4">
                {recentDetections.map((detection, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Leaf className="w-5 h-5 text-primary-foreground" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-foreground">{detection.crop} - {detection.disease}</h4>
                        {getStatusIcon(detection.status)}
                      </div>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-sm text-muted-foreground">{detection.date}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${getSeverityColor(detection.severity)}`}>
                          {detection.severity}
                        </span>
                        <span className="text-xs text-muted-foreground">{detection.status}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button variant="farmer" className="w-full mt-4">
                View All Detections
              </Button>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="p-6 bg-gradient-hero">
              <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="upload" size="touch" className="w-full justify-start gap-3">
                  <Scan className="w-5 h-5" />
                  New Detection
                </Button>
                
                <Button variant="farmer" size="touch" className="w-full justify-start gap-3">
                  <Calendar className="w-5 h-5" />
                  Treatment Schedule
                </Button>
                
                <Button variant="ghost" size="touch" className="w-full justify-start gap-3">
                  <TrendingUp className="w-5 h-5" />
                  Progress Reports
                </Button>
              </div>
            </Card>

            {/* Achievement Badge */}
            <Card className="p-6 text-center bg-gradient-success">
              <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-success-foreground" />
              </div>
              <h3 className="text-lg font-bold text-success-foreground">Crop Protector</h3>
              <p className="text-success-foreground/80 text-sm">
                You've prevented 23 disease outbreaks this year!
              </p>
              <Button variant="secondary" size="sm" className="mt-3">
                View Achievements
              </Button>
            </Card>

            {/* Tips */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">💡 Pro Tip</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Regular monitoring during monsoon season can prevent up to 70% of fungal diseases. 
                Scan your crops weekly for best results.
              </p>
              <Button variant="ghost" size="sm" className="w-full">
                More Farming Tips
              </Button>
            </Card>
          </div>
        </div>
      </div>

      {/* Mobile bottom padding */}
      <div className="h-20 md:h-0"></div>
    </div>
  );
};

export default Dashboard;