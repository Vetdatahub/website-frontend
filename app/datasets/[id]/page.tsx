"use client"

import { useState } from "react"
import { ArrowLeft, Download, Star, Calendar, MapPin, Tag,  MessageSquare,  Share2, Heart, Flag, Upload } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"

const mockDataset = {
  id: "1",
  title: "Canine Orthopedic Conditions Survey",
  description: "Comprehensive dataset of 15,000 cases covering common orthopedic conditions in dogs across North America. This longitudinal study includes diagnostic imaging, treatment outcomes, and follow-up data spanning 5 years. The dataset contains detailed information about patient demographics, clinical presentations, diagnostic procedures, treatment protocols, and long-term outcomes.",
  contributors: [
    { name: "Dr. Sarah Chen", avatar: "/placeholder.svg?height=40&width=40", role: "Principal Investigator" },
    { name: "Dr. Michael Torres", avatar: "/placeholder.svg?height=40&width=40", role: "Co-Investigator" }
  ],
  species: "Dog",
  category: "Clinical Trials",
  location: "North America",
  dateRange: "2019-2024",
  rating: 4.8,
  downloads: 1234,
  size: "2.3 GB",
  format: "CSV",
  license: "CC-BY-4.0",
  version: "1.2.0",
  doi: "10.5281/zenodo.1234567",
  checksum: "sha256:a1b2c3d4e5f6...",
  sampleSize: 15000,
  fundingSource: "National Science Foundation, Grant #12345",
  ethicsApproval: "University IRB #2019-001",
  methodology: "Multi-center prospective cohort study involving 25 veterinary hospitals across the United States and Canada.",
  relatedPublications: ["10.1016/j.tvjl.2023.105123", "10.1111/vsu.13456"]
}

const mockDiscussions = [
  {
    id: 1,
    author: "Dr. Elena Rossi",
    avatar: "/placeholder.svg?height=32&width=32",
    timestamp: "2 hours ago",
    content: "This is an excellent dataset! I'm particularly interested in the follow-up data. Could you provide more details about the criteria used for long-term outcome assessment?",
    replies: 3
  },
  {
    id: 2,
    author: "Sarah Boateng",
    avatar: "/placeholder.svg?height=32&width=32",
    timestamp: "1 day ago",
    content: "As a veterinary student, I found this dataset incredibly valuable for my capstone project. The documentation is thorough and well-organized. Thank you for sharing!",
    replies: 1
  }
]

const mockReviews = [
  {
    id: 1,
    author: "Dr. Lucas Thorne",
    avatar: "/placeholder.svg?height=32&width=32",
    rating: 5,
    timestamp: "1 week ago",
    content: "Outstanding dataset with comprehensive metadata. The data quality is exceptional and the documentation makes it easy to understand and use. Highly recommended for orthopedic research.",
    helpful: 12
  },
  {
    id: 2,
    author: "Dr. Amina Mensah",
    avatar: "/placeholder.svg?height=32&width=32",
    rating: 4,
    timestamp: "2 weeks ago",
    content: "Very useful dataset for comparative studies. The sample size is impressive and the geographic coverage is good. Would love to see similar data from other regions.",
    helpful: 8
  }
]

const mockVersions = [
  {
    version: "1.2.0",
    date: "2024-01-15",
    author: "Dr. Sarah Chen",
    changes: "Added 2,000 new cases from 2024 data collection period. Updated metadata with additional outcome measures.",
    size: "2.3 GB"
  },
  {
    version: "1.1.0",
    date: "2023-08-20",
    author: "Dr. Michael Torres",
    changes: "Included imaging data for 80% of cases. Added new variables for treatment response assessment.",
    size: "2.1 GB"
  },
  {
    version: "1.0.0",
    date: "2023-03-10",
    author: "Dr. Sarah Chen",
    changes: "Initial release with 10,000 cases from 2019-2022 data collection.",
    size: "1.8 GB"
  }
]

