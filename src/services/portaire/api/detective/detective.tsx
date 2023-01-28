import PortaireRequest from "services/portaire/requests/PortaireRequest";

async function getDetectiveList() {
    return PortaireRequest('payment', "GET")
}

export {
    getDetectiveList
}