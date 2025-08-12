"use client"

import { useState } from "react"
import { Search, MessageSquare, Users, TrendingUp, Plus, Pin, Heart, Reply } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const mockForumCategories = [
  { name: "General Questions", count: 234, description: "Ask questions about using VetDataHub" },
  { name: "Data Submission Help", count: 89, description: "Get help with uploading and managing datasets" },
  { name: "Feature Requests", count: 156, description: "Suggest new features and improvements" },
  { name: "Bug Reports", count: 45, description: "Report issues and bugs" },
  { name: "Research Collaboration", count: 178, description: "Find collaborators and discuss research" },
  { name: "Data Standards", count: 67, description: "Discuss data formats and standards" }
]

const mockDiscussions = [
  {
    id: 1,
    title: "Best practices for anonymizing clinical data before upload",
    author: "Dr. Sarah Chen",
    avatar: "/placeholder.svg?height=32&width=32",
    category: "Data Submission Help",
    replies: 12,
    views: 234,
    lastActivity: "2 hours ago",
    isPinned: true,
    tags: ["privacy", "clinical-data", "anonymization"]
  },
  {
    id: 2,
    title: "Standardizing genomic data formats across veterinary species",
    author: "Dr. Elena Rossi",
    avatar: "/placeholder.svg?height=32&width=32",
    category: "Data Standards",
    replies: 8,
    views: 156,
    lastActivity: "4 hours ago",
    isPinned: false,
    tags: ["genomics", "standards", "formats"]
  },
  {
    id: 3,
    title: "Looking for collaborators on equine exercise physiology research",
    author: "Dr. Michael Torres",
    avatar: "/placeholder.svg?height=32&width=32",
    category: "Research Collaboration",
    replies: 15,
    views: 289,
    lastActivity: "6 hours ago",
    isPinned: false,
    tags: ["collaboration", "equine", "physiology"]
  },
  {
    id: 4,
    title: "Feature request: API rate limiting adjustments for research institutions",
    author: "Dr. Lucas Thorne",
    avatar: "/placeholder.svg?height=32&width=32",
    category: "Feature Requests",
    replies: 23,
    views: 445,
    lastActivity: "8 hours ago",
    isPinned: false,
    tags: ["api", "rate-limiting", "institutions"]
  }
]

const mockTopContributors = [
  { name: "Dr. Amina Mensah", avatar: "/placeholder.svg?height=32&width=32", posts: 89, reputation: 1250 },
  { name: "Dr. Sarah Chen", avatar: "/placeholder.svg?height=32&width=32", posts: 76, reputation: 1180 },
  { name: "Dr. Elena Rossi", avatar: "/placeholder.svg?height=32&width=32", posts: 65, reputation: 980 },
  { name: "Dr. Michael Torres", avatar: "/placeholder.svg?height=32&width=32", posts: 58, reputation: 890 }
]

