import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mic,
  Calendar,
  CheckCircle,
  Smartphone,
  Clock,
  Target,
  Star,
  Download,
  Play,
  Users,
  TrendingUp,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
            <Mic className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Adulting Buddy
          </span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-purple-600 transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium hover:text-purple-600 transition-colors">
            How It Works
          </Link>
          <Link href="#download" className="text-sm font-medium hover:text-purple-600 transition-colors">
            Download
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
                    <Mic className="w-3 h-3 mr-1" />
                    AI Voice Assistant
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Your Personal{" "}
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      Productivity
                    </span>{" "}
                    Voice Agent
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Plan, track, and optimize your day with AI-powered voice assistance. Adulting Buddy helps you stay
                    organized and productive, one conversation at a time.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download for iOS
                  </Button>
                  <Button variant="outline" size="lg">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Demo
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">4.8/5</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>10K+ users</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="w-64 h-[500px] bg-gradient-to-br from-purple-600 to-blue-600 rounded-[3rem] p-2 shadow-2xl">
                    <div className="w-full h-full bg-black rounded-[2.5rem] flex items-center justify-center">
                      <div className="text-center space-y-4 p-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full mx-auto flex items-center justify-center">
                          <Mic className="w-8 h-8 text-white" />
                        </div>
                        <div className="space-y-2">
                          <div className="h-2 bg-gray-800 rounded w-32 mx-auto"></div>
                          <div className="h-2 bg-gray-800 rounded w-24 mx-auto"></div>
                        </div>
                        <div className="w-12 h-12 bg-purple-500 rounded-full mx-auto animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Mic className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-blue-100 text-blue-700">Features</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything you need to adult better</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From daily planning to habit tracking, Adulting Buddy uses AI to help you stay on top of your
                  responsibilities.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold">Smart Planning</h3>
                  <p className="text-gray-600">
                    Tell your AI buddy what you need to do, and it'll help you create realistic, achievable daily plans.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold">Progress Tracking</h3>
                  <p className="text-gray-600">
                    Check in throughout the day with voice updates. Your buddy tracks your progress and celebrates wins.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold">Goal Setting</h3>
                  <p className="text-gray-600">
                    Set meaningful goals and get personalized strategies to achieve them, one step at a time.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold">Time Management</h3>
                  <p className="text-gray-600">
                    Learn to estimate time better and build sustainable routines that actually stick.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-bold">Voice-First</h3>
                  <p className="text-gray-600">
                    Natural conversations make planning feel effortless. No typing, just talking to your AI buddy.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold">Insights & Analytics</h3>
                  <p className="text-gray-600">
                    Understand your productivity patterns and get personalized recommendations for improvement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section
          id="how-it-works"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-50 to-blue-50"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-purple-100 text-purple-700">How It Works</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple. Natural. Effective.</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Getting organized has never been this easy. Just talk to your AI buddy like you would a friend.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-bold">Tell Your Buddy</h3>
                <p className="text-gray-600">
                  {'"Hey buddy, I need to meal prep, do laundry, and finish that work presentation today."'}
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-bold">Get Your Plan</h3>
                <p className="text-gray-600">
                  Your AI buddy creates a realistic schedule, suggests time blocks, and helps prioritize tasks.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-bold">Stay on Track</h3>
                <p className="text-gray-600">
                  Check in throughout the day, get gentle reminders, and celebrate your progress together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-green-100 text-green-700">Testimonials</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Loved by busy adults everywhere</h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600">
                    {
                      "\"Finally, a productivity app that doesn't feel like work. It's like having a supportive friend who actually helps me get things done.\""
                    }
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-purple-600">S</span>
                    </div>
                    <div>
                      <p className="font-medium">Sarah M.</p>
                      <p className="text-sm text-gray-500">Marketing Manager</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600">
                    {
                      '"The voice interface is a game-changer. I can plan my day while getting ready in the morning. So convenient!"'
                    }
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-blue-600">M</span>
                    </div>
                    <div>
                      <p className="font-medium">Mike R.</p>
                      <p className="text-sm text-gray-500">Software Engineer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600">
                    {
                      '"I\'ve tried every productivity app out there. This is the first one that actually understands how my brain works."'
                    }
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-green-600">A</span>
                    </div>
                    <div>
                      <p className="font-medium">Alex T.</p>
                      <p className="text-sm text-gray-500">Graduate Student</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="download" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-600 to-blue-600">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to adult like a pro?</h2>
                <p className="max-w-[600px] text-purple-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of users who've transformed their daily productivity with their AI buddy.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Download for iOS
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-purple-600"
                >
                  Join Waitlist
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-purple-100">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4" />
                  <span>Free to download</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4" />
                  <span>No credit card required</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Stay updated</h2>
                <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get productivity tips, feature updates, and early access to new capabilities.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                  <Button type="submit" className="bg-gradient-to-r from-purple-600 to-blue-600">
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-gray-500">No spam, unsubscribe at any time.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-gradient-to-br from-purple-600 to-blue-600 rounded flex items-center justify-center">
            <Mic className="w-3 h-3 text-white" />
          </div>
          <span className="text-sm font-medium">Adulting Buddy</span>
        </div>
        <p className="text-xs text-gray-500 sm:ml-auto">© 2024 Adulting Buddy. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-500">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-500">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-500">
            Support
          </Link>
        </nav>
      </footer>
    </div>
  )
}
