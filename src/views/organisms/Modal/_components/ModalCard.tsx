function ModalCard({children}:any) {
    return (
    <div 
        className="w-[410px] my-auto mx-auto bg-white rounded-md" 
        style={{ "boxShadow": "0px 0px 10px rgba(0, 0, 0, 0.25)" }}
    >
        <div className="p-4 md:p-8">
        
            {children}

        </div>
    </div>
    )
}

export default ModalCard;