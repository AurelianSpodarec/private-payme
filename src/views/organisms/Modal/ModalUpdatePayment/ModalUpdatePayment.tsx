import useModal from "context/useModal";

function ModalUpdatePayment({config}:ModalUpdatePaymentProps) {
    const modalContext = useModal()

    const { id, type, title, description, onAction, option, fields } = config;

    console.log("Modal payment", fields)

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
        <div className="text-white">

            <h3>Update paument method</h3>

            <form>
                <input placeholder="Card Number"/>
                Input address
                input address 2
                country

                state postcode
            </form>

            <footer>
                <div className="flex flex-row items-center">
                    <button type="button" onClick={(e) => handleCancel(e)}>Cancel</button>
                    <button type="button" onClick={(e) => handleAction(e)}>Update</button>
                </div>

                <div>
                    <span>Powered by stripe</span>
                </div>
            </footer>
        
        </div>    
        </div>
    )
}

export default ModalUpdatePayment;

interface ModalUpdatePaymentProps {
    config: any;
}