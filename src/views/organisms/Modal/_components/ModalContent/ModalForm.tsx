function ModalForm({children, onSubimtForm}:any) {
    return (
        <form className="mb-5" onSubmit={(e:any) => onSubimtForm(e)}>
            {children}
        </form>
    )
}

export default ModalForm;