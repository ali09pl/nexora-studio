import Image from "next/image";

const projects = [
  {
    title: "Project One",
    description: "مثال على مشروع 1",
    image: "/project1.png",
    github: "https://github.com/username/project1",
    demo: "https://demo1.com",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Project Two",
    description: "مثال على مشروع 2",
    image: "/project2.png",
    github: "https://github.com/username/project2",
    demo: "https://demo2.com",
    tech: ["React", "Node.js", "Tailwind CSS"]
  }
];

export default function ProjectsPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">مشاريعي</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, i) => (
          <div key={i} className="border rounded-lg shadow p-4 hover:scale-105 transition-transform">
            <Image src={proj.image} alt={proj.title} width={400} height={200} className="rounded"/>
            <h2 className="font-semibold mt-2">{proj.title}</h2>
            <p className="text-sm">{proj.description}</p>
            <div className="flex gap-2 mt-2 flex-wrap">
              {proj.tech.map((tech, idx) => (
                <span key={idx} className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-xs">{tech}</span>
              ))}
            </div>
            <div className="flex gap-2 mt-2">
              <a href={proj.github} target="_blank" className="text-blue-500 hover:underline">GitHub</a>
              <a href={proj.demo} target="_blank" className="text-green-500 hover:underline">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
