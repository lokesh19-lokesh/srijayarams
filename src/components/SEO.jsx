import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image }) => {
  const siteTitle = 'Sri Rama Jayarama';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = 'Sri Rama Jayarama - Leading the way in Steel, Automotive, and Sustainable Solutions.';
  const defaultKeywords = 'Sri Rama Jayarama, Steel, Automotive, Sustainability, Business';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description || defaultDescription} />
      {image && <meta property="twitter:image" content={image} />}
    </Helmet>
  );
};

export default SEO;
