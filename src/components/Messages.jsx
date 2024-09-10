import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import Header from "./Header";
import Message from "./Message";

const Messages = () => {
  const [messages, setMessages] = useState([]);

  const callSupabase = async () => {
    const { data } = await supabase.from("messages").select("*");
    setMessages(data);
    console.log(data);
  };

  useEffect(() => {
    callSupabase();
  }, []);

  return (
    <section className="messages">
      <Header />
      <div className= "content">
        {messages.length > 0 ? (
          messages.map((item, index) => (
            <Message
              key={index}
              message={item.content}
              date={item.created_at}
              email={item.email}
            />
          ))
        ) : (
          <p>No messages available</p>
        )}
      </div>
    </section>
  );
};

export default Messages;
