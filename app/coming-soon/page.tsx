"use client"

import { useState } from "react"
import Link from "next/link"
import { Database, ArrowLeft, Mail, CheckCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ComingSoonPage() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl text-center">
        <div className="mb-8">
          <Link href="/" className="flex items-center justify-center space-x-2 mb-6">
            <Database className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-900">VetDataHub</span>
          </Link>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Coming Soon</h1>
          <p className="text-lg text-gray-600 mb-8">
            This feature is currently under development. We're working hard to bring you the best 
            veterinary data sharing experience possible.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Stay Updated</CardTitle>
            <CardDescription>
              Get notified when this feature becomes available
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Button type="submit">
                    <Mail className="h-4 w-4 mr-2" />
                    Notify Me
                  </Button>
                </div>
                <p className="text-sm text-gray-500">
                  We'll send you an email when this feature is ready. No spam, promise!
                </p>
              </form>
            ) : (
              <Alert>
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>
                  Thanks! We'll notify you when this feature is available.
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h3 className="font-medium text-gray-900">In the meantime, you can:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Button variant="outline" asChild>
              <Link href="/datasets">Browse Datasets</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/community">Join Community</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/upload">Upload Data</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/auth/register">Join Beta</Link>
            </Button>
          </div>
        </div>

        <div className="mt-8">
          <Button variant="ghost" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
