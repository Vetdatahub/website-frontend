"use client"

import { useState } from "react"
import { ArrowLeft, Upload, FileText, AlertCircle, CheckCircle } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { Textarea } from "@/src/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import { Checkbox } from "@/src/components/ui/checkbox"
import { Progress } from "@/src/components/ui/progress"
import { Alert, AlertDescription } from "@/src/components/ui/alert"
import { Badge } from "@/src/components/ui/badge"

export default function UploadPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    species: "",
    category: "",
    license: "",
    location: "",
    startDate: "",
    endDate: "",
    sampleSize: "",
    fundingSource: "",
    ethicsApproval: "",
    methodology: "",
    contactEmail: "",
    keywords: ""
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleFileUpload = () => {
    setIsUploading(true)
    // Simulate file upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsUploading(false)
          setCurrentStep(4)
          return 100
        }
        return prev + 10
      })
    }, 200)
  }

  const steps = [
    { number: 1, title: "Dataset Information", description: "Basic details about your dataset" },
    { number: 2, title: "File Upload", description: "Upload your dataset files" },
    { number: 3, title: "Metadata", description: "Additional information and documentation" },
    { number: 4, title: "Review & Publish", description: "Review and publish your dataset" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/datasets">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Datasets
                </Link>
              </Button>
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-green-600">VetDataHub</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Upload Dataset</h1>
            <p className="text-gray-600">Share your veterinary research data with the global community</p>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                    currentStep >= step.number 
                      ? 'bg-green-600 border-green-600 text-white' 
                      : 'border-gray-300 text-gray-500'
                  }`}>
                    {currentStep > step.number ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      step.number
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-24 h-0.5 mx-4 ${
                      currentStep > step.number ? 'bg-green-600' : 'bg-gray-300'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2">
              {steps.map((step) => (
                <div key={step.number} className="text-center" style={{ width: '200px' }}>
                  <div className="font-medium text-sm">{step.title}</div>
                  <div className="text-xs text-gray-500">{step.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Step 1: Dataset Information */}
          {currentStep === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Dataset Information</CardTitle>
                <CardDescription>Provide basic information about your dataset</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Dataset Title *</Label>
                    <Input 
                      id="title"
                      placeholder="Enter a descriptive title"
                      value={formData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="species">Primary Species *</Label>
                    <Select value={formData.species} onValueChange={(value) => handleInputChange('species', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select species" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dog">Dog</SelectItem>
                        <SelectItem value="cat">Cat</SelectItem>
                        <SelectItem value="cattle">Cattle</SelectItem>
                        <SelectItem value="equine">Equine</SelectItem>
                        <SelectItem value="poultry">Poultry</SelectItem>
                        <SelectItem value="wildlife">Wildlife</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea 
                    id="description"
                    placeholder="Provide a detailed description of your dataset, including study objectives, methodology, and key findings"
                    rows={4}
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="clinical-trials">Clinical Trials</SelectItem>
                        <SelectItem value="epidemiology">Epidemiology</SelectItem>
                        <SelectItem value="genomics">Genomics</SelectItem>
                        <SelectItem value="imaging">Imaging</SelectItem>
                        <SelectItem value="pathology">Pathology</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="license">License *</Label>
                    <Select value={formData.license} onValueChange={(value) => handleInputChange('license', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select license" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cc-by-4.0">CC-BY-4.0</SelectItem>
                        <SelectItem value="cc0">CC0</SelectItem>
                        <SelectItem value="gpl-3.0">GPL-3.0</SelectItem>
                        <SelectItem value="proprietary">Proprietary</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="location">Study Location *</Label>
                    <Input 
                      id="location"
                      placeholder="e.g., North America, Ghana, Europe"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sampleSize">Sample Size</Label>
                    <Input 
                      id="sampleSize"
                      type="number"
                      placeholder="Number of subjects/cases"
                      value={formData.sampleSize}
                      onChange={(e) => handleInputChange('sampleSize', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="startDate">Data Collection Start Date *</Label>
                    <Input 
                      id="startDate"
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => handleInputChange('startDate', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="endDate">Data Collection End Date *</Label>
                    <Input 
                      id="endDate"
                      type="date"
                      value={formData.endDate}
                      onChange={(e) => handleInputChange('endDate', e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="keywords">Keywords</Label>
                  <Input 
                    id="keywords"
                    placeholder="Enter keywords separated by commas"
                    value={formData.keywords}
                    onChange={(e) => handleInputChange('keywords', e.target.value)}
                  />
                  <p className="text-sm text-gray-500">Use keywords to help others discover your dataset</p>
                </div>

                <div className="flex justify-end">
                  <Button onClick={() => setCurrentStep(2)}>
                    Next: File Upload
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: File Upload */}
          {currentStep === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>File Upload</CardTitle>
                <CardDescription>Upload your dataset files (max 20GB per file)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Supported formats: CSV, JSON, Parquet, Excel (.xlsx), NetCDF. Files larger than 2GB will use resumable upload.
                  </AlertDescription>
                </Alert>

                {!isUploading && uploadProgress === 0 && (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">Upload your dataset files</h3>
                    <p className="text-gray-600 mb-4">Drag and drop files here, or click to browse</p>
                    <Button onClick={handleFileUpload}>
                      Select Files
                    </Button>
                  </div>
                )}

                {isUploading && (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <FileText className="h-8 w-8 text-green-600" />
                      <div className="flex-1">
                        <div className="font-medium">canine_orthopedic_data.csv</div>
                        <div className="text-sm text-gray-600">2.3 GB</div>
                      </div>
                    </div>
                    <Progress value={uploadProgress} className="w-full" />
                    <div className="text-sm text-gray-600 text-center">
                      Uploading... {uploadProgress}%
                    </div>
                  </div>
                )}

                {uploadProgress === 100 && !isUploading && (
                  <div className="space-y-4">
                    <Alert>
                      <CheckCircle className="h-4 w-4" />
                      <AlertDescription>
                        File uploaded successfully! Checksum verified.
                      </AlertDescription>
                    </Alert>
                    <div className="flex items-center space-x-4 p-4 border rounded-lg">
                      <FileText className="h-8 w-8 text-green-600" />
                      <div className="flex-1">
                        <div className="font-medium">canine_orthopedic_data.csv</div>
                        <div className="text-sm text-gray-600">2.3 GB • SHA-256: a1b2c3d4e5f6...</div>
                      </div>
                      <Badge variant="outline" className="text-green-600">
                        Verified
                      </Badge>
                    </div>
                  </div>
                )}

                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setCurrentStep(1)}>
                    Previous
                  </Button>
                  <Button 
                    onClick={() => setCurrentStep(3)}
                    disabled={uploadProgress !== 100}
                  >
                    Next: Metadata
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Metadata */}
          {currentStep === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Additional Metadata</CardTitle>
                <CardDescription>Provide additional information to help others understand and use your dataset</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="methodology">Methodology</Label>
                  <Textarea 
                    id="methodology"
                    placeholder="Describe your data collection methodology, study design, and procedures"
                    rows={4}
                    value={formData.methodology}
                    onChange={(e) => handleInputChange('methodology', e.target.value)}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fundingSource">Funding Source</Label>
                    <Input 
                      id="fundingSource"
                      placeholder="e.g., NSF Grant #12345"
                      value={formData.fundingSource}
                      onChange={(e) => handleInputChange('fundingSource', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ethicsApproval">Ethics Approval</Label>
                    <Input 
                      id="ethicsApproval"
                      placeholder="e.g., IRB #2024-001"
                      value={formData.ethicsApproval}
                      onChange={(e) => handleInputChange('ethicsApproval', e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactEmail">Contact Email</Label>
                  <Input 
                    id="contactEmail"
                    type="email"
                    placeholder="your.email@institution.edu"
                    value={formData.contactEmail}
                    onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                  />
                  <p className="text-sm text-gray-500">For dataset-specific inquiries</p>
                </div>

                <div className="space-y-4">
                  <Label>Data Sensitivity Level</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="public" defaultChecked />
                      <Label htmlFor="public">Public - No restrictions</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="restricted" />
                      <Label htmlFor="restricted">Restricted - Requires approval</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="confidential" />
                      <Label htmlFor="confidential">Confidential - Limited access</Label>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setCurrentStep(2)}>
                    Previous
                  </Button>
                  <Button onClick={() => setCurrentStep(4)}>
                    Next: Review
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Review & Publish */}
          {currentStep === 4 && (
            <Card>
              <CardHeader>
                <CardTitle>Review & Publish</CardTitle>
                <CardDescription>Review your dataset information before publishing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert>
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    Your dataset is ready to publish! Once published, it will be assigned a DOI and become publicly available.
                  </AlertDescription>
                </Alert>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium mb-3">Dataset Information</h3>
                    <div className="space-y-2 text-sm">
                      <div><strong>Title:</strong> {formData.title || "Canine Orthopedic Conditions Survey"}</div>
                      <div><strong>Species:</strong> {formData.species || "Dog"}</div>
                      <div><strong>Category:</strong> {formData.category || "Clinical Trials"}</div>
                      <div><strong>License:</strong> {formData.license || "CC-BY-4.0"}</div>
                      <div><strong>Location:</strong> {formData.location || "North America"}</div>
                      <div><strong>Sample Size:</strong> {formData.sampleSize || "15,000"} cases</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-3">File Information</h3>
                    <div className="space-y-2 text-sm">
                      <div><strong>File:</strong> canine_orthopedic_data.csv</div>
                      <div><strong>Size:</strong> 2.3 GB</div>
                      <div><strong>Format:</strong> CSV</div>
                      <div><strong>Checksum:</strong> Verified</div>
                      <div><strong>Version:</strong> 1.0.0</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">
                      I agree to the Terms of Service (Coming Soon) and confirm that I have the right to share this data
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="license-confirm" />
                    <Label htmlFor="license-confirm">
                      I confirm that this dataset will be made available under the selected license
                    </Label>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setCurrentStep(3)}>
                    Previous
                  </Button>
                  <Button className="bg-green-600 hover:bg-green-700">
                    Publish Dataset
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
