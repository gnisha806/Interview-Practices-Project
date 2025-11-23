import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Briefcase, ShoppingBag, Users, TrendingUp, BarChart, Code } from "lucide-react";

interface RoleSelectionProps {
  onRoleSelect: (role: string) => void;
  onBack: () => void;
}

const roles = [
  { id: "software-engineer", name: "Software Engineer", icon: Code },
  { id: "sales", name: "Sales Executive", icon: TrendingUp },
  { id: "retail", name: "Retail Associate", icon: ShoppingBag },
  { id: "hr", name: "HR Professional", icon: Users },
  { id: "marketing", name: "Marketing Specialist", icon: Briefcase },
  { id: "data-analyst", name: "Data Analyst", icon: BarChart },
];

const RoleSelection = ({ onRoleSelect, onBack }: RoleSelectionProps) => {
  const [customRole, setCustomRole] = useState("");
  const [showCustomInput, setShowCustomInput] = useState(false);

  const handleRoleClick = (roleName: string) => {
    onRoleSelect(roleName);
  };

  const handleCustomSubmit = () => {
    if (customRole.trim()) {
      onRoleSelect(customRole);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Select Your Interview Role</h1>
            <p className="text-muted-foreground text-lg">
              Choose a role to practice for, or enter your own
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {roles.map((role) => {
              const Icon = role.icon;
              return (
                <Card
                  key={role.id}
                  className="p-6 cursor-pointer hover:shadow-hover transition-all duration-300 group"
                  onClick={() => handleRoleClick(role.name)}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">{role.name}</h3>
                </Card>
              );
            })}
          </div>

          <Card className="p-6">
            {!showCustomInput ? (
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setShowCustomInput(true)}
              >
                Enter Custom Role
              </Button>
            ) : (
              <div className="space-y-4">
                <Input
                  placeholder="e.g., Product Manager, UX Designer..."
                  value={customRole}
                  onChange={(e) => setCustomRole(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleCustomSubmit()}
                  autoFocus
                />
                <div className="flex gap-3">
                  <Button
                    onClick={handleCustomSubmit}
                    disabled={!customRole.trim()}
                    className="flex-1 bg-gradient-primary"
                  >
                    Start Interview
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setShowCustomInput(false);
                      setCustomRole("");
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
