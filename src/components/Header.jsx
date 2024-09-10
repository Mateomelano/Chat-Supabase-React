import Arrow  from "./icons/Arrow";
import { supabase } from "../supabaseClient";
const Header = () => {

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        window.location.reload()
    }



    return ( 
        <div className="header">
            <div className="left">
                <p onClick={handleLogout}> <Arrow /> </p>
            </div>
        </div>
     );
}
 
export default Header;