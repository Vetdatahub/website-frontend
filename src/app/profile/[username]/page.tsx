"use client"

import { useState } from "react"
import { MapPin, Calendar, Mail, ExternalLink, Star, Download, MessageSquare, Edit } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar"
import { Progress } from "@/src/components/ui/progress"

const mockUser = {
  username: "dr-sarah-chen",
  displayName: "Dr. Sarah Chen",
  avatar: "/placeholder.svg?height=120&width=120",
  bio: "Veterinary researcher specializing in orthopedic conditions in companion animals. Principal Investigator at University of California, Davis. Passionate about open data sharing and collaborative research.",
  affiliation: "University of California, Davis",
  location: "Davis, CA, USA",
  email: "s.chen@ucdavis.edu",
  website: "https://vetmed.ucdavis.edu/faculty/sarah-chen",
  orcid: "0000-0002-1234-5678",
  joinDate: "March 2022",
  stats: {
    datasets: 12,
    downloads: 15678,
    citations: 89,
    discussions: 45,
    reviews: 23,
    reputation: 1250
  }
}

const mockDatasets = [
  {
    id: 1,
    title: "Canine Orthopedic Conditions Survey",
    description: "Comprehensive dataset of 15,000 cases covering common orthopedic conditions in dogs across North America.",
    species: "Dog",
    category: "Clinical Trials",
    rating: 4.8,
    downloads: 1234,
    size: "2.3 GB",
    uploadDate: "2024-01-15"
  },
  {
    id: 2,
    title: "Feline Joint Disease Longitudinal Study",
    description: "5-year longitudinal study tracking joint disease progression in 800 cats.",
    species: "Cat",
    category: "Clinical Trials",
    rating: 4.6,
    downloads: 856,
    size: "1.8 GB",
    uploadDate: "2023-11-20"
  }
]

const mockReviews = [
  {
    id: 1,
    datasetTitle: "West African Livestock Health Surveillance",
    rating: 5,
    comment: "Excellent dataset with comprehensive metadata. Very useful for comparative epidemiological studies.",
    date: "2024-01-10"
  },
  {
    id: 2,
    datasetTitle: "Equine Exercise Physiology Database",
    rating: 4,
    comment: "Good quality data, though could benefit from additional demographic variables.",
    date: "2023-12-15"
  }
]

const mockDiscussions = [
  {
    id: 1,
    title: "Best practices for anonymizing clinical data before upload",
    category: "Data Submission Help",
    replies: 12,
    views: 234,
    lastActivity: "2 hours ago"
  },
  {
    id: 2,
    title: "Standardizing orthopedic outcome measures across studies",
    category: "Data Standards",
    replies: 8,
    views: 156,
    lastActivity: "1 day ago"
  }
]

