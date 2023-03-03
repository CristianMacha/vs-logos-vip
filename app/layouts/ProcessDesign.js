import { Cog6ToothIcon } from "@heroicons/react/24/outline";

export default function ProcessDesign() {
    return (
        <div className="bg-vs-blue-700 py-4 px-16">
            <div className="flex flex-row gap-2 items-center">
                <Cog6ToothIcon className="w-10 text-vs-sky" strokeWidth={1.5} />
                <h1 className="text-3xl font-semibold text-white">
                    Proceso del diseño de un logo
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                <div className="col-span-1 md:col-span-3">
                    <div className="flex flex-col gap-4">
                        <div>
                            <h3 className="text-lg text-vs-sky font-semibold">
                                1. Intercambio de informacion:
                            </h3>
                            <p className="italic text-white">
                                Os enviamos un presupuesto que incluye precios,
                                condiciones y formas de pago y vosotros nos
                                enviáis un pequeño “briefing” con el nombre y
                                las especificaciones que hayáis pensado para
                                vuestro logo.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg text-vs-sky font-semibold">
                                2. Os mandamos la primera lista de logotipos:
                            </h3>
                            <p className="italic text-white">
                                Hacéis el pago del 50% y en 5 días laborables
                                máximo os enviamos 16 propuestas de calidad (si
                                quieres ver características y plazos pulsa aquí)
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg text-vs-sky font-semibold">
                                3. Recibimos vuestra respuesta y seguimos
                                trabajando:
                            </h3>
                            <p className="italic text-white">
                                Nos respondéis indicando la propuesta o
                                propuestas que más os han gustado. Podéis elegir
                                un máximo de 3 logos para seguir
                                desarrollándolos. Si no os gusta nada de lo que
                                os hemos enviado os mandamos más ideas.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg text-vs-sky font-semibold">
                                4. Os mandamos nuevas propuestas a partir de
                                vuestros comentarios:
                            </h3>
                            <p className="italic text-white">
                                Vamos desarrollando los logotipos que más os
                                gustan en función de vuestros comentarios y
                                nuestros criterio profesional hasta llegar al
                                logo definitivo.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg text-vs-sky font-semibold">
                                5. Finalización: ¡Tu logo listo para empezar a
                                usarlo!:
                            </h3>
                            <p className="italic text-white">
                                Haceis el pago del otro 50% y en 24 horas máximo
                                os enviamos el logo en distintos formatos de
                                calidad profesional para que podáis empezar a
                                usarlo.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-vs-blue-300 p-3">
                        <h2 className="text-xl font-semibold text-white">Ejemplos</h2>
                        <p className="text-white text-sm">
                            No te pierdas los siguientes ejemplos basados en
                            casos reales: aquí resolveremos todas tus dudas
                            sobre cuál es exactamente nuestra forma de diseñar
                            un logotipo o de buscar un nombre para tu empresa:
                        </p>
                        <div className="pl-2">
                            <ul>
                                <li>
                                    <a href="#" className="text-vs-sky font-semibold hover:text-vs-sky-100">Ejemplo 1</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
