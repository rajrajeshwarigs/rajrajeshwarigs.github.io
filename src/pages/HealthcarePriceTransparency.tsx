import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Database, Cloud, Code, CheckCircle, FileText, Globe, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const HealthcarePriceTransparency = () => {
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
            <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 border-none text-black dark:text-white">
              Data Engineering
            </Badge>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-foreground mt-2">
              Healthcare Price Data Transparency
            </h1>
            <p className="text-lg text-muted-foreground">
              Jan 2025 – May 2025 | End-to-End Cloud Data Pipeline
            </p>
          </div>

          <div className="space-y-12">
            {/* Overview */}
            <section className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Developed a scalable Azure-based data pipeline for healthcare price transparency, automating ingestion of machine-readable hospital pricing files using Azure Functions, Blob storage, and SQL. Transformed raw datasets into queryable formats and built an interactive web interface for data exploration, enhancing public access to hospital cost information and supporting policy analysis.
              </p>
            </section>

            {/* Architecture Overview */}
            <section className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Bronze-Silver-Gold Architecture</h2>
              
              <Card className="mb-8 bg-gradient-to-br from-blue-50/30 to-cyan-50/20 dark:from-blue-950/10 dark:to-cyan-950/5">
                <CardHeader>
                  <CardTitle>Scalable Data Pipeline Design</CardTitle>
                  <CardDescription>End-to-end automation from raw data ingestion to interactive web visualization</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-4 rounded-lg bg-background/50 border border-border">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                          <FileText className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                        </div>
                        <h4 className="font-semibold text-foreground">Bronze Layer</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Raw data ingestion from healthcare pricing files (CSV/JSON)</p>
                      <p className="text-xs text-muted-foreground">Azure Blob Storage - Bronze Container</p>
                    </div>

                    <div className="p-4 rounded-lg bg-background/50 border border-border">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-full bg-slate-400/20 flex items-center justify-center">
                          <Zap className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                        </div>
                        <h4 className="font-semibold text-foreground">Silver Layer</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Cleaned & standardized data via Azure Functions</p>
                      <p className="text-xs text-muted-foreground">Data Processing + Silver Container</p>
                    </div>

                    <div className="p-4 rounded-lg bg-background/50 border border-border">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
                          <Database className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                        </div>
                        <h4 className="font-semibold text-foreground">Gold Layer</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Queryable SQL database with dimension tables</p>
                      <p className="text-xs text-muted-foreground">Azure SQL + Web Interface</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-purple-50/30 to-pink-50/20 dark:from-purple-950/10 dark:to-pink-950/5">
                  <CardHeader>
                    <Database className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">Data Storage</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <p>• Azure Blob Storage (Bronze/Silver)</p>
                    <p>• Azure SQL Database (Gold)</p>
                    <p>• Scalable file & structured storage</p>
                    <p>• Dimension tables: Payer, Plan, Code, Hospital</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-emerald-50/30 to-teal-50/20 dark:from-emerald-950/10 dark:to-teal-950/5">
                  <CardHeader>
                    <Cloud className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">Serverless Computing</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <p>• Azure Functions (Python)</p>
                    <p>• Blob trigger-based automation</p>
                    <p>• Scalable ETL processing</p>
                    <p>• Duplicate prevention logic</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-orange-50/30 to-amber-50/20 dark:from-orange-950/10 dark:to-amber-950/5">
                  <CardHeader>
                    <Globe className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">Web Interface</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <p>• User-friendly web application</p>
                    <p>• SQL database connectivity</p>
                    <p>• Search & analysis features</p>
                    <p>• Public access to pricing data</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Technical Implementation */}
            <section className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Technical Implementation</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Data Processing Function</CardTitle>
                    <CardDescription>Bronze → Silver transformation</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      "Blob trigger automatically processes new files in Bronze container",
                      "Cleans and standardizes raw CSV/JSON healthcare pricing data",
                      "Outputs standardized files to Silver container",
                      "Python-based with pandas for data transformation",
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
                    <CardTitle className="text-lg">Database Loading Function</CardTitle>
                    <CardDescription>Silver → Gold (SQL) transformation</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      "Triggered by new files in Silver Blob container",
                      "Maps data to dimension tables (Payer, Plan, Code, Hospital)",
                      "Prevents duplicate entries with intelligent deduplication",
                      "Loads data into Azure SQL Database for querying",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                        <p className="text-sm text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-to-br from-blue-50/30 to-purple-50/20 dark:from-blue-950/10 dark:to-purple-950/5">
                <CardHeader>
                  <CardTitle className="text-lg">Key Features & Capabilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Automated end-to-end data pipeline with minimal manual intervention",
                      "Scalable architecture handling large volumes of healthcare pricing data",
                      "Machine-readable file format support (CSV, JSON)",
                      "Interactive web interface for non-technical users",
                      "Support for policy analysis and transparency initiatives",
                      "Real-time processing with Azure Functions",
                      "Relational data model with dimension tables for efficient querying",
                      "GitHub integration for version control and CI/CD workflows",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                        <p className="text-sm text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Impact & Value */}
            <section className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Business Impact & Value</h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Public Access</h3>
                    <p className="text-sm text-muted-foreground">Enhanced transparency for patients, researchers, and policymakers</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Automation</h3>
                    <p className="text-sm text-muted-foreground">Serverless architecture eliminates manual data processing</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Database className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Scalability</h3>
                    <p className="text-sm text-muted-foreground">Cloud-native design handles millions of pricing records</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-muted/30 border-none">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    This end-to-end data engineering project transforms raw hospital pricing files into actionable insights 
                    through a fully automated cloud pipeline. The Bronze-Silver-Gold architecture ensures data quality at 
                    each stage, while Azure Functions provide serverless scalability that grows with data volume.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The interactive web interface democratizes access to complex healthcare pricing data, enabling 
                    stakeholders to identify pricing patterns, compare providers, and support policy decisions. This 
                    system demonstrates expertise in cloud architecture, ETL pipeline design, and creating user-centric 
                    data products that drive real-world impact.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* GitHub Repository Link */}
            <section className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <Card className="bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/20">
                <CardContent className="pt-6 text-center">
                  <Code className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2 text-foreground">View Source Code</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Explore the complete implementation on GitHub
                  </p>
                  <Button asChild variant="outline">
                    <a href="https://github.com/rajrajeshwarigs/practicum" target="_blank" rel="noopener noreferrer">
                      <Code className="mr-2 h-4 w-4" />
                      View on GitHub
                    </a>
                  </Button>
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
                <a href="mailto:rajrajeshwarigangadhar98@gmail.com?subject=Inquiry%20About%20Healthcare%20Price%20Transparency%20Project">
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

export default HealthcarePriceTransparency;
