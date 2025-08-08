import Image from 'next/image';


interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
}

export default function ProjectCard({ title, description, imageUrl, projectUrl }: ProjectCardProps) {
    return (
        <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">

            { }
            <div className="w-full h-48 bg-gray-200 relative">
                <Image
                    src={imageUrl}
                    alt={`Screenshot of ${title}`}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            { }

            <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <p className="text-gray-700 mb-4">{description}</p>
                <a href={projectUrl} className="text-blue-500 hover:underline">
                    Learn More & Play
                </a>
            </div>
        </div>
    );
}