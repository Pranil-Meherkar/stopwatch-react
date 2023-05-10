import React from "react";
import { Helmet } from "react-helmet";

const MetaDecorator = ({ title, description, imageUrl, imageAlt }) => (
  <Helmet>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={"https://picsum.photos/200/300"} />
    <meta
      property="og:url"
      content={"https://stopwatch-react-nine.vercel.app" + window.location.pathname + window.location.search}
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image:alt" content={imageAlt} />
  </Helmet>
);


export default MetaDecorator;