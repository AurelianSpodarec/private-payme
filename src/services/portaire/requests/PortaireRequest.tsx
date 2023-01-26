import { useQuery } from 'react-query';
import { getResponseContent, RequestError } from 'services/requests';
import config from '../config_portaire';

const PortaireRequest = async function (endpoint:string, method: 'GET' | 'POST' | 'PUT' | 'DELETE', data?:any) {
   
    const response = await fetch(`${config.API_URL}/${config.API_VERSION}/${endpoint}`, {
        method,
        "credentials": 'omit',
        "headers": {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(data)
    })

    const content = await getResponseContent(response)

    if (response.ok) return content;
    throw new RequestError(response.statusText, response.status, content)
}

export default PortaireRequest;