import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, User, FileText, Calendar, AlertCircle, CheckCircle, Clock } from "lucide-react";
import Navigation from "@/components/ui/navigation";

const ProviderDashboard = () => {
  const [searchId, setSearchId] = useState("");
  const [selectedWorker, setSelectedWorker] = useState<any>(null);

  // Mock data for demonstration
  const mockWorkers = [
    {
      id: "WID-2024-001",
      name: "Ahmad Rahman",
      nationality: "Bangladesh",
      age: 28,
      lastVisit: "2024-01-15",
      status: "active",
      allergies: ["Penicillin"],
      conditions: ["Hypertension"],
      emergencyContact: "Fatima Rahman - +880123456789"
    },
    {
      id: "WID-2024-002", 
      name: "Raj Patel",
      nationality: "India",
      age: 32,
      lastVisit: "2024-01-10",
      status: "active",
      allergies: ["None known"],
      conditions: ["Diabetes Type 2"],
      emergencyContact: "Priya Patel - +91987654321"
    }
  ];

  const recentVisits = [
    { id: "WID-2024-001", name: "Ahmad Rahman", date: "2024-01-15", diagnosis: "Routine Checkup", provider: "Dr. Smith" },
    { id: "WID-2024-002", name: "Raj Patel", date: "2024-01-10", diagnosis: "Diabetes Follow-up", provider: "Dr. Johnson" },
  ];

  const handleSearch = () => {
    const worker = mockWorkers.find(w => w.id === searchId);
    setSelectedWorker(worker);
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto">
        <Navigation />
        
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-primary mb-2">Healthcare Provider Dashboard</h1>
          <p className="text-muted-foreground">Access and manage migrant worker health records securely</p>
        </div>

        <Tabs defaultValue="search" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="search">Patient Search</TabsTrigger>
            <TabsTrigger value="recent">Recent Visits</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
            <TabsTrigger value="statistics">Statistics</TabsTrigger>
          </TabsList>

          <TabsContent value="search" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  Patient Search
                </CardTitle>
                <CardDescription>
                  Enter worker ID to access their digital health records
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-4">
                  <div className="flex-1">
                    <Label htmlFor="workerId">Worker ID</Label>
                    <Input
                      id="workerId"
                      placeholder="WID-2024-001"
                      value={searchId}
                      onChange={(e) => setSearchId(e.target.value)}
                    />
                  </div>
                  <div className="flex items-end">
                    <Button onClick={handleSearch}>
                      <Search className="w-4 h-4 mr-2" />
                      Search
                    </Button>
                  </div>
                </div>

                {selectedWorker && (
                  <Card className="mt-6">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-2">
                          <User className="w-5 h-5" />
                          {selectedWorker.name}
                        </CardTitle>
                        <Badge variant={selectedWorker.status === "active" ? "default" : "secondary"}>
                          {selectedWorker.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <Label className="text-sm font-semibold">Worker ID</Label>
                          <p className="text-sm">{selectedWorker.id}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-semibold">Nationality</Label>
                          <p className="text-sm">{selectedWorker.nationality}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-semibold">Age</Label>
                          <p className="text-sm">{selectedWorker.age}</p>
                        </div>
                      </div>
                      
                      <div>
                        <Label className="text-sm font-semibold">Known Allergies</Label>
                        <div className="flex gap-2 mt-1">
                          {selectedWorker.allergies.map((allergy: string, index: number) => (
                            <Badge key={index} variant="destructive" className="text-xs">
                              {allergy}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <Label className="text-sm font-semibold">Medical Conditions</Label>
                        <div className="flex gap-2 mt-1">
                          {selectedWorker.conditions.map((condition: string, index: number) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {condition}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <Label className="text-sm font-semibold">Emergency Contact</Label>
                        <p className="text-sm">{selectedWorker.emergencyContact}</p>
                      </div>

                      <div className="flex gap-2 pt-4">
                        <Button className="flex-1">
                          <FileText className="w-4 h-4 mr-2" />
                          View Full Records
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Calendar className="w-4 h-4 mr-2" />
                          Add Visit
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recent" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Recent Patient Visits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentVisits.map((visit, index) => (
                    <Card key={index} className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold">{visit.name}</h4>
                          <p className="text-sm text-muted-foreground">ID: {visit.id}</p>
                          <p className="text-sm">{visit.diagnosis}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">{visit.date}</p>
                          <p className="text-sm text-muted-foreground">{visit.provider}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="alerts" className="space-y-6">
            <div className="grid gap-4">
              <Card className="border-warning">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-warning" />
                    <div>
                      <h4 className="font-semibold">Medication Alert</h4>
                      <p className="text-sm text-muted-foreground">
                        Patient WID-2024-002 has missed diabetes medication for 2 days
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-success">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <div>
                      <h4 className="font-semibold">Vaccination Complete</h4>
                      <p className="text-sm text-muted-foreground">
                        Patient WID-2024-001 completed hepatitis vaccination series
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="statistics" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">156</CardTitle>
                  <CardDescription>Total Registered Workers</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">23</CardTitle>
                  <CardDescription>Visits This Week</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">5</CardTitle>
                  <CardDescription>Active Alerts</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProviderDashboard;