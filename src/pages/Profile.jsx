import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  User,
  Camera,
  Settings,
  Shield,
  Bell,
  Smartphone,
  Download,
  LogOut,
  Edit3,
  Save,
  X,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@example.com',
    phone: '+91 98765 43210',
    farmLocation: 'Ludhiana, Punjab',
    farmSize: '5 acres',
    primaryCrops: 'Rice, Wheat',
    experienceYears: '12'
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    // Here you would typically save to backend
    setIsEditing(false);
    // Show toast notification
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset form data to original values
  };

  const stats = [
    { label: 'Total Detections', value: '127', icon: Camera },
    { label: 'Diseases Prevented', value: '23', icon: Shield },
    { label: 'Money Saved', value: '₹1,85,000', icon: '₹' },
    { label: 'Success Rate', value: '94%', icon: '✓' }
  ];

  const achievements = [
    { title: 'Early Adopter', description: 'First 100 users of Cropthena', earned: true },
    { title: 'Crop Protector', description: 'Prevented 20+ disease outbreaks', earned: true },
    { title: 'Smart Farmer', description: 'Used app for 6+ months consistently', earned: true },
    { title: 'Disease Detective', description: 'Detected 50+ diseases accurately', earned: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="space-y-6 mb-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
              Farmer Profile
            </h1>
            <p className="text-xl text-muted-foreground">
              Manage your account and farming preferences
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Info Card */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-foreground">Personal Information</h3>
                {!isEditing ? (
                  <Button variant="ghost" onClick={() => setIsEditing(true)} className="gap-2">
                    <Edit3 className="w-4 h-4" />
                    Edit
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button variant="default" onClick={handleSave} size="sm" className="gap-2">
                      <Save className="w-4 h-4" />
                      Save
                    </Button>
                    <Button variant="ghost" onClick={handleCancel} size="sm">
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                )}
              </div>

              {/* Profile Picture */}
              <div className="flex items-center gap-6 mb-6">
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center">
                  <User className="w-12 h-12 text-primary-foreground" />
                </div>
                {isEditing && (
                  <Button variant="farmer" size="sm" className="gap-2">
                    <Camera className="w-4 h-4" />
                    Change Photo
                  </Button>
                )}
              </div>

              {/* Form Fields */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Full Name</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    disabled={!isEditing}
                    className={!isEditing ? 'bg-muted' : ''}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    disabled={!isEditing}
                    className={!isEditing ? 'bg-muted' : ''}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Phone Number</label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    disabled={!isEditing}
                    className={!isEditing ? 'bg-muted' : ''}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Farm Location</label>
                  <Input
                    value={formData.farmLocation}
                    onChange={(e) => handleInputChange('farmLocation', e.target.value)}
                    disabled={!isEditing}
                    className={!isEditing ? 'bg-muted' : ''}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Farm Size</label>
                  <Input
                    value={formData.farmSize}
                    onChange={(e) => handleInputChange('farmSize', e.target.value)}
                    disabled={!isEditing}
                    className={!isEditing ? 'bg-muted' : ''}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Primary Crops</label>
                  <Input
                    value={formData.primaryCrops}
                    onChange={(e) => handleInputChange('primaryCrops', e.target.value)}
                    disabled={!isEditing}
                    className={!isEditing ? 'bg-muted' : ''}
                  />
                </div>
              </div>
            </Card>

            {/* Farming Stats */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">Your Farming Stats</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-gradient-card rounded-lg">
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Achievements */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">Achievements</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`p-4 rounded-lg border-2 ${
                    achievement.earned 
                      ? 'bg-success/5 border-success/20' 
                      : 'bg-muted border-muted-foreground/20'
                  }`}>
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        achievement.earned 
                          ? 'bg-success text-success-foreground' 
                          : 'bg-muted-foreground text-muted'
                      }`}>
                        {achievement.earned ? '✓' : '?'}
                      </div>
                      <div>
                        <h4 className={`font-semibold ${
                          achievement.earned ? 'text-success' : 'text-muted-foreground'
                        }`}>
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="p-6 bg-gradient-hero">
              <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="upload" size="touch" className="w-full justify-start gap-3">
                  <Camera className="w-5 h-5" />
                  New Detection
                </Button>
                
                <Button variant="farmer" size="touch" className="w-full justify-start gap-3">
                  <Download className="w-5 h-5" />
                  Download Data
                </Button>
                
                <Button variant="ghost" size="touch" className="w-full justify-start gap-3">
                  <Settings className="w-5 h-5" />
                  App Settings
                </Button>
              </div>
            </Card>

            {/* Contact Info */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{formData.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{formData.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{formData.farmLocation}</span>
                </div>
              </div>
            </Card>

            {/* App Preferences */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">App Preferences</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bell className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Push Notifications</span>
                  </div>
                  <div className="w-10 h-6 bg-primary rounded-full flex items-center px-1">
                    <div className="w-4 h-4 bg-primary-foreground rounded-full ml-auto"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Offline Mode</span>
                  </div>
                  <div className="w-10 h-6 bg-primary rounded-full flex items-center px-1">
                    <div className="w-4 h-4 bg-primary-foreground rounded-full ml-auto"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Data Privacy</span>
                  </div>
                  <Button variant="ghost" size="sm">Manage</Button>
                </div>
              </div>
            </Card>

            {/* Sign Out */}
            <Card className="p-6 border-destructive/20">
              <Button variant="destructive" size="touch" className="w-full gap-2">
                <LogOut className="w-4 h-4" />
                Sign Out
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

export default Profile;