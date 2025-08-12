"use client"

import { useState } from "react"
import { ArrowLeft, Plus, Tag, Users } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function NewDiscussionPage() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    content: "",
    tags: ""
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Discussion submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/community">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Community
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
            <h1 className="text-3xl font-bold mb-2">Start New Discussion</h1>
            <p className="text-gray-600">Share your questions, ideas, or insights with the community</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Plus className="h-5 w-5" />
                    <span>New Discussion</span>
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below to start a new discussion
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="title">Discussion Title *</Label>
                      <Input
                        id="title"
                        placeholder="Enter a clear, descriptive title"
                        value={formData.title}
                        onChange={(e) => handleInputChange('title', e.target.value)}
                        required
                      />
                      <p className="text-sm text-gray-500">
                        Be specific and descriptive to help others understand your topic
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">Category *</Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Questions</SelectItem>
                          <SelectItem value="data-submission">Data Submission Help</SelectItem>
                          <SelectItem value="feature-requests">Feature Requests</SelectItem>
                          <SelectItem value="bug-reports">Bug Reports</SelectItem>
                          <SelectItem value="research-collaboration">Research Collaboration</SelectItem>
                          <SelectItem value="data-standards">Data Standards</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="content">Discussion Content *</Label>
                      <Textarea
                        id="content"
                        placeholder="Describe your question, idea, or topic in detail..."
                        rows={8}
                        value={formData.content}
                        onChange={(e) => handleInputChange('content', e.target.value)}
                        required
                      />
                      <p className="text-sm text-gray-500">
                        Provide context, background information, and any relevant details
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tags">Tags</Label>
                      <Input
                        id="tags"
                        placeholder="Enter tags separated by commas (e.g., genomics, data-quality, collaboration)"
                        value={formData.tags}
                        onChange={(e) => handleInputChange('tags', e.target.value)}
                      />
                      <p className="text-sm text-gray-500">
                        Add relevant tags to help others find your discussion
                      </p>
                    </div>

                    <Alert>
                      <Users className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Community Guidelines:</strong> Be respectful, stay on topic, and provide helpful information. 
                        Search existing discussions before posting to avoid duplicates.
                      </AlertDescription>
                    </Alert>

                    <div className="flex justify-end space-x-4">
                      <Button variant="outline" asChild>
                        <Link href="/community">Cancel</Link>
                      </Button>
                      <Button type="submit" disabled={!formData.title || !formData.category || !formData.content}>
                        Post Discussion
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Discussion Tips</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Writing a Good Title</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Be specific and descriptive</li>
                      <li>• Include key terms others might search for</li>
                      <li>• Avoid vague titles like "Help needed"</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Providing Context</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Explain your background and goals</li>
                      <li>• Include relevant technical details</li>
                      <li>• Mention what you've already tried</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Using Tags</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Use existing popular tags when possible</li>
                      <li>• Include species, data types, or methods</li>
                      <li>• Keep tags relevant and specific</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Popular Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "data-quality", "genomics", "clinical-trials", "epidemiology",
                      "collaboration", "metadata", "file-formats", "privacy",
                      "statistics", "visualization", "api", "best-practices"
                    ].map((tag) => (
                      <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-green-100">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="font-medium">Data anonymization best practices</div>
                      <div className="text-gray-600">12 replies • 2 hours ago</div>
                    </div>
                    <div>
                      <div className="font-medium">Genomic data format standards</div>
                      <div className="text-gray-600">8 replies • 4 hours ago</div>
                    </div>
                    <div>
                      <div className="font-medium">Looking for equine research collaborators</div>
                      <div className="text-gray-600">15 replies • 6 hours ago</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
