
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export const Publications = () => {
  const publications = [
    {
      title: "FUSTT: Forecasting using Spatio-Temporal Transformer",
      publisher: "Springer",
      status: "Accepted",
      description: "Novel Transformer-based approach designed to support the sustainability of Blue Carbon Ecosystems with dynamic forecasting of marine stressors collecting real-time data. (Project Funded by National Research Council, Canada)"
    },
    {
      title: "Concrete Characteristics Evaluation using Neural Networks",
      publisher: "Springer",
      status: "Presented - CSCE 2022, Whistler, BC",
      description: "Hybrid Technique using ANFIS, CNN, and SVM models to predict the physicochemical properties of concrete mixtures, achieving nearly 90% accuracy and reducing reliance on carbon-intensive lab experiments.",
      url: "https://link.springer.com/chapter/10.1007/978-3-031-34027-7_86"
    },
    {
      title: "Human Activity Recognition using CNN & LSTM",
      publisher: "IEEE Explore",
      status: "Presented - Confluence 2021, Delhi, India",
      description: "Exploratory and Comparative Data Analysis between performance of CNN and LSTM models for Human Activity Recognition based on data collected using wearable sensors to support healthcare purposes.",
      url: "https://ieeexplore.ieee.org/document/9377114"
    }
  ];

  return (
    <section id="publications" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Publications</h2>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {publications.map((pub, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1">{pub.title}</h3>
                    <p className="text-primary font-medium">{pub.publisher}</p>
                    <p className="text-sm text-muted-foreground">{pub.status}</p>
                  </div>
                  {pub.url && (
                    <Button variant="outline" size="sm" asChild className="mt-2 md:mt-0">
                      <a href={pub.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View
                      </a>
                    </Button>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{pub.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
