import PageLayout from "@/components/PageLayout";
import { BarChart3, Database, Code, PieChart, TrendingUp, Target, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import profileImage from "@/assets/profile-about.jpg";

const About = () => {
  const skills = [
    { 
      icon: BarChart3, 
      title: "Analytics & Techniques", 
      items: ["A/B Testing", "Predictive Modeling", "Cohort Analysis", "Funnel Optimization", "Churn Analysis"] 
    },
    { 
      icon: Database, 
      title: "SQL & Databases", 
      items: ["Advanced SQL", "Window Functions", "Query Optimization", "MySQL, PostgreSQL, Snowflake, BigQuery"] 
    },
    { 
      icon: Code, 
      title: "Programming", 
      items: ["Python (pandas, NumPy, scikit-learn)", "R", "Excel VBA", "Git"] 
    },
    { 
      icon: PieChart, 
      title: "BI & Analytics Tools", 
      items: ["Tableau", "Power BI", "Looker Studio", "Google Analytics", "Adobe Analytics", "Amplitude"] 
    },
    { 
      icon: TrendingUp, 
      title: "Marketing & Growth", 
      items: ["Digital Marketing Analytics", "Conversion Optimization", "Meta & Google Ads", "CAC/LTV Analysis", "Marketing Attribution"] 
    },
    { 
      icon: Target, 
      title: "Advertising Analytics", 
      items: ["ROAS Optimization", "Multi-channel Attribution", "Audience Segmentation", "Ad Spend Management"] 
    },
    { 
      icon: Brain, 
      title: "AI & ML Tools", 
      items: ["ChatGPT", "Claude", "Gemini", "Perplexity", "scikit-learn", "Applied Machine Learning"] 
    },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-20 animate-fade-in">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="w-48 h-48 rounded-full bg-muted border-4 border-background shadow-medium overflow-hidden">
              <img 
                src={profileImage} 
                alt="Rajrajeshwari Gangadhar Sangolli"
                className="w-full h-full object-cover object-[center_30%]"
              />
            </div>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-8 text-foreground text-center">
            About Me
          </h1>
          <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
            <p>
              Hey there! I'm Rajrajeshwari Gangadhar Sangolli, a data-driven analyst with 4+ years of experience processing and analyzing 10M+ rows of data across product, finance, marketing, and operations. I completed my Master of Science in Business Analytics at The University of Texas at Dallas with a GPA of 3.89, specializing in predictive modeling, statistical analysis, and machine learning applications.
            </p>
            <p>
              I excel at transforming raw data into strategic insights using SQL (writing complex queries with CTEs, window functions, and query optimization), Python (pandas, NumPy, scikit-learn for statistical modeling and ML), and BI platforms (Tableau, Power BI, Looker Studio). My technical expertise spans ETL pipeline development, A/B testing frameworks, cohort analysis, predictive modeling, and building automated reporting systems that process millions of data points daily.
            </p>
            <p>
              My data-driven initiatives have delivered measurable impact: improved onboarding completion by 12% through funnel analysis of 50K+ user journeys, reduced dashboard query latency by 30% through SQL optimization on 5M+ record datasets, and boosted conversion rates by 20% through 100+ A/B tests analyzing 1M+ user interactions.
            </p>
            <p>
              Whether it's building predictive models with 85%+ accuracy, designing data warehouses processing TB-scale data, conducting statistical analysis on large datasets, or creating automated reporting systems, I combine technical depth in analytics engineering with business acumen to drive data-informed decision making. My work spans the full analytics lifecycle—from data extraction and transformation to statistical modeling and stakeholder communication.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="font-serif text-3xl font-bold mb-12 text-center text-foreground">
            What I Bring to the Table
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="p-6 rounded-xl bg-card border border-border shadow-soft hover:shadow-medium transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <skill.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">
                  {skill.title}
                </h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
                {(skill.title === "Advertising Analytics" || skill.title === "Marketing & Growth") && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <Button asChild size="sm" className="w-full">
                      <Link to={skill.title === "Advertising Analytics" ? "/ads-profile" : "/digital-marketing-growth"}>
                        View {skill.title === "Advertising Analytics" ? "Ads" : "Marketing"} Profile
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold mb-12 text-center text-foreground">
            My Values
          </h2>
          <div className="space-y-8">
            {[
              {
                title: "Data-Driven Impact",
                description: "I believe in letting data tell the story. My goal is to uncover insights that drive real business results and measurable growth.",
              },
              {
                title: "Continuous Learning",
                description: "Technology evolves rapidly, and so do I. I'm committed to staying current and expanding my skill set.",
              },
              {
                title: "Collaboration",
                description: "The best solutions come from diverse perspectives. I thrive in collaborative environments where ideas flow freely.",
              },
            ].map((value, index) => (
              <div
                key={value.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-serif text-2xl font-semibold mb-3 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
