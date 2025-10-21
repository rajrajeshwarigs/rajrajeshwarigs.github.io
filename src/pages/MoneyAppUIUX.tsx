import PageLayout from "@/components/PageLayout";
import { ArrowLeft, Figma, Smartphone, Users, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MoneyAppUIUX = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <Button asChild variant="ghost" className="mb-8">
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>

          <div className="space-y-12">
            {/* Header */}
            <div className="space-y-4">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                Money Management App - UI/UX Design
              </h1>
              <p className="text-lg text-muted-foreground">
                Mobile App Design Project
              </p>
            </div>

            {/* Overview */}
            <div className="prose prose-lg max-w-none">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Project Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Designed a comprehensive mobile money management application that empowers users to track expenses, 
                manage budgets, and achieve their financial goals. The project focused on creating an intuitive, 
                user-friendly interface that makes complex financial data accessible and actionable for everyday users.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-card border border-border">
                <Smartphone className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold text-2xl text-foreground mb-1">Mobile-First</h3>
                <p className="text-sm text-muted-foreground">Optimized for iPhone 13 mini</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <Layers className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold text-2xl text-foreground mb-1">Complete Flows</h3>
                <p className="text-sm text-muted-foreground">End-to-end user journeys</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <Users className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold text-2xl text-foreground mb-1">User-Centered</h3>
                <p className="text-sm text-muted-foreground">Focus on usability</p>
              </div>
            </div>

            {/* Design Approach */}
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Design Approach
              </h2>
              
              <div className="space-y-4">
                <div className="p-6 rounded-xl bg-muted/30 border border-border">
                  <h3 className="font-semibold text-xl text-foreground mb-3">
                    User Research & Personas
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Conducted user research to understand pain points in existing money management apps. 
                    Identified key user needs around budget tracking, expense categorization, and financial goal setting.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-muted/30 border border-border">
                  <h3 className="font-semibold text-xl text-foreground mb-3">
                    Information Architecture
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Structured the app to provide quick access to key financial metrics while keeping detailed 
                    analytics accessible. Prioritized dashboard views for at-a-glance insights.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-muted/30 border border-border">
                  <h3 className="font-semibold text-xl text-foreground mb-3">
                    Visual Design System
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Created a cohesive design system with consistent typography, color palette, and component library. 
                    Emphasized clarity and readability for financial data presentation.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-muted/30 border border-border">
                  <h3 className="font-semibold text-xl text-foreground mb-3">
                    Interactive Prototyping
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Built fully interactive prototypes in Figma to demonstrate user flows and validate design decisions. 
                    Created transitions and micro-interactions for a polished user experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Key Features Designed
              </h2>
              
              <div className="space-y-4">
                <div className="p-6 rounded-xl bg-card border-l-4 border-l-primary">
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Dashboard & Overview
                  </h3>
                  <p className="text-muted-foreground">
                    Designed an intuitive dashboard providing quick access to account balances, recent transactions, 
                    and spending trends. Visual data representations make complex financial information easy to understand.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-card border-l-4 border-l-primary">
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Budget Tracking
                  </h3>
                  <p className="text-muted-foreground">
                    Created intuitive budget creation and tracking interfaces with visual progress indicators. 
                    Users can easily set spending limits and receive alerts when approaching budget thresholds.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-card border-l-4 border-l-primary">
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Expense Categorization
                  </h3>
                  <p className="text-muted-foreground">
                    Designed smart categorization system with customizable categories and automatic expense sorting. 
                    Visual breakdowns help users understand spending patterns across different categories.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-card border-l-4 border-l-primary">
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Financial Goals
                  </h3>
                  <p className="text-muted-foreground">
                    Developed goal-setting interfaces that motivate users with progress visualization and milestone tracking. 
                    Users can set multiple financial goals and monitor progress toward each objective.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-card border-l-4 border-l-primary">
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Transaction History
                  </h3>
                  <p className="text-muted-foreground">
                    Created clean, searchable transaction list with filters and sorting options. 
                    Designed detailed transaction views with ability to add notes and attach receipts.
                  </p>
                </div>
              </div>
            </div>

            {/* Design Principles */}
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Design Principles
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-6 rounded-xl bg-muted/30 border border-border">
                  <h3 className="font-semibold text-foreground mb-2">Clarity First</h3>
                  <p className="text-sm text-muted-foreground">
                    Financial information presented in clear, easy-to-understand formats without overwhelming the user
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-muted/30 border border-border">
                  <h3 className="font-semibold text-foreground mb-2">Intuitive Navigation</h3>
                  <p className="text-sm text-muted-foreground">
                    Logical flow and minimal clicks to access key features, reducing friction in daily use
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-muted/30 border border-border">
                  <h3 className="font-semibold text-foreground mb-2">Visual Hierarchy</h3>
                  <p className="text-sm text-muted-foreground">
                    Important information emphasized through size, color, and position for quick scanning
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-muted/30 border border-border">
                  <h3 className="font-semibold text-foreground mb-2">Consistent Patterns</h3>
                  <p className="text-sm text-muted-foreground">
                    Reusable UI components and interaction patterns throughout the app for familiarity
                  </p>
                </div>
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Design Tools
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-6 rounded-xl bg-muted/30 border border-border">
                  <h3 className="font-semibold text-foreground mb-2">Figma</h3>
                  <p className="text-sm text-muted-foreground">
                    Primary design and prototyping tool for all screens, components, and interactive flows
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-muted/30 border border-border">
                  <h3 className="font-semibold text-foreground mb-2">Design System</h3>
                  <p className="text-sm text-muted-foreground">
                    Created comprehensive component library and style guide for consistent design implementation
                  </p>
                </div>
              </div>
            </div>

            {/* Design Impact */}
            <div className="p-8 rounded-xl bg-muted/50 border border-border space-y-4">
              <Figma className="h-10 w-10 text-primary" />
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Design Impact
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                This project demonstrates proficiency in user-centered design, information architecture, and 
                visual design for mobile applications. The focus on fintech UX patterns, clear data visualization, 
                and intuitive navigation showcases ability to design for complex problem spaces while maintaining 
                simplicity and usability.
              </p>
            </div>

            {/* Figma Prototype Link */}
            <div className="p-8 rounded-xl bg-primary/10 border border-primary/20">
              <h3 className="font-semibold text-lg text-foreground mb-3">
                Interactive Prototype
              </h3>
              <p className="text-muted-foreground mb-4">
                Explore the full interactive prototype to experience the user flows and interactions.
              </p>
              <Button asChild>
                <a 
                  href="https://www.figma.com/proto/lQmxU9RWasVZL9exW9FCBA/Money-Appplication?page-id=0%3A1&node-id=1-21&starting-point-node-id=1%3A21&t=or3b2N1RBeNDvAvJ-1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Figma className="mr-2 h-4 w-4" />
                  View Figma Prototype
                </a>
              </Button>
            </div>

            {/* CTA */}
            <div className="flex gap-4 pt-8 border-t border-border">
              <Button asChild variant="outline">
                <Link to="/projects">View All Projects</Link>
              </Button>
              <Button asChild>
                <a href="mailto:rajrajeshwarigangadhar98@gmail.com?subject=Inquiry%20About%20Money%20App%20UI/UX%20Project">
                  Discuss This Project
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default MoneyAppUIUX;
