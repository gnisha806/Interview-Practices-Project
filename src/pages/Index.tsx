import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Briefcase, MessageSquare, Award, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import RoleSelection from "@/components/RoleSelection";
import InterviewSession from "@/components/InterviewSession";

const Index = () => {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState<"home" | "roles" | "interview">("home");
  const [selectedRole, setSelectedRole] = useState<string>("");

  const handleStartInterview = () => {
    setCurrentView("roles");
  };

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    setCurrentView("interview");
  };

  const handleBackToHome = () => {
    setCurrentView("home");
    setSelectedRole("");
  };

  if (currentView === "interview") {
    return <InterviewSession role={selectedRole} onBack={handleBackToHome} />;
  }

  if (currentView === "roles") {
    return <RoleSelection onRoleSelect={handleRoleSelect} onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-5" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Master Your Interview Skills
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Practice with our AI-powered interviewer. Get realistic questions, instant feedback, 
              and personalized improvement plans.
            </p>
            <Button 
              size="lg" 
              onClick={handleStartInterview}
              className="bg-gradient-primary hover:shadow-hover transition-all duration-300 text-lg px-8 py-6 h-auto"
            >
              Start Practice Interview
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card 
              className="p-6 shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer"
              onClick={() => navigate("/role-specific-questions")}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Role-Specific Questions</h3>
              <p className="text-muted-foreground text-sm">
                Tailored questions for your target role
              </p>
            </Card>

            <Card 
              className="p-6 shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer"
              onClick={() => navigate("/real-time-feedback")}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-secondary flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Real-Time Feedback</h3>
              <p className="text-muted-foreground text-sm">
                Instant analysis of your responses
              </p>
            </Card>

            <Card 
              className="p-6 shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer"
              onClick={() => navigate("/detailed-scoring")}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Detailed Scoring</h3>
              <p className="text-muted-foreground text-sm">
                Comprehensive evaluation metrics
              </p>
            </Card>

            <Card 
              className="p-6 shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer"
              onClick={() => navigate("/track-progress")}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-secondary flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Track Progress</h3>
              <p className="text-muted-foreground text-sm">
                Monitor improvement over time
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              How It Works
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Choose Your Role</h3>
                  <p className="text-muted-foreground">
                    Select from popular job roles or enter a custom position
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-secondary flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Practice Interview</h3>
                  <p className="text-muted-foreground">
                    Answer AI-generated questions via chat or voice
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Get Feedback</h3>
                  <p className="text-muted-foreground">
                    Receive detailed analysis with strengths, weaknesses, and improvement tips
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
