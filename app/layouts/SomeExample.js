import Link from "next/link";

export default function SomeExample() {
    return (
        <div className="py-4 px-16">
            <h3 className="text-vs-blue-600 font-semibold text-center text-2xl">
                Ejemplos Algunos Trabajos.
            </h3>
            <div className="flex justify-center">
                <div className="grid grid-cols-5 gap-3">
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                </div>
            </div>
            <div className="flex justify-center">
                <Link href="#"
                    type="button"
                    className="bg-vs-blue-600 text-white py-1 px-6 rounded-2xl font-semibold hover:bg-vs-blue-500 text-sm"
                >
                    Ver más Logos...
                </Link>
            </div>
        </div>
    );
}
