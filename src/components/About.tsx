
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  const skills = {
    "Tools": "Azure (DataFactory, ADLS2, Synapse, Databricks), Git, Fabric (Onelake, PowerBI, Key Vault), Kubernetes (GKE, AKS), Docker (ACI, GCS), Tableau, PydanticAI, AWS (S3, Boto3, Sagemaker, EC2), MongoDB, Kafka, LangChain, Qdrant",
    "Technical": "Python, SQL/NoSQL, DAX, Pandas, Flask, PySpark, Terraform, TensorFlow, Pytorch, llama.cpp, FastAPI",
    "Data Modeling": "Star, Snowflake, CosmosDB, Kimball, SSMS, SSIS, Semantic Modeling, KPI Analysis, Validation, Grafana"
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Background</h3>
              <p className="text-muted-foreground mb-4">
                I'm a Data Scientist and ML Engineer with a Master's in Electrical & Computer Engineering 
                from the University of Victoria. Currently working at Swiss Vault Global, I specialize in 
                AI-driven hybrid storage solutions and data engineering.
              </p>
              <p className="text-muted-foreground">
                My expertise spans from building LLM-powered applications to designing scalable data 
                pipelines and implementing edge AI solutions. I'm passionate about bridging the gap 
                between technical innovation and business value.
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-lg overflow-hidden shadow-lg p-4 bg-card">
                <img 
                  src="/lovable-uploads/f44426a7-9387-4ef4-847d-c0521ca193c4.png" 
                  alt="Chinmay Kapoor - Graduation Photo"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2">MEng in Electrical & Computer Engineering</h4>
                  <p className="text-muted-foreground">University of Victoria</p>
                  <p className="text-sm text-muted-foreground">Sep 2021 - Aug 2024</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2">BEng in Computer Science</h4>
                  <p className="text-muted-foreground">Amity University</p>
                  <p className="text-sm text-muted-foreground">Aug 2017 - Apr 2021</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            <div className="grid gap-4">
              {Object.entries(skills).map(([category, skillList]) => (
                <Card key={category}>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">{category}</h4>
                    <p className="text-sm text-muted-foreground">{skillList}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
