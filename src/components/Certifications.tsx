
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";

export const Certifications = () => {
  const certifications = [
    {
      title: "Financial Portfolio Management Fundamentals",
      issuer: "LinkedIn Learning",
      date: "Apr 2025",
      skills: ["Portfolio Management", "Financial Management"],
      image: "/lovable-uploads/3f93434d-2a62-4c87-ba2f-375285e942e7.png"
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte",
      date: "Apr 2025",
      skills: ["Data analysis", "Forensic technology"],
      image: "/lovable-uploads/5aaa77e0-288d-47a7-8fdc-a18c99b68dfd.png"
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Certifications</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video w-full bg-muted/30 p-4">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    {cert.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground mb-4">{cert.date}</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-2 py-1 bg-muted text-sm rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
