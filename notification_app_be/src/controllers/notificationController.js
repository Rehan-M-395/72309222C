import { fetchNotifications } from "../services/notificationService.js";

export const getNotifications = async (req, res) => {

    try {

        const {
            page,
            limit,
            notification_type
        } = req.query;

        const data = await fetchNotifications(
            page,
            limit,
            notification_type
        );

        res.status(200).json(data);

    } catch (error) {

        res.status(500).json({
            message: "Failed to fetch notifications"
        });
    }
};