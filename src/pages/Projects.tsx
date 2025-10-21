import PageLayout from "@/components/PageLayout";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import healthcareImage from "@/assets/healthcare-project.jpg";
import dinewiseImage from "@/assets/dinewise-project.jpg";
import nikeImage from "@/assets/nike-project.jpg";
import conagraImage from "@/assets/conagra-project.jpg";
import creditImage from "@/assets/credit-project.jpg";
import dataVizImage from "@/assets/data-viz-project.jpg";
import walmartImage from "@/assets/walmart-project.jpg";
import moneyAppImage from "@/assets/money-app-project.jpg";
import racquetImage from "@/assets/racquet-project.jpg";
import h5ColoImage from "@/assets/h5-colo-project.jpg";

const Projects = () => {
  const projects = [
    {
      id: "healthcare-price-transparency",
      title: "Healthcare Price Data Transparency",
      category: "Data Engineering",
      description: "Developed a scalable Azure-based data pipeline for healthcare price transparency, automating ingestion of machine-readable hospital pricing files using Azure Functions, Blob storage, and SQL.",
      tags: ["Microsoft Azure", "Azure Functions", "Data Pipeline", "SQL"],
      image: healthcareImage,
      link: "/projects/healthcare-price-transparency",
      github: "#",
    },
    {
      id: "credit-default-prediction",
      title: "Credit Default Prediction",
      category: "Applied Machine Learning",
      description: "Built ML models (Logistic Regression, Random Forest, XGBoost, LightGBM) on a 1.1M-row, 190-feature dataset, achieving 88.8% accuracy. Addressed class imbalance using SMOTE.",
      tags: ["Python", "Machine Learning", "XGBoost", "SMOTE"],
      image: creditImage,
      link: "/projects/credit-default-prediction",
    },
    {
      id: "conagra-market-analysis",
      title: "Conagra Brand Market Analysis",
      category: "Data-Driven Strategy Development",
      description: "Developed predictive model using Python to analyze category expansion opportunities in retail. Conducted exploratory analysis on large-scale POS data to uncover sales drivers.",
      tags: ["Python", "Predictive Modeling", "Retail Analytics", "SQL"],
      image: conagraImage,
      link: "/projects/conagra-market-analysis",
    },
    {
      id: "walmart-sales-analysis",
      title: "Walmart Sales Analysis",
      category: "Database Design & Analysis",
      description: "Comprehensive database design and sales analysis using MySQL, R, and Tableau. Built relational database schema, performed exploratory data analysis, and identified key sales drivers across 45 Walmart stores.",
      tags: ["MySQL", "R", "Tableau", "Database Design"],
      image: walmartImage,
      link: "/projects/walmart-sales-analysis",
    },
    {
      id: "data-visualization-storytelling",
      title: "Data Analysis & Visualizations (Storytelling)",
      category: "Data Analysis & Visualization",
      description: "Comprehensive industry consolidation analysis across pharmaceutical and banking sectors. Analyzed market trends, merger activities, and competitive landscapes with compelling data visualizations.",
      tags: ["Data Visualization", "Statistical Analysis", "Market Research", "Storytelling"],
      image: dataVizImage,
      link: "/projects/data-visualization-storytelling",
    },
    {
      id: "nike-digital-marketing",
      title: "Nike Digital Marketing Performance",
      category: "Google Analytics & Marketing Analysis",
      description: "Analyzed Nike's e-commerce data using Google Analytics, uncovering 76% YoY revenue growth. Identified 39% increase in conversion rates and flagged mobile UX improvement opportunities.",
      tags: ["Google Analytics", "Digital Marketing", "E-commerce", "UX"],
      image: nikeImage,
      link: "/projects/nike-digital-marketing",
    },
    {
      id: "h5-colo-social-media",
      title: "Multi-Platform Social Media Campaign Strategy",
      category: "Social Media Strategy & Analytics",
      description: "Multi-platform B2B social media strategy with custom Tableau analytics dashboard. Built platform-specific campaigns across LinkedIn, Instagram, and Twitter for lead generation and brand awareness.",
      tags: ["Tableau", "Social Media", "B2B Marketing", "Analytics"],
      image: h5ColoImage,
      link: "/projects/h5-colo-social-media",
    },
    {
      id: "dinewise",
      title: "DineWise",
      category: "Market Research & Product Strategy",
      description: "Conducted survey with 250+ university students using Qualtrics, uncovering 63% dissatisfaction with meal options. Developed brand strategy, budget, go-to-market roadmap, and first-year revenue projections.",
      tags: ["Qualtrics", "Market Research", "GTM Strategy", "Product"],
      image: dinewiseImage,
      link: "/projects/dinewise",
    },
    {
      id: "the-racquet-case-study",
      title: "Tennis & Pickleball Coaching: Digital Marketing Strategy",
      category: "Digital Marketing Strategy",
      description: "Comprehensive digital marketing strategy for premium tennis/pickleball coaching in South Beach. Focused on conversion optimization, SEO, Instagram engagement, and local visibility through targeted campaigns.",
      tags: ["Meta Ads", "Google Ads", "SEO", "Instagram Marketing"],
      image: racquetImage,
      link: "/projects/the-racquet-case-study",
    },
    {
      id: "money-app-uiux",
      title: "Money Management App - UI/UX Design",
      category: "UI/UX Design",
      description: "Designed a comprehensive mobile money management application focusing on user experience, intuitive navigation, and modern fintech UI patterns. Created complete user flows and interactive prototypes in Figma.",
      tags: ["Figma", "UI/UX Design", "Mobile Design", "Prototyping"],
      image: moneyAppImage,
      link: "/projects/money-app-uiux",
    },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 animate-fade-in">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-8 text-foreground">
              Projects
            </h1>
            <p className="text-base text-muted-foreground max-w-3xl">
              A collection of work that showcases my approach to design and development—solving
              real problems with thoughtful, user-centered solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Link
                to={project.link}
                key={project.title}
                className="group rounded-xl bg-card border border-border shadow-soft hover:shadow-medium transition-smooth overflow-hidden animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-foreground/20 opacity-0 group-hover:opacity-100 transition-smooth" />
                </div>
                
                <div className="p-8">
                  <div className="mb-4">
                    <span className="text-sm text-primary font-medium">
                      {project.category}
                    </span>
                    <h3 className="font-serif text-2xl font-semibold text-foreground mt-2 group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-muted text-xs text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                    {project.github && (
                      <Button asChild variant="ghost" size="sm" onClick={(e) => e.stopPropagation()}>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center p-12 rounded-xl bg-muted/30 border border-border">
            <h2 className="font-serif text-3xl font-bold mb-4 text-foreground">
              Like what you see?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part
              of your vision.
            </p>
            <Button asChild size="lg">
              <a href="mailto:rajrajeshwarigangadhar98@gmail.com?subject=Project%20Collaboration%20Inquiry">
                Let's Work Together
              </a>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Projects;
