import React from "react";
import ContentLoader from "react-content-loader";

const Preloader = (props) => (
  <>
    <ContentLoader
      speed={2}
      width={400}
      height={460}
      viewBox="0 0 400 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="46" y="204" rx="0" ry="0" width="165" height="38" />
      <rect x="49" y="271" rx="0" ry="0" width="63" height="24" />
      <rect x="44" y="19" rx="0" ry="0" width="167" height="180" />
      <rect x="142" y="274" rx="0" ry="0" width="58" height="18" />
    </ContentLoader>
  </>
);

export default Preloader;
