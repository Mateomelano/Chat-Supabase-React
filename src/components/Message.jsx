import { useEffect } from "react";
import { formatDate } from "../helpers/formatDate";
import { supabase } from "../supabaseClient";

const Message = ({ message, date, email }) => {

    formatDate(date);

    const getSeccion = async () => {
        const {data} = await supabase.auth.getSession();
        console.log(data.session.user.email);
    }

    useEffect(() => {
        getSeccion();
    }, []);

    return ( 
        <div className="card">
            <p>{message}</p>
            <span>{formatDate(date)}</span>
            <span className="user-email">{email}</span>
        </div>
     );
}
 
export default Message;
