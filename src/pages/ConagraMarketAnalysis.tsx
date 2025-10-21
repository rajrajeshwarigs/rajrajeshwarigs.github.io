import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BarChart, ShoppingCart, TrendingUp, CheckCircle, Target, DollarSign, Users, Package } from "lucide-react";
import { Link } from "react-router-dom";

const ConagraMarketAnalysis = () => {
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
            <span className="text-sm text-primary font-medium">Data-Driven Strategy Development</span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-foreground mt-2">
              Conagra Brand Market Analysis
            </h1>
            <p className="text-lg text-muted-foreground">
              Aug 2024 – Dec 2024
            </p>
          </div>

          <div className="space-y-12">
            {/* Overview */}
            <section className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Developed a comprehensive predictive model using Python to analyze category expansion opportunities in retail, providing actionable insights for strategic decision-making in product assortment and pricing. Conducted exploratory analysis using SQL and Python on large-scale Point-of-Sale data, uncovering key sales drivers and informing product strategy recommendations.
              </p>
            </section>

            {/* Technologies */}
            <section className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Analytical Approach</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-green-50/50 to-lime-50/50 dark:from-green-900/10 dark:to-lime-900/10 border-border">
                  <CardHeader>
                    <BarChart className="h-10 w-10 text-primary mb-2" />
                    <CardTitle className="text-xl">Predictive Modeling</CardTitle>
                    <CardDescription>Built Python models to forecast category expansion opportunities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Python</Badge>
                      <Badge variant="secondary">Machine Learning</Badge>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-green-50/50 to-lime-50/50 dark:from-green-900/10 dark:to-lime-900/10 border-border">
                  <CardHeader>
                    <ShoppingCart className="h-10 w-10 text-primary mb-2" />
                    <CardTitle className="text-xl">POS Data Analysis</CardTitle>
                    <CardDescription>Analyzed large-scale retail transaction data to uncover trends</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">SQL</Badge>
                      <Badge variant="secondary">Big Data</Badge>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-green-50/50 to-lime-50/50 dark:from-green-900/10 dark:to-lime-900/10 border-border">
                  <CardHeader>
                    <TrendingUp className="h-10 w-10 text-primary mb-2" />
                    <CardTitle className="text-xl">Strategic Insights</CardTitle>
                    <CardDescription>Identified key sales drivers for product strategy recommendations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">EDA</Badge>
                      <Badge variant="secondary">Retail Analytics</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Key Deliverables */}
            <section className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Key Deliverables</h2>
              <div className="space-y-4">
                {[
                  "Predictive model analyzing category expansion opportunities in retail market",
                  "Comprehensive analysis of Point-of-Sale data using SQL and Python",
                  "Identification of key sales drivers impacting product performance",
                  "Strategic recommendations for product assortment optimization",
                  "Data-driven pricing strategy insights based on market analysis",
                  "Exploratory data analysis uncovering consumer purchase patterns",
                  "Actionable insights for category management and merchandising decisions",
                ].map((deliverable, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-muted/30"
                  >
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">{deliverable}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Analysis Focus */}
            <section className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Analysis Focus Areas</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-green-50/30 to-lime-50/30 dark:from-green-900/5 dark:to-lime-900/5">
                  <CardHeader>
                    <Target className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Category Expansion</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Analyzed retail categories to identify white space opportunities and expansion potential for Conagra brands. Used predictive modeling to forecast category growth and market penetration opportunities.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-green-50/30 to-lime-50/30 dark:from-green-900/5 dark:to-lime-900/5">
                  <CardHeader>
                    <TrendingUp className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Sales Driver Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Conducted deep-dive analysis on Point-of-Sale data to uncover key factors driving sales performance, including seasonality, pricing elasticity, and promotional effectiveness.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-green-50/30 to-lime-50/30 dark:from-green-900/5 dark:to-lime-900/5">
                  <CardHeader>
                    <Package className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Product Assortment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Provided data-driven recommendations for optimizing product portfolio based on consumer demand patterns, competitive positioning, and market trends.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-green-50/30 to-lime-50/30 dark:from-green-900/5 dark:to-lime-900/5">
                  <CardHeader>
                    <DollarSign className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Pricing Strategy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Analyzed pricing dynamics across categories to inform strategic pricing decisions that balance competitiveness with profitability goals.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Impact */}
            <section className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Business Impact</h2>
              <Card className="bg-gradient-to-br from-green-50/50 to-lime-50/50 dark:from-green-900/10 dark:to-lime-900/10 border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-primary" />
                    Strategic Value & Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    This comprehensive market analysis project provides Conagra with actionable intelligence for strategic decision-making in category expansion and product strategy. By leveraging predictive modeling on large-scale POS data, the analysis identifies high-potential growth opportunities while uncovering the key drivers of sales performance. The insights enable data-driven decisions around product assortment, pricing strategy, and market positioning, ultimately supporting revenue growth and competitive advantage in the retail market.
                  </p>
                </CardContent>
              </Card>
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
                <a href="mailto:rajrajeshwarigangadhar98@gmail.com?subject=Inquiry%20About%20Conagra%20Market%20Analysis%20Project">
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

export default ConagraMarketAnalysis;
