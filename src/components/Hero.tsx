
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Book } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20 pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Chinmay Kapoor
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
            Data Scientist & ML Engineer
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
            Specializing in AI-driven solutions, cloud architectures, and data engineering. 
            Currently driving business development and technical evangelism for Swiss Vault's 
            hybrid storage solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <Button onClick={() => scrollToSection("projects")} size="lg">
              View My Work
            </Button>
            <Button onClick={() => scrollToSection("contact")} variant="outline" size="lg">
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a 
              href="https://www.linkedin.com/in/chinmay-kapoor-b67344200" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://github.com/chinmay231" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://medium.com/@kapoorchinmay231"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Book className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
