import React from "react";
import Link from "@docusaurus/Link";
import { TabsComponent } from "./TabsComponent";
import { PrimaryButton } from "./PrimaryButton";

export const PageLayout = (props) => (
    <React.Fragment>
        <div className="container">
            <div className="row mt-12">
                <div className="col col--8 font_large_caps">
                    {props.heading}
                </div>
                <div className="col col--4">
                    <Link to="https://identity.amphoradata.com/Register">
                        <PrimaryButton>Register</PrimaryButton>
                    </Link>
                </div>
            </div>
            <TabsComponent tabs={props.tabs} />

            {props.children}
        </div>
    </React.Fragment>
);
