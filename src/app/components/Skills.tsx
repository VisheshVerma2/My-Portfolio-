import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Settings, Globe, Database, Smartphone, Cloud, Layers } from "lucide-react";
import { motion } from "framer-motion";

export function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages",
      skills: ["Dart", "JavaScript", "Python", "Java", "C++"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["Flutter", "Android", "Cross-Platform Development"]
    },
    {
      icon: Globe,
      title: "Frontend",
      skills: ["React.js", "HTML5", "CSS3", "Responsive UI"]
    },
    {
      icon: Cloud,
      title: "Backend & Tools",
      skills: ["Firebase", "Supabase", "Node.js", "REST APIs", "AWS", "Docker", "Git", "Postman", "Figma"]
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["SQL", "NoSQL", "Firestore", "Firebase Realtime DB"]
    },
    {
      icon: Layers,
      title: "Core CS",
      skills: ["DSA", "OOP", "DBMS", "OS", "Computer Networks"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise in cross-platform mobile development and full-stack web applications, 
            focusing on scalable solutions and user-centric design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="h-full cursor-pointer"
                  whileHover={{ 
                    y: -8,
                    boxShadow: "0 20px 40px -15px rgba(99, 102, 241, 0.3)"
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <IconComponent className="h-5 w-5 text-primary" />
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}