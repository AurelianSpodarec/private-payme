import { useAuth } from "context/authContext";
import useModal from "context/useModal";
import { InterfaceDetective } from "interface/InterfaceDetective";
import Button from "views/atoms/Button/Button";

function DetectiveListItem({ detective }:DetectiveListItemProps) {

    const ModalContextAPI = useModal() 
    const isActive = detective.active === undefined

    function openModalUpdatePayment() {
        ModalContextAPI.open()
        ModalContextAPI.setConfig({
            type: "payment",
            option: "update",
            fields: [{...detective}] 
        })
    }

    function openModalDeletePayment() {
        ModalContextAPI.open()
        ModalContextAPI.setConfig({
            type: "payment",
            option: "delete",
            fields: [{...detective}] 
        })
    }

    return (
    <article className={`transition duration-200 ease-in-out md:flex md:items-center md:justify-between md:space-x-5 p-5 rounded-md ${isActive  ? "cursor-pointer hover:bg-[#f2efe9]" : "opacity-50 cursor-not-allowed"}`}>

        <div className="flex items-center space-x-5">
        <div className="flex-shrink-0">
            <div className="relative">
            <img
                className="h-16 w-16 object-cover rounded-full"
                src={detective.avatar.src}
                alt={detective.avatar.alt}
            />
            <span className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
            </div>
        </div>
        <div>
            <h1 className="text-2xl font-bold text-gray-900">{detective.first_name} {detective.last_name}</h1>
            <p className="text-sm font-medium text-gray-500">
                Consulting detective
                {/* - <time dateTime="2020-12-20">December 20, 1887</time> */}
            </p>
        </div>
        </div>

        <div className="justify-stretch mt-6 flex flex-col-reverse space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-y-0 sm:space-x-3 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">   
            <Button kind="outline" disabled={!isActive} onClick={() => openModalDeletePayment()}>Delete Payment</Button>
            <Button onClick={() => openModalUpdatePayment()} disabled={!isActive}>Update Payment</Button>
        </div>

    </article>
    )
}

export default DetectiveListItem;

interface DetectiveListItemProps {
    detective: InterfaceDetective
}

