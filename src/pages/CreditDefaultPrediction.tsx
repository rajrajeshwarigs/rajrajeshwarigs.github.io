import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Brain, BarChart, TrendingUp, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CreditDefaultPrediction = () => {
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
            <span className="text-sm text-primary font-medium">Applied Machine Learning</span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-foreground mt-2">
              Credit Default Prediction
            </h1>
            <p className="text-lg text-muted-foreground">
              Aug 2024 – Dec 2024
            </p>
          </div>

          <div className="space-y-12">
            {/* Overview */}
            <section className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Built comprehensive ML models (Logistic Regression, Random Forest, XGBoost, LightGBM) on a massive 1.1 million-row dataset with 190 features, achieving 88.8% accuracy. Successfully addressed a challenging 75:25 class imbalance using SMOTE and stabilized results with 5-fold Stratified Cross-Validation. Tuned hyperparameters via GridSearchCV to optimize predictive performance.
              </p>
            </section>

            {/* Model Performance */}
            <section className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Model Performance</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl bg-card border border-border shadow-soft text-center">
                  <TrendingUp className="h-10 w-10 text-primary mb-4 mx-auto" />
                  <h3 className="font-bold text-4xl mb-2 text-foreground">88.8%</h3>
                  <p className="text-muted-foreground">Accuracy</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border shadow-soft text-center">
                  <BarChart className="h-10 w-10 text-primary mb-4 mx-auto" />
                  <h3 className="font-bold text-4xl mb-2 text-foreground">1.1M</h3>
                  <p className="text-muted-foreground">Data Points</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border shadow-soft text-center">
                  <Brain className="h-10 w-10 text-primary mb-4 mx-auto" />
                  <h3 className="font-bold text-4xl mb-2 text-foreground">190</h3>
                  <p className="text-muted-foreground">Features</p>
                </div>
              </div>
            </section>

            {/* Technologies */}
            <section className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Technologies & Techniques</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-card border border-border shadow-soft">
                  <Brain className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-semibold text-xl mb-3 text-foreground">Machine Learning Models</h3>
                  <p className="text-muted-foreground mb-3">Multiple algorithms compared for optimal performance</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-muted text-xs text-foreground">Logistic Regression</span>
                    <span className="px-3 py-1 rounded-full bg-muted text-xs text-foreground">Random Forest</span>
                    <span className="px-3 py-1 rounded-full bg-muted text-xs text-foreground">XGBoost</span>
                    <span className="px-3 py-1 rounded-full bg-muted text-xs text-foreground">LightGBM</span>
                  </div>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border shadow-soft">
                  <BarChart className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-semibold text-xl mb-3 text-foreground">Data Handling</h3>
                  <p className="text-muted-foreground mb-3">Advanced techniques for imbalanced datasets</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-muted text-xs text-foreground">SMOTE</span>
                    <span className="px-3 py-1 rounded-full bg-muted text-xs text-foreground">Cross-Validation</span>
                    <span className="px-3 py-1 rounded-full bg-muted text-xs text-foreground">GridSearchCV</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Features */}
            <section className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Key Achievements</h2>
              <div className="space-y-4">
                {[
                  "Achieved 88.8% accuracy on a complex credit default prediction task",
                  "Successfully handled 1.1 million rows with 190 features efficiently",
                  "Addressed 75:25 class imbalance using SMOTE technique",
                  "Implemented 5-fold Stratified Cross-Validation for robust results",
                  "Optimized hyperparameters using GridSearchCV for best performance",
                  "Compared multiple ML algorithms to select the most effective model",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-muted/30"
                  >
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Impact */}
            <section className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Business Impact</h2>
              <div className="p-6 rounded-xl bg-card border border-border">
                <p className="text-muted-foreground leading-relaxed">
                  This project demonstrates advanced machine learning capabilities in financial risk assessment. The high accuracy achieved on a large, imbalanced dataset shows proficiency in handling real-world data challenges. The model can help financial institutions make more informed lending decisions, reduce default rates, and optimize risk management strategies. The rigorous cross-validation and hyperparameter tuning ensure the model's reliability in production environments.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="flex gap-4 pt-8">
              <Button asChild>
                <Link to="/projects">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Projects
                </Link>
              </Button>
              <Button asChild variant="outline">
                <a href="mailto:rajrajeshwarigangadhar98@gmail.com?subject=Inquiry%20About%20Credit%20Default%20Prediction%20Project">
                  Discuss This Project
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CreditDefaultPrediction;
