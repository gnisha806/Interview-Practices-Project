import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Award, BarChart3, CheckCircle, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DetailedScoring = () => {
  const navigate = useNavigate();

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
              <Award className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Detailed Scoring
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Receive comprehensive evaluation metrics with detailed breakdowns of your performance. 
              Understand exactly where you excel and where you can improve.
            </p>
          </div>

          <Card className="shadow-card mb-8">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-gradient-secondary flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Score Breakdown (1-10 Scale)</CardTitle>
              <CardDescription>
                Each interview is evaluated across multiple dimensions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Overall Score</h4>
                  <span className="text-2xl font-bold text-primary">8.5</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full" style={{width: "85%"}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Communication Clarity</h4>
                  <span className="text-xl font-semibold">9.0</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-secondary h-2 rounded-full" style={{width: "90%"}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Technical Accuracy</h4>
                  <span className="text-xl font-semibold">8.0</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full" style={{width: "80%"}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Confidence Level</h4>
                  <span className="text-xl font-semibold">8.5</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-secondary h-2 rounded-full" style={{width: "85%"}}></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <CardTitle>Strengths</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Clear and concise communication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Strong technical knowledge demonstration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Good use of real-world examples</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <XCircle className="w-6 h-6 text-destructive" />
                  <CardTitle>Areas for Improvement</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Add more specific metrics to answers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Practice STAR method for behavioral questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Elaborate more on problem-solving process</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              onClick={() => navigate("/")}
              className="bg-gradient-primary hover:shadow-hover transition-all duration-300"
            >
              Start Your Evaluation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedScoring;
