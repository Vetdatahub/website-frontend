"use client"

import { ArrowLeft, GitCompare, Download, FileText, Plus, Minus, AlertTriangle } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"

const mockDataset = {
  id: "1",
  title: "Canine Orthopedic Conditions Survey"
}

const mockVersionComparison = {
  from: {
    version: "1.1.0",
    date: "2023-08-20",
    author: "Dr. Michael Torres",
    size: "2.1 GB",
    records: 12500,
    columns: 45
  },
  to: {
    version: "1.2.0", 
    date: "2024-01-15",
    author: "Dr. Sarah Chen",
    size: "2.3 GB",
    records: 15000,
    columns: 48
  }
}

const mockMetadataChanges = [
  {
    field: "Sample Size",
    from: "12,500",
    to: "15,000",
    type: "modified"
  },
  {
    field: "Data Collection End Date",
    from: "2023-06-30",
    to: "2023-12-31",
    type: "modified"
  },
  {
    field: "Funding Source",
    from: "NSF Grant #12345",
    to: "NSF Grant #12345, NIH Grant #67890",
    type: "modified"
  },
  {
    field: "Related Publications",
    from: "1 publication",
    to: "3 publications",
    type: "added"
  }
]

const mockSchemaChanges = [
  {
    column: "follow_up_6months",
    type: "added",
    description: "6-month follow-up outcome data",
    dataType: "boolean"
  },
  {
    column: "imaging_quality_score",
    type: "added", 
    description: "Radiographic image quality assessment score",
    dataType: "integer"
  },
  {
    column: "treatment_response_scale",
    type: "added",
    description: "Standardized treatment response measurement",
    dataType: "integer"
  },
  {
    column: "initial_diagnosis",
    type: "modified",
    description: "Updated to use standardized diagnostic codes",
    dataType: "string"
  }
]

const mockDataChanges = {
  recordsAdded: 2500,
  recordsModified: 150,
  recordsRemoved: 0,
  newDataSources: ["University of Toronto Veterinary Hospital", "Colorado State University VTH"],
  dataCorrections: [
    "Fixed 15 cases with incorrect age values",
    "Updated breed classifications for mixed breeds",
    "Corrected treatment outcome coding inconsistencies"
  ]
}

