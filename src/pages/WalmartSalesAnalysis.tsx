import PageLayout from "@/components/PageLayout";
import { ArrowLeft, Database, TrendingUp, Store, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WalmartSalesAnalysis = () => {
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
                Walmart Sales Analysis
              </h1>
              <p className="text-lg text-muted-foreground">
                Aug 2023 – Dec 2023 | Foundations of Database
              </p>
            </div>

            {/* Overview */}
            <div className="prose prose-lg max-w-none">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Project Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                As students exploring the intricacies of large-scale retail operations, we analyzed Walmart's sales data to 
                understand business patterns, product placement strategies, and revenue optimization opportunities. This project 
                involved designing a complete database schema, loading and cleaning data, and performing comprehensive analysis 
                using MySQL, R, Tableau, and Excel.
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-card border border-border">
                <Store className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold text-2xl text-foreground mb-1">45 Stores</h3>
                <p className="text-sm text-muted-foreground">Analyzed across multiple types</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <Database className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold text-2xl text-foreground mb-1">3 Tables</h3>
                <p className="text-sm text-muted-foreground">Relational database design</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <TrendingUp className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold text-2xl text-foreground mb-1">Multiple Insights</h3>
                <p className="text-sm text-muted-foreground">Sales drivers identified</p>
              </div>
            </div>

            {/* Technical Approach */}
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Technical Approach
              </h2>
              
              <div className="space-y-4">
                <div className="p-6 rounded-xl bg-muted/30 border border-border">
                  <h3 className="font-semibold text-xl text-foreground mb-3">
                    Database Design
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Created a comprehensive relational database schema with three main tables: Stores, Features, and Train.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-background text-xs text-foreground border border-border">
                      Conceptual Model
                    </span>
                    <span className="px-3 py-1 rounded-full bg-background text-xs text-foreground border border-border">
                      Logical Model
                    </span>
                    <span className="px-3 py-1 rounded-full bg-background text-xs text-foreground border border-border">
                      Physical Model
                    </span>
                    <span className="px-3 py-1 rounded-full bg-background text-xs text-foreground border border-border">
                      Foreign Keys
                    </span>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-muted/30 border border-border">
                  <h3 className="font-semibold text-xl text-foreground mb-3">
                    Data Analysis (MySQL)
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Performed complex SQL queries to extract insights about store performance, department sales, and seasonal trends.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-background text-xs text-foreground border border-border">
                      JOIN Operations
                    </span>
                    <span className="px-3 py-1 rounded-full bg-background text-xs text-foreground border border-border">
                      Window Functions
                    </span>
                    <span className="px-3 py-1 rounded-full bg-background text-xs text-foreground border border-border">
                      Aggregations
                    </span>
                    <span className="px-3 py-1 rounded-full bg-background text-xs text-foreground border border-border">
                      GROUP BY Analysis
                    </span>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-muted/30 border border-border">
                  <h3 className="font-semibold text-xl text-foreground mb-3">
                    Data Visualization
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Created interactive dashboards and visualizations using Tableau and R to communicate findings effectively.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-background text-xs text-foreground border border-border">
                      Tableau Dashboards
                    </span>
                    <span className="px-3 py-1 rounded-full bg-background text-xs text-foreground border border-border">
                      R Visualizations
                    </span>
                    <span className="px-3 py-1 rounded-full bg-background text-xs text-foreground border border-border">
                      Excel Charts
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Findings */}
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Key Findings
              </h2>
              
              <div className="space-y-4">
                <div className="p-6 rounded-xl bg-card border-l-4 border-l-primary">
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Store Performance Analysis
                  </h3>
                  <p className="text-muted-foreground">
                    Identified that stores #20 and #4 had the highest total sales, while stores #33 and #44 
                    underperformed. Store #13 averaged $27,355 in weekly sales despite its size, while store #32 
                    underperformed at $16,351 weekly sales despite having substantial space (203,007 sq ft).
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-card border-l-4 border-l-primary">
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Department Analysis
                  </h3>
                  <p className="text-muted-foreground">
                    Department 92 generated the highest total weekly sales at $483.9M, indicating a critical 
                    revenue driver that warrants strategic focus and inventory optimization.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-card border-l-4 border-l-primary">
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Holiday Sales Impact
                  </h3>
                  <p className="text-muted-foreground">
                    Black Friday dates (November 25-26) consistently showed the highest weekly sales across 
                    multiple stores, demonstrating the significant impact of holiday shopping seasons on revenue.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-card border-l-4 border-l-primary">
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Space Optimization Opportunity
                  </h3>
                  <p className="text-muted-foreground">
                    Recommended optimizing store #32's substantial floor space by learning from high-performing 
                    stores like #13, focusing on product placement and inventory mix to increase sales per square foot.
                  </p>
                </div>
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Tools & Technologies
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-6 rounded-xl bg-muted/30 border border-border">
                  <h3 className="font-semibold text-foreground mb-2">MySQL</h3>
                  <p className="text-sm text-muted-foreground">
                    Database design, data loading, complex queries with JOINs and window functions
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-muted/30 border border-border">
                  <h3 className="font-semibold text-foreground mb-2">R</h3>
                  <p className="text-sm text-muted-foreground">
                    Statistical analysis and data visualization
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-muted/30 border border-border">
                  <h3 className="font-semibold text-foreground mb-2">Tableau</h3>
                  <p className="text-sm text-muted-foreground">
                    Interactive dashboards and business intelligence reporting
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-muted/30 border border-border">
                  <h3 className="font-semibold text-foreground mb-2">Microsoft Excel</h3>
                  <p className="text-sm text-muted-foreground">
                    Data cleaning, preliminary analysis, and chart creation
                  </p>
                </div>
              </div>
            </div>

            {/* Business Impact */}
            <div className="p-8 rounded-xl bg-muted/50 border border-border space-y-4">
              <Calendar className="h-10 w-10 text-primary" />
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Business Impact
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                This comprehensive analysis provided actionable insights for retail optimization, including 
                recommendations for space utilization, department-level inventory management, and seasonal 
                planning strategies. The project demonstrated proficiency in end-to-end database design and 
                data analysis workflows, from conceptual modeling to actionable business recommendations.
              </p>
            </div>

            {/* PDF Download */}
            <div className="p-8 rounded-xl bg-primary/10 border border-primary/20">
              <h3 className="font-semibold text-lg text-foreground mb-3">
                Detailed Analysis Report
              </h3>
              <p className="text-muted-foreground mb-4">
                View the complete project documentation including database schemas, SQL queries, and detailed visualizations.
              </p>
              <Button asChild>
                <a href="https://rajrajeshwarigs.github.io/assets/walmart-analysis.pdf" target="_blank" rel="noopener noreferrer">
                  Download Full Report (PDF)
                </a>
              </Button>
            </div>

            {/* CTA */}
            <div className="flex gap-4 pt-8 border-t border-border">
              <Button asChild variant="outline">
                <Link to="/projects">View All Projects</Link>
              </Button>
              <Button asChild>
                <a href="mailto:rajrajeshwarigangadhar98@gmail.com?subject=Inquiry%20About%20Walmart%20Sales%20Analysis%20Project">
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

export default WalmartSalesAnalysis;