export default function DatasetDetailPage() {
  const [newComment, setNewComment] = useState("")
  const [userRating, setUserRating] = useState(0)

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
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 xl:col-span-3">
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{mockDataset.title}</CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
                      <div className="flex items-center space-x-2">
                        {mockDataset.contributors.map((contributor, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={contributor.avatar || "/placeholder.svg"} />
                              <AvatarFallback>{contributor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="text-sm font-medium">{contributor.name}</div>
                              <div className="text-xs text-gray-500">{contributor.role}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{mockDataset.rating}</span>
                        <span className="text-gray-500">(24 reviews)</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline" className="ml-4">v{mockDataset.version}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6">
                  {mockDataset.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary">{mockDataset.species}</Badge>
                  <Badge variant="outline">{mockDataset.category}</Badge>
                  <Badge variant="outline">{mockDataset.format}</Badge>
                  <Badge variant="outline">{mockDataset.license}</Badge>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span>{mockDataset.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span>{mockDataset.dateRange}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Download className="h-4 w-4 text-gray-500" />
                    <span>{mockDataset.downloads} downloads</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Tag className="h-4 w-4 text-gray-500" />
                    <span>{mockDataset.size}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tabs */}
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="discussions">Discussions</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="versions">Versions</TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <Card>
                  <CardHeader>
                    <CardTitle>Dataset Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Methodology</h4>
                      <p className="text-gray-600">{mockDataset.methodology}</p>
                    </div>
                    <Separator />
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Sample Size</h4>
                        <p className="text-gray-600">{mockDataset.sampleSize.toLocaleString()} cases</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Funding Source</h4>
                        <p className="text-gray-600">{mockDataset.fundingSource}</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Ethics Approval</h4>
                        <p className="text-gray-600">{mockDataset.ethicsApproval}</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">DOI</h4>
                        <p className="text-gray-600">{mockDataset.doi}</p>
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium mb-2">Related Publications</h4>
                      <ul className="space-y-1">
                        {mockDataset.relatedPublications.map((pub, index) => (
                          <li key={index}>
                            <Link href={`https://doi.org/${pub}`} className="text-green-600 hover:underline" target="_blank" rel="noopener noreferrer">
                              {pub}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="discussions">
                <Card>
                  <CardHeader>
                    <CardTitle>Discussions</CardTitle>
                    <CardDescription>Ask questions and discuss this dataset with the community</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 mb-6">
                      <Textarea 
                        placeholder="Start a discussion about this dataset..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                      />
                      <Button>Post Comment</Button>
                    </div>
                    
                    <div className="space-y-6">
                      {mockDiscussions.map((discussion) => (
                        <div key={discussion.id} className="border-l-2 border-gray-200 pl-4">
                          <div className="flex items-start space-x-3">
                            <Avatar>
                              <AvatarImage src={discussion.avatar || "/placeholder.svg"} />
                              <AvatarFallback>{discussion.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                <span className="font-medium">{discussion.author}</span>
                                <span className="text-sm text-gray-500">{discussion.timestamp}</span>
                              </div>
                              <p className="text-gray-700 mb-2">{discussion.content}</p>
                              <div className="flex items-center space-x-4 text-sm">
                                <Button variant="ghost" size="sm">
                                  <MessageSquare className="h-4 w-4 mr-1" />
                                  Reply ({discussion.replies})
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Heart className="h-4 w-4 mr-1" />
                                  Like
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews">
                <Card>
                  <CardHeader>
                    <CardTitle>Reviews & Ratings</CardTitle>
                    <CardDescription>See what the community thinks about this dataset</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium mb-3">Rate this dataset</h4>
                      <div className="flex items-center space-x-2 mb-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            onClick={() => setUserRating(star)}
                            className={`h-6 w-6 ${star <= userRating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                          >
                            <Star className="h-6 w-6" />
                          </button>
                        ))}
                      </div>
                      <Textarea placeholder="Write a review..." className="mb-3" />
                      <Button size="sm">Submit Review</Button>
                    </div>
                    
                    <div className="space-y-6">
                      {mockReviews.map((review) => (
                        <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                          <div className="flex items-start space-x-3">
                            <Avatar>
                              <AvatarImage src={review.avatar || "/placeholder.svg"} />
                              <AvatarFallback>{review.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                <span className="font-medium">{review.author}</span>
                                <div className="flex items-center">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <Star 
                                      key={star} 
                                      className={`h-4 w-4 ${star <= review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                                    />
                                  ))}
                                </div>
                                <span className="text-sm text-gray-500">{review.timestamp}</span>
                              </div>
                              <p className="text-gray-700 mb-2">{review.content}</p>
                              <div className="flex items-center space-x-4 text-sm">
                                <Button variant="ghost" size="sm">
                                  <Heart className="h-4 w-4 mr-1" />
                                  Helpful ({review.helpful})
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Flag className="h-4 w-4 mr-1" />
                                  Report
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="versions">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Version History</CardTitle>
                        <CardDescription>Track changes and updates to this dataset</CardDescription>
                      </div>
                      <Button asChild>
                        <Link href={`/datasets/${mockDataset.id}/new-version`}>
                          <Upload className="h-4 w-4 mr-2" />
                          Upload New Version
                        </Link>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockVersions.map((version, index) => (
                        <div key={version.version} className="flex items-start space-x-4 p-4 border rounded-lg">
                          <div className="flex-shrink-0">
                            <Badge variant={index === 0 ? "default" : "outline"}>
                              v{version.version}
                            </Badge>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="font-medium">{version.author}</span>
                              <span className="text-sm text-gray-500">{version.date}</span>
                              <span className="text-sm text-gray-500">• {version.size}</span>
                            </div>
                            <p className="text-gray-700">{version.changes}</p>
                          </div>
                          <div className="flex-shrink-0 space-x-2">
                            {index > 0 && (
                              <Button variant="ghost" size="sm">
                                Compare
                              </Button>
                            )}
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Download Card */}
            <Card>
              <CardHeader>
                <CardTitle>Download Dataset</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{mockDataset.size}</div>
                  <div className="text-sm text-gray-600">Total size</div>
                </div>
                <Button className="w-full" size="lg">
                  <Download className="h-5 w-5 mr-2" />
                  Download Latest Version
                </Button>
                <div className="text-xs text-gray-500 text-center">
                  By downloading, you agree to the {mockDataset.license} license
                </div>
              </CardContent>
            </Card>

            {/* Stats Card */}
            <Card>
              <CardHeader>
                <CardTitle>Dataset Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Downloads</span>
                  <span className="font-medium">{mockDataset.downloads.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Views</span>
                  <span className="font-medium">5,678</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Citations</span>
                  <span className="font-medium">23</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Forks</span>
                  <span className="font-medium">7</span>
                </div>
              </CardContent>
            </Card>

            {/* Rating Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle>Rating Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[5, 4, 3, 2, 1].map((stars) => (
                  <div key={stars} className="flex items-center space-x-2">
                    <span className="text-sm w-8">{stars}★</span>
                    <Progress value={stars === 5 ? 70 : stars === 4 ? 25 : 5} className="flex-1" />
                    <span className="text-sm text-gray-600 w-8">{stars === 5 ? 17 : stars === 4 ? 6 : 1}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Related Datasets */}
            <Card>
              <CardHeader>
                <CardTitle>Related Datasets</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { title: "Feline Orthopedic Cases", rating: 4.6 },
                  { title: "Equine Lameness Study", rating: 4.4 },
                  { title: "Small Animal Surgery Outcomes", rating: 4.7 }
                ].map((dataset, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="font-medium text-sm">{dataset.title}</div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs text-gray-600">{dataset.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
