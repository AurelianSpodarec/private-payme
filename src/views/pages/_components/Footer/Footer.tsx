import Button from "views/atoms/Button/Button";
import { Container, Section } from "views/_ui";

function Footer() {
    const currentTime = new Date()

    return (
    <footer className="mx-7 border-t-[1px] border-t-black border-solid">

        <Section className="mb-5 ">
        <Container className="py-14">
            

            <div>
            <div className="flex flex-col">
                <span className="text-lg mb-1.5">Curated weapons for military in need</span>
                <Button style={{ "width": "fit-content" }} className="w-fit-content inline-block">Become a supplier</Button>
            </div>
                <span className="text-xs">&copy; Copyright Portaire Unlimited {currentTime.getFullYear()}</span>
            </div>

        </Container>
        </Section>

    </footer>
    )
}

export default Footer;