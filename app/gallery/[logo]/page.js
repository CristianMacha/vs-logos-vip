import {getLogo} from "@/components/listLogos";

export default function Logo({ params }) {
    const {logo} = params;
    const {title, description} = getLogo(logo)
    return (
        <>
            <div className="bg-slate-600 px-16 py-4">
                <h1 className="text-white font-bold text-xl uppercase">{title}</h1>
            </div>
            <div>imagenes</div>
            <div className="px-16 py-4">
                <p className="text-sm">{description}</p>
            </div>
        </>
    )
}