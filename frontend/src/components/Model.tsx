import { Button, Container, Grid, List, ListItem, ListItemText } from '@mui/material';
import * as React from 'react';
//@ts-ignore
import Modeler from "bpmn-js/lib/Modeler";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";
import { Organization } from '../Models/models';

interface ModelProps {
    activeOrganization: Organization;
}

export default function Model(props: ModelProps) {

    const { activeOrganization: activeOrganization } = props;
    let modeler: any;

    const getPriveteModel = async () => {
        if (modeler != undefined) {
            modeler.detach();
        }
        const response = await fetch(activeOrganization.address + '/discover/privatemodel');
        const model = await response.json();
        console.log(model);
        createModel(model);
    }

    const getPublicModel = async () => {
        if (modeler != undefined) {
            modeler.detach();
        }
        const response = await fetch(activeOrganization.address + '/discover/publicmodel');
        const model = await response.json();
        console.log(model);
        createModel(model);
    }

    const getCoModel = async () => {
        if (modeler != undefined) {
            modeler.detach();
        }
        const response = await fetch(activeOrganization.address + '/discover/comodel');
        const model = await response.json();
        console.log(model);
        createModel(model);
    }

    const createModel = (model: any) => {


        const container = document.getElementById("modelContainer")!;

        modeler = new Modeler({
            height: "650px",
            container,
            keyboard: {
                bindTo: document
            },
            textRenderer: {
                defaultStyle: {
                    fontSize: "16px"
                },
                externalStyle: {
                    fontSize: "16px"
                }
            },
        });

        modeler
            .importXML(model)
            .then((warnings: any) => {
                if (warnings.length) {
                    console.log(warnings);
                }

                const canvas: any = modeler.get("canvas");

                canvas.zoom("fit-viewport");
            })
            .catch((err: any) => {
                console.log(err);
            });
    }

    return <div style={{ height: "100%", width: "100%" }}>
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <List>
                    <ListItem>
                        <Button onClick={getPriveteModel} variant="outlined">Private Model</Button>
                    </ListItem>
                    <ListItem>
                        <Button onClick={getPublicModel} variant="outlined">Public Model</Button>
                    </ListItem>
                    <ListItem>
                        <Button onClick={getCoModel} variant="outlined">Global Model</Button>
                    </ListItem>
                </List>
            </Grid>
            <Grid item xs={10}>
                <div style={{ height: "100%", width: "100%" }} id="modelContainer"></div>
            </Grid>
        </Grid>
    </div>
}