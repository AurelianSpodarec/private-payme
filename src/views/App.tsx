import { useAuth } from 'context/authContext';
import { useEffect } from 'react';
import { getAuthUser } from 'services/portaire/api/user/user';
import Layout from './pages/Layout';

function App() {
    const AuthContextAPI = useAuth();
 
    useEffect( () => {
        async function fetchAuthUser() {
            const res = await getAuthUser()
            AuthContextAPI.authData.user = res[0]
        }    

        fetchAuthUser()
    }, [])

    return <Layout />
        
}

export default App;