import DetectiveListItem from "./DetectiveListItem";

function DetectiveListIndex({ items }: any) {

    return (
        <div className="space-y-4 relative">
            {items.length !== 0 && items.map((item: any) => (
                <DetectiveListItem key={item._id} detective={item} />
            ))}
        </div>
    )
}

export default DetectiveListIndex;