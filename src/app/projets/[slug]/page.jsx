import projects from "@/data/projects.json";

// Helper function to create slug from project name
function createSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Tell Next.js which routes to pre-generate
export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: createSlug(p.name),
  }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => {
    const projectSlug = createSlug(p.name);
    return projectSlug === slug;
  });

  if (!project) {
    return <h1>Project not found</h1>;
  }

  return (
    <main>
    <div className="w-screen p-20">

      <h1 className="font-extrabold text-6xl">{project.name}</h1>

      <p>{project.description}</p>
      <img className="rounded-[25px]  w-screen my-20" src={project["img-main"]} alt="" />
      <div>
      <p className="max-w-[80vw] uppercase">{project.caseStudy}</p>

      <h2 className="mt-40 lowercase text-6xl font-extrabold">{project.premierTitre}</h2>
      <p className="lowercase">{project.premierTexte}</p>
      <div></div>
      </div>
    </div>
    </main>
  );
}

