import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Download, Upload, Calendar, Pill, Activity, AlertTriangle } from "lucide-react";
import Navigation from "@/components/ui/navigation";

const HealthRecords = () => {
  const [workerId, setWorkerId] = useState("WID-2024-001");

  // Mock health record data
  const healthRecords = {
    personal: {
      name: "Ahmad Rahman",
      id: "WID-2024-001",
      age: 28,
      nationality: "Bangladesh",
      bloodType: "B+",
      emergencyContact: "Fatima Rahman - +880123456789"
    },
    visits: [
      {
        date: "2024-01-15",
        provider: "City General Hospital",
        doctor: "Dr. Smith",
        diagnosis: "Routine Health Checkup",
        treatment: "Blood pressure monitoring, general examination",
        notes: "Patient in good health, continue current medication"
      },
      {
        date: "2024-01-01",
        provider: "Emergency Clinic",
        doctor: "Dr. Johnson",
        diagnosis: "Hypertension Follow-up",
        treatment: "Blood pressure medication adjustment",
        notes: "BP: 140/90, medication dosage increased"
      }
    ],
    medications: [
      { name: "Lisinopril", dosage: "10mg daily", prescribed: "2024-01-01", prescriber: "Dr. Johnson" },
      { name: "Metformin", dosage: "500mg twice daily", prescribed: "2023-12-15", prescriber: "Dr. Lee" }
    ],
    allergies: [
      { allergen: "Penicillin", severity: "Severe", reaction: "Anaphylaxis" },
      { allergen: "Shellfish", severity: "Moderate", reaction: "Hives, swelling" }
    ],
    vaccinations: [
      { vaccine: "Hepatitis B", date: "2024-01-10", provider: "City Health Center" },
      { vaccine: "Tetanus", date: "2023-11-20", provider: "Immigration Health Service" },
      { vaccine: "COVID-19 Booster", date: "2023-10-15", provider: "Community Clinic" }
    ],
    documents: [
      { name: "Blood Test Results", date: "2024-01-15", type: "Lab Report" },
      { name: "Chest X-Ray", date: "2024-01-10", type: "Imaging" },
      { name: "Vaccination Certificate", date: "2024-01-10", type: "Certificate" }
    ]
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto">
        <Navigation />
        
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-primary mb-2">Digital Health Records</h1>
          <p className="text-muted-foreground">Comprehensive medical history and documents</p>
        </div>

        {/* Worker ID Search */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex gap-4 items-end">
              <div className="flex-1">
                <label className="text-sm font-medium">Worker ID</label>
                <Input
                  value={workerId}
                  onChange={(e) => setWorkerId(e.target.value)}
                  placeholder="Enter Worker ID"
                />
              </div>
              <Button>Load Records</Button>
            </div>
          </CardContent>
        </Card>

        {/* Patient Header */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold">{healthRecords.personal.name}</h2>
                <p className="text-muted-foreground">ID: {healthRecords.personal.id}</p>
              </div>
              <Badge variant="outline" className="text-lg px-4 py-2">
                Blood Type: {healthRecords.personal.bloodType}
              </Badge>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <span className="text-sm font-medium">Age:</span> {healthRecords.personal.age}
              </div>
              <div>
                <span className="text-sm font-medium">Nationality:</span> {healthRecords.personal.nationality}
              </div>
              <div>
                <span className="text-sm font-medium">Emergency Contact:</span> {healthRecords.personal.emergencyContact}
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="visits" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="visits">Medical Visits</TabsTrigger>
            <TabsTrigger value="medications">Medications</TabsTrigger>
            <TabsTrigger value="allergies">Allergies</TabsTrigger>
            <TabsTrigger value="vaccinations">Vaccinations</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>

          <TabsContent value="visits" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Medical Visit History</h3>
              <Button>
                <Calendar className="w-4 h-4 mr-2" />
                Add New Visit
              </Button>
            </div>
            {healthRecords.visits.map((visit, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between">
                    <CardTitle className="text-lg">{visit.diagnosis}</CardTitle>
                    <Badge variant="outline">{visit.date}</Badge>
                  </div>
                  <CardDescription>{visit.provider} - {visit.doctor}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <span className="font-medium">Treatment:</span> {visit.treatment}
                    </div>
                    <div>
                      <span className="font-medium">Notes:</span> {visit.notes}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="medications" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Current Medications</h3>
              <Button>
                <Pill className="w-4 h-4 mr-2" />
                Add Medication
              </Button>
            </div>
            {healthRecords.medications.map((med, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-lg">{med.name}</h4>
                      <p className="text-muted-foreground">Dosage: {med.dosage}</p>
                      <p className="text-sm">Prescribed by: {med.prescriber}</p>
                    </div>
                    <Badge variant="outline">{med.prescribed}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="allergies" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Known Allergies</h3>
              <Button variant="destructive">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Add Allergy
              </Button>
            </div>
            {healthRecords.allergies.map((allergy, index) => (
              <Card key={index} className="border-destructive">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-lg flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-destructive" />
                        {allergy.allergen}
                      </h4>
                      <p className="text-muted-foreground">Reaction: {allergy.reaction}</p>
                    </div>
                    <Badge variant="destructive">{allergy.severity}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="vaccinations" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Vaccination History</h3>
              <Button variant="secondary">
                <Activity className="w-4 h-4 mr-2" />
                Add Vaccination
              </Button>
            </div>
            {healthRecords.vaccinations.map((vax, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-lg">{vax.vaccine}</h4>
                      <p className="text-muted-foreground">Provider: {vax.provider}</p>
                    </div>
                    <Badge variant="secondary">{vax.date}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="documents" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Medical Documents</h3>
              <Button>
                <Upload className="w-4 h-4 mr-2" />
                Upload Document
              </Button>
            </div>
            {healthRecords.documents.map((doc, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-primary" />
                      <div>
                        <h4 className="font-semibold">{doc.name}</h4>
                        <p className="text-sm text-muted-foreground">{doc.type} - {doc.date}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default HealthRecords;