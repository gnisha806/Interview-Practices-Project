import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, Calendar, FileText, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TrackProgress = () => {
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
            <div className="w-20 h-20 rounded-2xl bg-gradient-secondary flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Track Progress
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Monitor your improvement over time with detailed analytics and historical data. 
              See how your interview skills evolve with every practice session.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="shadow-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Interview History</CardTitle>
                <CardDescription>
                  Access all your past practice sessions
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-secondary flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Performance Trends</CardTitle>
                <CardDescription>
                  Visual charts showing your improvement
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <CardTitle>PDF Reports</CardTitle>
                <CardDescription>
                  Download detailed reports for review
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Card className="shadow-card mb-8">
            <CardHeader>
              <CardTitle>What You Can Track</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Score Evolution</h3>
                  <p className="text-muted-foreground text-sm">
                    Watch your scores improve across all evaluation metrics over time
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-secondary flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Role-Specific Progress</h3>
                  <p className="text-muted-foreground text-sm">
                    Track improvements separately for each role you practice
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Skill Development</h3>
                  <p className="text-muted-foreground text-sm">
                    Identify which skills are improving and which need more focus
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-secondary flex items-center justify-center text-white font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Historical Comparisons</h3>
                  <p className="text-muted-foreground text-sm">
                    Compare your latest performance with previous sessions
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card mb-8 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                <CardTitle>Sample Progress Report</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">12</div>
                  <div className="text-sm text-muted-foreground">Interviews</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-1">+2.3</div>
                  <div className="text-sm text-muted-foreground">Avg. Score Increase</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">85%</div>
                  <div className="text-sm text-muted-foreground">Improvement Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button 
              size="lg"
              onClick={() => navigate("/")}
              className="bg-gradient-primary hover:shadow-hover transition-all duration-300"
            >
              Start Tracking Your Progress
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackProgress;