export default function ProfilePage() {
  const [isOwnProfile] = useState(true) // In real app, check if viewing own profile

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-green-600">VetDataHub</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/datasets" className="text-gray-600 hover:text-green-600">Browse Datasets</Link>
              <Link href="/community" className="text-gray-600 hover:text-green-600">Community</Link>
              <Link href="/upload" className="text-gray-600 hover:text-green-600">Upload Data</Link>
            </nav>
            {isOwnProfile && (
              <Button variant="outline" asChild>
                <Link href="/profile/edit">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Link>
              </Button>
            )}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Avatar className="h-24 w-24 mx-auto mb-4">
                    <AvatarImage src={mockUser.avatar || "/placeholder.svg"} />
                    <AvatarFallback className="text-2xl">
                      {mockUser.displayName.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <h1 className="text-2xl font-bold mb-2">{mockUser.displayName}</h1>
                  <p className="text-gray-600 mb-4">{mockUser.bio}</p>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span>{mockUser.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span>Joined {mockUser.joinDate}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <Link href={`mailto:${mockUser.email}`} className="text-green-600 hover:underline">
                      {mockUser.email}
                    </Link>
                  </div>
                  {mockUser.website && (
                    <div className="flex items-center space-x-2">
                      <ExternalLink className="h-4 w-4 text-gray-500" />
                      <Link href={mockUser.website} className="text-green-600 hover:underline" target="_blank">
                        Personal Website
                      </Link>
                    </div>
                  )}
                  {mockUser.orcid && (
                    <div className="flex items-center space-x-2">
                      <ExternalLink className="h-4 w-4 text-gray-500" />
                      <Link href={`https://orcid.org/${mockUser.orcid}`} className="text-green-600 hover:underline" target="_blank">
                        ORCID: {mockUser.orcid}
                      </Link>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-medium mb-3">Affiliation</h3>
                  <p className="text-sm text-gray-600">{mockUser.affiliation}</p>
                </div>
              </CardContent>
            </Card>

            {/* Stats Card */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Profile Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-600">{mockUser.stats.datasets}</div>
                    <div className="text-sm text-gray-600">Datasets</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">{mockUser.stats.downloads.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Downloads</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">{mockUser.stats.citations}</div>
                    <div className="text-sm text-gray-600">Citations</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">{mockUser.stats.reputation}</div>
                    <div className="text-sm text-gray-600">Reputation</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reputation Breakdown */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Reputation Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Dataset Contributions</span>
                    <span>800 pts</span>
                  </div>
                  <Progress value={64} />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Community Engagement</span>
                    <span>300 pts</span>
                  </div>
                  <Progress value={24} />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Peer Reviews</span>
                    <span>150 pts</span>
                  </div>
                  <Progress value={12} />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="datasets" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="datasets">Datasets</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="discussions">Discussions</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>

              <TabsContent value="datasets">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Contributed Datasets</h2>
                    <Badge variant="outline">{mockUser.stats.datasets} datasets</Badge>
                  </div>
                  
                  <div className="space-y-4">
                    {mockDatasets.map((dataset) => (
                      <Card key={dataset.id} className="hover:shadow-md transition-shadow">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <CardTitle className="text-lg mb-2">
                                <Link href={`/datasets/${dataset.id}`} className="hover:text-green-600">
                                  {dataset.title}
                                </Link>
                              </CardTitle>
                              <CardDescription className="mb-3">
                                {dataset.description}
                              </CardDescription>
                              <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary">{dataset.species}</Badge>
                                <Badge variant="outline">{dataset.category}</Badge>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between text-sm text-gray-600">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-1">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span>{dataset.rating}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Download className="h-4 w-4" />
                                <span>{dataset.downloads} downloads</span>
                              </div>
                              <span>{dataset.size}</span>
                            </div>
                            <span>Uploaded {dataset.uploadDate}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Dataset Reviews</h2>
                    <Badge variant="outline">{mockUser.stats.reviews} reviews</Badge>
                  </div>
                  
                  <div className="space-y-4">
                    {mockReviews.map((review) => (
                      <Card key={review.id}>
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">
                              <Link href="#" className="hover:text-green-600">
                                {review.datasetTitle}
                              </Link>
                            </CardTitle>
                            <div className="flex items-center space-x-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star 
                                  key={star} 
                                  className={`h-4 w-4 ${star <= review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                                />
                              ))}
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700 mb-2">{review.comment}</p>
                          <p className="text-sm text-gray-500">Reviewed on {review.date}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="discussions">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Forum Discussions</h2>
                    <Badge variant="outline">{mockUser.stats.discussions} discussions</Badge>
                  </div>
                  
                  <div className="space-y-4">
                    {mockDiscussions.map((discussion) => (
                      <Card key={discussion.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <Link href={`/community/discussions/${discussion.id}`} className="font-medium text-lg hover:text-green-600 block mb-2">
                                {discussion.title}
                              </Link>
                              <div className="flex items-center space-x-4 text-sm text-gray-600">
                                <Badge variant="outline">{discussion.category}</Badge>
                                <div className="flex items-center space-x-1">
                                  <MessageSquare className="h-4 w-4" />
                                  <span>{discussion.replies} replies</span>
                                </div>
                                <span>{discussion.views} views</span>
                                <span>Last activity {discussion.lastActivity}</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="activity">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Recent Activity</h2>
                  
                  <div className="space-y-4">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <div>
                            <p className="font-medium">Uploaded new dataset</p>
                            <p className="text-gray-600">Canine Orthopedic Conditions Survey v1.2.0</p>
                            <p className="text-sm text-gray-500">2 days ago</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <div>
                            <p className="font-medium">Started new discussion</p>
                            <p className="text-gray-600">Best practices for anonymizing clinical data before upload</p>
                            <p className="text-sm text-gray-500">1 week ago</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                          <div>
                            <p className="font-medium">Reviewed dataset</p>
                            <p className="text-gray-600">West African Livestock Health Surveillance - 5 stars</p>
                            <p className="text-sm text-gray-500">2 weeks ago</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
