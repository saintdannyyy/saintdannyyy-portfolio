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
    startDate: "Sept 2022",
    endDate: "December 2024",
    duration: "2 years",
    description:
      "Contributed to payment integrations, developed a management system for a mechanic workshop, and supported access control systems and attendance management.",
    technologies: ["REACT", "PHP", "JavaScript", "MySQL", "Python", "Node.js"],
  },
  {
    id: 2,
    company: "Zest",
    position: "Front End Engineer",
    location: "Remote",
    startDate: "April 2024",
    endDate: "December 2024",
    duration: "8 months",
    description:
      "Built the pos side of Zest; an application focused on helping small bussinesses thrive in the Ghanaian market",
    technologies: [
      "Nextjs",
      "TailwindCSS",
      "Shadcn",
      "JavaScript",
      "Notion",
      "Figma",
    ],
  },
  {
    id: 3,
    company: "Trestle Academy Ghana",
    position: "Software Engineer Intern",
    location: "Remote",
    startDate: "May 2023",
    endDate: "Nov 2023",
    duration: "6 months",
    description:
      "Gained hands-on experience with web and mobile development technologies.",
    technologies: ["HTML", "JavaScript", "Flutter"],
  },
  // {
  //   id: 4,
  //   company: "CodeBootcamp Inc",
  //   position: "Junior Web Developer",
  //   location: "New York, NY",
  //   startDate: "2018",
  //   endDate: "2019",
  //   duration: "1 year",
  //   description:
  //     "Started my professional journey building educational platforms and learning management systems. Gained experience in full-stack development while contributing to open-source projects.",
  //   technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "jQuery"],
  //   achievements: [
  //     "Built a pokemon site",
  //     "Obtained mentorship from industry working senior developers",
  //   ],
  // },
];

export default function Experience() {
  return (
    <div
      className="w-full py-10 sm:py-16 lg:py-20 bg-transparent"
      id="experience"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-comic">
            <span className="bg-gradient-to-r from-[#EA3546] via-[#662E9B] to-[#F86624] bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto font-comic px-4">
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
                            <Building className="w-5 h-5 text-[#c299e8]" />
                            {exp.position}
                          </CardTitle>
                          <CardDescription className="text-lg font-semibold text-[#c7a9f0]">
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
