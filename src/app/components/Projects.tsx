import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Projects() {
  const [activeTab, setActiveTab] = useState<"all" | "mobile" | "web">("all");
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const projects = [
    {
      title: "Viksit Kanpur",
      category: "mobile",
      description: "Civic grievance platform with real-time tracking and location-based services. Won 1st Prize at Tech Expo 2025.",
      image: "https://images.unsplash.com/photo-1759347171940-d79bc7024948?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbWFwJTIwbG9jYXRpb258ZW58MXx8fHwxNzgxNzU5OTkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Flutter", "Firebase", "Google Maps", "WebRTC"],
      github: "#",
      demo: "#"
    },
    {
      title: "Field Finder",
      category: "mobile",
      description: "Sports discovery platform for players and tournament organizers, validated by 2,000+ early users.",
      image: "https://images.unsplash.com/photo-1546717003-caee5f93a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBmaWVsZCUyMHN0YWRpdW18ZW58MXx8fHwxNzgxNzU5OTk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Flutter", "React", "Firebase", "Cloud Functions"],
      github: "#",
      demo: "#"
    },
    {
      title: "DevLog",
      category: "web",
      description: "B2B SaaS tool for remote teams – async video standups with AI-generated summaries and workspaces.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW1vdGUlMjB2aWRlbyUyMG1lZXRpbmclMjBkYXRoYm9hcmR8ZW58MXx8fHwxNzgxNzU5OTk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["React", "Node.js", "AWS S3", "OpenAI API"],
      github: "#",
      demo: "#"
    },
    {
      title: "SmartAttend",
      category: "mobile",
      description: "NFC-based attendance system reducing manual effort by 90%. Piloted with 200+ students.",
      image: "https://images.unsplash.com/photo-1668903678359-e810dd966016?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBpZCUyMGNhcmR8ZW58MXx8fHwxNzgxNzU5OTk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Flutter", "NFC", "Firebase", "Firestore"],
      github: "#",
      demo: "#"
    },
    {
      title: "CodeDuel",
      category: "web",
      description: "Real-time 1v1 coding battle platform with live progress tracking and multi-language execution.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBzY3JlZW4lMjBuZW9ufGVufDF8fHx8MTc4MTc1OTk5NHww&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["React", "Node.js", "WebSockets", "Judge0 API"],
      github: "#",
      demo: "#"
    }
  ];

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>, index: number) {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setMouseX(e.clientX - left);
    setMouseY(e.clientY - top);
  }

  const filteredProjects = projects.filter(
    (project) => activeTab === "all" || project.category === activeTab
  );

  const tabs = [
    { id: "all", label: "All Projects" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "web", label: "Web/SaaS" }
  ] as const;

  return (
    <section className="py-24 px-4 bg-secondary/5 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -z-10" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl translate-x-1/2 -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary via-indigo-600 to-indigo-400 bg-clip-text text-transparent dark:from-white dark:to-indigo-200">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A selection of projects demonstrating my skills in building real-world solutions, 
            full-stack development, and team leadership.
          </p>
        </div>

        {/* Dynamic Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex p-1 rounded-full bg-secondary/20 dark:bg-accent/10 border border-border/40 backdrop-blur-md">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeTab === tab.id
                    ? "text-white dark:text-black font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="relative z-10">{tab.label}</span>
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeProjectTab"
                    className="absolute inset-0 bg-primary dark:bg-white rounded-full shadow-md"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onHoverStart={() => setHoveredCardIndex(index)}
                onHoverEnd={() => setHoveredCardIndex(null)}
                className="relative"
              >
                <Card className="h-full overflow-hidden border border-border/40 bg-card/30 dark:bg-card/10 backdrop-blur-lg hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-500 group flex flex-col">
                  {/* Spotlight Hover Glow */}
                  <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 -z-10"
                    style={{
                      background: `radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(99, 102, 241, 0.12), transparent 70%)`,
                    }}
                  />

                  {/* Project Image Panel */}
                  <div className="aspect-video overflow-hidden relative border-b border-border/20">
                    <motion.div
                      className="w-full h-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover filter brightness-[0.9] group-hover:brightness-100 transition-all duration-500"
                      />
                    </motion.div>
                    
                    {/* Hover Link Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <Button size="sm" variant="secondary" className="gap-2 rounded-full px-5 hover:scale-105 transition-transform" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" className="gap-2 rounded-full px-5 hover:scale-105 transition-transform" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>

                  <CardHeader className="pt-6 pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl font-bold group-hover:text-indigo-500 dark:group-hover:text-indigo-300 transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <Badge variant="outline" className="text-xs uppercase tracking-wider bg-indigo-500/5 text-indigo-500 dark:text-indigo-300 border-indigo-500/20">
                        {project.category === "web" ? "Web / SaaS" : "Mobile App"}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4 flex-grow flex flex-col justify-between pt-0 pb-6">
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5 pt-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary"
                          className="bg-secondary/40 text-secondary-foreground dark:bg-accent/20 border border-border/20 text-xs py-0.5"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}