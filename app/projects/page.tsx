'use client';

export default function ProjectsPage() {
  const projects = [
    { id: 1, title: 'Project A', tech: ['Next.js', 'Tailwind'], github: '#', live: '#' },
    { id: 2, title: 'Project B', tech: ['React', 'TypeScript'], github: '#', live: '#' },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p.id} className="border p-4 rounded shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold">{p.title}</h2>
            <p className="mt-2">Tech: {p.tech.join(', ')}</p>
            <div className="mt-2 flex gap-4">
              <a href={p.github} className="text-blue-500 hover:underline">GitHub</a>
              <a href={p.live} className="text-green-500 hover:underline">Live</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
