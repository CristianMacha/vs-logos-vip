import Link from "next/link";

export default function ServicesPage() {
    return (
        <>
            <div className="bg-slate-600 px-16 py-4">
                <h1 className="text-white font-bold text-xl">SERVICIOS</h1>
            </div>
            <div className="px-16 py-4 grid grid-cols-1">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Link href="/services/diseno-de-logotipos" className="flex flex-col gap-2 text-vs-blue-600 hover:text-vs-blue-500">
                        <div>logo</div>
                        <div className="text-center">
                            <h2 className="font-semibold">DISEÑO DE LOGOTIPOS</h2>
                            <p className="text-xs italic text-black">Te diseñamos un logo de gran calidad estético y conceptual
                                adaptada a las necesidades de
                                tu negocio.</p>
                        </div>
                    </Link>
                    <div className="flex flex-col gap-2">
                        <div>logo</div>
                        <div className="text-center">
                            <h2 className="text-vs-blue-600 font-semibold">DISEÑO DE LOGOTIPOS</h2>
                            <p className="text-xs italic">Te diseñamos un logo de gran calidad estético y conceptual
                                adaptada a las necesidades de
                                tu negocio.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div>logo</div>
                        <div className="text-center">
                            <h2 className="text-vs-blue-600 font-semibold">DISEÑO DE LOGOTIPOS</h2>
                            <p className="text-xs italic">Te diseñamos un logo de gran calidad estético y conceptual
                                adaptada a las necesidades de
                                tu negocio.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div>logo</div>
                        <div className="text-center">
                            <h2 className="text-vs-blue-600 font-semibold">DISEÑO DE LOGOTIPOS</h2>
                            <p className="text-xs italic">Te diseñamos un logo de gran calidad estético y conceptual
                                adaptada a las necesidades de
                                tu negocio.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div>logo</div>
                        <div className="text-center">
                            <h2 className="text-vs-blue-600 font-semibold">DISEÑO DE LOGOTIPOS</h2>
                            <p className="text-xs italic">Te diseñamos un logo de gran calidad estético y conceptual
                                adaptada a las necesidades de
                                tu negocio.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div>logo</div>
                        <div className="text-center">
                            <h2 className="text-vs-blue-600 font-semibold">DISEÑO DE LOGOTIPOS</h2>
                            <p className="text-xs italic">Te diseñamos un logo de gran calidad estético y conceptual
                                adaptada a las necesidades de
                                tu negocio.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}