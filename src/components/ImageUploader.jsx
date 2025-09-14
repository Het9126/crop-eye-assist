import React, { useState, useRef, useCallback } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { 
  Camera, 
  Upload, 
  X, 
  CheckCircle, 
  AlertTriangle,
  RotateCw,
  ZoomIn,
  Crop
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ImageUploader = ({ onUpload, maxSize = 10485760, className = '' }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [qualityScore, setQualityScore] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  
  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);
  const { toast } = useToast();

  const validateFile = useCallback((file) => {
    // File type validation
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (!validTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please select a JPG or PNG image",
        variant: "destructive"
      });
      return false;
    }

    // File size validation
    if (file.size > maxSize) {
      toast({
        title: "File too large",
        description: `Please select an image smaller than ${(maxSize / 1048576).toFixed(1)}MB`,
        variant: "destructive"
      });
      return false;
    }

    return true;
  }, [maxSize, toast]);

  const processFile = useCallback((file) => {
    if (!validateFile(file)) return;

    setSelectedFile(file);
    
    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target.result);
      
      // Mock quality assessment (in real app, this would analyze the image)
      const mockQualityScore = Math.floor(Math.random() * 30) + 70; // 70-100%
      setQualityScore(mockQualityScore);
    };
    reader.readAsDataURL(file);
  }, [validateFile]);

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleCameraCapture = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setIsUploading(true);
    try {
      // Mock upload process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      if (onUpload) {
        onUpload({
          file: selectedFile,
          preview: preview,
          qualityScore: qualityScore
        });
      }

      toast({
        title: "Image uploaded successfully",
        description: "Analyzing your crop for disease detection...",
        variant: "default"
      });

      // Reset state
      setSelectedFile(null);
      setPreview(null);
      setQualityScore(null);
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "Please try again",
        variant: "destructive"
      });
    } finally {
      setIsUploading(false);
    }
  };

  const clearSelection = () => {
    setSelectedFile(null);
    setPreview(null);
    setQualityScore(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    if (cameraInputRef.current) cameraInputRef.current.value = '';
  };

  const getQualityColor = (score) => {
    if (score >= 85) return 'text-success';
    if (score >= 70) return 'text-warning';
    return 'text-destructive';
  };

  const getQualityMessage = (score) => {
    if (score >= 85) return 'Excellent image quality';
    if (score >= 70) return 'Good quality - suitable for analysis';
    return 'Consider retaking - poor lighting or focus';
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {!preview ? (
        <Card 
          className={`border-2 border-dashed transition-smooth p-8 text-center ${
            dragActive 
              ? 'border-primary bg-primary-light/20' 
              : 'border-muted hover:border-primary/50'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="space-y-6">
            <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
              <Upload className="w-8 h-8 text-primary-foreground" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Upload Crop Image</h3>
              <p className="text-muted-foreground">
                Take a photo or select an image of the affected crop
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="upload"
                size="touch"
                onClick={() => cameraInputRef.current?.click()}
                className="gap-2"
              >
                <Camera className="w-5 h-5" />
                Take Photo
              </Button>
              
              <Button
                variant="farmer"
                size="touch"
                onClick={() => fileInputRef.current?.click()}
                className="gap-2"
              >
                <Upload className="w-5 h-5" />
                Choose File
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Supports JPG, PNG up to 10MB
            </p>
          </div>
        </Card>
      ) : (
        <div className="space-y-4">
          <Card className="p-4">
            <div className="relative">
              <img
                src={preview}
                alt="Selected crop"
                className="w-full max-h-96 object-contain rounded-lg bg-muted"
              />
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2"
                onClick={clearSelection}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {qualityScore && (
              <div className="mt-4 p-3 bg-muted rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {qualityScore >= 85 ? (
                      <CheckCircle className="w-5 h-5 text-success" />
                    ) : (
                      <AlertTriangle className={`w-5 h-5 ${getQualityColor(qualityScore)}`} />
                    )}
                    <span className="font-medium">Quality Score: {qualityScore}%</span>
                  </div>
                </div>
                <p className={`text-sm mt-1 ${getQualityColor(qualityScore)}`}>
                  {getQualityMessage(qualityScore)}
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <Button
                variant="detection"
                size="lg"
                onClick={handleUpload}
                disabled={isUploading}
                className="flex-1"
              >
                {isUploading ? 'Analyzing...' : 'Analyze for Disease'}
              </Button>
              
              <Button
                variant="ghost"
                size="lg"
                onClick={clearSelection}
                className="sm:flex-initial"
              >
                Try Another
              </Button>
            </div>
          </Card>
        </div>
      )}

      {/* Hidden file inputs */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/jpg,image/png"
        onChange={handleFileSelect}
        className="hidden"
      />
      
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleCameraCapture}
        className="hidden"
      />
    </div>
  );
};

export default ImageUploader;