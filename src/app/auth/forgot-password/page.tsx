import type React from "react"
import { ArrowLeft, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { Database } from "lucide-react"
import { forgotPassword } from "@/src/actions/auth"
import { redirect } from "next/navigation"

interface ForgotPasswordPageProps {
  searchParams?: {
    success?: string
    error?: string
    email?: string
  }
}

async function handleForgotPassword(formData: FormData) {
  "use server"
  
  const email = formData.get("email") as string
  
  if (!email) {
    redirect("/auth/forgot-password?error=Email is required")
  }

  const result = await forgotPassword(email)
  
  if (result.success) {
    redirect(`/auth/forgot-password?success=true&email=${encodeURIComponent(email)}`)
  } else {
    redirect(`/auth/forgot-password?error=${encodeURIComponent(result.message)}`)
  }
}

export default function ForgotPasswordPage({ searchParams }: ForgotPasswordPageProps) {
  const isSubmitted = searchParams?.success === "true"
  const error = searchParams?.error
  const emailParam = searchParams?.email ? decodeURIComponent(searchParams.email) : ""

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="flex items-center justify-center space-x-2 mb-4">
            <Database className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-900">VetDataHub</span>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Reset your password</h1>
          <p className="text-gray-600">
            {isSubmitted
              ? "Check your email for reset instructions"
              : "Enter your email address and we'll send you a link to reset your password"}
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>{isSubmitted ? "Email Sent" : "Forgot Password"}</span>
            </CardTitle>
            <CardDescription>
              {isSubmitted
                ? "We've sent password reset instructions to your email"
                : "We'll send you a secure link to reset your password"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}
            
            {!isSubmitted ? (
              <form action={handleForgotPassword} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@institution.edu"
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Reset Link
                </Button>
              </form>
            ) : (
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
                  Email sent successfully! We&apos;ve sent password reset instructions to {emailParam}
                </div>

                <div className="text-sm text-gray-600 space-y-2">
                  <p>If you don&apos;t see the email in your inbox:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Check your spam or junk folder</li>
                    <li>Make sure you entered the correct email address</li>
                    <li>Wait a few minutes for the email to arrive</li>
                  </ul>
                </div>

                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  asChild
                >
                  <Link href="/auth/forgot-password">
                    Try Different Email
                  </Link>
                </Button>
              </div>
            )}

            <div className="text-center">
              <span className="text-sm text-gray-600">
                Remember your password?{" "}
                <Link href="/auth/login" className="text-green-600 hover:underline">
                  Sign in
                </Link>
              </span>
            </div>

            <div className="text-center">
              <Button variant="ghost" asChild>
                <Link href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
