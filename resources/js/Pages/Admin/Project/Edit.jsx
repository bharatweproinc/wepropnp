import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useState } from "react";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, router, useForm } from "@inertiajs/react";
import { Button, Chip, MenuItem, Select, Typography } from "@mui/material";
import InputError from "@/Components/InputError";

export default function Edit({ data, auth, developer, manager, devId }) {

    const [selectedDevelopers, setSelectedDevelopers] = useState([]);
    const { post, processing, errors, reset } = useForm();
    console.log(developer ,'developer');

    const [item, setItem] = useState({
        title: data.title,
        description: data.description,
        start_date: data.start_date,
        end_date: data.end_date,
        project_manager: data.project_manager,
        developer: devId,
    });

    const handleChange = (e) => {
        setItem((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
    };

    const handleSelect = (event) => {
        setItem({ ...item, developer: event.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post(route("project.update", [data.id]), item);
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="mt-5 flex flex-col sm:justify-center items-center sm:pt-0 bg-gray-100">
                <Head title="Create Project" />

                <div
                    className="w-full  mt-0 px-3 py-2 shadow-md bg-white overflow-hidden sm:rounded-lg"
                    style={{
                        width: "60%",
                        alignContent: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <form onSubmit={handleSubmit}>
                        <div
                            style={{
                                alignItems: "center",
                                display: "flex",
                                justifyContent: "center",
                                paddingBottom: "30px",
                            }}
                        >
                            <Typography
                                variant="h5"
                                style={{ fontWeight: "bold" }}
                            >
                                Edit Project
                            </Typography>
                        </div>
                        <div>
                            <InputLabel htmlFor="title" value="Title" />

                            <TextInput
                                id="title"
                                name="title"
                                value={item.title}
                                className="mt-1 block w-full"
                                autoComplete="name"
                                // isFocused={true}
                                onChange={(e) => handleChange(e)}
                                required
                            />
                              <InputError
                                    message={errors.title}
                                    className="mt-2"
                                />
                        </div>

                        <div className="mt-4">
                            <InputLabel
                                htmlFor="description"
                                value="Description"
                            />

                            <textarea
                                id="description"
                                type="text"
                                name="description"
                                rows={3}
                                value={item.description}
                                className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full"
                                autoComplete="description"
                                onChange={(e) => handleChange(e)}
                                required
                            />
                               <InputError
                                    message={errors.description}
                                    className="mt-2"
                                />
                        </div>

                        <div className="mt-4">
                            <InputLabel
                                htmlFor="developer"
                                value="Select Manager"
                            />
                            <select
                                value={item.project_manager}
                                name="project_manager"
                                className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full"
                                onChange={(e) => handleChange(e)}
                                required
                            >
                                {manager.map((mngr, index) => {
                                    return (
                                        <option value={mngr} key={index}>
                                            {mngr}
                                        </option>
                                    );
                                })}
                            </select>
                            <InputError
                                    message={errors.project_manager}
                                    className="mt-2"
                                />
                        </div>


                        <div className="mt-4">
                            <InputLabel
                                htmlFor="developer"
                                value="Select Developer"
                            />

                            <Select
                                multiple
                                value={item.developer}
                                onChange={handleSelect}
                                style={{ height: "43px" }}
                                className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full"
                            >
                                <MenuItem>Select Developer</MenuItem>
                                {developer.map((dev) => (
                                    <MenuItem key={dev.name} value={dev.id} >
                                        {dev.name} ({dev.user_role=="senior_developer"? "Senior" : "Junior"})
                                    </MenuItem>
                                ))}
                            </Select>
                            <InputError
                                    message={errors.developer}
                                    className="mt-2"
                                />

                        </div>


                        <div
                            style={{
                                display: "flex",
                                justifyContent: "",
                            }}
                        >
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="start_date"
                                    value="Start Date"
                                />

                                <TextInput
                                    id="start_date"
                                    type="date"
                                    name="start_date"
                                    value={item.start_date}
                                    className="mt-1 "
                                    style={{ width: "526px" }}
                                    autoComplete="start_date"
                                    onChange={(e) => handleChange(e)}
                                    required
                                />
                                 <InputError
                                    message={errors.start_date}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="end_date"
                                    value="End Date"
                                    style={{ marginLeft: "20px" }}
                                />

                                <TextInput
                                    id="end_date"
                                    type="date"
                                    name="end_date"
                                    style={{
                                        width: "526px",
                                        marginLeft: "20px",
                                    }}
                                    value={item.end_date}
                                    className="mt-1 block w-full"
                                    autoComplete="end_date"
                                    onChange={(e) => handleChange(e)}
                                    required
                                />
                                  <InputError
                                    message={errors.end_date}
                                    className="mt-2"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-center m-8">

                            <PrimaryButton
                                    className="ms-4"
                                    variant="contained"
                                    disabled={processing}
                                    style={{ height:"40px" ,backgroundColor:'#1976d2'}}
                                >
                                    Update Project
                                </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}