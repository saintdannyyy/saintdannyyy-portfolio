import { Calendar, MapPin, Building, ChevronRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const experiences = [
  {
    id: 1,
    company: "Codlogics Software Engineering",
    position: "Software Engineer Intern",
    location: "Dzorwulu",
    startDate: "2022",
    endDate: "2024",
    duration: "2 years",
    description:
      "Contributed to payment integrations, developed a management system for a mechanic workshop, and supported access control systems and attendance management.",
    technologies: ["PHP", "Python", "Node.js"],
    achievements: [
      "Contributed to consistent performance of access control and attendance systems",
      "Integrated payment system into existing ecommerce site",
      "BBuilt full scale application for mechanic workshop management",
    ],
  },
  {
    id: 2,
    company: "Zest",
    position: "Front End Engineer",
    location: "Remote",
    startDate: "2020",
    endDate: "2022",
    duration: "1 year",
    description:
      "Built the pos side of Zest focused on help small bussinesses thrive in the ghanaian market",
    technologies: ["Nextjs", "TailwindCSS", "Shadcn", "JavaScript"],
    achievements: [
      "Delivered 15+ major features on schedule",
      "Improved application load time by 60%",
      "Implemented comprehensive testing suite",
    ],
  },
  {
    id: 3,
    company: "Digital Agency Pro",
    position: "Frontend Developer",
    location: "Remote",
    startDate: "2019",
    endDate: "2020",
    duration: "1 year",
    description:
      "Developed responsive web applications for diverse clients across industries. Focused on creating intuitive user experiences and optimizing for performance. Worked closely with designers and backend developers.",
    technologies: [
      "Vue.js",
      "JavaScript",
      "SASS",
      "Webpack",
      "Firebase",
      "Figma",
    ],
    achievements: [
      "Delivered 20+ client projects",
      "Achieved 95%+ client satisfaction rate",
      "Reduced bounce rate by 30% on average",
    ],
  },
  {
    id: 4,
    company: "CodeBootcamp Inc",
    position: "Junior Web Developer",
    location: "New York, NY",
    startDate: "2018",
    endDate: "2019",
    duration: "1 year",
    description:
      "Started my professional journey building educational platforms and learning management systems. Gained experience in full-stack development while contributing to open-source projects.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "jQuery"],
    achievements: [
      "Built 5+ educational web applications",
      "Contributed to 3 open-source projects",
      "Graduated from senior developer mentorship program",
    ],
  },
];

export default function Experience() {
  return (
    <div className="w-full py-20 bg-transparent" id="experience">
      <div className="w-[80%] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#EA3546] via-[#662E9B] to-[#F86624] bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey through different roles and companies,
            building innovative solutions and growing as a developer.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#EA3546] via-[#662E9B] to-[#F86624] opacity-30"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative flex items-start group">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-[#EA3546] to-[#662E9B] rounded-full border-4 border-black z-10 group-hover:scale-125 transition-transform duration-300"></div>

                {/* Content Card */}
                <div className="ml-20 w-full">
                  <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl text-white mb-2 flex items-center gap-2">
                            <Building className="w-5 h-5 text-[#662E9B]" />
                            {exp.position}
                          </CardTitle>
                          <CardDescription className="text-lg font-semibold text-[#EA3546]">
                            {exp.company}
                          </CardDescription>
                        </div>

                        <div className="flex flex-col md:items-end gap-2">
                          <div className="flex items-center gap-1 text-gray-400 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>
                              {exp.startDate} - {exp.endDate}
                            </span>
                            <span className="ml-2 px-2 py-1 bg-[#662E9B]/20 rounded-full text-xs">
                              {exp.duration}
                            </span>
                          </div>
                          <div className="flex items-center gap-1 text-gray-400 text-sm">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 text-[#662E9B]" />
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-gradient-to-r from-[#EA3546]/20 to-[#662E9B]/20 border border-[#662E9B]/30 rounded-full text-sm text-gray-300 hover:bg-[#662E9B]/30 transition-colors duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 text-[#662E9B]" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="text-gray-300 flex items-start gap-2"
                            >
                              <span className="w-1.5 h-1.5 bg-[#EA3546] rounded-full mt-2 flex-shrink-0"></span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Interested in working together? Let's discuss your next project.
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-[#EA3546] to-[#662E9B] rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
}
