import { useAuth } from "context/authContext";
import useModal from "context/useModal";


function Home() {
    const AuthContextAPI = useAuth();
    const ModalContextAPI = useModal()

    const LoggedUser = AuthContextAPI.authData.user;

    console.log("home", AuthContextAPI.authData.user)

    function openModalUpdatePayment() {
        ModalContextAPI.open()
        ModalContextAPI.setConfig({
            type: "updatePayment",
            fields: [...LoggedUser] 
        })
    }

    return (
        <div>
            <button type="button" onClick={() => openModalUpdatePayment()}>Open Modal</button>
        </div>
    )
}

export default Home;