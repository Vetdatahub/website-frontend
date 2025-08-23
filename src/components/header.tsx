import Link from "next/link"
import { Database } from "lucide-react"
import { Button } from "./ui/button"


export default function Header() {
    return (       <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Database className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">VetDataHub</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/datasets" className="text-gray-600 hover:text-green-600">Browse Datasets</Link>
              <Link href="/datasets/upload" className="text-gray-600 hover:text-green-600">Upload Data</Link>
            </nav>
            <div className="flex items-center space-x-2">
              <Button variant="outline" asChild>
                <Link href="/auth/login">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/auth/register">Join Beta</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
    )

}