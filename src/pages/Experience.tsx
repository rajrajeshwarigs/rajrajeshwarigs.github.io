import PageLayout from "@/components/PageLayout";
import { Briefcase, GraduationCap, FileDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import utdSeal from "@/assets/utd-seal.png";
import deansCouncilPhoto from "@/assets/deans-council-photo.png";
import scholarDistinctionCertificate from "@/assets/scholar-distinction-certificate.png";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Student Assistant",
      company: "University of Texas at Dallas",
      period: "Jan 2024 – May 2025",
      description: "Supporting university operations through data-driven process optimization and analysis.",
      highlights: [
        "Automated staff scheduling using Excel macros and logic-based optimization, reducing mismatches and saving 10+ hours/week",
        "Analyzed 25,000+ vehicle and access records with SQL to uncover usage patterns, improving event planning efficiency by 25%",
      ],
    },
    {
      type: "education",
      title: "Master of Science in Business Analytics (STEM)",
      company: "The University of Texas at Dallas",
      period: "Aug 2023 – May 2025",
      description: "GPA: 3.89 | Dean's Excellence Scholarship, Honor with High Distinction, Dean's Council",
      highlights: [
        "Relevant Courses: Applied Machine Learning, Causal Analytics, A/B Testing, Predictive Analytics, Econometrics and Time Series, Prescriptive Analytics",
      ],
    },
    {
      type: "work",
      title: "Associate, Marketing Analyst",
      company: "Aisle Private Limited",
      period: "Jan 2023 – July 2023",
      description: "Led data-driven marketing analytics and growth optimization across multiple products.",
      highlights: [
        "Performed funnel and behavioral analysis using SQL window functions and Python (pandas, NumPy) to detect user journey bottlenecks, improving onboarding completion by 12%",
        "Developed interactive KPI dashboards in Tableau and Looker Studio, integrating SQL queries to track conversion rates, churn, retention, and session frequency",
        "Optimized SQL queries and data models, reducing dashboard latency by 30% and improving cross-team accessibility",
        "Conducted large-scale A/B testing (100+ variants), improving CPI by 20%, CPA by 25%, and CPP by 15%",
        "Built predictive models in Python (logistic regression, ensemble methods) with SQL feature pipelines to forecast conversion probabilities",
        "Conducted cohort and retention analyses using SQL CTEs and Python visualization libraries (matplotlib, seaborn), delivering insights into user lifecycle patterns",
      ],
    },
    {
      type: "work",
      title: "Co-Founder, Strategy, Analytics & Operations",
      company: "Article1",
      period: "Jan 2020 – Jan 2023",
      description: "Led strategy, analytics, and operations for wellness-focused brand, combining data analysis with growth initiatives.",
      highlights: [
        "Conducted financial data analysis on revenue, expenses, and ROI across client projects, designing models that supported quarterly forecasting and capital allocation decisions",
        "Combined operational KPIs with competitor data to identify growth opportunities, reducing inefficiencies by 25%",
        "Collaborated cross-functionally to implement pipeline-style reporting for leadership, improving decision-making speed by 20%",
        "Led social media analytics, building dashboards to track engagement metrics (CTR, impressions, conversion) across campaigns; identified high-performing content and optimized spend strategy",
      ],
    },
    {
      type: "work",
      title: "Analyst",
      company: "Whizflo",
      period: "Sep 2022 – Jan 2023",
      description: "Delivered analytics solutions across client engagements, spanning healthcare operations and digital marketing optimization.",
      highlights: [
        "Delivered analytics solutions across 3+ client engagements, spanning healthcare operations and digital marketing optimization",
        "Conducted root cause analysis on 60K+ patient records to identify inefficiencies that reduced resolution times by 18%",
        "Designed and ran A/B tests with defined significance thresholds to optimize marketing content, boosting lead conversions by 25%",
        "Built predictive analysis models to estimate lead conversion probabilities and campaign ROI using logistic regression and ensemble methods",
        "Developed classification models using Random Forests to segment user behavior and identify high-intent interactions, supporting campaign retargeting",
      ],
    },
    {
      type: "work",
      title: "Project Manager",
      company: "Whatsloan",
      period: "Dec 2021 – Aug 2022",
      description: "Managed analytics projects and contributed to platform development for banking solutions.",
      highlights: [
        "Collaborated with stakeholders to define analytics requirements to align solutions with user needs and system capabilities",
        "Built lightweight ETL pipelines to extract data from submissions, transform for consistency, and load into internal dashboards",
        "Used MongoDB and SQL to manage and query backend data for 70+ custom client configurations",
      ],
    },
    {
      type: "education",
      title: "Bachelor of Engineering",
      company: "Dayananda Sagar College of Engineering",
      period: "2017 – 2021",
      description: "GPA: 9.13",
      highlights: [
        "Relevant Courses: Java Programming, Mathematics I-IV, Programming in C++",
      ],
    },
  ];

  const certifications = [
    {
      title: "Google Analytics Individual Qualification",
      issuer: "Google",
      year: "2024",
      link: "https://skillshop.credential.net/b0cbffcf-c0ac-4a01-ad79-c3fc9fb40d9a#acc.qYBZsApv"
    },
    {
      title: "Google Ads Search Certification",
      issuer: "Google Skillshop",
      year: "2025",
      link: "https://skillshop.credential.net/76ad5f27-c0eb-4b28-8bd3-d340215a9796#acc.93sPgZHJ"
    },
    {
      title: "Marketing Analytics Foundation",
      issuer: "Meta",
      year: "2025",
      link: "https://www.coursera.org/account/accomplishments/verify/QUMKHM2PX2Z2"
    },
    {
      title: "Meta Marketing Analytics Professional Certificate",
      issuer: "Meta",
      year: "2024",
      link: "https://www.coursera.org/account/accomplishments/certificate/PD1S0KWHXSKE"
    },
    {
      title: "McKinsey.org Forward Program",
      issuer: "McKinsey & Company",
      year: "2025",
      link: "https://www.credly.com/badges/4a584136-7fff-4464-ba7d-b9a52a2af54d/public_url"
    }
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground">
              Experience & Education
            </h1>
            <p className="text-base text-muted-foreground mt-4">
              My professional journey, academic background, and continuous learning
            </p>
            <div className="mt-6">
              <Button asChild size="lg">
                <a href="https://rajrajeshwarigs.github.io/assets/resume.pdf" download>
                  <FileDown className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
          <div className="mb-16"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  {exp.type === "work" ? (
                    <Briefcase className="h-4 w-4 text-primary-foreground" />
                  ) : (
                    <GraduationCap className="h-4 w-4 text-primary-foreground" />
                  )}
                </div>

                <div className="pb-12">
                  <div className="mb-4">
                    <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-1">
                      {exp.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-2 text-lg text-primary">
                      <span className="font-medium">{exp.company}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements Section */}
          <div className="mt-20">
            <h2 className="font-serif text-3xl font-bold mb-12 text-center text-foreground">
              Academic Achievements
            </h2>
            <div className="space-y-8 mb-20">
              <div className="p-8 rounded-xl bg-card border border-border shadow-soft hover:shadow-medium hover:border-primary/50 transition-smooth">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="w-full md:w-64 flex-shrink-0">
                    <img 
                      src={scholarDistinctionCertificate} 
                      alt="Scholar with High Distinction Certificate" 
                      className="w-full h-48 rounded-lg object-cover border border-border"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground">
                      Scholar with High Distinction Award
                    </h3>
                    <p className="text-primary font-medium mb-2">The University of Texas at Dallas</p>
                    <p className="text-sm text-primary/80 font-medium mb-3">Highest Honor</p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Recognized for exceptional academic achievement and top graduate performance. This prestigious award, the highest honor bestowed by the university, is conferred upon students who demonstrate outstanding academic excellence throughout their graduate studies.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <a href="https://rajrajeshwarigs.github.io/assets/ScholarHighDistinction.pdf" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Certificate
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-xl bg-card border border-border shadow-soft hover:shadow-medium hover:border-primary/50 transition-smooth">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="w-full md:w-64 flex-shrink-0 flex items-center justify-center bg-muted/30 rounded-lg" style={{ height: '12rem' }}>
                    <img 
                      src={utdSeal} 
                      alt="University of Texas at Dallas" 
                      className="w-32 h-32 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground">
                      Dean's Excellence Scholarship Award
                    </h3>
                    <p className="text-primary font-medium mb-3">Naveen Jindal School of Management, UTD</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Awarded the prestigious Dean's Excellence Scholarship by the Naveen Jindal School of Management, recognizing exceptional academic merit and professional experience. This highly competitive scholarship, which includes an out-of-state tuition waiver, is awarded to the most talented international students who demonstrate outstanding academic achievement, strong GRE scores, and significant professional experience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-xl bg-card border border-border shadow-soft hover:shadow-medium hover:border-primary/50 transition-smooth">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="w-full md:w-64 flex-shrink-0">
                    <img 
                      src={deansCouncilPhoto} 
                      alt="Graduate Dean's Council" 
                      className="w-full h-48 rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground">
                      Member of the Graduate Dean's Council
                    </h3>
                    <p className="text-primary font-medium mb-3">Naveen Jindal School of Management, UTD</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Selected to be part of the prestigious Graduate Dean's Council at the Naveen Jindal School of Management, working directly with the department and dean on various initiatives. Key contributions include organizing the 10th OWLIE Awards, a significant event in JSOM's calendar. The council provides valuable exposure and opportunities to work closely with faculty and administration, contributing to the school's continued success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="mt-20">
            <h2 className="font-serif text-3xl font-bold mb-12 text-center text-foreground">
              Certifications
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => {
                const cardClasses = "p-6 rounded-xl bg-card border border-border shadow-soft hover:shadow-medium hover:border-primary/50 transition-smooth animate-fade-in block";
                const cardContent = (
                  <>
                    <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">
                      {cert.title}
                    </h3>
                    <p className="text-primary font-medium mb-1">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground">{cert.year}</p>
                  </>
                );
                
                return cert.link ? (
                  <a
                    key={cert.title}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClasses}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {cardContent}
                  </a>
                ) : (
                  <div
                    key={cert.title}
                    className={cardClasses}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {cardContent}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-20 p-8 rounded-xl bg-card border border-border shadow-soft">
            <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-foreground">SQL Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {["Joins", "CTEs", "Window Functions", "Aggregations", "Subqueries", "Performance Optimization"].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-muted text-sm text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 text-foreground">Programming</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "R", "pandas", "NumPy", "scikit-learn", "matplotlib", "Excel"].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-muted text-sm text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 text-foreground">BI & Analytics</h3>
                <div className="flex flex-wrap gap-2">
                  {["Tableau", "Power BI", "Looker Studio", "Google Analytics", "Adobe Analytics", "Amplitude"].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-muted text-sm text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 text-foreground">Databases & Cloud</h3>
                <div className="flex flex-wrap gap-2">
                  {["MySQL", "PostgreSQL", "SQL Server", "Snowflake", "BigQuery", "MongoDB", "Azure", "GCP"].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-muted text-sm text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Experience;
