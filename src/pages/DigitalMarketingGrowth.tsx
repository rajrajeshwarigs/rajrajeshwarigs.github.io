import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, Users, BarChart3, Lightbulb, Target, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";

const DigitalMarketingGrowth = () => {
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
              Digital Marketing & Growth
            </h1>
            <p className="text-lg text-muted-foreground">
              Marketing is an investment—a mix of creativity, psychology, and strategy that drives real business impact
            </p>
          </div>

          {/* Marketing Philosophy */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">My Marketing Philosophy</h2>
            <div className="p-8 rounded-xl bg-card border border-border">
              <p className="text-muted-foreground leading-relaxed mb-4 text-lg italic">
                "Marketing can change how people think, feel, and act. The right message at the right time can make someone try something new, fall in love with a brand, start a trend or explore an interesting product."
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For me, marketing is this mix of creativity, psychology, and strategy, and when it all comes together, it's amazing to see the impact it can have. A simple idea can spark conversations, shift opinions, or grow a brand. I'm obsessed with it!
              </p>
            </div>
          </section>

          {/* Core Expertise */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="font-serif text-3xl font-bold mb-8 text-foreground">Core Expertise</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: TrendingUp,
                  title: "Growth Marketing",
                  description: "Data-driven growth strategies focused on customer acquisition, activation, retention, and revenue optimization"
                },
                {
                  icon: Megaphone,
                  title: "Digital Campaign Management",
                  description: "End-to-end campaign strategy, execution, and optimization across Meta, Google, and organic channels"
                },
                {
                  icon: Users,
                  title: "Community Building & Engagement",
                  description: "Grew brand to 5,000+ followers organically with 180% reach increase through content-led growth strategies"
                },
                {
                  icon: BarChart3,
                  title: "Marketing Analytics",
                  description: "Built 25+ Looker Studio dashboards tracking funnels, CAC vs LTV, and retention metrics that influenced strategy"
                },
                {
                  icon: Target,
                  title: "Conversion Optimization",
                  description: "Systematic A/B testing and funnel analysis leading to 12-27% improvements in key conversion metrics"
                },
                {
                  icon: Lightbulb,
                  title: "Content Strategy & SEO",
                  description: "SEO research and content creation that boosted organic traffic and enhanced campaign performance"
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

          {/* Brand Strategy */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.25s" }}>
            <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Brand Strategy & Positioning</h2>
            <div className="space-y-6">
              <div className="p-8 rounded-xl bg-card border border-border">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Strong brands aren't built overnight—they're crafted through intentional positioning, consistent messaging, and authentic connections with audiences. My approach to brand strategy combines market research, competitive analysis, and customer insights to create brands that resonate and endure.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-foreground">Brand Positioning</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span>Analyzed 10+ competitors and implemented positioning pivots driving 20% growth in engagement</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span>Developed unique value propositions that differentiate in crowded markets</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span>Created brand messaging frameworks aligned with target audience needs</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-foreground">Customer Research & Personas</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span>Conducted market research with 120+ users to build 3 detailed customer personas</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span>Improved customer segmentation driving 15% lift in engagement rates</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span>Designed feedback surveys (avg. 40+ responses/month) with 4.5/5 satisfaction score</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-foreground">Brand Voice & Messaging</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span>Developed consistent brand voice across all customer touchpoints</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span>Crafted messaging hierarchies that prioritize key benefits and differentiators</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span>Created content guidelines ensuring brand consistency across teams</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-foreground">Community-Driven Growth</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span>Built authentic brand communities through consistent engagement and value delivery</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span>Ran 35+ brand-building campaigns (book clubs, mixers, workshops) generating 15+ sponsorships</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span>Leveraged user-generated content and social proof to build trust and credibility</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Highlights */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Experience Highlights</h2>
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-semibold text-xl mb-4 text-foreground">Dating Application - Aisle Private Limited</h3>
                <p className="text-muted-foreground mb-4">
                  Led performance marketing initiatives and data-driven growth strategies across multiple products.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span>Managed marketing spend diagnostics across Meta Ads, Google Ads, and programmatic channels for 5 products and 35+ campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span>Built 25+ Looker Studio growth dashboards tracking funnels, CAC vs LTV, and retention, boosting sign-ups by 12%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span>Ran 100+ A/B tests on ad creatives, placements, and audiences, cutting CPI by 20% and CPP by 15%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span>Partnered with product and design teams to optimize onboarding and retention flows</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-semibold text-xl mb-4 text-foreground">Marketing Agency - Whizflo</h3>
                <p className="text-muted-foreground mb-4">
                  Delivered analytics solutions and managed paid media campaigns across healthcare and digital marketing.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span>Achieved 27% uplift in CTR by launching and optimizing paid media A/B tests</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span>Managed Meta Ads campaigns and conducted keyword/SEO analysis using SEMrush</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span>Created blog content leveraging SEMrush for SEO research to boost organic traffic</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-semibold text-xl mb-4 text-foreground">Wellness Brand - Article1 (Co-Founder)</h3>
                <p className="text-muted-foreground mb-4">
                  Scaled wellness-focused brand through organic growth strategies and community-driven marketing.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span>Grew brand to 5,000+ followers organically, increasing Instagram reach by 180%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span>Ran 35+ digital and in-person campaigns generating $2,000+ revenue and 15+ brand sponsorships</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span>Built 3 customer personas through market research with 120+ users, improving segmentation by 15%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span>Analyzed 10+ competitors and implemented positioning pivots driving 20% growth in engagement</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Growth Metrics */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Growth Metrics That Matter</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: "Organic Reach Growth", value: "+180%", description: "Instagram growth" },
                { label: "Sign-ups Increase", value: "+12%", description: "Through funnel optimization" },
                { label: "CTR Improvement", value: "+27%", description: "Paid media campaigns" },
                { label: "CPI Reduction", value: "-20%", description: "A/B testing wins" },
                { label: "Engagement Lift", value: "+20%", description: "Content positioning" },
                { label: "ROAS Uplift", value: "+15%", description: "Budget optimization" }
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

          {/* Marketing Channels & Tools */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Channels & Tools</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-foreground">Paid Channels</h3>
                <div className="flex flex-wrap gap-3">
                  {["Meta Ads", "Google Ads", "Instagram Ads", "Facebook Ads", "Google Search", "Display Advertising"].map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 rounded-full bg-card border border-border text-sm text-foreground hover:border-primary transition-smooth"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3 text-foreground">Organic & Content</h3>
                <div className="flex flex-wrap gap-3">
                  {["SEO", "Content Marketing", "Social Media", "Community Building", "Email Marketing", "Blog Strategy"].map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 rounded-full bg-card border border-border text-sm text-foreground hover:border-primary transition-smooth"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3 text-foreground">Analytics & Optimization</h3>
                <div className="flex flex-wrap gap-3">
                  {["Google Analytics 4", "Looker Studio", "Meta Business Suite", "SEMrush", "Amplitude", "A/B Testing", "Funnel Analysis"].map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 rounded-full bg-card border border-border text-sm text-foreground hover:border-primary transition-smooth"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Featured Case Studies */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.55s" }}>
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

          {/* Certifications */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.65s" }}>
            <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Certifications</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: "Google Ads Search Certification", issuer: "Google Skillshop", link: "https://skillshop.credential.net/76ad5f27-c0eb-4b28-8bd3-d340215a9796#acc.93sPgZHJ" },
                { name: "Google Analytics Individual Qualification", issuer: "Google Skillshop" },
                { name: "Meta Certified Media Planning Professional", issuer: "Meta Blueprint" },
                { name: "Meta Certified Media Buying Professional", issuer: "Meta Blueprint" }
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

          {/* Marketing Approach */}
          <section className="animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">My Marketing Approach</h2>
            <div className="p-8 rounded-xl bg-card border border-border space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">1. Understand the Audience</h3>
                <p className="text-muted-foreground">
                  Deep customer research, persona development, and behavioral analysis to understand motivations, pain points, and decision drivers.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">2. Craft the Message</h3>
                <p className="text-muted-foreground">
                  Develop compelling value propositions that resonate emotionally and align with customer needs. The right message at the right time.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">3. Choose the Right Channels</h3>
                <p className="text-muted-foreground">
                  Multi-channel strategy balancing paid, organic, and community-driven growth based on where the audience lives and engages.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">4. Test, Learn, Optimize</h3>
                <p className="text-muted-foreground">
                  Systematic experimentation with clear hypotheses, rigorous tracking, and rapid iteration. Let data guide creative decisions.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">5. Build for the Long-Term</h3>
                <p className="text-muted-foreground">
                  Balance short-term performance marketing with long-term brand building. Create sustainable growth loops and loyal communities.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default DigitalMarketingGrowth;
