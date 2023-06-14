import { Add, Save } from "@mui/icons-material";
import { Button, FormControl, IconButton, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { Organization } from "../Models/models";


interface ConfigProps {
    activeOrganization: Organization;
}

export default function Config(props: ConfigProps) {
    const { activeOrganization } = props;

    const [organizations, setOrganizations] = React.useState<Organization[]>([]);

    const getConfig = async () => {
        const response = await fetch(activeOrganization.address + '/config/getconfig');
        const config = await response.json();
        console.log(config);
        setOrganizations(config);
    }

    const safeConfig = async (organization: Organization) => {
        let resp = await fetch(activeOrganization.address + '/config/setconfig', {
            method: 'POST',
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify(organization)
        });
    }

    useEffect(() => {
        getConfig();
    }, [])

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell >Organization</TableCell>
                        <TableCell >Id</TableCell>
                        <TableCell >Address</TableCell>
                        <TableCell >Token</TableCell>
                        <TableCell >Authorization</TableCell>
                        <TableCell >
                            <IconButton aria-label="add" onClick={() => {
                                setOrganizations(organizations.concat({}))
                            }}>
                                <Add />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {organizations.map((organization) => (
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>
                                <TextField variant="outlined" value={organization.name} onBlur={(e) => { organization.name = e.target.value }} />
                            </TableCell>
                            <TableCell >
                                <TextField variant="outlined" value={organization.id} onBlur={(e) => { organization.id = e.target.value }} />
                            </TableCell>
                            <TableCell >
                                <TextField variant="outlined" value={organization.address} onBlur={(e) => { organization.address = e.target.value }} />
                            </TableCell>
                            <TableCell >
                                <TextField variant="outlined" value={organization.token} onBlur={(e) => { organization.token = e.target.value }} />
                            </TableCell>
                            <TableCell >
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={organization.authorizationEnum}
                                        label="Age"
                                        onChange={(e) => { organization.authorizationEnum = e.target.value }}
                                    >
                                        <MenuItem value={"minimum"}>Minimum</MenuItem>
                                        <MenuItem value={"public"}>Public</MenuItem>
                                        <MenuItem value={"private"}>Private</MenuItem>
                                    </Select>
                                </FormControl>
                            </TableCell>
                            <TableCell >
                                <Button onClick={() => safeConfig(organization)} variant="outlined">Save</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}