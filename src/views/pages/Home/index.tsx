import { useEffect, useState } from "react";

import { useAuth } from "context/authContext";
import useModal from "hooks/useModal";

import { getDetectiveList } from "services/portaire/api/detective/detective";

import { Container, Section } from "views/_ui";
import Button from "views/atoms/Button/Button";
import Heading from "views/molecules/Heading";
import Quote from "views/molecules/Quote";

import DetectiveListIndex from "../Detective/_components/DetectiveListIndex";
import Tawk from "views/atoms/Tawk";

const randomDetectivesList = [
    {"_id":"63d2b04dfsdg4f4rrff97cb2", "avatar": { "src": "https://i.guim.co.uk/img/media/4eb3231a2d6053a4923e5b9c022d5f470b9080a9/0_591_2417_1450/master/2417.jpg?width=465&quality=85&dpr=1&s=none", "alt": ""}, "email":"jamesbond@mi5.co.uk","first_name":"James","last_name":"Bond","address_one":"CLASSIFIED","address_two":"CLASSIFIED","state":"London","post_code":"CLASSIFIED","active": false, "__v":0},
    {"_id":"63d2b028334rfffgfer34442", "avatar": { "src": "https://static01.nyt.com/images/2011/06/25/arts/25falk-span/25falk-span-articleLarge.jpg?quality=75&auto=webp&disable=upscale", "alt": ""}, "email":"john@doe.com","first_name":"Peter","last_name":"Falk","address_one":"221b Baker St","address_two":"London","state":"London","post_code":"NW1 6XE","active": false, "__v":0}
]

function Home() {

    const [detectiveList, setDetectiveList]:any = useState([])

    async function fetchOfficerList() {
        const res:any = await getDetectiveList()
        res[0].avatar = {
            src: "https://i.guim.co.uk/img/media/ffc016b01f45eeec94ff69dc59eb65a9137ae52a/0_95_3500_2101/master/3500.jpg?width=1200&quality=85&auto=format&fit=max&s=dda2e0a55ff16a86bc1d7dc6cb86f0b1",
            alt: "Picture of Sherlok"
        }

        setDetectiveList([...randomDetectivesList, res[0]].reverse())
    }

    const handleClick = () => {
        const sectionDiv = document.getElementById("detectives");
        const top = sectionDiv?.getBoundingClientRect().top;
        window.scrollTo({
            top: top,
            behavior: 'smooth'
        });
    };
    

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
           
            <Section className="bg-[#f2efe9] py-20 mx-7 my-10 mb-5 relative">
            <Container className="md:py-12 lg:py-28 px-4 md:px-10 lg:px-44">


                <div className="flex flex-row">
                    <div className="md:max-w-[550px] text-center md:text-left">

                    <h1 className="font-medium text-3xl md:font-normal md:text-5xl text-black mb-3">The easy way to become an agent.</h1>
                    <p className="text-xl font-light mb-5">Accelerate world peace and boost governament power by becoming one of the greatest agents and work on classified operations inside the Matrix</p>
                    <Button onClick={() => handleClick()} className="mb-5">Make Payment --{`>`}</Button>

                    <ul className="flex flex-col">
                        <li className="flex flex-row items-center align-center space-x-2">
                            <svg className="w-4" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                <path d="m32.148 92.809-30.77-26.809c-1.6836-1.4609-1.8633-4.0117-0.40234-5.6953 1.4609-1.6836 4.0078-1.8672 5.6953-0.40625l24.609 21.48 61.629-72.77c1.4375-1.6953 3.9727-1.9062 5.668-0.46875 1.6992 1.4336 1.9062 3.9727 0.47266 5.668z"/>
                            </svg>
                            <span className="text-sm">No training required</span>
                        </li>
                        <li className="flex flex-row items-center align-center space-x-2">
                            <svg className="w-4" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                <path d="m32.148 92.809-30.77-26.809c-1.6836-1.4609-1.8633-4.0117-0.40234-5.6953 1.4609-1.6836 4.0078-1.8672 5.6953-0.40625l24.609 21.48 61.629-72.77c1.4375-1.6953 3.9727-1.9062 5.668-0.46875 1.6992 1.4336 1.9062 3.9727 0.47266 5.668z"/>
                            </svg>
                            <span className="text-sm">No limit on amunition</span>
                        </li>
                    </ul>
                    </div>
                   
                    <div>
                        {/* <img className="absolute -bottom-[0] opacity-95 -right-[150px] w-[950px]" src="https://png2.cleanpng.com/sh/819a22ce29701f1991b87482b5114fea/L0KzQYm3V8EzN6JvkpH0aYP2gLBuTgNkfZ11jOd7ZT33db3slvl0cZDzRed5bHBkdH7tjB51NaV3jdc2ZHX3dbT7igZmNWZnTKo6YknpQoHqVcU6NmE9UaM6OES5QYa6UcQ2OmQ2UaM8NEKxgLBu/kisspng-sculpture-television-upload-font-true-detective-5b481b9f20c559.0891184615314523191342.png" alt="Man face" /> */}
                        <img className="hidden md:block absolute md:-bottom-[160px] lg:-bottom-[245px] opacity-95 md:-right-[220px] lg:-right-[180px] md:w-[500px] lg:w-[650px]" src="https://i.imgur.com/lznLsVL.png" alt="Man face" />
                    </div>
                </div>
            </Container>
            </Section>

          
            <Section className="pt-12 pb-4">
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


            <Section id="detectives" className="my-24">
            <Container className="max-w-7xl">
          
                <Heading title="Detectives" />
                <DetectiveListIndex items={detectiveList} />

            </Container>
            </Section>


            <Section className="my-5 pt-10">
            <Container className="max-w-8xl px-7">
                <Quote 
                    quote="For us the biggest success has been instantiating new corrupt police officers that citizens used to complain about." 
                    author="Asthley Kooupierman"
                    company={{name: "AmbitionCord", "link": "#"}}
                />
            </Container>
            </Section>


            <Tawk />
 
        </div>
    )
}

export default Home;