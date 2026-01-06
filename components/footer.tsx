export default function Footer() {
    return (
        <footer className="w-full bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 mt-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} Ramones. All rights reserved.
                </p>
            </div>
        </footer>
    );
}