import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline"

export default function BannerTop() {
    return (
        <div className="bg-vs-blue flex justify-end items-center px-4 py-1">
            <div className="flex flex-row gap-4 items-center">
                <div className="flex flex-row gap-1">
                    <PhoneIcon className="w-[15px] text-vs-sky"/>
                    <div className="text-white text-sm">+51 902073714</div>
                </div>
                <div className="flex flex-row gap-1">
                    <EnvelopeIcon className="w-[15px] text-vs-sky"/>
                    <div className="text-white text-sm">logosvip@gmail.com</div>
                </div>
            </div>
        </div>
    )
}