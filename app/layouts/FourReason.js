import { Square2StackIcon } from "@heroicons/react/24/outline";

export default function FourReason() {
    return (
        <div className="py-8 px-16">
            <div>
                <h1 className="text-xl font-semibold text-vs-blue-600 text-center">
                    4 Razones para contratar a Logos VIP
                </h1>
            </div>
            <div className="mt-8 flex flex-col gap-10">
                <div className="flex flex-row gap-2 items-center justify-center">
                    <div className="border-2 border-vs-blue-600 rounded-full p-2">
                        <Square2StackIcon className="w-10 text-vs-blue-600" />
                    </div>
                    <div>
                        <h2 className="text-vs-blue-600 font-semibold">
                            Variedad de propuestas
                        </h2>
                        <p className="italic text-sm text-gray-500">
                            Os mandamos para empezar 16 propuestas de calidad
                            para poder abarcar todos los estilos y conceptos y
                            dejarte impresionado desde el primer momento.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row gap-2 items-center justify-center">
                    <div className="border-2 border-vs-blue-600 rounded-full p-2">
                        <Square2StackIcon className="w-10 text-vs-blue-600" />
                    </div>
                    <div>
                        <h2 className="text-vs-blue-600 font-semibold">
                            Variedad de propuestas
                        </h2>
                        <p className="italic text-sm text-gray-500">
                            Os mandamos para empezar 16 propuestas de calidad
                            para poder abarcar todos los estilos y conceptos y
                            dejarte impresionado desde el primer momento.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
