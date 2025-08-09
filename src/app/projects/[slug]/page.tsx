import { Metadata } from 'next';

const projectsData = {
    'AlmightyArcher': {
        title: 'Almighty Archer',
        description: 'Almighty Archer is a top-down 2.5D real-time action game...',
        webglPath: '/webgl/AlmightyArcher/index.html',
        techStack: ['Unity', 'C#'],
        designThoughts: `The game is inspired by Magicka...`
    },

    'TheLastCorner': {
        title: 'The Last Corner',
        description: 'A 2D platformer simulation role-playing game...',
        webglPath: '/webgl/TheLastCorner/index.html',
        techStack: ['Unity', 'C#'],
        designThoughts: `There are four kinds of NPCs that The Last Corner has...`
    }
};

async function getProjectData(slug: string) {
    return projectsData[slug as keyof typeof projectsData] || null;
}



// --- 动态生成元数据的函数 (应用新范式) ---
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params; // <-- 【核心修正一】：在这里 await params
    const project = await getProjectData(slug);
    
    if (!project) {
        return { title: 'Project Not Found' };
    }
    return { title: `${project.title} | Your Name` };
}

// --- 页面组件本身 (应用新范式) ---
export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params; // <-- 【核心修正二】：在这里 await params
    const project = await getProjectData(slug);

    if (!project) {
        return <div>Project not found!</div>;
    }

    return (
        // ... return内部的JSX代码，完全保持不变 ...
        <div>
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-lg text-gray-700 mb-8">{project.description}</p>
            
            <div className="w-full border rounded-lg overflow-hidden mb-12">
                <iframe
                    src={project.webglPath}
                    className="w-full h-[720px]"
                    title={project.title}
                    allowFullScreen
                ></iframe>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-1">
                    <h2 className="text-2xl font-bold mb-4 border-b pb-2">Technical Stack</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {project.techStack.map((tech) => (
                            <li key={tech}>{tech}</li>
                        ))}
                    </ul>
                </div>
                <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold mb-4 border-b pb-2">Design Thoughts</h2>
                    <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">
                        {project.designThoughts}
                    </p>
                </div>
            </div>
        </div>
    );
}