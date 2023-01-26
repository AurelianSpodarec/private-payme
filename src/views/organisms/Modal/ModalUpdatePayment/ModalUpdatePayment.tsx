import useModal from "context/useModal";

function ModalUpdatePayment({config}:ModalUpdatePaymentProps) {

    const modalContext = useModal()
    const { id, type, title, description, onAction, option } = config;

    function handleAction(e:any) {
        e.preventDefault()
        onAction()
        modalContext.close()
    }

    function handleCancel(e:any) {
        e.preventDefault()
        modalContext.close()
    }

    return (
        <div className="w-[340px] my-0 mx-auto text-center bg-[#1f2937] p-1 radius-md">
        <div>
        
            Hello MODAL
        
        </div>    
        </div>
    )
}

export default ModalUpdatePayment;

interface ModalUpdatePaymentProps {
    config: any;
}