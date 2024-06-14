import useModal from "hooks/useModal";
import { useEffect, useState } from "react";

function ModalCard({children}:any) {
    const modalContext = useModal()
    const modalData = modalContext;

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (modalData.isOpen) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [modalData.isOpen])

    return (
    <div 
        className={`w-[410px]  ${visible ? " opacity-100 scale-100" : " opacity-5 scale-75"} my-auto mx-auto bg-white rounded-md transition duration-75 ease-in-out `} 
        style={{ "boxShadow": "0px 0px 10px rgba(0, 0, 0, 0.25)" }}
    >
        <div className="p-4 md:p-[30px]">
            {children}
        </div>
    </div>
    )
}

export default ModalCard;