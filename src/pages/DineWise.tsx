import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Users, TrendingUp, Target, CheckCircle, DollarSign, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const DineWise = () => {
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

          <div className="mb-12 animate-fade-in">
            <Badge className="mb-4 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 border-none text-black dark:text-white">
              Market Research & Product Strategy
            </Badge>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-foreground mt-2">
              DineWise - Student Dining Platform
            </h1>
            <p className="text-lg text-muted-foreground">
              Aug 2024 – Dec 2024 | Addressing food waste & student dining challenges
            </p>
          </div>

          <div className="space-y-12">
            {/* Overview */}
            <section className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                DineWise is a student-focused dining platform that tackles food waste while providing exclusive deals and discounts to university students. Through comprehensive market research with 250+ students using Qualtrics, we uncovered that 63% were dissatisfied with meal options primarily due to health concerns and limited budget-friendly choices. This insight drove development of a unique value proposition combining sustainability (rescue bags for surplus food), student discounts, personalized recommendations, and reservation features.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The project encompasses complete product strategy including competitive analysis, revenue models (freemium + commission-based), 2-year go-to-market roadmap with geographic expansion plan, and first-year financial projections demonstrating product-market fit in the $50B+ student dining market.
              </p>
            </section>

            {/* Key Metrics */}
            <section className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Key Findings</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl bg-card border border-border shadow-soft text-center">
                  <Users className="h-10 w-10 text-primary mb-4 mx-auto" />
                  <h3 className="font-bold text-4xl mb-2 text-foreground">250+</h3>
                  <p className="text-muted-foreground">Survey Responses</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border shadow-soft text-center">
                  <Target className="h-10 w-10 text-primary mb-4 mx-auto" />
                  <h3 className="font-bold text-4xl mb-2 text-foreground">63%</h3>
                  <p className="text-muted-foreground">Dissatisfaction Rate</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border shadow-soft text-center">
                  <TrendingUp className="h-10 w-10 text-primary mb-4 mx-auto" />
                  <h3 className="font-bold text-4xl mb-2 text-foreground">3</h3>
                  <p className="text-muted-foreground">Customer Personas</p>
                </div>
              </div>
            </section>

            {/* Methodology */}
            <section className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Research Methodology</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-card border border-border shadow-soft">
                  <Users className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-semibold text-xl mb-3 text-foreground">Data Collection</h3>
                  <p className="text-muted-foreground mb-3">Used Qualtrics to survey 250+ university students about dining preferences and pain points</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-muted text-xs text-foreground">Qualtrics</span>
                    <span className="px-3 py-1 rounded-full bg-muted text-xs text-foreground">Survey Design</span>
                  </div>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border shadow-soft">
                  <Target className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-semibold text-xl mb-3 text-foreground">Analysis & Insights</h3>
                  <p className="text-muted-foreground mb-3">Identified key trends and developed customer personas to guide product strategy</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-muted text-xs text-foreground">Data Analysis</span>
                    <span className="px-3 py-1 rounded-full bg-muted text-xs text-foreground">Personas</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Deliverables */}
            <section className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Strategic Deliverables</h2>
              <div className="space-y-4">
                {[
                  "Comprehensive market research identifying 63% student dissatisfaction with current meal options",
                  "Analysis of key health concerns and dietary preferences driving product demand",
                  "Development of 3 distinct customer personas based on behavior and needs",
                  "Brand strategy and unique value proposition aligned with market insights",
                  "Budget model and financial projections for first-year operations",
                  "Go-to-market roadmap with phased launch and scaling strategy",
                  "Revenue and cost estimates to guide investment decisions",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-muted/30"
                  >
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Impact */}
            <section className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Business Impact</h2>
              <div className="p-6 rounded-xl bg-card border border-border">
                <p className="text-muted-foreground leading-relaxed">
                  This comprehensive market research project validated a significant opportunity in the university dining space. By identifying that 63% of students are dissatisfied with current meal options primarily due to health concerns, the research provided a clear market need and product-market fit validation. The developed brand strategy, financial models, and go-to-market roadmap create a strong foundation for product launch, enabling data-driven decisions around positioning, pricing, and growth strategy.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="flex gap-4 pt-8">
              <Button asChild>
                <Link to="/projects">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Projects
                </Link>
              </Button>
              <Button asChild variant="outline">
                <a href="mailto:rajrajeshwarigangadhar98@gmail.com?subject=Inquiry%20About%20DineWise%20Project">
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

export default DineWise;
