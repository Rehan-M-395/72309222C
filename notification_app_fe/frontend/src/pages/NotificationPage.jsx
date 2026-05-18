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

        <div>

            <h1>Notifications</h1>

            {
                notifications?.map((item, index) => (

                    <div key={index}>

                        <h3>{item.message}</h3>

                        <p>{item.type}</p>

                    </div>
                ))
            }

        </div>
    );
};

export default NotificationPage;