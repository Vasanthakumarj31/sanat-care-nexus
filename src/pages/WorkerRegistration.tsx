import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { UserPlus, Upload, CheckCircle } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import { useToast } from "@/hooks/use-toast";

const WorkerRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    nationality: "",
    passportNumber: "",
    phone: "",
    email: "",
    emergencyContact: "",
    currentAddress: "",
    medicalHistory: "",
    allergies: "",
    currentMedications: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would normally submit to Supabase
    setIsSubmitted(true);
    toast({
      title: "Registration Successful",
      description: "Worker profile created successfully. Digital ID generated.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-4xl mx-auto">
          <Navigation />
          <Card className="text-center p-8">
            <CheckCircle className="w-16 h-16 mx-auto text-success mb-4" />
            <CardTitle className="text-2xl mb-2">Registration Complete!</CardTitle>
            <CardDescription className="text-lg mb-4">
              Your digital health ID has been created: <Badge variant="outline" className="ml-2">WID-2024-001</Badge>
            </CardDescription>
            <p className="text-muted-foreground mb-6">
              You can now access healthcare services at any participating hospital or clinic.
            </p>
            <Button onClick={() => setIsSubmitted(false)}>Register Another Worker</Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <Navigation />
        
        <Card>
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <UserPlus className="w-8 h-8 text-primary" />
              <CardTitle className="text-3xl">Migrant Worker Registration</CardTitle>
            </div>
            <CardDescription className="text-lg">
              Create your secure digital health profile for cross-border healthcare access
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="nationality">Nationality *</Label>
                    <Select onValueChange={(value) => handleInputChange("nationality", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select nationality" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bangladesh">Bangladesh</SelectItem>
                        <SelectItem value="india">India</SelectItem>
                        <SelectItem value="nepal">Nepal</SelectItem>
                        <SelectItem value="pakistan">Pakistan</SelectItem>
                        <SelectItem value="philippines">Philippines</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="passportNumber">Passport Number *</Label>
                    <Input
                      id="passportNumber"
                      value={formData.passportNumber}
                      onChange={(e) => handleInputChange("passportNumber", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">Contact Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="emergencyContact">Emergency Contact *</Label>
                    <Input
                      id="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                      placeholder="Name and phone number"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="currentAddress">Current Address *</Label>
                  <Textarea
                    id="currentAddress"
                    value={formData.currentAddress}
                    onChange={(e) => handleInputChange("currentAddress", e.target.value)}
                    rows={3}
                    required
                  />
                </div>
              </div>

              {/* Medical Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">Medical Information</h3>
                <div>
                  <Label htmlFor="medicalHistory">Medical History</Label>
                  <Textarea
                    id="medicalHistory"
                    value={formData.medicalHistory}
                    onChange={(e) => handleInputChange("medicalHistory", e.target.value)}
                    placeholder="Previous surgeries, chronic conditions, etc."
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="allergies">Known Allergies</Label>
                  <Textarea
                    id="allergies"
                    value={formData.allergies}
                    onChange={(e) => handleInputChange("allergies", e.target.value)}
                    placeholder="Food allergies, drug allergies, etc."
                    rows={2}
                  />
                </div>
                <div>
                  <Label htmlFor="currentMedications">Current Medications</Label>
                  <Textarea
                    id="currentMedications"
                    value={formData.currentMedications}
                    onChange={(e) => handleInputChange("currentMedications", e.target.value)}
                    placeholder="List all current medications and dosages"
                    rows={3}
                  />
                </div>
              </div>

              {/* Document Upload Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">Document Upload</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Upload className="w-5 h-5" />
                      <Label>Passport Copy *</Label>
                    </div>
                    <Button variant="outline" className="w-full">
                      Upload Passport
                    </Button>
                  </Card>
                  <Card className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Upload className="w-5 h-5" />
                      <Label>Medical Reports</Label>
                    </div>
                    <Button variant="outline" className="w-full">
                      Upload Reports
                    </Button>
                  </Card>
                </div>
              </div>

              <div className="pt-6">
                <Button type="submit" className="w-full text-lg py-6">
                  <UserPlus className="w-5 h-5 mr-2" />
                  Complete Registration
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WorkerRegistration;