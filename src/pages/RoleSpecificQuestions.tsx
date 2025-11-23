import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Briefcase, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RoleSpecificQuestions = () => {
  const navigate = useNavigate();

  const roles = [
    "Software Engineer",
    "Sales Executive",
    "Retail Associate",
    "HR Manager",
    "Marketing Specialist",
    "Data Analyst"
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Role-Specific Questions
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get tailored interview questions designed specifically for your target role. 
              Our AI understands the unique requirements of each position.
            </p>
          </div>

          <Card className="mb-8 shadow-card">
            <CardHeader>
              <CardTitle>Available Roles</CardTitle>
              <CardDescription>
                We provide specialized question banks for the following roles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {roles.map((role) => (
                  <div key={role} className="flex items-center gap-3 p-4 rounded-lg bg-muted/30">
                    <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">{role}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>What You'll Get</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-secondary flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Technical Questions</h3>
                  <p className="text-muted-foreground text-sm">
                    Role-specific technical questions that match real interview scenarios
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-secondary flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Behavioral Questions</h3>
                  <p className="text-muted-foreground text-sm">
                    STAR-method based questions to showcase your experience
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-secondary flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Scenario-Based Questions</h3>
                  <p className="text-muted-foreground text-sm">
                    Real-world scenarios to test your problem-solving abilities
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <Button 
              size="lg"
              onClick={() => navigate("/")}
              className="bg-gradient-primary hover:shadow-hover transition-all duration-300"
            >
              Start Practice Interview
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleSpecificQuestions;
