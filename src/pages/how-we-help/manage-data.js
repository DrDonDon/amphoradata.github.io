import React from "react";
import Layout from "@theme/Layout";
import classnames from "classnames";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "../styles.module.css";
import { ManageDataTabs } from "../../components/TabsComponent";
import { PageLayout } from "../../components/PageLayout";

function ManageData() {
    return (
        <Layout title="Manage data">
            <PageLayout
                tabs={ManageDataTabs}
                heading="Securely manage your information"
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
        title: <>Have full control of your data</>,
        imageUrl: "img/lock_ic.PNG",
        description: (
            <>Determine who can access your data and how they can use it.</>
        ),
    },
    {
        title: <>Performance analytics for your models, ETL, and data</>,
        imageUrl: "img/analytics_pic.PNG",
        description: (
            <>
                Clear tracking and dashboard of all models, data, and ETL jobs
                on Amphora.
            </>
        ),
    },
];

function Feature({ imageUrl, title, description }) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div
            className={classnames("row", styles.feature)}
            style={{ paddingBottom: "30px" , paddingLeft: "60px" }}
        >
            {imgUrl && (
                <div
                    className="text--center"
                    style={{ paddingLeft: "30px", paddingRight: "30px" }}
                >
                    <img
                        className={styles.featureImage}
                        src={imgUrl}
                        alt={title}
                    />
                </div>
            )}
            <div style={{ paddingRight: "30px", width: "400px" }}>
                <h3 className="font_large">{title}</h3>
                <p className="font_medium">{description}</p>
            </div>
        </div>
    );
}

export default ManageData;
