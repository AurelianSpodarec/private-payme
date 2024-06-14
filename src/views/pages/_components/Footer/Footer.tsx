import Button from "views/atoms/Button/Button";
import { Container, Section } from "views/_ui";

function Footer() {
    const currentTime = new Date()

    return (
    <footer className="relative mx-7 border-t-[1px] border-t-black border-solid">

        <Section className="mb-5 ">
        <Container className="py-14">

            <div className="flex justify-between">
                
                <div>
                    <div className="flex flex-col mb-8">
                        <span className="text-lg mb-1.5">Curated weapons for military needed</span>
                        <Button style={{ "width": "fit-content" }} className="w-fit-content inline-block">Become a supplier</Button>
                    </div>
                    <span className="text-xs">&copy; Copyright Portaire Unlimited {currentTime.getFullYear()}</span>
                </div>

                <div className="flex justify-between">
                    <div className="mr-36">
                        <h3 className="text-lg mb-1">Operations</h3>
                        <ul>
                            <li><a href="#" className="text-sm">Join us</a></li>
                            <li><a href="#" className="text-sm">Military</a></li>
                            <li><a href="#" className="text-sm">Detectives</a></li>
                            <li><a href="#" className="text-sm">Agents</a></li>
                        </ul>
                    </div>

                    <div className="mr-36">
                        <h3 className="text-lg mb-1">Operations</h3>
                        <ul>
                            <li><a href="#" className="text-sm">Join us</a></li>
                            <li><a href="#" className="text-sm">Military</a></li>
                            <li><a href="#" className="text-sm">Detectives</a></li>
                            <li><a href="#" className="text-sm">Agents</a></li>
                        </ul>
                    </div>
                </div>

            </div>

        </Container>
        </Section>

    </footer>
    )
}

export default Footer;