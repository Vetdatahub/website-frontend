"use client"

import { useState } from "react"
import { Search, Filter, Upload, Users, Database, ArrowRight, Plus } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"

export default function DatasetsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSpecies, setSelectedSpecies] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Database className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-green-600">VetDataHub</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/datasets" className="text-green-600 font-medium">Browse Datasets</Link>
              <Link href="/community" className="text-gray-600 hover:text-green-600">Community</Link>
              <Link href="/upload" className="text-gray-600 hover:text-green-600">Upload Data</Link>
            </nav>
            <Button asChild>
              <Link href="/upload">Upload Dataset</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Empty State Hero */}
        <div className="text-center py-16">
          <div className="max-w-2xl mx-auto">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Database className="h-12 w-12 text-green-600" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Be the First to Share Your Research
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              VetDataHub is launching soon! Help us build the world's largest open veterinary data repository 
              by uploading your datasets and joining our growing community of researchers.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button size="lg" asChild>
                <Link href="/upload">
                  <Upload className="h-5 w-5 mr-2" />
                  Upload First Dataset
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/auth/register">
                  Join Beta Program
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-white rounded-lg border">
                <div className="text-2xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-sm text-gray-600">Researchers Signed Up</div>
              </div>
              <div className="p-4 bg-white rounded-lg border">
                <div className="text-2xl font-bold text-green-600 mb-2">25</div>
                <div className="text-sm text-gray-600">Partner Institutions</div>
              </div>
              <div className="p-4 bg-white rounded-lg border">
                <div className="text-2xl font-bold text-green-600 mb-2">12</div>
                <div className="text-sm text-gray-600">Countries Represented</div>
              </div>
            </div>
          </div>
        </div>

        {/* What You Can Upload */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12">What Kind of Data Can You Share?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-sm font-bold">🐕</span>
                    </div>
                    <span>Clinical Trials</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Treatment outcomes, diagnostic data, patient records, and longitudinal studies 
                    across companion animals and livestock.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm font-bold">🧬</span>
                    </div>
                    <span>Genomics</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Sequencing data, variant analysis, hereditary disease studies, 
                    and population genetics across veterinary species.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 text-sm font-bold">📊</span>
                    </div>
                    <span>Epidemiology</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Disease surveillance, outbreak investigations, vaccination records, 
                    and public health monitoring data.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 text-sm font-bold">🔬</span>
                    </div>
                    <span>Pathology</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Histopathology images, necropsy findings, diagnostic samples, 
                    and laboratory test results.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 text-sm font-bold">📷</span>
                    </div>
                    <span>Imaging</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Radiographs, ultrasound, MRI, CT scans, and other diagnostic 
                    imaging data with annotations.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                      <span className="text-teal-600 text-sm font-bold">🌍</span>
                    </div>
                    <span>Wildlife</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Conservation data, wildlife health monitoring, species distribution, 
                    and environmental impact studies.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Search Interface (Preview) */}
        <section className="py-16 bg-white rounded-lg border">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-center mb-8">
              Preview: How Researchers Will Discover Your Data
            </h2>
            
            <div className="flex flex-col xl:flex-row gap-8">
              {/* Filters Sidebar Preview */}
              <div className="xl:w-1/4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Filter className="h-5 w-5" />
                      <span>Search Filters</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-3">Species</h3>
                      <div className="space-y-2">
                        {["Dog", "Cat", "Cattle", "Equine", "Poultry", "Wildlife"].map((species) => (
                          <div key={species} className="flex items-center space-x-2">
                            <Checkbox id={species} disabled />
                            <label htmlFor={species} className="text-sm text-gray-500">{species}</label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-medium mb-3">Category</h3>
                      <div className="space-y-2">
                        {["Clinical Trials", "Epidemiology", "Genomics", "Imaging", "Pathology"].map((category) => (
                          <div key={category} className="flex items-center space-x-2">
                            <Checkbox id={category} disabled />
                            <label htmlFor={category} className="text-sm text-gray-500">{category}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Search Results Preview */}
              <div className="xl:w-3/4">
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input 
                      placeholder="Search datasets, keywords, contributors..." 
                      className="pl-10 pr-4 py-3"
                      disabled
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <Card className="opacity-50">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-center py-12">
                        <div className="text-center">
                          <Plus className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                          <h3 className="text-lg font-medium text-gray-500 mb-2">Your Dataset Could Be Here</h3>
                          <p className="text-gray-400 mb-4">
                            Be among the first researchers to share your data and help build this community.
                          </p>
                          <Button asChild>
                            <Link href="/upload">Upload Dataset</Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Building */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8">Join the Growing Community</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <Users className="h-10 w-10 text-green-600 mx-auto mb-2" />
                  <CardTitle>Research Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Connect with researchers worldwide, discuss methodologies, 
                    and find collaborators for your next project.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Database className="h-10 w-10 text-green-600 mx-auto mb-2" />
                  <CardTitle>Data Standards</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Help establish best practices for veterinary data sharing 
                    and contribute to global research standards.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Upload className="h-10 w-10 text-green-600 mx-auto mb-2" />
                  <CardTitle>Early Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Be recognized as a founding contributor and help shape 
                    the future of veterinary data sharing.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            <div className="bg-green-50 rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">Ready to Make History?</h3>
              <p className="text-gray-600 mb-6">
                Upload the first dataset to VetDataHub and help launch the future of veterinary research collaboration.
              </p>
              <Button size="lg" asChild>
                <Link href="/upload">
                  Upload First Dataset
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