export default function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

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
              <Link href="/community" className="text-green-600 font-medium">Community</Link>
              <Link href="/upload" className="text-gray-600 hover:text-green-600">Upload Data</Link>
            </nav>
            <Button asChild>
              <Link href="/community/new">
                <Plus className="h-4 w-4 mr-2" />
                New Discussion
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Community Forum</h1>
          <p className="text-gray-600">Connect with researchers, ask questions, and share knowledge</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <Tabs defaultValue="discussions" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="discussions">Discussions</TabsTrigger>
                <TabsTrigger value="categories">Categories</TabsTrigger>
                <TabsTrigger value="trending">Trending</TabsTrigger>
              </TabsList>

              <TabsContent value="discussions">
                {/* Search and Filters */}
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input 
                      placeholder="Search discussions..." 
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {mockForumCategories.map((category) => (
                        <SelectItem key={category.name} value={category.name.toLowerCase().replace(/\s+/g, '-')}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select defaultValue="recent">
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recent">Recent</SelectItem>
                      <SelectItem value="popular">Popular</SelectItem>
                      <SelectItem value="unanswered">Unanswered</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Discussion List */}
                <div className="space-y-4">
                  {mockDiscussions.map((discussion) => (
                    <Card key={discussion.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <Avatar>
                            <AvatarImage src={discussion.avatar || "/placeholder.svg"} />
                            <AvatarFallback>{discussion.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-2">
                              {discussion.isPinned && (
                                <Pin className="h-4 w-4 text-green-600" />
                              )}
                              <Link href={`/community/discussions/${discussion.id}`} className="font-medium text-lg hover:text-green-600">
                                {discussion.title}
                              </Link>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                              <span>by {discussion.author}</span>
                              <Badge variant="outline">{discussion.category}</Badge>
                              <span>{discussion.lastActivity}</span>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-3">
                              {discussion.tags.map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex items-center space-x-6 text-sm text-gray-500">
                              <div className="flex items-center space-x-1">
                                <MessageSquare className="h-4 w-4" />
                                <span>{discussion.replies} replies</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Users className="h-4 w-4" />
                                <span>{discussion.views} views</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center space-x-2 mt-8">
                  <Button variant="outline" disabled>Previous</Button>
                  <Button variant="outline" className="bg-green-600 text-white">1</Button>
                  <Button variant="outline">2</Button>
                  <Button variant="outline">3</Button>
                  <Button variant="outline">Next</Button>
                </div>
              </TabsContent>

              <TabsContent value="categories">
                <div className="grid md:grid-cols-2 gap-6">
                  {mockForumCategories.map((category) => (
                    <Card key={category.name} className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{category.name}</CardTitle>
                          <Badge variant="outline">{category.count} posts</Badge>
                        </div>
                        <CardDescription>{category.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/community/categories/${category.name.toLowerCase().replace(/\s+/g, '-')}`}>
                            View Discussions
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="trending">
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <TrendingUp className="h-5 w-5 text-green-600" />
                        <span>Trending This Week</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {mockDiscussions.slice(0, 3).map((discussion, index) => (
                          <div key={discussion.id} className="flex items-center space-x-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                              <span className="text-sm font-bold text-green-600">#{index + 1}</span>
                            </div>
                            <div className="flex-1">
                              <Link href={`/community/discussions/${discussion.id}`} className="font-medium hover:text-green-600">
                                {discussion.title}
                              </Link>
                              <div className="text-sm text-gray-600">
                                {discussion.replies} replies • {discussion.views} views
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            {/* Community Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Community Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Discussions</span>
                  <span className="font-medium">1,234</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Active Members</span>
                  <span className="font-medium">567</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Posts This Week</span>
                  <span className="font-medium">89</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Solved Questions</span>
                  <span className="font-medium">892</span>
                </div>
              </CardContent>
            </Card>

            {/* Top Contributors */}
            <Card>
              <CardHeader>
                <CardTitle>Top Contributors</CardTitle>
                <CardDescription>Most active community members this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockTopContributors.map((contributor, index) => (
                    <div key={contributor.name} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-green-600">#{index + 1}</span>
                      </div>
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={contributor.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{contributor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{contributor.name}</div>
                        <div className="text-xs text-gray-600">
                          {contributor.posts} posts • {contributor.reputation} reputation
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" asChild>
                  <Link href="/community/new">
                    <Plus className="h-4 w-4 mr-2" />
                    Start New Discussion (Coming Soon)
                  </Link>
                </Button>
                <Button variant="outline" className="w-full" disabled>
                  Community Guidelines (Coming Soon)
                </Button>
                <Button variant="outline" className="w-full" disabled>
                  Get Help (Coming Soon)
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <Heart className="h-4 w-4 text-red-500" />
                    <span className="text-gray-600">
                      <strong>Dr. Sarah Chen</strong> liked a post in "Data Standards"
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Reply className="h-4 w-4 text-blue-500" />
                    <span className="text-gray-600">
                      <strong>Dr. Elena Rossi</strong> replied to "Genomic Data Formats"
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="h-4 w-4 text-green-500" />
                    <span className="text-gray-600">
                      <strong>Dr. Michael Torres</strong> started a new discussion
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
