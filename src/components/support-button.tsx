"use client"

import { useState } from "react"
import { Heart, X, Coffee, Star, ExternalLink } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import Link from "next/link"

export function SupportButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Floating Support Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          size="lg"
        >
          <Heart className="h-6 w-6 text-white" />
        </Button>
      </div>

      {/* Support Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md relative animate-in fade-in-0 zoom-in-95 duration-300">
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-2 top-2 h-8 w-8 p-0"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>

            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-red-500" />
              </div>
              <CardTitle className="text-xl">Support VetDataHub</CardTitle>
              <CardDescription>Help us build the future of veterinary data sharing</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="text-center mb-6">
                <Badge variant="secondary" className="bg-green-100 text-green-800 mb-2">
                  🚀 Open Source & Free
                </Badge>
                <p className="text-sm text-gray-600">
                  VetDataHub is a community-driven project. Your support helps us maintain servers, develop new
                  features, and keep the platform free for researchers worldwide.
                </p>
              </div>

              <div className="space-y-3">

                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="https://buymeacoffee.com/johananoa" target="_blank" rel="noopener noreferrer">
                    <Coffee className="h-4 w-4 mr-2" />
                    Buy us a Coffee
                    <ExternalLink className="h-3 w-3 ml-2" />
                  </Link>
                </Button>

                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="https://github.com/vetdatahub/" target="_blank" rel="noopener noreferrer">
                    <Star className="h-4 w-4 mr-2" />
                    Star on GitHub
                    <ExternalLink className="h-3 w-3 ml-2" />
                  </Link>
                </Button>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-medium text-sm mb-2">Other ways to help:</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Share VetDataHub with your research network</li>
                  <li>• Contribute datasets to grow our community</li>
                  <li>• Report bugs and suggest improvements</li>
                  <li>• Join our beta testing program</li>
                  <li>• Write about us in your publications</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-3 text-center">
                <p className="text-xs text-blue-700">
                  <strong>100% of donations</strong> go directly to platform development, server costs, and community
                  support.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
