import { ListBulletIcon, QuestionMarkCircleIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export default function AccessDirect() {
    return (
        <div className="container-main">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex justify-center">
                    <a href="#" className="flex flex-col gap-2 justify-center">
                        <div className="flex justify-center">
                            <ListBulletIcon
                                className="text-vs-blue w-10"
                                strokeWidth={2}
                            />
                        </div>
                        <h4 className="text-vs-blue text-center text-lg font-semibold">Servicios</h4>
                        <p className="text-sm text-center">
                            Informate detalladamente sobre todos los servicios
                            que te ofrecemos en logosvip.
                        </p>
                    </a>
                </div>
                <div className="flex justify-center">
                    <a href="#" className="flex flex-col gap-2 justify-center">
                        <div className="flex justify-center">
                            <QuestionMarkCircleIcon
                                className="text-vs-blue w-10"
                                strokeWidth={2}
                            />
                        </div>
                        <h4 className="text-vs-blue text-center text-lg font-semibold">FAQs</h4>
                        <p className="text-sm text-center">
                            Informate detalladamente sobre todos los servicios
                            que te ofrecemos en logosvip.
                        </p>
                    </a>
                </div>
                <div className="flex justify-center">
                    <a href="#" className="flex flex-col gap-2 justify-center">
                        <div className="flex justify-center">
                            <UserGroupIcon
                                className="text-vs-blue w-10"
                                strokeWidth={2}
                            />
                        </div>
                        <h4 className="text-vs-blue text-center text-lg font-semibold">Quiénes somos</h4>
                        <p className="text-sm text-center">
                            Informate detalladamente sobre todos los servicios
                            que te ofrecemos en logosvip.
                        </p>
                    </a>
                </div>
            </div>
        </div>
    );
}
