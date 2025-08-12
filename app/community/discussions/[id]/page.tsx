"use client"

import { useState } from "react"
import { ArrowLeft, MessageSquare, Heart, Flag, Share2, Pin, CheckCircle, Users } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"

const mockDiscussion = {
  id: 1,
  title: "Best practices for anonymizing clinical data before upload",
  author: "Dr. Sarah Chen",
  avatar: "/placeholder.svg?height=40&width=40",
  category: "Data Submission Help",
  content: `I'm preparing to upload a large clinical dataset to VetDataHub and want to ensure I'm following best practices for data anonymization. The dataset contains patient records from a multi-year study on canine orthopedic conditions.

My main concerns are:

1. **Patient Identifiers**: How should I handle unique patient IDs while maintaining the ability to track longitudinal data?

2. **Dates**: Should I shift all dates by a random offset, or is there a better approach for temporal data?

3. **Location Data**: We have clinic locations - should these be generalized to regions?

4. **Rare Conditions**: Some cases involve very rare conditions that might be identifying even without direct identifiers.

I've read through the platform guidelines, but I'd love to hear from others who have successfully uploaded similar datasets. What tools or methods have you found most effective?

Any insights would be greatly appreciated!`,
  replies: 12,
  views: 234,
  likes: 18,
  createdAt: "2 hours ago",
  isPinned: true,
  isResolved: false,
  tags: ["privacy", "clinical-data", "anonymization", "best-practices"]
}

const mockReplies = [
  {
    id: 1,
    author: "Dr. Michael Torres",
    avatar: "/placeholder.svg?height=32&width=32",
    content: "Great question, Sarah! I recently went through this process with our equine study. For patient IDs, I used a cryptographic hash function to create consistent but non-reversible identifiers. This maintains the ability to track longitudinal data while ensuring anonymity.",
    createdAt: "1 hour ago",
    likes: 8,
    isAccepted: false
  },
  {
    id: 2,
    author: "Dr. Elena Rossi",
    avatar: "/placeholder.svg?height=32&width=32",
    content: "For date shifting, I recommend using a consistent random offset per patient rather than a global offset. This preserves the temporal relationships within each patient's data while obscuring the actual dates. The HIPAA Safe Harbor method suggests shifts of up to 364 days.",
    createdAt: "45 minutes ago",
    likes: 12,
    isAccepted: true
  },
  {
    id: 3,
    author: "Dr. Amina Mensah",
    avatar: "/placeholder.svg?height=32&width=32",
    content: "Regarding location data, I've found that generalizing to larger geographic regions (state/province level) usually provides sufficient privacy protection while maintaining research utility. For rare conditions, consider whether the rarity itself is essential to your research question - sometimes these cases need to be excluded from public datasets.",
    createdAt: "30 minutes ago",
    likes: 6,
    isAccepted: false
  }
]

export default function DiscussionDetailPage() {
  const [newReply, setNewReply] = useState("")
  const [isLiked, setIsLiked] = useState(false)

  const handleSubmitReply = (e: React.FormEvent) => {
    e.preventDefault()
    if (newReply.trim()) {
      console.log('Reply submitted:', newReply)
      setNewReply("")
    }
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
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Flag className="h-4 w-4 mr-2" />
                Report
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Discussion Header */}
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    {mockDiscussion.isPinned && (
                      <Pin className="h-4 w-4 text-green-600" />
                    )}
                    <Badge variant="outline">{mockDiscussion.category}</Badge>
                    {mockDiscussion.isResolved && (
                      <Badge variant="default" className="bg-green-600">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Resolved
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-2xl mb-4">{mockDiscussion.title}</CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={mockDiscussion.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{mockDiscussion.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{mockDiscussion.author}</span>
                    </div>
                    <span>{mockDiscussion.createdAt}</span>
                    <div className="flex items-center space-x-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>{mockDiscussion.replies} replies</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{mockDiscussion.views} views</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none mb-6">
                <div className="whitespace-pre-wrap text-gray-700">
                  {mockDiscussion.content}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {mockDiscussion.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsLiked(!isLiked)}
                    className={isLiked ? "text-red-600" : ""}
                  >
                    <Heart className={`h-4 w-4 mr-1 ${isLiked ? 'fill-current' : ''}`} />
                    {mockDiscussion.likes + (isLiked ? 1 : 0)}
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    Reply
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Replies */}
          <div className="space-y-6 mb-8">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">
                {mockDiscussion.replies} Replies
              </h2>
            </div>

            {mockReplies.map((reply) => (
              <Card key={reply.id} className={reply.isAccepted ? "border-green-200 bg-green-50" : ""}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Avatar>
                      <AvatarImage src={reply.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{reply.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="font-medium">{reply.author}</span>
                        <span className="text-sm text-gray-500">{reply.createdAt}</span>
                        {reply.isAccepted && (
                          <Badge variant="default" className="bg-green-600">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Accepted Answer
                          </Badge>
                        )}
                      </div>
                      <div className="text-gray-700 mb-3">
                        {reply.content}
                      </div>
                      <div className="flex items-center space-x-4 text-sm">
                        <Button variant="ghost" size="sm">
                          <Heart className="h-4 w-4 mr-1" />
                          {reply.likes}
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          Reply
                        </Button>
                        {!reply.isAccepted && (
                          <Button variant="ghost" size="sm" className="text-green-600">
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Mark as Answer
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Reply Form */}
          <Card>
            <CardHeader>
              <CardTitle>Post a Reply</CardTitle>
              <CardDescription>
                Share your thoughts, experiences, or additional questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitReply} className="space-y-4">
                <Textarea
                  placeholder="Write your reply here..."
                  rows={6}
                  value={newReply}
                  onChange={(e) => setNewReply(e.target.value)}
                />
                <div className="flex justify-end space-x-4">
                  <Button variant="outline" type="button">
                    Preview
                  </Button>
                  <Button type="submit" disabled={!newReply.trim()}>
                    Post Reply
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
