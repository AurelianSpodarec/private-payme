import useModal from "context/useModal";
import Button from "views/atoms/Button/Button";

function ModalUpdatePayment({config}:ModalUpdatePaymentProps) {
    const modalContext = useModal()

    const { id, type, title, description, onAction, option, fields } = config;

    console.log("Modal payment", fields)

    function buildForm() {
        // TODO:
        // ORDER:
    }

    function handleAction(e:any) {
        e.preventDefault()
        onAction()
        modalContext.close()
    }

    function handleCancel(e:any) {
        e.preventDefault()
        modalContext.close()
    }

    {/* 
        TODO:
        - Country should not auto-populate so should be selected manually by the user
        - Card details should not auto-populate so should be entered manually by the user

        // Populate address, address2, state, postcode
    */}
    
    return (
        <div className="w-[410px] my-0 mx-auto bg-[#1f2937] p-1 radius-md">
        <div className="text-white">

            <header>
                <h3 className="text-xl">Update paument method</h3>
            </header>

            <form className="p-4">
                    
                <div>
                 
                    <div className="flex">
                        <div className="relative w-7/12 flex-shrink-0">
                        <input type="text" id="card-no" name="card-no" className="w-full px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Card Number" />
                        <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                            <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z"></path>
                            <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z"></path>
                            </svg>
                        </div>
                        </div>
                        <input type="text" name="credit-expiry" className="w-full px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="MM/YY" />
                        <input type="text" name="credit-cvc" className="w-1/6 flex-shrink-0 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="CVC" />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-100">
                        Address Line 1
                    </label>
                    <div className="mt-1">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="street-address"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-800 text-black shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-100">
                    Address Line 2
                    </label>
                    <div className="mt-1">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="street-address"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-800 text-black shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                    </div>
                </div>

 
                <input placeholder="Country"/>

                <div className="flex flex-row">
                    <div>
                        <label htmlFor="state" className="block text-sm font-medium text-gray-100">
                        State (optional)
                        </label>
                        <div className="mt-1">
                        <input
                            id="state"
                            name="state"
                            type="text"
                            autoComplete="address-level1"
                            required
                            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-800 text-black shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-100">
                       Postcode
                        </label>
                        <div className="mt-1">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="postal-code"
                            required
                            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-800 text-black shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                        </div>
                    </div>
                </div>
            </form>

            <footer>
                <div className="flex flex-row items-center">
                    <Button kind="outline" onClick={(e:any) => handleCancel(e)}>Cancel</Button>
                    <Button kind="solid" onClick={(e:any) => handleAction(e)}>Update</Button>
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