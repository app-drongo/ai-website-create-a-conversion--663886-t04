// Features Component
// Generated: 2025-08-28T11:47:43.754Z
// Template: features-c001
// Context: Homepage
// Position: pages.0.sections.1

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Calculator, 
  Brain, 
  Users, 
  Clock, 
  Award, 
  BookOpen,
  Target,
  MessageSquare,
  TrendingUp
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Calculator,
      title: "Advanced Problem Solving",
      description: "Master complex calculus, linear algebra, and differential equations with step-by-step guidance.",
      badge: "Core Skills"
    },
    {
      icon: Brain,
      title: "AI-Enhanced Learning",
      description: "Personalized learning algorithms adapt to your pace and identify knowledge gaps instantly.",
      badge: "Technology"
    },
    {
      icon: Users,
      title: "Expert PhD Instructors",
      description: "Learn from mathematics professors and industry professionals with decades of experience.",
      badge: "Faculty"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Book sessions that fit your schedule with 24/7 availability and instant homework help.",
      badge: "Convenience"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "94% of students improve their grades within the first month of personalized instruction.",
      badge: "Success"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "From high school algebra to graduate-level mathematics, we cover every topic thoroughly.",
      badge: "Content"
    },
    {
      icon: Target,
      title: "Exam Preparation",
      description: "Specialized coaching for SAT, ACT, GRE, and university entrance mathematics exams.",
      badge: "Test Prep"
    },
    {
      icon: MessageSquare,
      title: "Interactive Whiteboard",
      description: "Real-time collaboration with digital tools that make complex equations crystal clear.",
      badge: "Tools"
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Detailed analytics show your improvement across all mathematical concepts and skills.",
      badge: "Analytics"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Why Choose MathMaster Academy
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Excel in Mathematics
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive online math tutoring designed to build confidence, improve grades, 
            and prepare you for academic and career success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to transform your mathematical abilities?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Schedule Free Consultation
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Browse Course Catalog
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}