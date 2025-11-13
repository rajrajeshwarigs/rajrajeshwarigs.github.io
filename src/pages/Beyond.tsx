import PageLayout from "@/components/PageLayout";
import { Video, Coffee, Dumbbell, UtensilsCrossed, Plane, Heart, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import BeyondBackground from "@/components/BeyondBackground";
import foodLoverImage from "@/assets/food-lover.jpg";
import fitnessImage from "@/assets/fitness.jpg";
import travelImage from "@/assets/travel.jpg";
import vloggerImage from "@/assets/vlogger.jpg";

const Beyond = () => {
  const interests = [
    {
      icon: Video,
      title: "Blogging/Vlogging",
      description: "Sharing stories, experiences, and insights through content creation. Every piece is a window into my journey.",
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/30",
      borderColor: "border-purple-200 dark:border-purple-800",
      image: vloggerImage,
      link: "https://medium.com/@rajrajeshwarigs",
      linkText: "Read my Medium blog",
    },
    {
      icon: UtensilsCrossed,
      title: "Food Lover",
      description: "Exploring culinary delights from around the world. Every dish tells a story and every meal is an adventure.",
      color: "text-pink-600",
      bgColor: "bg-pink-50 dark:bg-pink-950/30",
      borderColor: "border-pink-200 dark:border-pink-800",
      image: foodLoverImage,
      link: "https://medium.com/@rajrajeshwarigs",
      linkText: "Read my Medium blog",
    },
    {
      icon: Dumbbell,
      title: "Fitness & Workout",
      description: "Staying active and healthy through regular workouts. Physical fitness fuels mental clarity and overall wellbeing.",
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
      borderColor: "border-blue-200 dark:border-blue-800",
      image: fitnessImage,
      link: "https://strava.app.link/y4NanYMXFXb",
      linkText: "View my Strava",
    },
    {
      icon: Plane,
      title: "Travel",
      description: "Exploring new places, cultures, and perspectives. Every journey inspires my work in unexpected ways.",
      color: "text-cyan-600",
      bgColor: "bg-cyan-50 dark:bg-cyan-950/30",
      borderColor: "border-cyan-200 dark:border-cyan-800",
      image: travelImage,
      link: "https://medium.com/@rajrajeshwarigs",
      linkText: "Read my Medium blog",
    },
  ];

  return (
    <PageLayout>
      <div className="relative container mx-auto px-6 py-20">
        <BeyondBackground />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-16 animate-fade-in">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-8 text-foreground">
              Beyond Work
            </h1>
            <p className="text-base text-muted-foreground max-w-3xl">
              Life is more than work. Here's what inspires me, keeps me balanced, and reminds me
              why I love what I do.
            </p>
          </div>

          {/* Interests Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {interests.map((interest, index) => (
              <div
                key={interest.title}
                className={`group p-6 rounded-xl ${interest.bgColor} border-2 ${interest.borderColor} shadow-soft hover:shadow-medium transition-smooth animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                {interest.image && (
                  <div className="w-full h-64 rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={interest.image} 
                      alt={interest.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    />
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-3">
                  <interest.icon className={`h-6 w-6 ${interest.color} group-hover:scale-110 transition-smooth`} />
                  <h3 className={`font-serif text-2xl font-semibold ${interest.color}`}>
                    {interest.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {interest.description}
                </p>
                {interest.link && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="gap-2 w-full"
                    onClick={() => window.open(interest.link, '_blank')}
                  >
                    {interest.linkText}
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                )}
              </div>
            ))}
          </div>

          {/* Philosophy Section */}
          <div className="space-y-8">
            <h2 className="font-serif text-3xl font-bold text-center mb-12 text-foreground">
              My Life Philosophy
            </h2>

            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground">
                Hard Work Pays Off
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe that success comes from consistent hard work and dedication. Whether it's analyzing complex datasets, optimizing campaigns, or learning new tools, I approach every challenge with determination and persistence. Hard work isn't just about putting in hours—it's about staying focused, pushing through obstacles, and continuously striving for excellence in everything I do.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground">
                Discipline & Consistency
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Growth doesn't happen by accident—it's the result of discipline and consistency. Every day is an opportunity to learn something new, whether it's experimenting with new analytics techniques, exploring emerging technologies, or challenging myself to step outside my comfort zone. I believe in showing up consistently, building strong habits, and staying committed to continuous improvement. Small, disciplined actions compound into remarkable results over time.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground">
                Give Back
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Life has had many ups and downs, and those challenging moments have shaped who I am today. I've experienced struggles and setbacks that taught me resilience and empathy. That's why I'm passionate about giving back—through mentorship, sharing knowledge, and supporting those who are going through similar challenges. If my experiences and insights can help someone navigate their own difficult times or achieve their goals, then every struggle was worth it. We all rise together.
              </p>
            </div>
          </div>

          {/* Currently Section */}
          <div className="mt-20 p-12 rounded-xl bg-muted/30 border border-border text-center">
            <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">
              Currently Exploring
            </h2>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="px-6 py-3 rounded-full bg-muted text-foreground">
                🤖 AI
              </span>
              <span className="px-6 py-3 rounded-full bg-muted text-foreground">
                🧘 Meditation
              </span>
              <span className="px-6 py-3 rounded-full bg-muted text-foreground">
                🏃 Running
              </span>
              <span className="px-6 py-3 rounded-full bg-muted text-foreground">
                🧩 Puzzles
              </span>
            </div>
            <p className="mt-8 text-muted-foreground max-w-2xl mx-auto">
              Life is an adventure, and I'm always curious about what's around the next corner. 
              These are just a few things keeping me inspired right now.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Beyond;
