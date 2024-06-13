// src/app/contact/page.js

export const metadata = {
    title: 'Contact',
    description: 'Contact me',
};

export default function Contact() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
                <h1 className="text-6xl font-bold">Contact</h1>
                <p className="mt-3 text-2xl">
                    Get in touch with me.
                </p>
                <p className="mt-3 text-2xl">
                    [Add your contact information or form here.]
                </p>
            </main>
        </div>
    );
}
