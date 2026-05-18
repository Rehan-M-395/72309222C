import axios from "axios";
import dotenv from 'dotenv';

dotenv.config({ path: "../.env" });

export const fetchNotifications = async (
    page = 1,
    limit = 10,
    notification_type = ""
) => {

    try {

        const response = await axios.get(
            "http://4.224.186.213/evaluation-service/notifications",
            {
                params: {
                    page,
                    limit,
                    notification_type
                },
                headers: {
                    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
                }
            }
        );

        return response.data;

    } catch (error) {

        console.log(
            error.response?.data || error.message
        );
    }
};