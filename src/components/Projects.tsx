
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Wriaic",
      description: "LLM powered web-app under development to automate the generation of structured technical documents and tutorial content.",
      status: "In Progress",
      githubUrl: "https://github.com/chinmay231/Wriaic",
      tech: ["LLM", "Web Development", "Content Generation"]
    },
    {
      title: "COMPIO",
      description: "Web-app built to automate the collection, structuring, and summarization of public company information, enabling financial profiling and benchmarking.",
      status: "Completed",
      githubUrl: "https://github.com/chinmay231/Compio",
      tech: ["FastAPI", "Gemini 2.0", "Financial APIs", "RAG"]
    },
    {
      title: "SVSI - Swiss Vault Storage Intelligence",
      description: "Local Intelligence system built to enable on-prem, API-driven interaction with LLMs and structured files stored on VaultFS.",
      status: "Completed",
      tech: ["Streamlit", "Llama3.2", "Edge Computing", "VaultFS"]
    },
    {
      title: "Imagilect",
      description: "System built to run frame-by-frame image segmentation and object detection on video data stored in VaultFS.",
      status: "Completed",
      tech: ["Computer Vision", "ResNet50", "Video Processing", "Edge AI"]
    },
    {
      title: "Multi-Model Object Detection Pipeline",
      description: "Edge-based pipeline developed to demonstrate simultaneous object detection and image classification using YOLO and ResNet50.",
      status: "Completed",
      tech: ["YOLO", "ResNet50", "Edge Computing", "Object Detection"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded ${
                      project.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {project.status}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.githubUrl && (
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        asChild
                        className="flex-1"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
