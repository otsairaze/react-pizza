import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="136" cy="100" r="100" />
    <rect x="0" y="221" rx="0" ry="0" width="280" height="20" />
    <rect x="0" y="279" rx="0" ry="0" width="280" height="65" />
    <rect x="9" y="386" rx="0" ry="0" width="100" height="26" />
    <rect x="154" y="381" rx="0" ry="0" width="124" height="42" />
  </ContentLoader>
);

export default Skeleton;
