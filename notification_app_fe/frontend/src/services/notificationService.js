import axios from "axios";

export const getNotifications = async () => {
    try {
        const response = await axios.get(
            "http://localhost:3000/notifications"
        );

        console.log(response.data.notifications);

        return response.data.notifications;
    } catch (error) {
        console.error("Error fetching notifications:", error);
        return error.response?.data || error.message;
    }
};