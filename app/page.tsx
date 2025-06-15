"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Calendar,
  CheckCircle,
  Clock,
  MessageCircle,
  Mic,
  Play,
  Smartphone,
  Target,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setMessage(data.message);
        setEmail("");
      } else {
        setIsSuccess(false);
        setMessage(data.error);
      }
    } catch (error) {
      setIsSuccess(false);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <Link href="/">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Mic className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Adulting Buddy
            </span>
          </div>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#features"
            className="text-sm font-medium hover:text-purple-600 transition-colors"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium hover:text-purple-600 transition-colors"
          >
            How It Works
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
                    Plan, track, and optimize your day with AI-powered voice
                    assistance. Adulting Buddy helps you stay organized and
                    productive, one conversation at a time.
                  </p>
                </div>
                <div className="w-full max-w-md space-y-2 py-4">
                  <h1 className="text-xl">Sign up for alpha access</h1>
                  <form onSubmit={handleSubmit} className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="max-w-lg flex-1"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={isLoading}
                    />
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-purple-600 to-blue-600 px-8"
                      disabled={isLoading}
                    >
                      {isLoading ? "..." : "Submit"}
                    </Button>
                  </form>
                  {message && (
                    <p
                      className={`text-sm ${
                        isSuccess ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {message}
                    </p>
                  )}
                </div>
              </div>

              {/* Mobile screenshot */}
              <div className="flex items-center justify-center flex-col">
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
                <div className="flex items-center justify-center mt-4 bg-white rounded-lg p-2">
                  <a href="https://x.com/dibbaa_code/status/1934046139332145604" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="bg-white" size="lg">
                      <Play className="w-4 h-4 mr-2" />
                      Watch Demo
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-blue-100 text-blue-700">Features</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Everything you need to adult better
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From daily planning to habit tracking, Adulting Buddy uses AI
                  to help you stay on top of your responsibilities.
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
                    Tell your AI buddy what you need to do, and it'll help you
                    create realistic, achievable daily plans.
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
                    Check in throughout the day with voice updates. Your buddy
                    tracks your progress and celebrates wins.
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
                    Set meaningful goals and get personalized strategies to
                    achieve them, one step at a time.
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
                    Learn to estimate time better and build sustainable routines
                    that actually stick.
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
                    Natural conversations make planning feel effortless. No
                    typing, just talking to your AI buddy.
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
                    Understand your productivity patterns and get personalized
                    recommendations for improvement.
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
                <Badge className="bg-purple-100 text-purple-700">
                  How It Works
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Simple. Natural. Effective.
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Getting organized has never been this easy. Just talk to your
                  AI buddy like you would a friend.
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
                  {
                    '"Hey buddy, I need to meal prep, do laundry, and finish that work presentation today."'
                  }
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-bold">Get Your Plan</h3>
                <p className="text-gray-600">
                  Your AI buddy creates a realistic schedule, suggests time
                  blocks, and helps prioritize tasks.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-bold">Stay on Track</h3>
                <p className="text-gray-600">
                  Check in throughout the day, get gentle reminders, and
                  celebrate your progress together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="download"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-600 to-blue-600"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to adult like a pro?
                </h2>
                <p className="max-w-[600px] text-purple-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join our alpha testing program and get early access to the
                  app.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <Smartphone className="w-4 h-4 mr-2" />
                  Sign up for alpha access
                </Button>
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
        <p className="text-xs text-gray-500 sm:ml-auto">
          © 2024 Adulting Buddy. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 text-gray-500"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 text-gray-500"
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 text-gray-500"
          >
            Support
          </Link>
        </nav>
      </footer>
    </div>
  );
}
