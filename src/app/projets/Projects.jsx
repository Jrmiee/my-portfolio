import projects from "@/data/projects.json";
import Link from "next/link";

// Helper function to create slug from project name
function createSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}


export default function ProjectsPage() {


  return (


    <main>
      <ul>
        {projects.map((p) => (
          <li key={p.id}>
            <Link href={`/projets/${createSlug(p.name)}`}>
              <h2>{p.name}</h2>
            </Link>
            <p>{p.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
