function DetectiveListItem({officer, onClickDelete, onClickUpdate}:any) {
    console.log(officer.active)
    return (
    <article className={`transition duration-200 ease-in-out md:flex md:items-center md:justify-between md:space-x-5 p-5 rounded-md ${officer.active === undefined  ? "cursor-pointer hover:bg-[#f2efe9]" : "opacity-50 cursor-not-allowed"}`}>

        <div className="flex items-center space-x-5">
        <div className="flex-shrink-0">
            <div className="relative">
            <img
                className="h-16 w-16 object-cover rounded-full"
                src={officer.avatar.src}
                alt={officer.avatar.alt}
            />
            <span className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
            </div>
        </div>
        <div>
            <h1 className="text-2xl font-bold text-gray-900">{officer.first_name} {officer.last_name}</h1>
            <p className="text-sm font-medium text-gray-500">
                Consulting detective
                {/* - <time dateTime="2020-12-20">December 20, 1887</time> */}
            </p>
        </div>
        </div>

        <div className="justify-stretch mt-6 flex flex-col-reverse space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-y-0 sm:space-x-3 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">   
            {/* <Button kind="outline" onClick={() => openModalDeletePayment()}>Delete Payment</Button>  */}
            {/* <Button onClick={() => openModalUpdatePayment()}>Update Payment</Button> */}
            hi
        </div>

    </article>
    )
}

export default DetectiveListItem;