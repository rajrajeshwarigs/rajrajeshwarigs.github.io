import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, TrendingUp, Monitor, Target, CheckCircle, BarChart3, Chrome, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const NikeDigitalMarketing = () => {
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
            <Badge className="mb-4 bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/30 dark:to-amber-900/30 border-none text-black dark:text-white">
              Google Analytics & Marketing Analysis
            </Badge>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-foreground mt-2">
              Nike Digital Marketing Performance Analysis
            </h1>
            <p className="text-lg text-muted-foreground">
              Aug 2024 – Dec 2024 | Google Analytics 4 (GA4) Platform
            </p>
          </div>

          <div className="space-y-12">
            {/* Overview */}
            <section className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Conducted comprehensive analysis of Nike's e-commerce data using Google Analytics, uncovering a 76% year-over-year revenue growth driven by direct and referral traffic. Identified a 39% increase in conversion rates, with significant gains from first-time purchasers. Leveraged browser and device insights to flag high bounce rates on mobile and Safari In-App, informing UX improvement recommendations.
              </p>
            </section>

            {/* Key Metrics */}
            <section className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Performance Highlights</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <Card className="text-center bg-gradient-to-br from-blue-50/50 to-cyan-50/30 dark:from-blue-950/20 dark:to-cyan-950/10">
                  <CardContent className="pt-6">
                    <TrendingUp className="h-10 w-10 text-primary mb-4 mx-auto" />
                    <h3 className="font-bold text-4xl mb-2 text-foreground">76.2%</h3>
                    <p className="text-muted-foreground text-sm">YoY Revenue Growth</p>
                  </CardContent>
                </Card>
                <Card className="text-center bg-gradient-to-br from-emerald-50/50 to-teal-50/30 dark:from-emerald-950/20 dark:to-teal-950/10">
                  <CardContent className="pt-6">
                    <Target className="h-10 w-10 text-primary mb-4 mx-auto" />
                    <h3 className="font-bold text-4xl mb-2 text-foreground">39%</h3>
                    <p className="text-muted-foreground text-sm">Conversion Rate Increase</p>
                  </CardContent>
                </Card>
                <Card className="text-center bg-gradient-to-br from-purple-50/50 to-pink-50/30 dark:from-purple-950/20 dark:to-pink-950/10">
                  <CardContent className="pt-6">
                    <BarChart3 className="h-10 w-10 text-primary mb-4 mx-auto" />
                    <h3 className="font-bold text-4xl mb-2 text-foreground">64.8%</h3>
                    <p className="text-muted-foreground text-sm">Total Purchasers Increase</p>
                  </CardContent>
                </Card>
                <Card className="text-center bg-gradient-to-br from-orange-50/50 to-amber-50/30 dark:from-orange-950/20 dark:to-amber-950/10">
                  <CardContent className="pt-6">
                    <Chrome className="h-10 w-10 text-primary mb-4 mx-auto" />
                    <h3 className="font-bold text-4xl mb-2 text-foreground">62.7%</h3>
                    <p className="text-muted-foreground text-sm">Revenue Per User Increase</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Revenue Analysis */}
            <section className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Revenue Performance Analysis</h2>
              <Card className="mb-6 bg-gradient-to-br from-blue-50/30 to-purple-50/20 dark:from-blue-950/10 dark:to-purple-950/5">
                <CardHeader>
                  <CardTitle>Revenue Growth Drivers</CardTitle>
                  <CardDescription>76.2% year-over-year revenue increase powered by strategic channels</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">Direct & Referral Channels Dominate</p>
                        <p className="text-sm text-muted-foreground">Top performing channels drove majority of revenue growth</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">Chrome Browser: 83.7% Revenue Increase</p>
                        <p className="text-sm text-muted-foreground">Average purchase revenue per active user significantly up</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">Edge Shows Strong Growth: 86.2% Rise</p>
                        <p className="text-sm text-muted-foreground">183.3% increase in transactions from Edge users</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-emerald-50/30 to-teal-50/20 dark:from-emerald-950/10 dark:to-teal-950/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      Conversion Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="p-3 rounded-lg bg-background/50">
                      <p className="text-2xl font-bold text-foreground">2.5%</p>
                      <p className="text-sm text-muted-foreground">Conversion rate in Oct 2024 (up from 1.8%)</p>
                    </div>
                    <div className="p-3 rounded-lg bg-background/50">
                      <p className="text-2xl font-bold text-foreground">61.9%</p>
                      <p className="text-sm text-muted-foreground">Growth in first-time purchasers</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-orange-50/30 to-amber-50/20 dark:from-orange-950/10 dark:to-amber-950/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Smartphone className="h-5 w-5 text-primary" />
                      Device Insights
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="p-3 rounded-lg bg-background/50">
                      <p className="text-lg font-bold text-foreground">Tablets: 646.5% Bounce Rate ↑</p>
                      <p className="text-sm text-muted-foreground">Critical UX improvements needed</p>
                    </div>
                    <div className="p-3 rounded-lg bg-background/50">
                      <p className="text-lg font-bold text-foreground">Mobile: 656% Bounce Rate ↑</p>
                      <p className="text-sm text-muted-foreground">53.8% of users exit early despite 45% traffic share</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Key Recommendations */}
            <section className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Strategic Recommendations</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Revenue Optimization</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      "Leverage top performing channels: Focus investments on Direct and Referral channels to sustain growth",
                      "Allocate additional resources for campaigns to maximize their contribution",
                      "Expand initiatives that drove the 62.7% increase in average purchase revenue per user",
                      "Conduct A/B testing on campaigns to refine strategies for higher-value transactions",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                        <p className="text-sm text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">User Experience Enhancement</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      "Optimize user experience for tablets and mobile with enhanced navigation and faster load times",
                      "Address friction points on mobile devices to maximize conversions",
                      "Enhance user experience on browsers like Firefox and Safari to re-engage lost audiences",
                      "Implement A/B testing for layouts and design elements to reduce bounce rates",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                        <p className="text-sm text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-to-br from-purple-50/30 to-pink-50/20 dark:from-purple-950/10 dark:to-pink-950/5">
                <CardHeader>
                  <CardTitle className="text-lg">Conversion & Retention Strategies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "Enhance first-time user journey with personalized onboarding and streamlined checkout processes",
                    "Implement targeted retargeting campaigns using behavior-driven strategies",
                    "Develop targeted promotions during peak revenue periods to capitalize on user engagement",
                    "Increase customer loyalty campaigns for first-time purchasers to improve retention",
                    "Refine marketing attribution models to allocate resources efficiently toward high-performing campaigns",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      <p className="text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </section>

            {/* Impact */}
            <section className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Business Impact</h2>
              <div className="p-6 rounded-xl bg-card border border-border">
                <p className="text-muted-foreground leading-relaxed">
                  This comprehensive digital marketing performance analysis provides actionable insights for optimizing Nike's e-commerce strategy. By identifying the key drivers behind 76% revenue growth and 39% conversion rate improvements, the analysis enables targeted optimization efforts. The device and browser-specific findings highlight critical UX improvement opportunities, particularly for mobile and Safari In-App users, potentially unlocking significant additional revenue. The insights into first-time purchaser behavior create opportunities for enhanced retention and lifecycle marketing strategies.
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
                <a href="mailto:rajrajeshwarigangadhar98@gmail.com?subject=Inquiry%20About%20Nike%20Digital%20Marketing%20Project">
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

export default NikeDigitalMarketing;
