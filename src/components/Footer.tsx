// Footer Component
// Generated: 2025-08-28T11:47:43.754Z
// Template: footer-c001
// Context: layout
// Position: layout.footer.0

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  GraduationCap,
  Calculator,
  BookOpen
} from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Courses",
      links: [
        { name: "Algebra Fundamentals", href: "/courses/algebra" },
        { name: "Calculus Mastery", href: "/courses/calculus" },
        { name: "Geometry Essentials", href: "/courses/geometry" },
        { name: "Statistics & Probability", href: "/courses/statistics" },
        { name: "Trigonometry", href: "/courses/trigonometry" },
        { name: "Advanced Mathematics", href: "/courses/advanced" }
      ]
    },
    {
      title: "Learning",
      links: [
        { name: "Study Materials", href: "/materials" },
        { name: "Practice Tests", href: "/practice" },
        { name: "Video Tutorials", href: "/tutorials" },
        { name: "Live Sessions", href: "/live" },
        { name: "Math Tools", href: "/tools" },
        { name: "Progress Tracking", href: "/progress" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Student Community", href: "/community" },
        { name: "Tutoring Services", href: "/tutoring" },
        { name: "Study Groups", href: "/groups" },
        { name: "Academic Calendar", href: "/calendar" },
        { name: "Contact Support", href: "/support" }
      ]
    },
    {
      title: "Academy",
      links: [
        { name: "About Professor", href: "/about" },
        { name: "Teaching Philosophy", href: "/philosophy" },
        { name: "Success Stories", href: "/success" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "Certification", href: "/certification" },
        { name: "Privacy Policy", href: "/privacy" }
      ]
    }
  ]

  const socialLinks = [
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/mathmasteracademy" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/mathmasteracademy" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/mathmasteracademy" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/mathmasteracademy" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/mathmasteracad" }
  ]

  return (
    <footer className="bg-secondary border-t border-primary/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <GraduationCap className="size-6 text-background" />
                </div>
                <span className="font-bold text-xl text-background">MathMaster Academy</span>
              </Link>
              <p className="text-background/80 text-sm leading-relaxed mb-6">
                Empowering students to excel in mathematics through personalized online courses, 
                expert instruction, and proven teaching methods. Join thousands of successful students 
                who have mastered math with our comprehensive programs.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-accent flex-shrink-0" />
                <span className="text-background/80">professor@mathmasteracademy.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-accent flex-shrink-0" />
                <span className="text-background/80">+1 (555) MATH-123</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-accent flex-shrink-0" />
                <span className="text-background/80">Online Learning Platform</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-background flex items-center gap-2">
                <Calculator className="size-4 text-accent" />
                Weekly Math Tips
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-primary/30 rounded-md bg-background/10 text-background placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                />
                <Button size="sm" className="px-3 bg-accent hover:bg-accent/90 text-background">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-background/70">
                Get weekly math tips, study strategies, and course updates. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm text-background">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-background/70 hover:text-accent transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/20 bg-secondary/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-background/70">
              <span>© 2024 MathMaster Academy. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Inspiring mathematical excellence <BookOpen className="size-3 text-accent" />
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-background/70 mr-2">Follow us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-primary/20 hover:bg-accent/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-background/70 group-hover:text-accent transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-primary/10">
            <Link href="/terms" className="text-xs text-background/60 hover:text-accent transition-colors">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="text-xs text-background/60 hover:text-accent transition-colors">
              Accessibility
            </Link>
            <Link href="/refund" className="text-xs text-background/60 hover:text-accent transition-colors">
              Refund Policy
            </Link>
            <Link href="/student-support" className="text-xs text-background/60 hover:text-accent transition-colors">
              Student Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}