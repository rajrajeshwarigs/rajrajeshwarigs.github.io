import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, FileDown } from "lucide-react";
import { Link } from "react-router-dom";

const TheRacquetCaseStudy = () => {
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
              <span className="text-sm text-primary font-medium">Digital Marketing Strategy</span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">Q4 2024</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Tennis & Pickleball Coaching: Digital Marketing Strategy
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Comprehensive digital marketing strategy for a premium tennis and pickleball coaching business in South Beach, Miami. Focused on improving website performance, Instagram engagement, SEO optimization, and local visibility through Google Maps and targeted advertising campaigns.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg">
                <a href="https://rajrajeshwarigs.github.io/assets/racquet-case-study.pdf" target="_blank" rel="noopener noreferrer">
                  <FileDown className="mr-2 h-5 w-5" />
                  View Full Case Study
                </a>
              </Button>
            </div>
          </div>

          {/* Project Overview */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Project Overview</h2>
            <Card className="p-8 bg-card border-border">
              <p className="text-muted-foreground leading-relaxed mb-4">
                As part of a strategic digital marketing initiative, this case study focuses on enhancing a sports coaching business's online presence across multiple channels. The business offers private tennis and pickleball lessons in Miami's South Beach area, targeting both locals and tourists seeking premium coaching services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The project addresses key digital marketing challenges including conversion optimization, SEO strategy, social media engagement, and local search visibility—all while maintaining alignment between paid advertising efforts and organic growth strategies.
              </p>
            </Card>
          </section>

          {/* Key Focus Areas */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Strategic Focus Areas</h2>
            <div className="space-y-6">
              <Card className="p-6 bg-card border-border">
                <h3 className="font-semibold text-xl mb-3 text-foreground">Website Optimization for Paid Ads</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span><strong>Conversion Tracking Integration:</strong> Implemented Google Tag Manager, Meta Pixel, and Google Ads Conversion Tracking to measure booking clicks, form submissions, phone calls, and enable remarketing campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span><strong>Above-the-Fold CTAs:</strong> Designed prominent, benefit-driven calls-to-action like "Book Your First Lesson Today - Limited Spots" matching ad messaging for seamless user experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span><strong>Streamlined Checkout Flow:</strong> Reduced booking friction by creating direct ad-to-booking paths, minimizing drop-offs from multi-step processes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span><strong>Urgency & Social Proof:</strong> Incorporated FOMO elements ("Only 3 spots left this week") and testimonials with Google star ratings to boost conversion rates</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-card border-border">
                <h3 className="font-semibold text-xl mb-3 text-foreground">SEO Strategy & Content Marketing</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span><strong>Keyword Optimization:</strong> Targeted high-intent keywords like "Miami tennis lessons," "South Beach pickleball coaching," and "private tennis coach Miami" across H1 headings, meta tags, and content</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span><strong>Content Hub Development:</strong> Created blog posts like "Top 5 Tennis Drills for Beginners in Miami" to improve organic rankings and serve as landing pages for retargeting campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span><strong>Image SEO & Internal Linking:</strong> Optimized image file names and alt text with keywords while linking blog posts to service and booking pages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span><strong>NAP Consistency:</strong> Ensured name, address, and phone number consistency across website, Google Business Profile, and directories for stronger local SEO</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-card border-border">
                <h3 className="font-semibold text-xl mb-3 text-foreground">Instagram Marketing Strategy</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span><strong>Creative Synergy:</strong> Repurposed top-performing ad creatives (Reels, carousels, testimonials) for organic feed and Stories, creating consistent visual language across paid and organic touchpoints</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span><strong>Lead Generation:</strong> Implemented "Swipe Up" links and Instagram-exclusive offers ("10% off for IG followers") to convert engagement into bookings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span><strong>A/B Testing:</strong> Ran split tests on different creatives, headlines, CTAs, and audience targeting to identify highest-performing combinations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span><strong>Local Targeting:</strong> Used geo-tags, local hashtags (#MiamiTennis, #SouthBeachPickleball), and recognizable Miami backdrops to improve local relevance</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-card border-border">
                <h3 className="font-semibold text-xl mb-3 text-foreground">Google Maps & Local Advertising</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span><strong>Google Maps Optimization:</strong> Enhanced business description with keywords, added high-quality photos/videos, and posted weekly Google Updates featuring promotions and events</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span><strong>Review Generation:</strong> Implemented QR code strategy for immediate post-lesson reviews to improve ranking in "tennis lessons near me" searches</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span><strong>Geo-Targeted Ads:</strong> Ran Google Local Campaigns and Meta Ads targeting 3-4 mile radius of South Beach during peak hours (evenings and weekends)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span><strong>Local Partnerships:</strong> Developed partnership strategy with hotels, gyms, and cafes featuring QR code flyers and exclusive deals for visitors</span>
                  </li>
                </ul>
              </Card>
            </div>
          </section>

          {/* Key Performance Indicators */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Key Performance Indicators</h2>
            <Card className="p-8 bg-card border-border">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">Website & Conversion Metrics</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span>Conversion Rate</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span>Cost Per Acquisition (CPA)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span>Landing Page Views</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span>Bounce Rate</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">Instagram & Social Metrics</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span>Engagement Rate</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span>Reach & Impressions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span>Video Completion Rate</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span>Profile Visits from Ads</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">Paid Advertising Metrics</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span>ROAS (Return on Ad Spend)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span>Click-Through Rate (CTR)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span>Cost Per Click (CPC)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span>Quality Score (Google Ads)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">Local Search & SEO</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span>Google Maps Ranking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span>Review Volume & Rating</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span>Organic Search Traffic</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span>Keyword Rankings</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </section>

          {/* Tools & Platforms */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Tools & Platforms Used</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "Meta Ads Manager",
                "Google Ads",
                "Google Analytics 4",
                "Google Tag Manager",
                "Meta Pixel",
                "Instagram",
                "Google Business Profile",
                "SEMrush",
                "Google Search Console",
                "Meta Business Suite"
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
          <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Strategic Impact</h2>
            <Card className="p-8 bg-card border-border">
              <p className="text-muted-foreground leading-relaxed mb-4">
                This comprehensive digital marketing strategy demonstrates the importance of creating cohesive, data-driven campaigns that align paid advertising with organic growth efforts. By optimizing every customer touchpoint—from initial ad exposure through Instagram engagement to final booking conversion—the strategy maximizes ROI while building long-term brand equity.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Key to the approach is the integration of conversion tracking, systematic A/B testing, and continuous optimization across all channels. The focus on local SEO, Google Maps visibility, and geo-targeted advertising ensures the business captures both the local Miami market and tourists seeking premium tennis and pickleball experiences in South Beach.
              </p>
            </Card>
          </section>

          {/* CTA Section */}
          <div className="flex gap-4 pt-8 border-t border-border animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button asChild variant="outline" size="lg">
              <Link to="/projects">
                View All Projects
              </Link>
            </Button>
            <Button asChild size="lg">
              <a href="mailto:rajrajeshwarigangadhar98@gmail.com?subject=Discussion%20about%20The%20Racquet%20Case%20Study">
                Discuss This Project
              </a>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default TheRacquetCaseStudy;
