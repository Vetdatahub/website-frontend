"use client"

import { useState } from "react"
import { ArrowLeft, Upload, FileText, AlertCircle, CheckCircle, GitBranch, History } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const mockCurrentDataset = {
  id: "1",
  title: "Canine Orthopedic Conditions Survey",
  currentVersion: "1.2.0",
  description: "Comprehensive dataset of 15,000 cases covering common orthopedic conditions in dogs across North America.",
  species: "Dog",
  category: "Clinical Trials",
  size: "2.3 GB",
  format: "CSV",
  lastUpdated: "2024-01-15"
}

export default function NewVersionPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [versionType, setVersionType] = useState("minor")
  const [formData, setFormData] = useState({
    changesSummary: "",
    detailedChanges: "",
    breakingChanges: false,
    newFeatures: "",
    bugFixes: "",
    dataAdditions: "",
    methodologyChanges: ""
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleFileUpload = () => {
    setIsUploading(true)
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

  const getNextVersion = () => {
    const [major, minor, patch] = mockCurrentDataset.currentVersion.split('.').map(Number)
    switch (versionType) {
      case "major":
        return `${major + 1}.0.0`
      case "minor":
        return `${major}.${minor + 1}.0`
      case "patch":
        return `${major}.${minor}.${patch + 1}`
      default:
        return `${major}.${minor + 1}.0`
    }
  }

  const steps = [
    { number: 1, title: "Version Type", description: "Choose the type of version update" },
    { number: 2, title: "File Upload", description: "Upload the new dataset version" },
    { number: 3, title: "Changes Documentation", description: "Document what has changed" },
    { number: 4, title: "Review & Publish", description: "Review and publish the new version" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href={`/datasets/${mockCurrentDataset.id}`}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dataset
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
            <div className="flex items-center space-x-2 mb-2">
              <GitBranch className="h-6 w-6 text-green-600" />
              <h1 className="text-3xl font-bold">Upload New Version</h1>
            </div>
            <p className="text-gray-600">Add a new version to: {mockCurrentDataset.title}</p>
            <div className="flex items-center space-x-4 mt-2">
              <Badge variant="outline">Current: v{mockCurrentDataset.currentVersion}</Badge>
              <Badge variant="secondary">Next: v{getNextVersion()}</Badge>
            </div>
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

          {/* Step 1: Version Type */}
          {currentStep === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Choose Version Type</CardTitle>
                <CardDescription>Select the appropriate version increment based on your changes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert>
                  <History className="h-4 w-4" />
                  <AlertDescription>
                    VetDataHub uses semantic versioning (MAJOR.MINOR.PATCH) to track dataset changes.
                  </AlertDescription>
                </Alert>

                <RadioGroup value={versionType} onValueChange={setVersionType}>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-4 border rounded-lg">
                      <RadioGroupItem value="major" id="major" className="mt-1" />
                      <div className="flex-1">
                        <Label htmlFor="major" className="font-medium text-lg cursor-pointer">
                          Major Version ({mockCurrentDataset.currentVersion.split('.')[0] + 1}.0.0)
                        </Label>
                        <p className="text-gray-600 mt-1">
                          Breaking changes that make the dataset incompatible with previous versions.
                        </p>
                        <div className="text-sm text-gray-500 mt-2">
                          Examples: Column renames, file format changes, schema modifications
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 border rounded-lg">
                      <RadioGroupItem value="minor" id="minor" className="mt-1" />
                      <div className="flex-1">
                        <Label htmlFor="minor" className="font-medium text-lg cursor-pointer">
                          Minor Version ({mockCurrentDataset.currentVersion.split('.')[0]}.{parseInt(mockCurrentDataset.currentVersion.split('.')[1]) + 1}.0)
                        </Label>
                        <p className="text-gray-600 mt-1">
                          Backward-compatible additions and improvements.
                        </p>
                        <div className="text-sm text-gray-500 mt-2">
                          Examples: New columns, additional data, new metadata fields
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 border rounded-lg">
                      <RadioGroupItem value="patch" id="patch" className="mt-1" />
                      <div className="flex-1">
                        <Label htmlFor="patch" className="font-medium text-lg cursor-pointer">
                          Patch Version ({mockCurrentDataset.currentVersion.split('.')[0]}.{mockCurrentDataset.currentVersion.split('.')[1]}.{parseInt(mockCurrentDataset.currentVersion.split('.')[2]) + 1})
                        </Label>
                        <p className="text-gray-600 mt-1">
                          Bug fixes and corrections without functional changes.
                        </p>
                        <div className="text-sm text-gray-500 mt-2">
                          Examples: Data corrections, metadata fixes, typo corrections
                        </div>
                      </div>
                    </div>
                  </div>
                </RadioGroup>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Selected Version: v{getNextVersion()}</h4>
                  <p className="text-sm text-gray-600">
                    This will create a new {versionType} version of your dataset.
                  </p>
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
                <CardTitle>Upload New Dataset Version</CardTitle>
                <CardDescription>Upload the updated dataset files</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Current Version Info */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Current Version (v{mockCurrentDataset.currentVersion})</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Size:</span> {mockCurrentDataset.size}
                    </div>
                    <div>
                      <span className="text-gray-600">Format:</span> {mockCurrentDataset.format}
                    </div>
                    <div>
                      <span className="text-gray-600">Last Updated:</span> {mockCurrentDataset.lastUpdated}
                    </div>
                  </div>
                </div>

                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Upload the new version of your dataset. The system will automatically detect changes and calculate checksums.
                  </AlertDescription>
                </Alert>

                {!isUploading && uploadProgress === 0 && (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">Upload New Version</h3>
                    <p className="text-gray-600 mb-4">Drag and drop the updated files here, or click to browse</p>
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
                        <div className="font-medium">canine_orthopedic_data_v{getNextVersion()}.csv</div>
                        <div className="text-sm text-gray-600">2.8 GB (+500 MB from previous version)</div>
                      </div>
                    </div>
                    <Progress value={uploadProgress} className="w-full" />
                    <div className="text-sm text-gray-600 text-center">
                      Uploading and analyzing changes... {uploadProgress}%
                    </div>
                  </div>
                )}

                {uploadProgress === 100 && !isUploading && (
                  <div className="space-y-4">
                    <Alert>
                      <CheckCircle className="h-4 w-4" />
                      <AlertDescription>
                        File uploaded successfully! Changes detected and verified.
                      </AlertDescription>
                    </Alert>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">File Comparison</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Previous Size:</span>
                            <span>2.3 GB</span>
                          </div>
                          <div className="flex justify-between">
                            <span>New Size:</span>
                            <span>2.8 GB</span>
                          </div>
                          <div className="flex justify-between text-green-600">
                            <span>Size Change:</span>
                            <span>+500 MB (+21.7%)</span>
                          </div>
                          <Separator />
                          <div className="flex justify-between">
                            <span>Checksum:</span>
                            <Badge variant="outline" className="text-green-600">Verified</Badge>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Detected Changes</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 text-sm">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>+2,500 new records added</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span>3 new columns detected</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                            <span>15 data corrections applied</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                            <span>Schema: Compatible</span>
                          </div>
                        </CardContent>
                      </Card>
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
                    Next: Document Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Changes Documentation */}
          {currentStep === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Document Changes</CardTitle>
                <CardDescription>Provide detailed information about what has changed in this version</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="changesSummary">Changes Summary *</Label>
                  <Input 
                    id="changesSummary"
                    placeholder="Brief summary of changes (e.g., Added 2,500 new cases from 2024 data collection)"
                    value={formData.changesSummary}
                    onChange={(e) => handleInputChange('changesSummary', e.target.value)}
                  />
                  <p className="text-sm text-gray-500">This will appear in the version history</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="detailedChanges">Detailed Changes</Label>
                  <Textarea 
                    id="detailedChanges"
                    placeholder="Provide a detailed description of all changes, additions, and improvements..."
                    rows={4}
                    value={formData.detailedChanges}
                    onChange={(e) => handleInputChange('detailedChanges', e.target.value)}
                  />
                </div>

                <Separator />

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="newFeatures">New Features/Additions</Label>
                    <Textarea 
                      id="newFeatures"
                      placeholder="List new columns, variables, or data types added..."
                      rows={3}
                      value={formData.newFeatures}
                      onChange={(e) => handleInputChange('newFeatures', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bugFixes">Bug Fixes/Corrections</Label>
                    <Textarea 
                      id="bugFixes"
                      placeholder="List any data corrections or fixes applied..."
                      rows={3}
                      value={formData.bugFixes}
                      onChange={(e) => handleInputChange('bugFixes', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="dataAdditions">Data Additions</Label>
                    <Textarea 
                      id="dataAdditions"
                      placeholder="Describe new data sources, time periods, or subjects added..."
                      rows={3}
                      value={formData.dataAdditions}
                      onChange={(e) => handleInputChange('dataAdditions', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="methodologyChanges">Methodology Changes</Label>
                    <Textarea 
                      id="methodologyChanges"
                      placeholder="Any changes to data collection or processing methods..."
                      rows={3}
                      value={formData.methodologyChanges}
                      onChange={(e) => handleInputChange('methodologyChanges', e.target.value)}
                    />
                  </div>
                </div>

                {versionType === "major" && (
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Major Version Notice:</strong> Since this is a major version update, please clearly document any breaking changes that might affect users of the previous version.
                    </AlertDescription>
                  </Alert>
                )}

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
                <CardTitle>Review New Version</CardTitle>
                <CardDescription>Review the new version details before publishing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert>
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    Your new dataset version is ready to publish! This will create version {getNextVersion()} and notify existing users.
                  </AlertDescription>
                </Alert>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Version Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <div><strong>Previous Version:</strong> v{mockCurrentDataset.currentVersion}</div>
                      <div><strong>New Version:</strong> v{getNextVersion()}</div>
                      <div><strong>Version Type:</strong> {versionType.charAt(0).toUpperCase() + versionType.slice(1)}</div>
                      <div><strong>File Size:</strong> 2.8 GB (+500 MB)</div>
                      <div><strong>Records Added:</strong> +2,500</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Changes Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <div><strong>Summary:</strong> {formData.changesSummary || "Added 2,500 new cases from 2024 data collection"}</div>
                      <div><strong>New Features:</strong> {formData.newFeatures || "3 new outcome measurement columns"}</div>
                      <div><strong>Bug Fixes:</strong> {formData.bugFixes || "15 data corrections applied"}</div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Impact Assessment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <span className="font-medium">Backward Compatibility</span>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {versionType === "major" ? "Breaking Changes" : "Compatible"}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium">User Notifications</span>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                          234 subscribers will be notified
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                        <span className="font-medium">DOI Assignment</span>
                        <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                          New DOI will be generated
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setCurrentStep(3)}>
                    Previous
                  </Button>
                  <Button className="bg-green-600 hover:bg-green-700">
                    Publish Version {getNextVersion()}
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
