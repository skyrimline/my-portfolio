// app/about/page.tsx

import Link from 'next/link';

export default function AboutPage() {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-4">Feike Qi</h1>
            <p className="text-lg text-gray-600 mb-8">Formal game tester</p>

            <div className="prose prose-lg max-w-none mb-12">
                <h2 className="text-2xl font-bold border-b pb-2 mb-4">About Me</h2>
                <p>
                    [Persontal Statement]
                </p>
            </div>

            <div className="mb-12">
                <h2 className="text-2xl font-bold border-b pb-2 mb-4">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="p-4 border rounded-lg">Unity & C#</div>
                    <div className="p-4 border rounded-lg">Next.js & TypeScript</div>
                    <div className="p-4 border rounded-lg">Systems Design</div>
                    <div className="p-4 border rounded-lg">Narrative Design</div>
                    {/* Add or remove skills as needed */}
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold border-b pb-2 mb-4">Downloads</h2>
                <div className="flex space-x-4">
                    <a
                        href="/portfolio.pdf"
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download Portfolio (PDF)
                    </a>
                    <a
                        href="/resume.pdf"
                        className="bg-gray-700 text-white font-bold py-2 px-4 rounded hover:bg-gray-900 transition duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download Resume (PDF)
                    </a>
                </div>
            </div>
        </div>
    );
}