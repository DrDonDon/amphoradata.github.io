import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import classnames from "classnames";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "../styles.module.css";
import { FindDataTabs } from "../../components/TabsComponent";
import { PageLayout } from "../../components/PageLayout";

function FindData() {
    return (
        <Layout title="Data Catalogue">
            <PageLayout
                tabs={FindDataTabs}
                heading="Get the insight you need in 30 seconds"
            >
                <div>
                    {features && features.length && (
                        <section className={styles.features}>
                            <div className="container">
                                <div>
                                    {features.map((props, idx) => (
                                        <Feature key={idx} {...props} />
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}
                </div>
            </PageLayout>
        </Layout>
    );
}

const features = [
    {
        title: <>Weather forecasts</>,
        imageUrl: "img/forecast_image.png",
        description: (
            <>
                7 day weather forecasts for any location in Australia 100s of
                locations available now for $2 per month. More available on
                request.
            </>
        ),
    },
    {
        title: <>Weather actuals</>,
        imageUrl: "img/weather_actuals.PNG",
        description: (
            <>
                Real-time actuals of weather parameters for any location in
                Australia 100s of locations available now for $2 per month. More
                available on request.
            </>
        ),
    },
    {
        title: <>Solar Irradiance</>,
        imageUrl: "img/solar_image.png",
        description: (
            <>
                Real-time actuals of solar irradiance for any location in
                Australia Any location available on request for $2 per month.
            </>
        ),
    },
    {
        title: <>Comparison of actuals to month forecast﻿</>,
        imageUrl: "img/month_forecast.PNG",
        description: (
            <>
                Comparison of actual rainfall and temperature to BOM month
                forecast across Australia. Any location available on request for
                $2 per month.
            </>
        ),
    },
];

function Feature({ imageUrl, title, description }) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div
            className={classnames("row", styles.feature)}
            style={{ paddingBottom: "30px" }}
        >
            {imgUrl && (
                <div
                    className="text--center"
                    style={{ paddingLeft: "60px", paddingRight: "60px" }}
                >
                    <img
                        className={styles.featureImage}
                        src={imgUrl}
                        alt={title}
                    />
                </div>
            )}
            <div style={{ paddingRight: "60px", width: "600px" }}>
                <h3 className="font_large">{title}</h3>
                <p className="font_medium">{description}</p>
            </div>
            <div className={styles.buttons}>
                <Link
                    className="font_medium text--white"
                    to="https://identity.amphoradata.com/Register"
                >
                    Get data
                </Link>
            </div>
        </div>
    );
}

export default FindData;
