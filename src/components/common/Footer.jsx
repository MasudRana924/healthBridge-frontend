import { Box, Container, Grid, Typography, Link, Divider } from "@mui/material";
import { Facebook, LinkedIn, Instagram } from "@mui/icons-material";

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "#480ca8",
                py: 4,
                color: "white",
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography
                            variant="h6"
                            gutterBottom
                            sx={{ fontSize: "16px", fontWeight: "bold", lineHeight: "1.5" }}
                        >
                            Our Services
                        </Typography>
                        <Box sx={{ pl: 0, fontSize: "14px" }}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Typography
                                        variant="body2"
                                        gutterBottom
                                        sx={{ fontSize: "14px", lineHeight: "1.8" }}
                                    >
                                        <Link href="#" color="inherit" underline="none">
                                            Find Doctors
                                        </Link>
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        gutterBottom
                                        sx={{ fontSize: "14px", lineHeight: "1.8" }}
                                    >
                                        <Link href="#" color="inherit" underline="none">
                                            Order Medicine
                                        </Link>
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        gutterBottom
                                        sx={{ fontSize: "14px", lineHeight: "1.8" }}
                                    >
                                        <Link href="#" color="inherit" underline="none">
                                            Book Nurses
                                        </Link>
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography
                                        variant="body2"
                                        gutterBottom
                                        sx={{ fontSize: "14px", lineHeight: "1.8" }}
                                    >
                                        <Link href="#" color="inherit" underline="none">
                                            Call Ambulance
                                        </Link>
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        gutterBottom
                                        sx={{ fontSize: "14px", lineHeight: "1.8" }}
                                    >
                                        <Link href="#" color="inherit" underline="none">
                                            Health Packages
                                        </Link>
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        gutterBottom
                                        sx={{ fontSize: "14px", lineHeight: "1.8" }}
                                    >
                                        <Link href="#" color="inherit" underline="none">
                                            Lab Tests
                                        </Link>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Typography
                            variant="h6"
                            gutterBottom
                            sx={{ fontSize: "16px", fontWeight: "bold", lineHeight: "1.5" }}
                        >
                            Payment Options
                        </Typography>
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: "repeat(1, 1fr)",
                                gap: "8px",
                            }}
                        >
                            <img
                                src="/api/placeholder/240/80"
                                alt="Payment Methods Accepted"
                                style={{ maxWidth: "80%" }}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Typography
                            variant="h6"
                            gutterBottom
                            sx={{ fontSize: "16px", fontWeight: "bold", lineHeight: "1.5" }}
                        >
                            24/7 Medical Support
                        </Typography>
                        <Typography
                            variant="body2"
                            gutterBottom
                            sx={{ fontSize: "14px", lineHeight: "1.8" }}
                        >
                            Emergency medical assistance available 24/7. Our dedicated team is always ready to help you with medical emergencies, doctor appointments, and MedEase queries.
                        </Typography>
                        <Typography
                            variant="h6"
                            gutterBottom
                            sx={{
                                fontSize: "16px",
                                fontWeight: "bold",
                                lineHeight: "1.5",
                                mt: 2,
                            }}
                        >
                            Main Medical Center
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ fontSize: "14px", lineHeight: "1.8" }}
                        >
                            MedEase Medical Center
                            <br />
                            123 Medical Avenue
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Typography
                            variant="h6"
                            gutterBottom
                            sx={{ fontSize: "16px", fontWeight: "bold", lineHeight: "1.5" }}
                        >
                            Contact Us
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ fontSize: "14px", lineHeight: "1.8" }}
                        >
                            Emergency: 1-800-Medease
                            <br />
                            support@MedEase.com
                            <br />
                            Appointments: +1 (555) 123-4567
                        </Typography>
                        <Box sx={{ display: "flex", gap: "12px", mt: 2 }}>
                            <Link
                                href="#"
                                color="inherit"
                                underline="none"
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "36px",
                                    height: "36px",
                                    borderRadius: "50%",
                                    backgroundColor: "#3b5998",
                                    color: "white",
                                    transition: "background-color 0.3s",
                                    "&:hover": {
                                        backgroundColor: "#2d4373",
                                    },
                                }}
                            >
                                <Facebook />
                            </Link>
                            <Link
                                href="#"
                                color="inherit"
                                underline="none"
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "36px",
                                    height: "36px",
                                    borderRadius: "50%",
                                    backgroundColor: "#0A66C2",
                                    color: "white",
                                    transition: "background-color 0.3s",
                                    "&:hover": {
                                        backgroundColor: "#003b75",
                                    },
                                }}
                            >
                                <LinkedIn />
                            </Link>
                            <Link
                                href="#"
                                color="inherit"
                                underline="none"
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "36px",
                                    height: "36px",
                                    borderRadius: "50%",
                                    backgroundColor: "#E4405F",
                                    color: "white",
                                    transition: "background-color 0.3s",
                                    "&:hover": {
                                        backgroundColor: "#D81B60",
                                    },
                                }}
                            >
                                <Instagram />
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
                <Divider sx={{ mt: 2 }} />
                <Box
                    sx={{
                        mt: 2,
                        textAlign: "center",
                    }}
                >
                    <Typography
                        variant="body2"
                        sx={{ fontSize: "14px", lineHeight: "1.5" }}
                    >
                        © {new Date().getFullYear()} MedEase Hub - Your Complete MedEase Solution
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;