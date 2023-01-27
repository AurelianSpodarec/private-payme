import PortaireRequest from "services/portaire/requests/PortaireRequest";

async function updatePayment(body:{}) {
    return PortaireRequest('payment', "POST", body);
}

async function deletePayment(id:number) {
    return PortaireRequest(`payment/${id}`, "DELETE");
}

export {
    updatePayment,
    deletePayment
}