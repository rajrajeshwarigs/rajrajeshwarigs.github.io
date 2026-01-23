import { ArrowDown, Mail, Linkedin, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";
import DataBackground from "@/components/DataBackground";
import profileImage from "@/assets/profile-graduation.png";
import { useState, useEffect } from "react";

const Home = () => {
  const roles = ["Data Analyst", "Growth Marketer", "Problem Solver", "Storyteller"];
  const rotatingWords = ["Data enthusiast", "Analyst", "Marketer", "Problem solver", "Engineer"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typingDuration = 2000;
    const pauseDuration = 1500;

    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setIsTyping(true);
      }, 500);
    }, typingDuration + pauseDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <PageLayout>
      <div className="relative min-h-screen flex items-center justify-center">
        <DataBackground />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            {/* Profile Image */}
            <div className="flex justify-center mb-8">
              <div className="w-48 h-48 rounded-full bg-muted border-4 border-background shadow-medium overflow-hidden">
                <img 
                  src={profileImage} 
                  alt="Rajrajeshwari Gangadhar Sangolli"
                  className="w-full h-full object-cover scale-[1.8] object-[center_35%]"
                />
              </div>
            </div>

            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground min-h-[4rem] md:min-h-[5rem] flex items-center justify-center">
              <span className={`transition-opacity duration-500 ${isTyping ? 'opacity-100' : 'opacity-0'}`}>
                {rotatingWords[currentWordIndex]}
              </span>
            </h1>

            <p className="text-2xl md:text-3xl text-foreground/90 flex items-center justify-center gap-3 flex-wrap">
              I'm <span className="font-serif font-semibold text-primary inline-flex items-center gap-2">
                Rajrajeshwari Gangadhar Sangolli
                <button
                  onClick={() => {
                    if (speechSynthesis.speaking) {
                      return;
                    }
                    const utterance = new SpeechSynthesisUtterance("Rajrajeshwari Gangadhar Sangolli");
                    utterance.rate = 0.8;
                    utterance.pitch = 1;
                    speechSynthesis.speak(utterance);
                  }}
                  className="inline-flex items-center justify-center p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                  aria-label="Hear pronunciation of name"
                >
                  <Volume2 className="h-5 w-5 text-primary" />
                </button>
              </span>
            </p>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Data Analyst and Scientist with 4+ years of experience transforming complex datasets into strategic business insights. Expert in SQL, Python, and statistical modeling with proven expertise in building predictive models, conducting A/B testing, and engineering data pipelines that process millions of records. Specialized in data analytics, applied machine learning, digital marketing performance, and advertising optimization—leveraging advanced analytics to improve ROI, maximize conversion rates, and drive customer acquisition through data-driven decision making.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Button asChild size="lg">
                <a href="mailto:rajrajeshwarigangadhar98@gmail.com?subject=Let's%20Connect%20-%20Inquiry%20from%20Portfolio">
                  <Mail className="mr-2 h-5 w-5" />
                  Drop an Email
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="https://www.linkedin.com/in/rajrajeshwarigs/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  Let's Connect
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/experience">
                  Resume
                </Link>
              </Button>
            </div>

            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-2">Know more</p>
              <ArrowDown className="mx-auto h-5 w-5 text-foreground/50" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: 'hsl(var(--marketing-purple))' }}>
            Explore My Profile
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { to: "/about", title: "About Me", description: "My story and passions" },
              { to: "/experience", title: "Experience", description: "Professional journey" },
              { to: "/projects", title: "Projects", description: "Creative portfolio" },
              { to: "/beyond", title: "Beyond Work", description: "Life outside code" },
            ].map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                className="group p-8 rounded-xl bg-card border border-border shadow-soft hover:shadow-medium transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground group-hover:text-primary transition-smooth">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
