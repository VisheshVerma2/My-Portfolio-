import { Badge } from "./ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function Experience() {
  const experiences = [
    {
      title: "Technical Head",
      company: "Srajan E-Cell, PSIT",
      location: "Kanpur, UP",
      period: "Jul 2025 - Present",
      description: "Lead technical operations and coordinate student teams for entrepreneurship and innovation-focused initiatives. Organize technical workshops, startup activities, and product development programs.",
      technologies: ["Leadership", "Event Management", "Technical Workshops"]
    },
    {
      title: "Frontend Developer Intern",
      company: "Unified Mentor",
      location: "Remote",
      period: "Dec 2025 - Feb 2026",
      description: "Contributed to 3+ projects (AI Pet Simulator, agri-solutions) using React.js; built responsive UIs and integrated REST APIs.",
      technologies: ["React.js", "REST APIs", "Responsive UI"]
    },
    {
      title: "Software Developer Intern",
      company: "SenseOriginal Technologies Pvt. Ltd.",
      location: "Remote",
      period: "Nov 2025 - Apr 2026",
      description: "Built e-commerce platform features (auth, catalog, orders) and assisted in NFC-based authentication; startup featured on Ideabaaz (Zee TV & ZEE5).",
      technologies: ["E-commerce", "Auth", "NFC"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hands-on experience in frontend and full-stack development, 
            along with technical leadership roles.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10 ${
                    index % 2 === 0 ? "md:-translate-x-1/2" : "md:-translate-x-1/2"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}>
                  <motion.div
                    className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <Briefcase className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-lg">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}