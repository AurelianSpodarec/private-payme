import useModal from "context/useModal";

function Home() {
    const ModalContextAPI = useModal()

    function open() {
        ModalContextAPI.open()
        ModalContextAPI.setConfig(
            {
                type: "updatePayment"
            }
        )
    }

    return (
        <div>
            
            <button 
                type="button" 
                
                onClick={() => open()}>Open Modal</button>

        </div>
    )
}

export default Home;