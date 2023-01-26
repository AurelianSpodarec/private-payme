import { BrowserRouter } from "react-router-dom";
import CustomRoutes from "routes/CustomRoutes";;

function Layout() {
    return (
        <BrowserRouter>  
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