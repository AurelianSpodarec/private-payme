import { useAuth } from "context/authContext";
import useModal from "context/useModal";
import DetectiveListItem from "./DetectiveListItem";

function DetectiveListIndex({ items }: any) {


    return (
        <div className="space-y- relative">
            {items.length !== 0 && items.map((item: any) => (
                <DetectiveListItem key={item._id} detective={item} />
            ))}
        </div>
    )
}

export default DetectiveListIndex;