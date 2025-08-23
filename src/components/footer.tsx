import { Database} from "lucide-react"
import { Badge } from "./ui/badge"
import Link from "next/link"

export default function Footer(){
    return (
           <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Database className="h-6 w-6 text-green-400" />
                <span className="text-xl font-bold">VetDataHub</span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering veterinary research through open data sharing and collaboration.
              </p>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Beta Version
              </Badge>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/datasets" className="hover:text-white">Browse Datasets</Link></li>
                <li><Link href="/upload" className="hover:text-white">Upload Data</Link></li>
                <li><Link href="/community" className="hover:text-white">Community</Link></li>
                <li><Link href="#" className="hover:text-white">API Docs (Coming Soon)</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/community" className="hover:text-white">Discussions</Link></li>
                <li><Link href="/auth/register" className="hover:text-white">Beta Program</Link></li>
                <li><Link href="#" className="hover:text-white">Guidelines (Coming Soon)</Link></li>
                <li><Link href="#" className="hover:text-white">Support (Coming Soon)</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white">Privacy Policy (Coming Soon)</Link></li>
                <li><Link href="#" className="hover:text-white">Terms of Service (Coming Soon)</Link></li>
                <li><Link href="#" className="hover:text-white">Contact (Coming Soon)</Link></li>
                <li><Link href="https://github.com/vetdatahub" className="hover:text-white" target="_blank">GitHub</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 VetDataHub. Open source under MIT License. Currently in Beta.</p>
          </div>
        </div>
      </footer>
    )
}