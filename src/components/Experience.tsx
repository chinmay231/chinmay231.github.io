
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Experience = () => {
  const experiences = [
    {
      title: "Data Scientist",
      company: "Swissvault Global",
      location: "Victoria, BC",
      period: "Aug 2024 - Present (Full-time), Jan 2024 - Aug 2024 (Co-op)",
      highlights: [
        "Drove business development & technical evangelism for Swiss Vault's AI-driven hybrid storage solutions at Web Summit & Vancouver Startup Week",
        "Built COMPIO, a FastAPI web application integrating Gemini 2.0 Flash for automated company profiling with Crunchbase and Twelve Data APIs",
        "Configured and deployed Microsoft Fabric (F64 SKU) environment for genomics analytics pipeline handling 800TB+ data",
        "Developed SwissVault Storage Intelligence (SVSI) with Streamlit and Llama3.2 3B Model running entirely on Edge Devices",
        "Maintained weekly automated Power BI dashboards using Grafana and Prometheus, reducing data latency incidents by 30%"
      ]
    },
    {
      title: "Research Assistant (ML Team Lead)",
      company: "SOLIDS Lab, UVIC",
      location: "Victoria, BC", 
      period: "Sep 2021 - Aug 2024",
      highlights: [
        "Developed FUSTT, a custom Spatio-Temporal Transformer architecture achieving 16% improvement in accuracy and 19% reduction in compute time",
        "Sponsored by National Research Council of Canada (NRC) for Blue Carbon Marine Ecosystems sustainability modeling",
        "Built predictive pipeline for concrete physicochemical properties using XGBoost, AdaBoost, and ANFIS models",
        "Published two peer-reviewed research papers on predictive modeling and structured data automation"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience</h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-lg text-primary">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                  <span className="text-sm text-muted-foreground mt-2 md:mt-0">{exp.period}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex">
                      <span className="mr-2">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
