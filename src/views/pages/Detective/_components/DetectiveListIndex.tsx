import { useAuth } from "context/authContext";
import useModal from "context/useModal";
import DetectiveListItem from "./DetectiveListItem";

function DetectiveListIndex({ items }: any) {

    const AuthContextAPI = useAuth();
    const ModalContextAPI = useModal()

    const user = AuthContextAPI.authData.user;

    function openModalUpdatePayment() {
        ModalContextAPI.open()
        ModalContextAPI.setConfig({
            type: "payment",
            option: "update",
            fields: [{...user}] 
        })
    }

    function openModalDeletePayment() {
        ModalContextAPI.open()
        ModalContextAPI.setConfig({
            type: "payment",
            option: "delete",
            fields: [{...user}] 
        })
    }
    console.log("hii", items)

    return (
        <div className="space-y-">
            {items.length !== 0 && items.map((item: any) => (
                <DetectiveListItem key={item._id} officer={item} />
            ))}
        </div>
    )
}

export default DetectiveListIndex;