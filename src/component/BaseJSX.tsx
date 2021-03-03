import React from 'react';
import { Image } from "react-bootstrap";


const reqSvgs = require.context("./../media/Icons/", true, /\.svg$/);

export const getIconFromSVGContext = (iImage: number) => {
  if (reqSvgs.keys()[iImage]) {
    return (
      <Image src={reqSvgs(reqSvgs.keys()[iImage]).default} width="60" className="m-2" />
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