export default function VersionComparePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href={`/datasets/${mockDataset.id}`}>
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
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center space-x-2 mb-2">
              <GitCompare className="h-6 w-6 text-green-600" />
              <h1 className="text-3xl font-bold">Compare Versions</h1>
            </div>
            <p className="text-gray-600">{mockDataset.title}</p>
          </div>

          {/* Version Selector */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Select Versions to Compare</CardTitle>
              <CardDescription>Choose two versions to see the differences between them</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">From Version</label>
                  <Select defaultValue="1.1.0">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1.0.0">v1.0.0 (2023-03-10)</SelectItem>
                      <SelectItem value="1.1.0">v1.1.0 (2023-08-20)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">To Version</label>
                  <Select defaultValue="1.2.0">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1.1.0">v1.1.0 (2023-08-20)</SelectItem>
                      <SelectItem value="1.2.0">v1.2.0 (2024-01-15)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Version Overview */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <Badge variant="outline">From</Badge>
                    <span>v{mockVersionComparison.from.version}</span>
                  </CardTitle>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div><strong>Author:</strong> {mockVersionComparison.from.author}</div>
                <div><strong>Date:</strong> {mockVersionComparison.from.date}</div>
                <div><strong>Size:</strong> {mockVersionComparison.from.size}</div>
                <div><strong>Records:</strong> {mockVersionComparison.from.records.toLocaleString()}</div>
                <div><strong>Columns:</strong> {mockVersionComparison.from.columns}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <Badge variant="default">To</Badge>
                    <span>v{mockVersionComparison.to.version}</span>
                  </CardTitle>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div><strong>Author:</strong> {mockVersionComparison.to.author}</div>
                <div><strong>Date:</strong> {mockVersionComparison.to.date}</div>
                <div><strong>Size:</strong> {mockVersionComparison.to.size}</div>
                <div><strong>Records:</strong> {mockVersionComparison.to.records.toLocaleString()}</div>
                <div><strong>Columns:</strong> {mockVersionComparison.to.columns}</div>
              </CardContent>
            </Card>
          </div>

          {/* Changes Summary */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Changes Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">+{mockDataChanges.recordsAdded.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Records Added</div>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">+{mockSchemaChanges.filter(c => c.type === 'added').length}</div>
                  <div className="text-sm text-gray-600">Columns Added</div>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">{mockDataChanges.recordsModified}</div>
                  <div className="text-sm text-gray-600">Records Modified</div>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">{mockDataChanges.newDataSources.length}</div>
                  <div className="text-sm text-gray-600">New Data Sources</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Changes */}
          <Tabs defaultValue="metadata" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="metadata">Metadata Changes</TabsTrigger>
              <TabsTrigger value="schema">Schema Changes</TabsTrigger>
              <TabsTrigger value="data">Data Changes</TabsTrigger>
              <TabsTrigger value="files">File Changes</TabsTrigger>
            </TabsList>

            <TabsContent value="metadata">
              <Card>
                <CardHeader>
                  <CardTitle>Metadata Differences</CardTitle>
                  <CardDescription>Changes to dataset metadata between versions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockMetadataChanges.map((change, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant={change.type === 'added' ? 'default' : 'secondary'}>
                            {change.type === 'added' ? 'Added' : 'Modified'}
                          </Badge>
                          <span className="font-medium">{change.field}</span>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="text-gray-600 mb-1">From:</div>
                            <div className="p-2 bg-red-50 border border-red-200 rounded">
                              {change.from}
                            </div>
                          </div>
                          <div>
                            <div className="text-gray-600 mb-1">To:</div>
                            <div className="p-2 bg-green-50 border border-green-200 rounded">
                              {change.to}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="schema">
              <Card>
                <CardHeader>
                  <CardTitle>Schema Changes</CardTitle>
                  <CardDescription>Changes to the dataset structure and columns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockSchemaChanges.map((change, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant={change.type === 'added' ? 'default' : 'secondary'}>
                            {change.type === 'added' ? (
                              <><Plus className="h-3 w-3 mr-1" /> Added</>
                            ) : (
                              <><FileText className="h-3 w-3 mr-1" /> Modified</>
                            )}
                          </Badge>
                          <code className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">
                            {change.column}
                          </code>
                          <Badge variant="outline">{change.dataType}</Badge>
                        </div>
                        <p className="text-gray-600 text-sm">{change.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="data">
              <Card>
                <CardHeader>
                  <CardTitle>Data Changes</CardTitle>
                  <CardDescription>Changes to the actual dataset content</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-3">Record Changes</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="flex items-center space-x-2 p-3 bg-green-50 rounded-lg">
                        <Plus className="h-5 w-5 text-green-600" />
                        <div>
                          <div className="font-medium text-green-800">{mockDataChanges.recordsAdded.toLocaleString()}</div>
                          <div className="text-sm text-green-600">Records Added</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 p-3 bg-yellow-50 rounded-lg">
                        <FileText className="h-5 w-5 text-yellow-600" />
                        <div>
                          <div className="font-medium text-yellow-800">{mockDataChanges.recordsModified}</div>
                          <div className="text-sm text-yellow-600">Records Modified</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                        <Minus className="h-5 w-5 text-gray-600" />
                        <div>
                          <div className="font-medium text-gray-800">{mockDataChanges.recordsRemoved}</div>
                          <div className="text-sm text-gray-600">Records Removed</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-medium mb-3">New Data Sources</h4>
                    <div className="space-y-2">
                      {mockDataChanges.newDataSources.map((source, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Plus className="h-4 w-4 text-green-600" />
                          <span className="text-sm">{source}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-medium mb-3">Data Corrections</h4>
                    <div className="space-y-2">
                      {mockDataChanges.dataCorrections.map((correction, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <AlertTriangle className="h-4 w-4 text-yellow-600" />
                          <span className="text-sm">{correction}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="files">
              <Card>
                <CardHeader>
                  <CardTitle>File Changes</CardTitle>
                  <CardDescription>Changes to dataset files and structure</CardDescription>
                </CardHeader>
                <CardContent>
                  <Alert className="mb-6">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      File structure remains compatible. No breaking changes detected.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <FileText className="h-5 w-5 text-blue-600" />
                          <span className="font-medium">canine_orthopedic_data.csv</span>
                        </div>
                        <Badge variant="secondary">Modified</Badge>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-gray-600">v{mockVersionComparison.from.version}:</div>
                          <div>{mockVersionComparison.from.size}</div>
                        </div>
                        <div>
                          <div className="text-gray-600">v{mockVersionComparison.to.version}:</div>
                          <div>{mockVersionComparison.to.size} <span className="text-green-600">(+200 MB)</span></div>
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <FileText className="h-5 w-5 text-green-600" />
                          <span className="font-medium">metadata.json</span>
                        </div>
                        <Badge variant="default">Added</Badge>
                      </div>
                      <p className="text-sm text-gray-600">
                        Enhanced metadata file with detailed field descriptions and data dictionary
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
