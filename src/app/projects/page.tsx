import ProjectCard from "@/components/ProjectCard";
import { Metadata } from 'next'; // 确保导入了Metadata类型

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Explore a collection of game projects I have worked on, including descriptions, tech stacks, and playable WebGL builds.',
};

export default function ProjectsPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                { }
                <ProjectCard
                    title="The Last Corner"
                    description="Manage a shelter and save as many infected people"
                    imageUrl="/images/game-one-preview.png"
                    projectUrl="/projects/TheLastCorner"
                />

                { }
                <ProjectCard
                    title="Almighty Archer"
                    description="Combine different elements and shoot"
                    imageUrl="/images/game-two-preview.png"
                    projectUrl="/projects/AlmightyArcher"
                />
            </div>
        </div>
    );
}