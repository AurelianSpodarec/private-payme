import { BrowserRouter } from "react-router-dom";

import CustomRoutes from "routes/CustomRoutes";
import CreateModal from "views/organisms/Modal/CreateModal";

function Layout() {
    return (
        <BrowserRouter>  

        <CreateModal />

        <div className="flex h-full overflow-hidden">

                <header>
                    {/* Imaginary Header */}
                </header>

                <main>
                    <CustomRoutes />
                </main>

                <footer>
                    {/* Imaginary Footer */}
                </footer>
           
        </div>
        </BrowserRouter>
    )
}

export default Layout;