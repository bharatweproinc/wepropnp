import Box from "@mui/material/Box";
import { Button, Grid, Typography, Paper, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useForm } from "@inertiajs/react";

export default function UserDetail({ data }) {
    const { setData, get, processing, errors, setError } = useForm();
    const handleUpdate = (id) => {
        get(route("admin.user.edit", { id }));
    };
    return (
        <Box sx={{ backgroundColor: "#f7f7f7" }} className="pb-5">
            <Grid container sx={{}}>
                <Grid
                    item
                    xs={12}
                    style={{
                        // borderRadius: '15px',
                        background: "rgb(236 236 236)",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        height: "35px",
                    }}
                >
                    <Typography sx={{ fontWeight: "bold", marginLeft: "10px" }}>
                        Basic Information
                    </Typography>
                    <Button
                        sx={{ display: "flex", justifyContent: "end" }}
                        onClick={() => handleUpdate(data.id)}
                    >
                        <IconButton aria-label="edit" color="primary">
                            <EditIcon color="info" />
                        </IconButton>
                    </Button>
                </Grid>
            </Grid>
            <br />
            <Grid container className="px-3">
                <Grid item xs={4}>
                    <Typography sx={{ fontWeight: "bold" }}>
                        User Name{" "}
                    </Typography>
                    <Typography className="capitalize">{data.name}</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography sx={{ fontWeight: "bold" }}>Email</Typography>
                    <Typography>{data.email}</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography sx={{ fontWeight: "bold" }}>
                        User Role
                    </Typography>
                    <Typography className="capitalize">
                        {data.user_role.replace("_", " ")}
                    </Typography>
                </Grid>
            </Grid>
            <br />
            <Grid container className="px-3">
                <Grid item xs={4}>
                    <Typography sx={{ fontWeight: "bold" }}>Phone </Typography>
                    <Typography className="capitalize">
                        {data.contact_no}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}
