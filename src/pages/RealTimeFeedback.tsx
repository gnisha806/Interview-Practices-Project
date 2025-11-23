import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MessageSquare, Zap, Target, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RealTimeFeedback = () => {
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
              <MessageSquare className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Real-Time Feedback
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get instant analysis and feedback on your responses as you practice. 
              Our AI evaluates your answers in real-time to help you improve immediately.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="shadow-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Instant Analysis</CardTitle>
                <CardDescription>
                  Receive immediate feedback on communication clarity, confidence, and content quality
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-secondary flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Targeted Improvements</CardTitle>
                <CardDescription>
                  Get specific suggestions on how to enhance your answers and communication style
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Card className="shadow-card mb-8">
            <CardHeader>
              <CardTitle>Feedback Metrics</CardTitle>
              <CardDescription>
                Our AI analyzes multiple aspects of your interview performance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Communication Clarity</h3>
                  <p className="text-muted-foreground text-sm">
                    How well you articulate your thoughts and ideas
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Technical Accuracy</h3>
                  <p className="text-muted-foreground text-sm">
                    Correctness and depth of your technical knowledge
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Confidence Level</h3>
                  <p className="text-muted-foreground text-sm">
                    Your presentation confidence and body language cues
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Relevance & Structure</h3>
                  <p className="text-muted-foreground text-sm">
                    How well your answers address the question using proper structure
                  </p>
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
              Try It Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTimeFeedback;
