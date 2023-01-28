import { useEffect, useState } from "react";

import { useAuth } from "context/authContext";
import useModal from "context/useModal";

import { getDetectiveList } from "services/portaire/api/detective/detective";

import { Container, Section } from "views/_ui";
import Button from "views/atoms/Button/Button";
import Heading from "views/molecules/Heading";
import Quote from "views/molecules/Quote";

import DetectiveListIndex from "../Detective/_components/DetectiveListIndex";


function Home() {

    const [detectiveList, setDetectiveList]:any = useState([])

    async function fetchOfficerList() {
        const res:any = await getDetectiveList()
        res[0].avatar = {
            src: "https://i.guim.co.uk/img/media/ffc016b01f45eeec94ff69dc59eb65a9137ae52a/0_95_3500_2101/master/3500.jpg?width=1200&quality=85&auto=format&fit=max&s=dda2e0a55ff16a86bc1d7dc6cb86f0b1",
            alt: "Pictureof Sherlok"
        }
        console.log("ressssss", res)

        const randomData = [
            {"_id":"63d2b04dfsdg4f4rrff97cb2", "avatar": { "src": "https://i.guim.co.uk/img/media/4eb3231a2d6053a4923e5b9c022d5f470b9080a9/0_591_2417_1450/master/2417.jpg?width=465&quality=85&dpr=1&s=none", "alt": ""}, "email":"jamesbond@mi5.co.uk","first_name":"James","last_name":"Bond","address_one":"CLASSIFIED","address_two":"CLASSIFIED","state":"London","post_code":"CLASSIFIED","active": false, "__v":0},
            {"_id":"63d2b028334rfffgfer34442", "avatar": { "src": "https://static01.nyt.com/images/2011/06/25/arts/25falk-span/25falk-span-articleLarge.jpg?quality=75&auto=webp&disable=upscale", "alt": ""}, "email":"john@doe.com","first_name":"Peter","last_name":"Falk","address_one":"221b Baker St","address_two":"London","state":"London","post_code":"NW1 6XE","active": false, "__v":0}
        ]

        setDetectiveList([...randomData, res[0]].reverse())
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

            <Section className="bg-[#f2efe9] py-20 mx-7 my-10 mb-5 h-[400px]">
            <Container className="">

                <h1 className="text-5xl text-black">The hard way to deal with criminals</h1>

            </Container>
            </Section>

          
            <Section className="py-4">
            <Container>

                <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-6">
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <img className="h-12" src="https://global-uploads.webflow.com/5fc6b6c9b4295a89cef9f9ac/633ee1596c0915db93edd76f_Diespeker_logo_keyline-p-500.png" alt="Tuple" />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <img className="h-12" src="https://global-uploads.webflow.com/5fc6b6c9b4295a89cef9f9ac/6143431faac85f1e24305c48_pouredproject.png" alt="Tuple" />
                    </div>

                  
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <img className="h-12" src="https://global-uploads.webflow.com/5fc6b6c9b4295a89cef9f9ac/633ee15a8e3c6a633a725881_maria%20starling.png" alt="Mirage" />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <img className="h-12" src="https://global-uploads.webflow.com/5fc6b6c9b4295a89cef9f9ac/633ee159eb698e476ff7cf87_decoralogobig-p-500.png" alt="StaticKit" />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                    <img
                        className="h-12"
                        src="https://global-uploads.webflow.com/5fc6b6c9b4295a89cef9f9ac/633ee15ab95156377b5892d7_Tim%20Page%20Carpets.png"
                        alt="Transistor"
                    />
                    </div>
                    <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                    <img
                        className="h-12"
                        src="https://global-uploads.webflow.com/5fc6b6c9b4295a89cef9f9ac/633ee1594030c41a7a782038_Holmes%20Bespoke.png"
                        alt="Workcation"
                    />
                    </div>
                </div>
               
            </Container>
            </Section>




            <Section className="my-10">
            <Container className="max-w-7xl">

                <Heading title="Detectives" />
                <DetectiveListIndex items={detectiveList} />

            </Container>
            </Section>

            <Section className="my-5">
            <Container className="max-w-7xl">
                <Quote 
                    quote="For us the biggest success has been eliminating all of corrupt police officers that citizens used to complain about." 
                    author="Asthley Kooupierman"
                    company={{name: "AmbitonCord", "link": "#"}}
                />
            </Container>
            </Section>
 
        </div>
    )
}

export default Home;