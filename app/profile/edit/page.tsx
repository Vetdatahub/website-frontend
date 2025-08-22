"use client"

import { useState } from "react"
import { ArrowLeft, Save, Upload } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"

export default function EditProfilePage() {
  const [formData, setFormData] = useState({
    displayName: "Dr. Sarah Chen",
    email: "s.chen@ucdavis.edu",
    bio: "Veterinary researcher specializing in orthopedic conditions in companion animals. Principal Investigator at University of California, Davis. Passionate about open data sharing and collaborative research.",
    affiliation: "University of California, Davis",
    location: "Davis, CA, USA",
    website: "https://vetmed.ucdavis.edu/faculty/sarah-chen",
    orcid: "0000-0002-1234-5678",
    twitter: "@sarahchen_vet",
    linkedin: "sarah-chen-dvm",
    researchInterests: "orthopedics, companion animals, data sharing",
    expertise: "clinical-trials, data-analysis, veterinary-medicine"
  })

  const [notifications, setNotifications] = useState({
    emailDigest: true,
    newDatasets: true,
    communityUpdates: false,
    directMessages: true,
    datasetComments: true,
    collaborationRequests: true
  })

  const [privacy, setPrivacy] = useState({
    profileVisibility: "public",
    emailVisibility: "members",
    showDatasets: true,
    showActivity: true,
    allowMessages: true
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleNotificationChange = (field: string, value: boolean) => {
    setNotifications(prev => ({ ...prev, [field]: value }))
  }

  const handlePrivacyChange = (field: string, value: string | boolean) => {
    setPrivacy(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/profile/dr-sarah-chen">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Profile
                </Link>
              </Button>
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-green-600">VetDataHub</span>
              </Link>
            </div>
            <Button>
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Edit Profile</h1>
            <p className="text-gray-600">Update your profile information and preferences</p>
          </div>

          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="privacy">Privacy</TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <div className="space-y-6">
                {/* Profile Picture */}
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Picture</CardTitle>
                    <CardDescription>Update your profile picture</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-6">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src="/placeholder.svg?height=96&width=96" />
                        <AvatarFallback className="text-2xl">SC</AvatarFallback>
                      </Avatar>
                      <div className="space-y-2">
                        <Button variant="outline">
                          <Upload className="h-4 w-4 mr-2" />
                          Upload New Picture
                        </Button>
                        <p className="text-sm text-gray-500">
                          JPG, PNG or GIF. Max size 2MB. Recommended: 400x400px
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Basic Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Basic Information</CardTitle>
                    <CardDescription>Your public profile information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="displayName">Display Name *</Label>
                        <Input
                          id="displayName"
                          value={formData.displayName}
                          onChange={(e) => handleInputChange('displayName', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        rows={4}
                        placeholder="Tell others about yourself, your research interests, and expertise..."
                        value={formData.bio}
                        onChange={(e) => handleInputChange('bio', e.target.value)}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="affiliation">Institution/Affiliation</Label>
                        <Input
                          id="affiliation"
                          value={formData.affiliation}
                          onChange={(e) => handleInputChange('affiliation', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          value={formData.location}
                          onChange={(e) => handleInputChange('location', e.target.value)}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Professional Links */}
                <Card>
                  <CardHeader>
                    <CardTitle>Professional Links</CardTitle>
                    <CardDescription>Add links to your professional profiles and websites</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="website">Personal Website</Label>
                        <Input
                          id="website"
                          type="url"
                          placeholder="https://your-website.com"
                          value={formData.website}
                          onChange={(e) => handleInputChange('website', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="orcid">ORCID ID</Label>
                        <Input
                          id="orcid"
                          placeholder="0000-0000-0000-0000"
                          value={formData.orcid}
                          onChange={(e) => handleInputChange('orcid', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="twitter">Twitter Handle</Label>
                        <Input
                          id="twitter"
                          placeholder="@username"
                          value={formData.twitter}
                          onChange={(e) => handleInputChange('twitter', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="linkedin">LinkedIn Profile</Label>
                        <Input
                          id="linkedin"
                          placeholder="linkedin.com/in/username"
                          value={formData.linkedin}
                          onChange={(e) => handleInputChange('linkedin', e.target.value)}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Research Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Research Information</CardTitle>
                    <CardDescription>Help others discover your expertise and interests</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="researchInterests">Research Interests</Label>
                      <Input
                        id="researchInterests"
                        placeholder="Enter keywords separated by commas"
                        value={formData.researchInterests}
                        onChange={(e) => handleInputChange('researchInterests', e.target.value)}
                      />
                      <p className="text-sm text-gray-500">
                        Keywords that describe your research areas and interests
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="expertise">Areas of Expertise</Label>
                      <Input
                        id="expertise"
                        placeholder="Enter areas separated by commas"
                        value={formData.expertise}
                        onChange={(e) => handleInputChange('expertise', e.target.value)}
                      />
                      <p className="text-sm text-gray-500">
                        Your professional expertise and specializations
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>Choose what notifications you&apos;d like to receive</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Email Digest</div>
                        <div className="text-sm text-gray-600">Weekly summary of platform activity</div>
                      </div>
                      <Checkbox
                        checked={notifications.emailDigest}
                        onCheckedChange={(checked) => handleNotificationChange('emailDigest', checked as boolean)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">New Datasets</div>
                        <div className="text-sm text-gray-600">Notifications when new datasets are published</div>
                      </div>
                      <Checkbox
                        checked={notifications.newDatasets}
                        onCheckedChange={(checked) => handleNotificationChange('newDatasets', checked as boolean)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Community Updates</div>
                        <div className="text-sm text-gray-600">Updates about community discussions and events</div>
                      </div>
                      <Checkbox
                        checked={notifications.communityUpdates}
                        onCheckedChange={(checked) => handleNotificationChange('communityUpdates', checked as boolean)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Direct Messages</div>
                        <div className="text-sm text-gray-600">Messages from other users</div>
                      </div>
                      <Checkbox
                        checked={notifications.directMessages}
                        onCheckedChange={(checked) => handleNotificationChange('directMessages', checked as boolean)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Dataset Comments</div>
                        <div className="text-sm text-gray-600">Comments and discussions on your datasets</div>
                      </div>
                      <Checkbox
                        checked={notifications.datasetComments}
                        onCheckedChange={(checked) => handleNotificationChange('datasetComments', checked as boolean)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Collaboration Requests</div>
                        <div className="text-sm text-gray-600">Invitations to collaborate on research projects</div>
                      </div>
                      <Checkbox
                        checked={notifications.collaborationRequests}
                        onCheckedChange={(checked) => handleNotificationChange('collaborationRequests', checked as boolean)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="privacy">
              <Card>
                <CardHeader>
                  <CardTitle>Privacy Settings</CardTitle>
                  <CardDescription>Control who can see your information and activity</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Profile Visibility</Label>
                      <Select value={privacy.profileVisibility} onValueChange={(value) => handlePrivacyChange('profileVisibility', value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="public">Public - Anyone can view</SelectItem>
                          <SelectItem value="members">Members Only - Registered users only</SelectItem>
                          <SelectItem value="private">Private - Only you can view</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Email Visibility</Label>
                      <Select value={privacy.emailVisibility} onValueChange={(value) => handlePrivacyChange('emailVisibility', value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="public">Public - Anyone can see</SelectItem>
                          <SelectItem value="members">Members Only - Registered users only</SelectItem>
                          <SelectItem value="private">Private - Hidden from everyone</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Show My Datasets</div>
                        <div className="text-sm text-gray-600">Display datasets you&apos;ve contributed on your profile</div>
                      </div>
                      <Checkbox
                        checked={privacy.showDatasets}
                        onCheckedChange={(checked) => handlePrivacyChange('showDatasets', checked as boolean)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Show Activity</div>
                        <div className="text-sm text-gray-600">Display your recent activity and contributions</div>
                      </div>
                      <Checkbox
                        checked={privacy.showActivity}
                        onCheckedChange={(checked) => handlePrivacyChange('showActivity', checked as boolean)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Allow Direct Messages</div>
                        <div className="text-sm text-gray-600">Let other users send you direct messages</div>
                      </div>
                      <Checkbox
                        checked={privacy.allowMessages}
                        onCheckedChange={(checked) => handlePrivacyChange('allowMessages', checked as boolean)}
                      />
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
