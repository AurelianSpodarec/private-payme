import PortaireRequest from "services/portaire/requests/PortaireRequest";

async function getAuthUser() {
    const res = PortaireRequest('payment', "GET")
    return res;
}

export {
    getAuthUser
}