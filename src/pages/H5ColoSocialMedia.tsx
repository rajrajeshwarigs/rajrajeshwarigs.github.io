import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, FileDown } from "lucide-react";
import { Link } from "react-router-dom";

const H5ColoSocialMedia = () => {
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
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm text-primary font-medium">Social Media Strategy & Analytics</span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">Q4 2024</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Multi-Platform Social Media Campaign Strategy
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Comprehensive social media strategy and analytics framework for a B2B colocation and data center services company. Built platform-specific campaigns across LinkedIn, Instagram, and Twitter with custom Tableau dashboards for performance tracking and optimization.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="https://public.tableau.com/views/CampaignDataAnalysis_17488360383520/Dashboard3?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View Live Dashboard
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="https://rajrajeshwarigs.github.io/assets/h5-colo-campaign-strategy.pdf" target="_blank" rel="noopener noreferrer">
                  <FileDown className="mr-2 h-5 w-5" />
                  Campaign Strategy
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="https://rajrajeshwarigs.github.io/assets/h5-colo-dashboard-metrics.pdf" target="_blank" rel="noopener noreferrer">
                  <FileDown className="mr-2 h-5 w-5" />
                  Metrics Guide
                </a>
              </Button>
            </div>
          </div>

          {/* Project Overview */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Project Overview</h2>
            <Card className="p-8 bg-card border-border">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Designed a multi-platform social media campaign to build awareness and generate leads for a B2B colocation and data center services company. Each platform was assigned a distinct strategic role: LinkedIn for thought leadership and lead generation, Instagram for brand personality and engagement, and Twitter for real-time conversation and awareness.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The project includes comprehensive KPI frameworks, content strategy recommendations, and a custom Tableau analytics dashboard for real-time performance monitoring and optimization. Expected outcomes include 50-100 monthly consult sign-ups and 85K-230K total monthly impressions across all platforms.
              </p>
            </Card>
          </section>

          {/* Strategy by Platform */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Platform Strategy Breakdown</h2>
            <div className="space-y-6">
              <Card className="p-6 bg-card border-border">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">💼</span>
                  <h3 className="font-semibold text-xl text-foreground">LinkedIn: B2B Thought Leadership & Lead Generation</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Strategic Focus</h4>
                    <p className="text-muted-foreground mb-3">
                      Created value-rich content for IT decision-makers including carousels, testimonials, explainer videos, and lead generation graphics. Content designed to build trust, showcase technical expertise, and drive consultation sign-ups.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Key Metrics & Targets</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span><strong>Impressions:</strong> 50K-100K monthly | 10K-100K+ per post</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span><strong>Engagement Rate:</strong> 1.5-3% (2%+ is strong)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span><strong>Click-Through Rate:</strong> 1-2%</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span><strong>Cost Per Click:</strong> $2-6 (lower is better)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span><strong>Lead Generation:</strong> Primary source for monthly consult sign-ups</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">📸</span>
                  <h3 className="font-semibold text-xl text-foreground">Instagram: Visual Engagement & Brand Personality</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Strategic Focus</h4>
                    <p className="text-muted-foreground mb-3">
                      Short-form, visual-first content including Reels, memes, behind-the-scenes stories, and team features. Aimed at humanizing the brand and creating mid-funnel engagement through story interactions and profile visits.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Key Metrics & Targets</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span><strong>Impressions:</strong> 20K-70K monthly | 15K-150K per post (with Reels)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span><strong>Engagement Rate:</strong> 4-7% (driven by Reels and Stories)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span><strong>Carousel Completion Rate:</strong> 30-60%</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span><strong>Profile Visits:</strong> 200-800 per week</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span><strong>Story Engagement:</strong> 10-30% of viewers</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🐦</span>
                  <h3 className="font-semibold text-xl text-foreground">Twitter: Real-Time Engagement & Conversation</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Strategic Focus</h4>
                    <p className="text-muted-foreground mb-3">
                      Conversation-sparking content including polls, threads, and engaging quotes. Designed to trigger replies, retweets, and clicks while positioning the brand in tech-savvy, real-time discussions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Key Metrics & Targets</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span><strong>Impressions:</strong> 15K-60K monthly</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span><strong>Engagement Rate:</strong> 2-5%</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span><strong>Link CTR:</strong> 0.8-1.5%</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span><strong>Poll Votes:</strong> 50-300 per poll</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span><strong>Link Clicks:</strong> 20-100+ per tweet</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Analytics Dashboard */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Custom Analytics Dashboard</h2>
            <Card className="p-8 bg-card border-border">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Built a comprehensive Tableau dashboard to track KPIs including impressions, engagement rate, CTR, CPC, consult clicks, and video completions. The dashboard features filters by platform, time period, and post type to isolate high-performing content formats and themes.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">Dashboard Capabilities</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span><strong>Platform-Specific Analysis:</strong> Deep dive into individual platform performance with full KPI sets</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span><strong>Cross-Platform Comparison:</strong> Side-by-side metric analysis to identify highest-ROI channels</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span><strong>Time-Based Trends:</strong> Track performance over time to identify seasonal patterns and growth trajectories</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span><strong>Content Type Performance:</strong> Compare images, videos, Reels, carousels, and text posts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span><strong>Real-Time Optimization:</strong> Identify what's working and adjust strategy dynamically</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">Advanced Analytics Features</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-muted/30">
                      <h4 className="font-semibold mb-2 text-foreground">Location-Based Analysis</h4>
                      <p className="text-sm text-muted-foreground">Track which cities, states, or countries deliver the best results</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/30">
                      <h4 className="font-semibold mb-2 text-foreground">Optimal Posting Times</h4>
                      <p className="text-sm text-muted-foreground">Identify peak times and days for maximum engagement</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/30">
                      <h4 className="font-semibold mb-2 text-foreground">Device Analysis</h4>
                      <p className="text-sm text-muted-foreground">Understand mobile vs desktop conversion patterns</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/30">
                      <h4 className="font-semibold mb-2 text-foreground">Traffic Source Tracking</h4>
                      <p className="text-sm text-muted-foreground">Monitor specific referral paths and campaign performance</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Optimization Strategy */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Tracking & Optimization Plan</h2>
            <Card className="p-8 bg-card border-border">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">A/B Testing Framework</h3>
                  <p className="text-muted-foreground">
                    Systematic testing of headlines, CTAs, and visuals to improve CTR and video completion rates. Each test isolated to one variable for clean, actionable results.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Performance Monitoring</h3>
                  <p className="text-muted-foreground">
                    Continuous tracking of post timing and frequency, with adjustments based on peak performance windows identified in the dashboard analytics.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Paid Amplification Strategy</h3>
                  <p className="text-muted-foreground">
                    Strategic paid boosts on high-performing LinkedIn and Instagram posts to maximize reach at low CPC, scaling winners while cutting underperformers.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Trigger-Based Adjustments</h3>
                  <p className="text-muted-foreground">
                    If LinkedIn leads drop below 30/month, investigate messaging, creative format, and audience targeting. If Instagram story engagement falls below 3%, test new interactive elements or shift timing.
                  </p>
                </div>
              </div>
            </Card>
          </section>

          {/* Expected Outcomes */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Expected Outcomes</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center bg-card border-border">
                <div className="text-3xl font-bold text-primary mb-2">85K-230K</div>
                <div className="font-semibold text-foreground mb-1">Monthly Impressions</div>
                <div className="text-sm text-muted-foreground">Across all platforms</div>
              </Card>
              <Card className="p-6 text-center bg-card border-border">
                <div className="text-3xl font-bold text-primary mb-2">50-100</div>
                <div className="font-semibold text-foreground mb-1">Monthly Consult Sign-ups</div>
                <div className="text-sm text-muted-foreground">Primarily from LinkedIn</div>
              </Card>
              <Card className="p-6 text-center bg-card border-border">
                <div className="text-3xl font-bold text-primary mb-2">2-7%</div>
                <div className="font-semibold text-foreground mb-1">Engagement Rate Range</div>
                <div className="text-sm text-muted-foreground">Platform-dependent</div>
              </Card>
            </div>
          </section>

          {/* Tools & Technologies */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Tools & Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "Tableau",
                "LinkedIn Campaign Manager",
                "Meta Business Suite",
                "Twitter Analytics",
                "Google Analytics",
                "Social Media Management",
                "KPI Tracking",
                "A/B Testing",
                "Data Visualization",
                "Performance Optimization"
              ].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-full bg-card border border-border text-sm text-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>

          {/* Strategic Impact */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Strategic Impact</h2>
            <Card className="p-8 bg-card border-border">
              <p className="text-muted-foreground leading-relaxed mb-4">
                This comprehensive social media strategy demonstrates the power of platform-specific optimization backed by robust analytics. By tailoring content format, messaging, and KPIs to each platform's unique user behavior, the campaign maximizes ROI while building a cohesive brand presence across channels.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The custom Tableau dashboard provides real-time visibility into campaign performance, enabling data-driven decisions on content strategy, budget allocation, and timing optimization. This approach transforms social media from a brand exercise into a measurable lead generation engine for B2B technology services.
              </p>
            </Card>
          </section>

          {/* CTA Section */}
          <div className="flex gap-4 pt-8 border-t border-border animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <Button asChild variant="outline" size="lg">
              <Link to="/projects">
                View All Projects
              </Link>
            </Button>
            <Button asChild size="lg">
              <a href="mailto:rajrajeshwarigangadhar98@gmail.com?subject=Discussion%20about%20H5%20Colo%20Project">
                Discuss This Project
              </a>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default H5ColoSocialMedia;
