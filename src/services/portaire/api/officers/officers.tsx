import PortaireRequest from "services/portaire/requests/PortaireRequest";

async function getOfficerList() {
    return PortaireRequest('payment', "GET")
}

export {
    getOfficerList
}