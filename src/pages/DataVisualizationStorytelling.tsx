import { Download, TrendingUp, Building2, PillBottle, BarChart3, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PageLayout from "@/components/PageLayout";
import { Separator } from "@/components/ui/separator";

const DataVisualizationStorytelling = () => {
  const insights = [
    {
      icon: TrendingUp,
      title: "Industry Consolidation Trends",
      description: "Analyzed market consolidation patterns across pharmaceutical and banking sectors",
    },
    {
      icon: BarChart3,
      title: "Market Share Analysis",
      description: "Identified key players and their competitive positioning through comprehensive data analysis",
    },
    {
      icon: LineChart,
      title: "Growth Trajectory Mapping",
      description: "Tracked revenue and stock performance trends to reveal strategic insights",
    },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border-none text-black dark:text-white" variant="outline">
            Data Analysis & Storytelling
          </Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Data Analysis & Visualizations (Storytelling)
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive industry consolidation analysis across pharmaceutical and banking sectors using advanced 
            data visualization techniques. Transforming complex datasets into compelling visual narratives that 
            reveal market trends, competitive dynamics, and strategic insights for data-driven decision-making.
          </p>
        </div>

        {/* Key Insights Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
          {insights.map((insight, index) => (
            <Card 
              key={insight.title}
              className="animate-fade-in hover:shadow-medium transition-smooth"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <insight.icon className="w-8 h-8 text-primary mb-3" />
                <CardTitle className="text-xl">{insight.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{insight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-16 max-w-6xl mx-auto" />

        {/* Pharmaceutical Analysis Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="flex items-center gap-3 mb-8">
            <PillBottle className="w-8 h-8 text-primary" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Pharmaceutical Industry Analysis
            </h2>
          </div>

          <Card className="mb-8 border-primary/20 bg-gradient-to-br from-blue-50/50 to-purple-50/30 dark:from-blue-950/20 dark:to-purple-950/10">
            <CardHeader>
              <CardTitle className="text-2xl">Market Overview & Consolidation</CardTitle>
              <CardDescription className="text-base">
                Comprehensive analysis of the US pharmaceutical market and global trends
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-foreground">Key Findings</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Global pharmaceutical market grew from $780B (2010) to $1,186B (2021)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>US market contribution ranged between 40-48% of global sales (2010-2021)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>US remained largest pharma market in 2021 with $550B+ revenue</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>15 out of top 50 pharma companies (by R&D spending) were US-based</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-foreground">Top 5 Companies Analyzed</h3>
                  <div className="space-y-2">
                    {["Pfizer", "Johnson & Johnson", "AbbVie", "Merck & Co.", "Bristol-Myers Squibb"].map((company) => (
                      <div key={company} className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="font-medium text-foreground">{company}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-semibold text-lg mb-3 text-foreground">Market Projections</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    Revenue projected to reach <strong className="text-foreground">$612.60B in 2023</strong>
                  </p>
                  <p className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    Expected annual growth rate of <strong className="text-foreground">5.74%</strong>
                  </p>
                  <p className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-primary" />
                    Stock performance showed consistent growth with COVID-19 as notable exception
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3 text-foreground">Analysis Highlights</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The pharmaceutical industry analysis reveals significant consolidation among major players, 
                  with the US market maintaining dominance despite emerging competition from India and Middle-East 
                  markets. The data visualization showcases revenue trends, market share distribution, and stock 
                  performance patterns that indicate strong growth trajectories post-pandemic recovery.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Market sentiment analysis indicates 41% "somewhat favorable" public view, suggesting opportunities 
                  for improved retail investor engagement through strategic communications and transparency initiatives.
                </p>
              </div>

              <Button asChild className="w-full md:w-auto">
                <a href="https://rajrajeshwarigs.github.io/assets/pharma-analysis.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Pharmaceutical Analysis (PDF)
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-16 max-w-6xl mx-auto" />

        {/* Banking Analysis Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Building2 className="w-8 h-8 text-primary" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Banking Industry Analysis
            </h2>
          </div>

          <Card className="mb-8 border-primary/20 bg-gradient-to-br from-emerald-50/50 to-cyan-50/30 dark:from-emerald-950/20 dark:to-cyan-950/10">
            <CardHeader>
              <CardTitle className="text-2xl">Consolidation & Market Dynamics</CardTitle>
              <CardDescription className="text-base">
                Analyzing merger trends and competitive landscape in US banking sector
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-foreground">Key Findings</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Decline in total banking entities indicating market consolidation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Increase in banks with deposits between $1-50M, decline in smaller banks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Average deposits grew by 12% CAGR (2016-2022)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Additional 5% growth attributed directly to consolidation activities</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-foreground">Top 5 Banks by Deposits</h3>
                  <div className="space-y-2">
                    {[
                      "JPMorgan Chase Bank",
                      "Bank of America",
                      "Wells Fargo Bank",
                      "Citibank",
                      "U.S. Bank"
                    ].map((bank, index) => (
                      <div key={bank} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-xs font-bold text-primary">{index + 1}</span>
                        </div>
                        <span className="font-medium text-foreground">{bank}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-semibold text-lg mb-4 text-foreground">Major Mergers (2021-22)</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-background rounded-lg border border-border">
                    <p className="font-semibold text-foreground mb-2">PNC Bank + BBVA USA</p>
                    <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                      <div>
                        <p>Combined Assets: <strong className="text-foreground">$534.3B</strong></p>
                        <p>Combined Deposits: <strong className="text-foreground">$447.01B</strong></p>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary">Largest Merger</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-background rounded-lg border border-border">
                    <p className="font-semibold text-foreground mb-2">M&T Trust + People's United Bank</p>
                    <div className="text-sm text-muted-foreground">
                      <p>Combined Assets: <strong className="text-foreground">$203.65B</strong></p>
                      <p>Combined Deposits: <strong className="text-foreground">$172.10B</strong></p>
                    </div>
                  </div>

                  <div className="p-4 bg-background rounded-lg border border-border">
                    <p className="font-semibold text-foreground mb-2">Citizens Bank + Investors Bank</p>
                    <div className="text-sm text-muted-foreground">
                      <p>Combined Assets: <strong className="text-foreground">$226.53B</strong></p>
                      <p>Combined Deposits: <strong className="text-foreground">$181.70B</strong></p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3 text-foreground">Analysis Highlights</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The banking sector analysis reveals a clear trend toward consolidation, with smaller banks 
                  struggling to compete in an increasingly competitive environment. This strategic consolidation 
                  has resulted in a 5% boost to average deposit growth beyond organic growth rates.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Stock performance analysis of major banks shows strong correlation between consolidation 
                  activities and shareholder value creation, indicating that strategic mergers have been 
                  well-received by investors and contributed to market efficiency.
                </p>
              </div>

              <Button asChild className="w-full md:w-auto">
                <a href="https://rajrajeshwarigs.github.io/assets/banking-analysis.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Banking Analysis (PDF)
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-16 max-w-6xl mx-auto" />

        {/* Methodology Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="font-serif text-3xl font-bold mb-8 text-center text-foreground">
            Methodology & Approach
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Data Collection & Processing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>• Multi-source financial data aggregation</p>
                <p>• Time-series analysis (2010-2022)</p>
                <p>• Revenue and asset valuation tracking</p>
                <p>• Market share distribution mapping</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Visualization Techniques</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>• Trend line analysis for growth patterns</p>
                <p>• Comparative charts for market positioning</p>
                <p>• Stock performance visualizations</p>
                <p>• Distribution analysis for market dynamics</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6 bg-muted/30 border-none">
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground italic">
                "Data tells a story when visualized effectively. These analyses transform complex financial 
                datasets into actionable insights that drive strategic decision-making and reveal market 
                opportunities hidden within the numbers."
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Skills & Tools */}
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-serif text-2xl font-bold mb-6 text-foreground">
            Skills & Tools Demonstrated
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Data Analysis",
              "Data Visualization",
              "Statistical Analysis",
              "Market Research",
              "Financial Modeling",
              "Trend Analysis",
              "Storytelling",
              "Strategic Insights",
              "Tableau/Power BI",
              "Python/R",
              "Excel",
              "SQL"
            ].map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm px-4 py-2">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default DataVisualizationStorytelling;
