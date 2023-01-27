import { useAuth } from "context/authContext";
import useModal from "context/useModal";
import { useEffect, useState } from "react";
import Button from "views/atoms/Button/Button";


function Home() {
    const AuthContextAPI = useAuth();
    const ModalContextAPI = useModal()
    
    const User = AuthContextAPI.authData.user;

    function openModalUpdatePayment() {
        ModalContextAPI.open()
        ModalContextAPI.setConfig({
            type: "payment",
            option: "update",
            fields: [{...User}] 
        })
    }

    function openModalDeletePayment() {
        ModalContextAPI.open()
        ModalContextAPI.setConfig({
            type: "payment",
            option: "delete",
            fields: [{...User}] 
        })
    }

 
    return (
        <div className="p-8">

            <section className="mx-auto max-w-3xl px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">

                <div className="flex items-center space-x-5">
                <div className="flex-shrink-0">
                    <div className="relative">
                    <img
                        className="h-16 w-16 object-cover rounded-full"
                        src="https://i.guim.co.uk/img/media/ffc016b01f45eeec94ff69dc59eb65a9137ae52a/0_95_3500_2101/master/3500.jpg?width=1200&quality=85&auto=format&fit=max&s=dda2e0a55ff16a86bc1d7dc6cb86f0b1"
                        alt=""
                    />
                    <span className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">{User.first_name} {User.last_name}</h1>
                    <p className="text-sm font-medium text-gray-500">
                        Consulting detective -
                        <time dateTime="2020-12-20">December 20, 1887</time>
                    </p>
                </div>
                </div>

                <div className="justify-stretch mt-6 flex flex-col-reverse space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-y-0 sm:space-x-3 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">   
                    <Button kind="outline" onClick={() => openModalDeletePayment()}>Delete Payment</Button> 
                    <Button onClick={() => openModalUpdatePayment()}>Update Payment</Button>
                </div>

            </section>

{/* 
            <section aria-labelledby="applicant-information-title w-full">
                <div className="bg-white shadow sm:rounded-lg w-full">

                    <div className="px-4 py-5 sm:px-6">
                        <h2 id="applicant-information-title" className="text-lg font-medium leading-6 text-gray-900">
                            Detective Information
                        </h2>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and payment</p>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-5 sm:px-6 w-full">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                        <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Address One</dt>
                        <dd className="mt-1 text-sm text-gray-900">{User.address_one}</dd>
                        </div>

                        <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Address Two</dt>
                        <dd className="mt-1 text-sm text-gray-900">{User.address_two}</dd>
                        </div>

                        <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Country</dt>
                        <dd className="mt-1 text-sm text-gray-900">{User.country === " " ? "Set Country" : User.country}</dd>
                        </div>

                        <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">State</dt>
                        <dd className="mt-1 text-sm text-gray-900">{User.state}</dd>
                        </div>

                        <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Email Address</dt>
                        <dd className="mt-1 text-sm text-gray-900">{User.email}</dd>
                        </div>
 
                        
                    </dl>
                    </div>

                </div>
                </section> */}
 
        </div>
    )
}

export default Home;