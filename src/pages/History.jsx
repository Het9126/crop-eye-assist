import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Filter, 
  Calendar,
  Leaf,
  Eye,
  Download,
  Share2,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

const History = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCrop, setSelectedCrop] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Mock history data
  const historyData = [
    {
      id: 1,
      date: '2024-01-15',
      time: '14:30',
      crop: 'Rice',
      disease: 'Brown Spot',
      confidence: 87,
      severity: 'Moderate',
      status: 'Treated',
      image: '/api/placeholder/120/120',
      costSavings: '₹15,000'
    },
    {
      id: 2,
      date: '2024-01-14',
      time: '09:15',
      crop: 'Tomato',
      disease: 'Early Blight',
      confidence: 92,
      severity: 'Mild',
      status: 'Monitoring',
      image: '/api/placeholder/120/120',
      costSavings: '₹8,500'
    },
    {
      id: 3,
      date: '2024-01-13',
      time: '16:45',
      crop: 'Wheat',
      disease: 'Rust',
      confidence: 95,
      severity: 'Severe',
      status: 'Treated',
      image: '/api/placeholder/120/120',
      costSavings: '₹22,000'
    },
    {
      id: 4,
      date: '2024-01-12',
      time: '11:20',
      crop: 'Cotton',
      disease: 'Leaf Curl',
      confidence: 78,
      severity: 'Mild',
      status: 'Resolved',
      image: '/api/placeholder/120/120',
      costSavings: '₹5,200'
    },
    {
      id: 5,
      date: '2024-01-11',
      time: '08:30',
      crop: 'Maize',
      disease: 'Leaf Blight',
      confidence: 89,
      severity: 'Moderate',
      status: 'Treated',
      image: '/api/placeholder/120/120',
      costSavings: '₹12,800'
    },
    {
      id: 6,
      date: '2024-01-10',
      time: '15:10',
      crop: 'Soybean',
      disease: 'Bacterial Pustule',
      confidence: 84,
      severity: 'Mild',
      status: 'Monitoring',
      image: '/api/placeholder/120/120',
      costSavings: '₹6,700'
    }
  ];

  const crops = ['all', 'Rice', 'Tomato', 'Wheat', 'Cotton', 'Maize', 'Soybean'];

  // Filter data based on search and crop selection
  const filteredData = historyData.filter(item => {
    const matchesSearch = item.crop.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.disease.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCrop = selectedCrop === 'all' || item.crop === selectedCrop;
    return matchesSearch && matchesCrop;
  });

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage);

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

  const getConfidenceColor = (confidence) => {
    if (confidence >= 85) return 'text-success';
    if (confidence >= 70) return 'text-warning';
    return 'text-destructive';
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="space-y-6 mb-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
              Detection History
            </h1>
            <p className="text-xl text-muted-foreground">
              Track all your crop disease detections and treatments
            </p>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search crops or diseases..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
            />
          </div>

          <select
            value={selectedCrop}
            onChange={(e) => setSelectedCrop(e.target.value)}
            className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {crops.map(crop => (
              <option key={crop} value={crop}>
                {crop === 'all' ? 'All Crops' : crop}
              </option>
            ))}
          </select>

          <Button variant="farmer" size="touch" className="gap-2">
            <Filter className="w-4 h-4" />
            More Filters
          </Button>

          <Button variant="ghost" size="touch" className="gap-2">
            <Download className="w-4 h-4" />
            Export Data
          </Button>
        </div>

        {/* Summary Stats */}
        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-gradient-card">
            <div className="text-2xl font-bold text-foreground">{filteredData.length}</div>
            <div className="text-muted-foreground">Total Detections</div>
          </Card>
          
          <Card className="p-6 bg-gradient-success">
            <div className="text-2xl font-bold text-success-foreground">
              {filteredData.filter(item => item.status === 'Resolved' || item.status === 'Treated').length}
            </div>
            <div className="text-success-foreground/80">Successfully Treated</div>
          </Card>
          
          <Card className="p-6 bg-gradient-primary">
            <div className="text-2xl font-bold text-primary-foreground">
              ₹{filteredData.reduce((sum, item) => sum + parseInt(item.costSavings.replace('₹', '').replace(',', '')), 0).toLocaleString()}
            </div>
            <div className="text-primary-foreground/80">Total Savings</div>
          </Card>
        </div>

        {/* History List */}
        <Card className="p-6">
          <div className="space-y-4">
            {currentData.length > 0 ? (
              currentData.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 bg-muted rounded-lg hover:shadow-soft transition-smooth">
                  {/* Image Thumbnail */}
                  <div className="w-20 h-20 bg-gradient-card rounded-lg flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-8 h-8 text-primary" />
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground text-lg">
                          {item.crop} - {item.disease}
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {item.date} at {item.time}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-lg font-bold ${getConfidenceColor(item.confidence)}`}>
                          {item.confidence}%
                        </div>
                        <div className="text-sm text-muted-foreground">Confidence</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 flex-wrap">
                      <span className={`text-xs px-3 py-1 rounded-full ${getSeverityColor(item.severity)}`}>
                        {item.severity}
                      </span>
                      
                      <div className="flex items-center gap-1">
                        {getStatusIcon(item.status)}
                        <span className="text-sm">{item.status}</span>
                      </div>
                      
                      <span className="text-sm font-medium text-success">
                        Saved: {item.costSavings}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-2">
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Eye className="w-4 h-4" />
                      View
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Share2 className="w-4 h-4" />
                      Share
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <Leaf className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">No detections found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filters</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              <Button
                variant="ghost"
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <Button
                    key={page}
                    variant={currentPage === page ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className="w-10"
                  >
                    {page}
                  </Button>
                ))}
              </div>

              <Button
                variant="ghost"
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="gap-2"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </Card>
      </div>

      {/* Mobile bottom padding */}
      <div className="h-20 md:h-0"></div>
    </div>
  );
};

export default History;