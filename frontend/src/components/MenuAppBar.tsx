import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Tabs from '@mui/material/Tabs/Tabs';
import Tab from '@mui/material/Tab';
import { Organization } from '../Models/models';


interface MenuBarProps {
    organizations: Organization[]
    activeOrganization: Organization;
    setActiveOrganization: (o: Organization) => void;
    setActiveTab: (n: number) => void
    activeTab: number;
}

export default function MenuAppBar(props: MenuBarProps) {

    const { organizations, activeOrganization, setActiveOrganization, activeTab: activeTab, setActiveTab: setActiveTab } = props
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const selectActiveOrganization = (i: number) => {
        setActiveTab(0);
        setActiveOrganization(organizations[i]);
        handleClose();
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    const setDefaultConfig = () => {
        const defaultConfigSupplier = [
            { name: "Car Manufacturer", id: "CarManufacturerID", address: "http://localhost:8081", authorizationEnum: "private", token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTdXBwbGllcklEIn0.wkVmy2qmu7KI2lTn44LBBJfi9gTjbDE71SDlfXqgb3I" },
            { name: "Test Driver", id: "TestDriverID", address: "http://localhost:8082", authorizationEnum: "public", token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTdXBwbGllcklEIn0.gq3e6A_AI9flcXpVwDDQL1NN3qWKQyKVdnkcymZ_WpU" },
            { name: "Tester", id:"TesterID", address: "http://localhost:8083",authorizationEnum: "private", token:"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTdXBwbGllcklEIn0.-UuG1DBm5QwuJZd2u4bivamg32Ea7rD-P1iXK5fAEz0"},
            { name: "Software Company", id:"SoftwareCompanyID", address: "http://localhost:8084",authorizationEnum: "private", token:"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTdXBwbGllcklEIn0.u-S811sQhquFXHQOiYqUemDZBB1Y4P-h0fOQSGwi9AA"},
        ]
        const defaultConfigCarManufacturer = [
            { name: "Supplier", id: "SupplierID", address: "http://localhost:8080", authorizationEnum: "minimum", token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJDYXJNYW51ZmFjdHVyZXJJRCJ9.H8JIAef640_FfMlhLqx9y3JOlbrflISnfleMwfbhrF4" },
            { name: "Test Driver", id: "TestDriverID", address: "http://localhost:8082", authorizationEnum: "minimum", token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJDYXJNYW51ZmFjdHVyZXJJRCJ9.IMm9Yg4trAxsyleQcMG7ny7f0lDTJ9OkDRxqzT4lyYs" },
            { name: "Tester", id:"TesterID", address: "http://localhost:8083",authorizationEnum: "minimum", token:"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJDYXJNYW51ZmFjdHVyZXJJRCJ9.MNhgKifqJCapIYT1Q1zSPKBhgShfBno5qtTuLKUBkZI"},
            { name: "Software Company", id:"SoftwareCompanyID", address: "http://localhost:8084",authorizationEnum: "minimum", token:"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJDYXJNYW51ZmFjdHVyZXJJRCJ9.675w_6fhdVmP8EOMYD3xppP1HVykIQqlIzQ10MEfJag"},
        ]
        const defaultConfigTestDriver = [
            { name: "Supplier", id: "SupplierID", address: "http://localhost:8080", authorizationEnum: "private", token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJUZXN0RHJpdmVySUQifQ.jrCJEjXh60PIe7qTMNSQWgHeHLSJb-AJQyCt1Mz3VuY" },
            { name: "Car Manufacturer", id: "CarManufacturerID", address: "http://localhost:8081", authorizationEnum: "private", token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJUZXN0RHJpdmVySUQifQ.m7p49FcJOh3ZTFRbXNkrwwITvhsLmOoIRBifv3YI37s" },
            { name: "Tester", id:"TesterID", address: "http://localhost:8083",authorizationEnum: "private", token:"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJUZXN0RHJpdmVySUQifQ.GM9UxTt2ndPEnBQ4BXRdWM2NWsVislCHxr2Uf14900Y"},
            { name: "Software Company", id:"SoftwareCompanyID", address: "http://localhost:8084",authorizationEnum: "private", token:"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJUZXN0RHJpdmVySUQifQ.FyFoVlwTuuc9Yxwv_L1V7otsb4nF10DUAw9NZ5lOExs"},
        ]
        const defaultConfigTester = [
            { name: "Car Manufacturer", id: "CarManufacturerID", address: "http://localhost:8081", authorizationEnum: "private", token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJUZXN0ZXJJRCJ9.mTiVjXsRab9MJko8ypRnvEoawMpSCU1jObH4k9jyj4o" },
            { name: "Supplier", id:"SupplierID", address: "http://localhost:8080",authorizationEnum: "private", token:"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJUZXN0ZXJJRCJ9.e_pXq2zRsdVrg0kKDPZQfE3zJLOfx9fFMefMnOFUUAY"},
            { name: "Test Driver", id: "TestDriverID", address: "http://localhost:8082", authorizationEnum: "public", token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJUZXN0ZXJJRCJ9.xI4LTp8zgBSvwCbxUhrPy8d651SCpd4kxpzdOeR7pqs" },
            { name: "Software Company", id:"SoftwareCompanyID", address: "http://localhost:8084",authorizationEnum: "private", token:"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJUZXN0ZXJJRCJ9.7Fe-eLLwgP00_D85p_QCUjmz635zw0iYQtH8mFfwxaI"},
        ]
        const defaultConfigSC = [
            { name: "Car Manufacturer", id: "CarManufacturerID", address: "http://localhost:8081", authorizationEnum: "private", token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTb2Z0d2FyZUNvbXBhbnlJRCJ9.cTo_J45xsIsG2Y50Z0cSoOcbQ6ij4_gb9JKOVjcNFxc" },
            { name: "Supplier", id:"SupplierID", address: "http://localhost:8080",authorizationEnum: "private", token:"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTb2Z0d2FyZUNvbXBhbnlJRCJ9.GqgAFEj4plIYWN2Y0T9EuweAwA1nNmIvLMNIHgc9ufE"},
            { name: "Test Driver", id: "TestDriverID", address: "http://localhost:8082", authorizationEnum: "public", token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTb2Z0d2FyZUNvbXBhbnlJRCJ9.WrJuXXo-oOdMV42vcX71rX51mpWWz6PUXSXh6XVztL0" },
            { name: "Tester", id:"TesterID", address: "http://localhost:8083",authorizationEnum: "private", token:"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTb2Z0d2FyZUNvbXBhbnlJRCJ9.JphWNM8ZonNvNYBRna4EK4XG2lk6B-JrRafrP3vtzFE"},
        ]
        defaultConfigSupplier.forEach((organization) => {
            safeConfig(organization, "http://localhost:8080");
        });
        defaultConfigCarManufacturer.forEach((organization) => {
            safeConfig(organization, "http://localhost:8081");
        });
        defaultConfigTestDriver.forEach((organization) => {
            safeConfig(organization, "http://localhost:8082");
        });
        defaultConfigTester.forEach((organization) => {
            safeConfig(organization, "http://localhost:8083");
        });
        defaultConfigSC.forEach((organization) => {
            safeConfig(organization, "http://localhost:8084");
        });
    }

    const safeConfig = async (organization: Organization, address: string) => {
        let resp = await fetch(address + '/config/setconfig', {
            method: 'POST',
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify(organization)
        });
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Tabs onChange={() => { }} value={activeTab} textColor="secondary">
                        <Tab label="Configuration" onClick={() => setActiveTab(0)} />
                        <Tab label="Discovery" onClick={() => setActiveTab(1)} />
                    </Tabs>
                    <Typography sx={{ flexGrow: 1 }}>
                    </Typography >
                    <Typography color="white">
                        {activeOrganization.name}
                    </Typography >
                    <div>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={() => selectActiveOrganization(0)}>{organizations[0].name}</MenuItem>
                            <MenuItem onClick={() => selectActiveOrganization(1)}>{organizations[1].name}</MenuItem>
                            <MenuItem onClick={() => setDefaultConfig()}>Set Default Config</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}