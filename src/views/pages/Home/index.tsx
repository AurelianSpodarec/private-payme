import { useAuth } from "context/authContext";
import useModal from "context/useModal";
import { useEffect, useState } from "react";
import { getOfficerList } from "services/portaire/api/officers/officers";
import Button from "views/atoms/Button/Button";
import Quote from "views/molecules/Quote";
import { Container } from "views/_ui";


function OfficerListItem({officer, onClickDelete, onClickUpdate}:any) {
    return (
    <article className="md:flex md:items-center md:justify-between md:space-x-5">

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
            <h1 className="text-2xl font-bold text-gray-900">{officer.first_name} {officer.last_name}</h1>
            <p className="text-sm font-medium text-gray-500">
                Consulting detective -
                <time dateTime="2020-12-20">December 20, 1887</time>
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

function OfficerListIndex({ items }: any) {

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

    return items.length !== 0 && items.map((item: any) => (
        <OfficerListItem key={item._id} officer={item} />
    ));
}

function Home() {

    const [officerList, setOfficerList] = useState([])

    async function fetchOfficerList() {
        const res = await getOfficerList()
        console.log("ressssss", res)
        setOfficerList(res)
    }

    useEffect(() => {
        fetchOfficerList()
    }, [])
 
    return (
        <div className="">

            {/* <div>
            <h1>Do you feel malicious today? Update a detective's payment details at random! 
                <Button>Random Update</Button>
            </h1>
            </div> */}

            <section className="bg-[#f2efe9] py-20">

                The hard way to deal with criminals
            </section>


            <Container className="max-w-7xl">
                <header>
                <div className="h-[1px] bg-[#111] mb-5 w-full"></div>
                <div className="flex justify-between items-center mb-5">
                    <h2 className="text-2xl font-medium uppercase">Officers</h2>
                    <Button>View All</Button>
                </div>
                </header>

                <OfficerListIndex items={officerList} />
            </Container>

            <Container className="max-w-7xl">
                <Quote 
                    quote="For us the biggest success has been eliminating all of corrupt police officers that citizens used to complain about." 
                    author="Asthley Kooupierman"
                    company={{name: "AmbitonCord", "link": "#"}}
                />
            </Container>
 
        </div>
    )
}

export default Home;