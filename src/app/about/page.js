// src/app/about/page.js

export const metadata = {
    title: 'About Me',
    description: 'Learn more about me',
};

export default function About() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
                <h1 className="text-6xl font-bold">About Me</h1>
                <p className="mt-3 text-2xl">
                    Hello! I'm [Your Name], a [Your Profession/Role] based in [Your Location].
                </p>
                <p className="mt-3 text-2xl">
                    [Write more about your background, experience, and skills.]
                </p>
            </main>
        </div>
    );
}
