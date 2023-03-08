import {getService} from "@/components/ListServices";

export default function Service({params}) {
    const {service} = params;
    const {title, description} = getService(service);
    return (
        <>
            <div className="bg-slate-600 px-16 py-4">
                <h1 className="text-white font-bold text-xl uppercase">{title}</h1>
            </div>
            <div className="py-4 px-16">
                <h1 className="text-vs-blue text-3xl font-bold uppercase">{title}</h1>
                <p className="text-base">{description}</p>
            </div>
        </>
    )
}