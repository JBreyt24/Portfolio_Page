// src/app/projects/page.js

export const metadata = {
    title: 'Projects',
    description: 'My projects',
};

export default function Projects() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
                <h1 className="text-6xl font-bold">Projects</h1>
                <p className="mt-3 text-2xl">
                    Here are some of my recent projects.
                </p>
                <p className="mt-3 text-2xl">
                    [Add your projects here.]
                </p>
            </main>
        </div>
    );
}
