import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";
export default function BtnWhatsApp() {
    return (
        <div className="fixed bottom-2 right-2 z-20 bg-green-500 p-2 rounded-full">
            <ChatBubbleBottomCenterIcon className="w-10 text-white" />
        </div>
    )
}