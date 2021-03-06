import React, { CSSProperties } from 'react';
import { ResponsiveEmbed } from "react-bootstrap";


const reqSvgs = require.context("./../media/Icons/", true, /\.svg$/);
// <Image src={reqSvgs(reqSvgs.keys()[iImage]).default} width={width} style={Styles} className={classes} />

export const getIconFromSVGContext = (iImage: number, Styles: CSSProperties = { width: 40, height: "auto" }) => {
  if (reqSvgs.keys()[iImage]) {
    return (
      <div style={Styles}>
        <ResponsiveEmbed aspectRatio="1by1">
          <embed type="image/svg+xml" src={reqSvgs(reqSvgs.keys()[iImage]).default} />
        </ResponsiveEmbed>
      </div>
    );
  } else {
    return (
      <img
        src=""
        alt=""
      />
    );
  }
};
