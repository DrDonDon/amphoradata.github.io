import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import classnames from "classnames";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "../styles.module.css";

function ManageData() {
  return (
    <Layout title="Manage data">
      <div className="container container--fluid">
        <div className={classnames("row mt-12", styles.justifyContentCenter)}>
          <div className="col col--9">
            <p className="font_large">Manage data access, quality, and jobs in ecosystems</p>
            <div className={classnames("row mt-4", styles.spaceEvenly)}>
              <div className={styles.buttons_tab}>
                <Link
                  className="font_medium text--black"
                  to='manage-data'
                >
                  Impact
                </Link>
              </div>
              <div className={styles.buttons_tab}>
                <Link
                  className="font_medium_bold text--black"
                  to='manage-data-how-it-works'
                >
                  How it works
                </Link>
              </div>
              <div className={styles.buttons_tab}>
                <Link
                  className="font_medium text--black"
                  to='manage-data-features'
                >
                  Features
                </Link>
              </div>
              <div className={styles.buttons_tab}>
                <Link
                  className="font_medium text--black"
                  to='manage-data-success'
                >
                  Success stories
                </Link>
              </div>
              <div className={styles.buttons_tab}>
                <Link
                  className="font_medium text--black"
                  to='manage-data-details'
                >
                  More details
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={classnames("row", styles.justifyContentCenter)}>
          <div className="col col--9">
            <hr
              style={{
                borderWidth: "0.5px",
              }}
            />
          </div>
        </div>

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
      </div>
      
    </Layout>
  );
}

const features = [
  {
    title: <>Share insights instantly</>,
    imageUrl: 'img/share_data_pick.png',
    description: (
      <>
        Post your data on Amphora to reach all of our users. You can monetise your data or share it for free. You have full control on who can use your data.
      </>
    ),
  },
  {
    title: <>Don’t worry about Data Infra</>,
    imageUrl: 'img/amphora_cogs.PNG',
    description: (
      <>
        Don’t worry about anything. We host the data, manage access, commercials and governance. 
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('row', styles.feature)} style={{ paddingBottom: "30px"}}>
      {imgUrl && (
        <div className="text--center" style={{ paddingLeft: "60px",  paddingRight: "60px"}}>
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <div style={{paddingRight: "60px", width: "600px"}}>
        <h3 className = "font_large">{title}</h3>
        <p className = "font_medium">{description}</p>
      </div>
    </div>
  );
}

export default ManageData;