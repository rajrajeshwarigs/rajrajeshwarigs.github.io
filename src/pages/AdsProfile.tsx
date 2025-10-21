import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, Target, DollarSign, LineChart, Megaphone, Users } from "lucide-react";
import { Link } from "react-router-dom";

const AdsProfile = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <Button asChild variant="ghost" className="mb-8">
            <Link to="/about">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to About
            </Link>
          </Button>

          <div className="mb-12 animate-fade-in">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Paid Media & Advertising Analytics
            </h1>
            <p className="text-lg text-muted-foreground">
              Driving measurable business outcomes through data-driven paid advertising strategies
            </p>
          </div>

          {/* Overview Section */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Overview</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With extensive experience managing $500K+ in annual paid media spend across Meta Ads, Google Ads, and programmatic channels, I specialize in performance-driven advertising that delivers measurable ROI. My approach combines rigorous A/B testing, creative optimization, and deep analytics to maximize campaign efficiency and scale winning strategies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I've managed 35+ campaigns across 5 products, consistently driving 15-27% improvements in key metrics through systematic optimization and data-informed decision-making.
            </p>
          </section>

          {/* Core Competencies */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="font-serif text-3xl font-bold mb-8 text-foreground">Core Competencies</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Megaphone,
                  title: "Paid Media Campaign Management",
                  description: "End-to-end management of Meta Ads, Google Ads, and programmatic campaigns with strategic budget allocation"
                },
                {
                  icon: Target,
                  title: "Creative Testing & Optimization",
                  description: "Ran 100+ A/B tests on ad creatives, placements, and audiences—cutting CPI by 20% and CPP by 15%"
                },
                {
                  icon: Users,
                  title: "Audience Segmentation & Targeting",
                  description: "Built high-converting audience segments using behavioral data, demographics, and lookalike modeling"
                },
                {
                  icon: DollarSign,
                  title: "Budget & Bid Strategy Optimization",
                  description: "Achieved 15% ROAS uplift through systematic spend diagnostics and channel reallocation"
                },
                {
                  icon: LineChart,
                  title: "Performance Analytics & Attribution",
                  description: "Built comprehensive dashboards tracking CAC, LTV, ROAS, and multi-touch attribution"
                },
                {
                  icon: TrendingUp,
                  title: "Conversion Rate Optimization",
                  description: "27% CTR improvement through landing page optimization and ad-to-page message matching"
                }
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="p-6 rounded-xl bg-card border border-border shadow-soft hover:shadow-medium transition-smooth"
                >
                  <item.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Key Metrics & KPIs */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Track Record: Key Metrics & KPIs</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: "ROAS Improvement", value: "+15%", description: "Through budget optimization" },
                { label: "CPI Reduction", value: "-20%", description: "Via creative A/B testing" },
                { label: "CPP Reduction", value: "-15%", description: "Through audience refinement" },
                { label: "CTR Uplift", value: "+27%", description: "Ad creative optimization" },
                { label: "Sign-up Growth", value: "+12%", description: "Funnel-driven campaigns" },
                { label: "Annual Ad Spend", value: "$500K+", description: "Managed across channels" }
              ].map((metric, index) => (
                <div
                  key={metric.label}
                  className="p-6 rounded-xl bg-card border border-border text-center hover:border-primary/50 transition-smooth"
                >
                  <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="font-semibold text-foreground mb-1">{metric.label}</div>
                  <div className="text-sm text-muted-foreground">{metric.description}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Platform Expertise */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Platform Expertise</h2>
            
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-semibold text-xl mb-3 text-foreground flex items-center gap-2">
                  <span className="text-2xl">📘</span> Meta Ads (Facebook & Instagram)
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span>Campaign setup, optimization, and scaling across awareness, consideration, and conversion objectives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span>Advanced audience targeting: custom audiences, lookalikes, detailed targeting, retargeting strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span>Creative strategy and A/B testing for static images, carousels, video ads, and story formats</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span>Meta Pixel implementation, event tracking, and conversion optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span>Budget pacing, bid strategies (lowest cost, cost cap, bid cap), and campaign budget optimization</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-semibold text-xl mb-3 text-foreground flex items-center gap-2">
                  <span className="text-2xl">🔍</span> Google Ads (Search, Display, Shopping)
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span>Search campaigns with keyword research, match types, negative keywords, and quality score optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span>Display campaigns with responsive display ads, placement targeting, and audience expansion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span>Performance Max campaigns leveraging Google's AI for cross-channel optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span>Conversion tracking, Google Analytics 4 integration, and enhanced conversions setup</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span>Ad extensions, responsive search ads, and automated bidding strategies (Target CPA, Target ROAS)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Ad Creative Strategy */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Ad Creative Strategy & Design Principles</h2>
            <div className="p-8 rounded-xl bg-card border border-border space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                My creative approach is rooted in data-driven testing and psychological principles of persuasion:
              </p>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Testing Framework</h3>
                  <p className="text-muted-foreground">
                    Systematic A/B testing of headlines, visuals, CTAs, value propositions, and social proof elements—always testing one variable at a time for clean results
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Visual Hierarchy & Attention</h3>
                  <p className="text-muted-foreground">
                    Designing ads with clear focal points, contrasting colors for CTAs, and thumb-stopping patterns optimized for mobile feeds
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Message-Market Fit</h3>
                  <p className="text-muted-foreground">
                    Tailoring messaging to audience segments: new vs returning users, cold vs warm audiences, top-of-funnel vs bottom-of-funnel
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Performance-Driven Iteration</h3>
                  <p className="text-muted-foreground">
                    Rapid iteration based on early performance signals—killing underperformers fast, scaling winners aggressively
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Analytics & Measurement Tools */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Analytics & Measurement Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Meta Ads Manager",
                "Google Ads",
                "Google Analytics 4",
                "Meta Business Suite",
                "Looker Studio",
                "SEMrush",
                "Amplitude",
                "Adobe Analytics",
                "SQL",
                "Python",
                "Excel",
                "Tableau"
              ].map((tool) => (
                <div
                  key={tool}
                  className="px-4 py-3 rounded-lg bg-card border border-border text-center text-sm text-foreground hover:border-primary hover:scale-105 transition-smooth"
                >
                  {tool}
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Certifications</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: "Google Ads Search Certification", issuer: "Google Skillshop", link: "https://skillshop.credential.net/76ad5f27-c0eb-4b28-8bd3-d340215a9796#acc.93sPgZHJ" },
                { name: "Google Analytics Individual Qualification", issuer: "Google Skillshop" }
              ].map((cert) => {
                const cardContent = (
                  <>
                    <h3 className="font-semibold text-foreground mb-1">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </>
                );
                
                return cert.link ? (
                  <a
                    key={cert.name}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 rounded-lg bg-card border border-border hover:border-primary/50 transition-smooth block"
                  >
                    {cardContent}
                  </a>
                ) : (
                  <div
                    key={cert.name}
                    className="p-5 rounded-lg bg-card border border-border hover:border-primary/50 transition-smooth"
                  >
                    {cardContent}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Featured Case Studies */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.75s" }}>
            <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Featured Work</h2>
            <div className="space-y-6">
              <div className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-smooth">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm text-primary font-medium">Case Study</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">Digital Marketing Strategy</span>
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-3 text-foreground">
                  Tennis & Pickleball Coaching: Digital Marketing Strategy
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Comprehensive digital marketing strategy for a premium tennis and pickleball coaching business. Focused on website conversion optimization, Instagram engagement, SEO strategy, and local visibility through Google Maps and targeted Meta/Google Ads campaigns.
                </p>
                <div className="flex gap-3">
                  <Button asChild>
                    <Link to="/projects/the-racquet-case-study">
                      View Case Study
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="https://rajrajeshwarigs.github.io/assets/racquet-case-study.pdf" target="_blank" rel="noopener noreferrer">
                      Download PDF
                    </a>
                  </Button>
                </div>
              </div>

              <div className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-smooth">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm text-primary font-medium">Case Study</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">Social Media Strategy & Analytics</span>
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-3 text-foreground">
                  Multi-Platform Social Media Campaign Strategy
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  B2B social media strategy with custom Tableau analytics dashboard for colocation services. Built platform-specific campaigns across LinkedIn, Instagram, and Twitter with comprehensive KPI tracking and real-time optimization capabilities.
                </p>
                <div className="flex gap-3">
                  <Button asChild>
                    <Link to="/projects/h5-colo-social-media">
                      View Project
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="https://public.tableau.com/views/CampaignDataAnalysis_17488360383520/Dashboard3?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" target="_blank" rel="noopener noreferrer">
                      Live Dashboard
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Approach */}
          <section className="animate-fade-in" style={{ animationDelay: "0.9s" }}>
            <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">My Approach to Paid Media</h2>
            <div className="p-8 rounded-xl bg-card border border-border space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">1. Strategic Foundation</h3>
                <p className="text-muted-foreground">
                  Start with clear business objectives, target audience research, and competitive landscape analysis. Define success metrics and attribution models upfront.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">2. Test, Learn, Scale</h3>
                <p className="text-muted-foreground">
                  Launch structured tests with sufficient budget for statistical significance. Analyze results rigorously. Scale winning combinations aggressively while cutting losers fast.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">3. Continuous Optimization</h3>
                <p className="text-muted-foreground">
                  Monitor performance daily, optimize bids and budgets weekly, refresh creatives monthly. Stay ahead of platform algorithm changes and seasonal trends.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">4. Full-Funnel Thinking</h3>
                <p className="text-muted-foreground">
                  Design campaigns that work together across awareness, consideration, and conversion stages. Implement retargeting strategies and nurture sequences for maximum efficiency.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">5. Cross-Functional Collaboration</h3>
                <p className="text-muted-foreground">
                  Partner with product teams on landing pages, creative teams on ad design, and data teams on attribution modeling. Paid media doesn't work in isolation.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default AdsProfile;
