"use client"

import { Search, Upload, Users, Database, Star, ArrowRight, CheckCircle, Globe, Shield, Zap } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Database className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">VetDataHub</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/datasets" className="text-gray-600 hover:text-green-600">Browse Datasets</Link>
              <Link href="/community" className="text-gray-600 hover:text-green-600">Community</Link>
              <Link href="/upload" className="text-gray-600 hover:text-green-600">Upload Data</Link>
              <Link href="#features" className="text-gray-600 hover:text-green-600">Features</Link>
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

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 bg-green-100 text-green-800 px-4 py-2">
              🚀 Now in Beta - Join the Future of Veterinary Data Sharing
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              The Open Veterinary Data Repository
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join the revolution in veterinary research. Share your datasets, discover new insights, 
              and collaborate with researchers worldwide. Be among the first to shape the future of animal health data.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button size="lg" className="text-lg px-8 py-4" asChild>
                <Link href="/auth/register">
                  Join Beta Program
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4" asChild>
                <Link href="/upload">
                  Upload First Dataset
                </Link>
              </Button>
            </div>

            {/* Early Adopter Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">500+</div>
                <div className="text-sm text-gray-600">Beta Signups</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">25</div>
                <div className="text-sm text-gray-600">Research Partners</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">12</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-sm text-gray-600">Open Source</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Veterinary Research Needs Better Data Sharing</h2>
            <p className="text-lg text-gray-600 mb-8">
              Critical research is slowed by fragmented data, incompatible formats, and lack of collaboration. 
              It's time for a unified platform that accelerates discovery in animal health.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-red-800">Data Silos</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Valuable research data is locked away in institutional repositories, 
                  preventing collaboration and slowing scientific progress.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-yellow-800">Discovery Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Researchers spend countless hours searching for relevant datasets 
                  across multiple platforms with inconsistent metadata standards.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-800">Limited Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Without proper tools for sharing and discussing data, 
                  researchers miss opportunities for meaningful collaboration.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Built for the Veterinary Research Community</h2>
            <p className="text-lg text-gray-600">
              VetDataHub provides everything researchers need to share, discover, and collaborate on veterinary datasets.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Upload className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle>Easy Data Sharing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Upload datasets with comprehensive metadata, version control, and flexible licensing. 
                  Support for CSV, JSON, Parquet, NetCDF, and more.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Automated metadata extraction</li>
                  <li>• DOI assignment for citations</li>
                  <li>• Flexible licensing options</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Search className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle>Powerful Discovery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Find relevant datasets with advanced search, faceted filtering, 
                  and AI-powered recommendations based on your research interests.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Species-specific filtering</li>
                  <li>• Geographic search capabilities</li>
                  <li>• Study type categorization</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle>Research Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Connect with researchers worldwide through discussions, reviews, 
                  and collaborative projects. Build your research reputation.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Dataset discussions & Q&A</li>
                  <li>• Peer review system</li>
                  <li>• Collaboration matching</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle>Data Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Enterprise-grade security with encryption, access controls, 
                  and compliance with research data protection standards.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• End-to-end encryption</li>
                  <li>• GDPR & HIPAA compliance</li>
                  <li>• Audit trails</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle>API Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Integrate VetDataHub into your research workflows with our 
                  comprehensive REST API and Python/R client libraries.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• RESTful API endpoints</li>
                  <li>• Python & R packages</li>
                  <li>• Automated workflows</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle>Global Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Built on international standards for research data management, 
                  ensuring interoperability and long-term preservation.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• FAIR data principles</li>
                  <li>• Dublin Core metadata</li>
                  <li>• Long-term preservation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Early Adopters / Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Trusted by Leading Researchers</h2>
            <p className="text-lg text-gray-600">
              Join veterinary researchers and institutions who are already part of our beta program.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "VetDataHub is exactly what our field needed. The platform makes it incredibly easy 
                  to share our research data while maintaining proper attribution and licensing."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold">SC</span>
                  </div>
                  <div>
                    <div className="font-medium">Dr. Sarah Chen</div>
                    <div className="text-sm text-gray-600">UC Davis School of Veterinary Medicine</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "The collaborative features are game-changing. I've already connected with three 
                  researchers working on similar projects through the platform."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold">MT</span>
                  </div>
                  <div>
                    <div className="font-medium">Dr. Michael Torres</div>
                    <div className="text-sm text-gray-600">Cornell University College of Veterinary Medicine</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "As a graduate student, having access to diverse datasets from around the world 
                  has been invaluable for my research. The quality and documentation are excellent."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold">AM</span>
                  </div>
                  <div>
                    <div className="font-medium">Dr. Amina Mensah</div>
                    <div className="text-sm text-gray-600">University of Ghana School of Veterinary Medicine</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Veterinary Research?</h2>
            <p className="text-xl mb-8 text-green-100">
              Join our beta program and be among the first researchers to experience the future of veterinary data sharing. 
              Help us build the platform that will accelerate discoveries in animal health.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
                <Link href="/auth/register">
                  Join Beta Program
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-green-600" asChild>
                <Link href="/upload">
                  Upload Your Data
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-200" />
                <span className="text-green-100">Free during beta</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-200" />
                <span className="text-green-100">No vendor lock-in</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-200" />
                <span className="text-green-100">Open source</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-8">
              Get notified about new features, dataset uploads, and community highlights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email address" 
                className="flex-1"
              />
              <Button>Subscribe</Button>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              No spam, unsubscribe at any time. Read our{" "}
              <Link href="/privacy" className="text-green-600 hover:underline">
                privacy policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
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
            <p>&copy; 2024 VetDataHub. Open source under MIT License. Currently in Beta.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
