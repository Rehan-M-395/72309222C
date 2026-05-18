import { useEffect, useState } from "react";

import {
    Container,
    Typography,
    Card,
    CardContent,
    Chip,
    Stack
} from "@mui/material";

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

        <Container maxWidth="md" sx={{ mt: 4 }}>

            <Typography
                variant="h4"
                fontWeight="bold"
                gutterBottom
            >
                Notifications
            </Typography>

            <Stack spacing={2}>

                {
                    notifications.map((item) => (

                        <Card
                            key={item.ID}
                            sx={{
                                borderRadius: 3,
                                boxShadow: 3
                            }}
                        >

                            <CardContent>

                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    mb={1}
                                >

                                    <Typography variant="h6">
                                        {item.Message}
                                    </Typography>

                                    <Chip
                                        label={item.Type}
                                        color={
                                            item.Type === "Placement"
                                                ? "success"
                                                : item.Type === "Result"
                                                    ? "primary"
                                                    : "warning"
                                        }
                                    />
                                </Stack>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {item.Timestamp}
                                </Typography>

                            </CardContent>

                        </Card>
                    ))
                }

            </Stack>

        </Container>
    );
};

export default NotificationPage;