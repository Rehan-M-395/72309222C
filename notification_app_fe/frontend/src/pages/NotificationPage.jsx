import { useEffect, useState } from "react";
import { getNotifications } from "../services/notificationService";

const NotificationPage = () => {

    const [notifications, setNotifications] = useState([]);

    useEffect(() => {

        const fetchData = async () => {

            const data = await getNotifications();

            setNotifications(data);
        };

        fetchData();

    }, []);

    return (

        <div style={{ padding: "20px" }}>

            <h1>Notifications</h1>

            {
                notifications.map((item) => (

                    <div
                        key={item.ID}
                        style={{
                            border: "1px solid gray",
                            padding: "10px",
                            marginBottom: "10px",
                            borderRadius: "10px"
                        }}
                    >

                        <h3>{item.Message}</h3>

                        <p>{item.Type}</p>

                        <small>{item.Timestamp}</small>

                    </div>
                ))
            }

        </div>
    );
};

export default NotificationPage;