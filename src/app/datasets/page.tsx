"use client"

import { useState } from "react"
import { Search, Filter, Calendar, MapPin, Users, FileText, Star } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import { Checkbox } from "@/src/components/ui/checkbox"
import { Label } from "@/src/components/ui/label"
import { Separator } from "@/src/components/ui/separator"
import { Slider } from "@/src/components/ui/slider"
import Header from "@/src/components/header"

export default function AdvancedSearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [dateRange, setDateRange] = useState([2020, 2024])
  const [sampleSizeRange, setSampleSizeRange] = useState([100, 50000])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header/>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Advanced Search</h1>
            <p className="text-gray-600">Build complex queries to find exactly what you&apos;re looking for</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Search Filters */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Filter className="h-5 w-5" />
                    <span>Search Filters</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Keywords */}
                  <div className="space-y-2">
                    <Label>Keywords</Label>
                    <Input 
                      placeholder="Enter keywords..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>

                  <Separator />

                  {/* Species */}
                  <div className="space-y-3">
                    <Label>Species</Label>
                    <div className="space-y-2">
                      {["Dog", "Cat", "Cattle", "Equine", "Poultry", "Wildlife", "Other"].map((species) => (
                        <div key={species} className="flex items-center space-x-2">
                          <Checkbox id={species} />
                          <Label htmlFor={species} className="text-sm">{species}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Category */}
                  <div className="space-y-3">
                    <Label>Category</Label>
                    <div className="space-y-2">
                      {["Clinical Trials", "Epidemiology", "Genomics", "Imaging", "Pathology"].map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox id={category} />
                          <Label htmlFor={category} className="text-sm">{category}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Date Range */}
                  <div className="space-y-3">
                    <Label>Data Collection Period</Label>
                    <div className="space-y-4">
                      <div className="px-2">
                        <Slider
                          value={dateRange}
                          onValueChange={setDateRange}
                          min={2000}
                          max={2024}
                          step={1}
                          className="w-full"
                        />
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>{dateRange[0]}</span>
                        <span>{dateRange[1]}</span>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Sample Size */}
                  <div className="space-y-3">
                    <Label>Sample Size</Label>
                    <div className="space-y-4">
                      <div className="px-2">
                        <Slider
                          value={sampleSizeRange}
                          onValueChange={setSampleSizeRange}
                          min={10}
                          max={100000}
                          step={10}
                          className="w-full"
                        />
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>{sampleSizeRange[0].toLocaleString()}</span>
                        <span>{sampleSizeRange[1].toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Location */}
                  <div className="space-y-2">
                    <Label>Location</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="north-america">North America</SelectItem>
                        <SelectItem value="europe">Europe</SelectItem>
                        <SelectItem value="asia">Asia</SelectItem>
                        <SelectItem value="africa">Africa</SelectItem>
                        <SelectItem value="oceania">Oceania</SelectItem>
                        <SelectItem value="south-america">South America</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Separator />

                  {/* File Format */}
                  <div className="space-y-2">
                    <Label>File Format</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Any format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="csv">CSV</SelectItem>
                        <SelectItem value="json">JSON</SelectItem>
                        <SelectItem value="parquet">Parquet</SelectItem>
                        <SelectItem value="excel">Excel</SelectItem>
                        <SelectItem value="netcdf">NetCDF</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Separator />

                  {/* License */}
                  <div className="space-y-2">
                    <Label>License</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Any license" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cc-by">CC-BY-4.0</SelectItem>
                        <SelectItem value="cc0">CC0</SelectItem>
                        <SelectItem value="gpl">GPL-3.0</SelectItem>
                        <SelectItem value="proprietary">Proprietary</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="w-full">
                    <Search className="h-4 w-4 mr-2" />
                    Search Datasets
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Search Results */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-sm text-gray-600">
                    Found 42 datasets matching your criteria
                  </div>
                  <Select defaultValue="relevance">
                    <SelectTrigger className="w-full sm:w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">Most Relevant</SelectItem>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="downloads">Most Downloaded</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Search Results */}
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">
                            <Link href={`/datasets/${i}`} className="hover:text-green-600">
                              Canine Orthopedic Conditions Survey {i}
                            </Link>
                          </CardTitle>
                          <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <Users className="h-4 w-4" />
                              <span>Dr. Sarah Chen, Dr. Michael Torres</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span>4.8</span>
                            </div>
                          </div>
                        </div>
                        <Badge variant="outline">v1.2.0</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4 text-base">
                        Comprehensive dataset of 15,000 cases covering common orthopedic conditions in dogs across North America. 
                        This longitudinal study includes diagnostic imaging, treatment outcomes, and follow-up data spanning 5 years.
                      </CardDescription>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary">Dog</Badge>
                        <Badge variant="outline">Clinical Trials</Badge>
                        <Badge variant="outline">CSV</Badge>
                        <Badge variant="outline">CC-BY-4.0</Badge>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>North America</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>2019-2024</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>15,000 cases</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FileText className="h-4 w-4" />
                          <span>2.3 GB</span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/datasets/${i}`}>View Details</Link>
                        </Button>
                        <div className="text-sm text-gray-500">
                          1,234 downloads • Updated Jan 15, 2024
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 mt-8">
                <Button variant="outline" disabled>Previous</Button>
                <Button variant="outline" className="bg-green-600 text-white">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
