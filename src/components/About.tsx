
import { Button } from "@/components/ui/button";
import { Github, Linkedin, ArrowRight, FileText, BookOpen } from "lucide-react";

export const About = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1">
            <div className="w-64 h-64 mx-auto rounded-lg overflow-hidden shadow-lg p-4 bg-card">
              <img 
                src="/lovable-uploads/f44426a7-9387-4ef4-847d-c0521ca193c4.png" 
                alt="Chinmay Kapoor"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground mb-6">
              A passionate Data Scientist with a Master's in Electrical & Computer Engineering from the University of Victoria and a Bachelor's in Computer Science. I specialize in leveraging data to drive business insights and build intelligent systems. With experience across the full data lifecycle from ingestion and modeling to deployment and visualization, I thrive on solving complex problems and continuously learning new technologies. My background spans cloud platforms like Azure and AWS, big data technologies like Spark, and cutting-edge machine learning and LLM applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => scrollToSection("projects")}>
                View My Work <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              <Button variant="outline" onClick={() => scrollToSection("contact")}>
                Get In Touch
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/chinmay-kapoor-b67344200" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/chinmay231" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://medium.com/@kapoorchinmay231" target="_blank" rel="noopener noreferrer" aria-label="Medium Blog">
                  <BookOpen className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

