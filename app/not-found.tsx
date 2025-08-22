import Link from "next/link"
import { Database, Home, Search} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl text-center">
        <div className="mb-8">
          <Link href="/" className="flex items-center justify-center space-x-2 mb-6">
            <Database className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-900">VetDataHub</span>
          </Link>
          
          <div className="text-8xl font-bold text-green-600 mb-4">404</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. This might be because the feature is still under development or the URL has changed.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What you can do:</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Button asChild className="h-auto p-4">
                <Link href="/">
                  <div className="flex items-center space-x-3">
                    <Home className="h-5 w-5" />
                    <div className="text-left">
                      <div className="font-medium">Go Home</div>
                      <div className="text-sm opacity-80">Return to the homepage</div>
                    </div>
                  </div>
                </Link>
              </Button>
              
              <Button variant="outline" asChild className="h-auto p-4">
                <Link href="/datasets">
                  <div className="flex items-center space-x-3">
                    <Search className="h-5 w-5" />
                    <div className="text-left">
                      <div className="font-medium">Browse Datasets</div>
                      <div className="text-sm opacity-80">Explore available data</div>
                    </div>
                  </div>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="font-medium text-blue-900 mb-2">VetDataHub is in Beta</h3>
          <p className="text-blue-700 text-sm mb-4">
            Many features are still under development. If you were looking for a specific feature, 
            it might be available soon!
          </p>
          <Button variant="outline" size="sm" asChild>
            <Link href="/auth/register">Join Beta Program</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
