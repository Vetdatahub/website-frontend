import { Search, Filter, Calendar, MapPin, Users, FileText, Star } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Label } from "@/src/components/ui/label"
import { Separator } from "@/src/components/ui/separator"
import Header from "@/src/components/header"
import { cookies } from 'next/headers'

interface Dataset {
  id: string;
  title?: string;
  description?: string;
  // Add other dataset properties as needed
}

interface Species {
  id: string;
  name: string;
}

interface Category {
  id: string;
  name: string;
}

interface SearchParams {
  q?: string;
  category?: string;
  species?: string;
  page?: string;
}

async function fetchDatasets(searchParams: SearchParams) {
  try {
    const params = new URLSearchParams();
    if (searchParams.q) params.append('search', searchParams.q);
    if (searchParams.category) params.append('category', searchParams.category);
    if (searchParams.species) params.append('species', searchParams.species);
    if (searchParams.page) params.append('page', searchParams.page);

    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/datasets/?${params}`;
    console.log('Fetching datasets from:', url);
    
    // Get cookies from Next.js
    const cookieStore = await cookies();
    const cookieHeader = cookieStore.toString();
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Cookie': cookieHeader,
      },
    });

    if (!response.ok) {
      console.error('Datasets fetch failed:', response.status, response.statusText);
      throw new Error(`Failed to fetch datasets: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching datasets:", error);
    return { results: [], previous: null, next: null };
  }
}

async function fetchCategories() {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/datasets/categories`;
    console.log('Fetching categories from:', url);
    
    // Get cookies from Next.js
    const cookieStore = await cookies();
    const cookieHeader = cookieStore.toString();
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Cookie': cookieHeader,
      },
    });

    if (!response.ok) {
      console.error('Categories fetch failed:', response.status, response.statusText);
      throw new Error(`Failed to fetch categories: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

async function fetchSpecies() {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/datasets/species`;
    console.log('Fetching species from:', url);
    
    // Get cookies from Next.js
    const cookieStore = await cookies();
    const cookieHeader = cookieStore.toString();
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Cookie': cookieHeader,
      },
    });

    if (!response.ok) {
      console.error('Species fetch failed:', response.status, response.statusText);
      throw new Error(`Failed to fetch species: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching species:", error);
    return [];
  }
}

export default async function AdvancedSearchPage({ 
  searchParams 
}: { 
  searchParams: Promise<SearchParams>
}) {
  // Await searchParams first
  const resolvedSearchParams = await searchParams;
  
  // Fetch all data in parallel
  const [datasetsResponse, categories, species] = await Promise.all([
    fetchDatasets(resolvedSearchParams),
    fetchCategories(),
    fetchSpecies()
  ]);

  const datasets = datasetsResponse.results || [];
  const prevLink = datasetsResponse.previous;
  const nextLink = datasetsResponse.next;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header/>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Advanced Search</h1>
            <p className="text-gray-600">Build complex queries to find exactly what you&apos;re looking for</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Search Filters */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Filter className="h-5 w-5" />
                    <span>Search Filters</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Keywords */}
                  <form className="space-y-4" action="/datasets" method="GET">
                  <div className="space-y-2">
                    <Label>Keywords</Label>
                    <Input 
                      placeholder="Enter keywords..."
                      type="text"
                      name="q"
                      defaultValue={resolvedSearchParams.q || ''}
                    />
                  </div>

                  <Separator />

                  {/* Species */}
                  <div className="space-y-3">
                    <Label>Species</Label>
                    <div className="space-y-2">
                      {species.map((sp: Species) => (
                        <div key={sp.id} className="flex items-center space-x-2">
                          <input 
                            type="radio" 
                            name="species" 
                            value={sp.name} 
                            id={sp.id}
                            defaultChecked={resolvedSearchParams.species === sp.name}
                            className="size-4 text-primary border-input focus:ring-2 focus:ring-ring"
                          />
                          <Label htmlFor={sp.id} className="text-sm">{sp.name}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Category */}
                  <div className="space-y-3">
                    <Label>Category</Label>
                    <div className="space-y-2">
                      {categories.map((category: Category) => (
                        <div key={category?.id} className="flex items-center space-x-2">
                          <input 
                            type="radio" 
                            name="category" 
                            value={category?.name} 
                            id={category?.name}
                            defaultChecked={resolvedSearchParams.category === category?.name}
                            className="size-4 text-primary border-input focus:ring-2 focus:ring-ring"
                          />
                          <Label htmlFor={category?.name} className="text-sm">{category?.name}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full" type="submit">
                    <Search className="h-4 w-4 mr-2" />
                    Search Datasets
                  </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Search Results */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-sm text-gray-600">
                    Found {datasets.length} datasets matching your criteria
                  </div>
                </div>
              </div>

              {/* Search Results */}
              <div className="space-y-6">
                {datasets.map((dataset: Dataset) => (
                  <Card key={dataset.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">
                            <Link href={`/datasets/${dataset.id}`} className="hover:text-green-600">
                              Canine Orthopedic Conditions Survey {dataset.id}
                            </Link>
                          </CardTitle>
                          <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <Users className="h-4 w-4" />
                              <span>Dr. Sarah Chen, Dr. Michael Torres</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span>4.8</span>
                            </div>
                          </div>
                        </div>
                        <Badge variant="outline">v1.2.0</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4 text-base">
                        Comprehensive dataset of 15,000 cases covering common orthopedic conditions in dogs across North America. 
                        This longitudinal study includes diagnostic imaging, treatment outcomes, and follow-up data spanning 5 years.
                      </CardDescription>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary">Dog</Badge>
                        <Badge variant="outline">Clinical Trials</Badge>
                        <Badge variant="outline">CSV</Badge>
                        <Badge variant="outline">CC-BY-4.0</Badge>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>North America</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>2019-2024</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>15,000 cases</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FileText className="h-4 w-4" />
                          <span>2.3 GB</span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/datasets/${dataset.id}`}>View Details</Link>
                        </Button>
                        <div className="text-sm text-gray-500">
                          1,234 downloads • Updated Jan 15, 2024
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {datasets.length > 0 ? (
                  <div className="flex items-center justify-between mt-8">
                    {prevLink ? (
                      <Button variant="outline" asChild>
                        <Link href={`/datasets?${new URLSearchParams({
                          ...resolvedSearchParams,
                          page: (parseInt(resolvedSearchParams.page || '1') - 1).toString()
                        })}`}>
                          Previous
                        </Link>
                      </Button>
                    ) : (
                      <Button variant="outline" disabled>
                        Previous
                      </Button>
                    )}
                    
                    {nextLink ? (
                      <Button variant="outline" asChild>
                        <Link href={`/datasets?${new URLSearchParams({
                          ...resolvedSearchParams,
                          page: (parseInt(resolvedSearchParams.page || '1') + 1).toString()
                        })}`}>
                          Next
                        </Link>
                      </Button>
                    ) : (
                      <Button variant="outline" disabled>
                        Next
                      </Button>
                    )}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
