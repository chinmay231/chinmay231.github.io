
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Chinmay Kapoor</h1>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection("about")} className="hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection("experience")} className="hover:text-primary transition-colors">Experience</button>
            <button onClick={() => scrollToSection("projects")} className="hover:text-primary transition-colors">Projects</button>
            <button onClick={() => scrollToSection("publications")} className="hover:text-primary transition-colors">Publications</button>
            <button onClick={() => scrollToSection("certifications")} className="hover:text-primary transition-colors">Certifications</button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-primary transition-colors">Contact</button>
          </div>

          {/* Mobile Navigation Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <button onClick={() => scrollToSection("about")} className="block w-full text-left py-2 hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection("experience")} className="block w-full text-left py-2 hover:text-primary transition-colors">Experience</button>
            <button onClick={() => scrollToSection("projects")} className="block w-full text-left py-2 hover:text-primary transition-colors">Projects</button>
            <button onClick={() => scrollToSection("publications")} className="block w-full text-left py-2 hover:text-primary transition-colors">Publications</button>
            <button onClick={() => scrollToSection("certifications")} className="block w-full text-left py-2 hover:text-primary transition-colors">Certifications</button>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left py-2 hover:text-primary transition-colors">Contact</button>
          </div>
        )}
      </div>
    </nav>
  );
};
