import PortaireRequest from "services/portaire/requests/PortaireRequest";

async function getAuthUser() {
    return PortaireRequest('payment', "GET")
}

export {
    getAuthUser
}