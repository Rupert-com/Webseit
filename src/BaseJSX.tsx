import { CSSProperties } from "react";
import { SvgIcon } from "@material-ui/core";
import { ResponsiveEmbed } from "react-bootstrap";
// import { bytesToBase64, base64decode } from "byte-base64";
// <Image src={reqSvgs(reqSvgs.keys()[iImage]).default} width={width} style={Styles} className={classes} />
export const getSVGIconAsResponsive = (
  iImage: string,
  Styles: CSSProperties = { width: 40, height: "auto" }
) => {
  return (
    <div style={Styles}>
      <ResponsiveEmbed aspectRatio="1by1">
        <embed type="image/svg+xml" src={iImage} />
      </ResponsiveEmbed>
    </div>
  );
};
export const getSvgIconMaterial = (Icon: any, props?: any) => {
  return (
    <SvgIcon component="object">
      <Icon />
    </SvgIcon>
  );
};
// /**
//  * @deprecated The method should not be used
//  */
// export const getSVGIconContext = async (
//   iImage: number,
//   Styles: CSSProperties = { width: 40, height: "auto" },
//   props?: any
// ): Promise<any> => {
//   if (reqSvgs.keys()[iImage]) {
//     const wait = new Promise<any>(async (resolve) => {
//       import(
//         window.location.origin + reqSvgs(reqSvgs.keys()[iImage]).default
//       ).then((svgfile) => console.log(svgfile));
//       // resolve(csvg);
//     });
//     return wait; //<SvgIcon {...props}>{csvg}</SvgIcon>;

//     // let cdiv = <div />;
//     // let c = ReactDOM.render(
//     //   <React.StrictMode>
//     //     <ResponsiveEmbed aspectRatio="1by1">
//     //       <embed
//     //         type="image/svg+xml"
//     //         src={reqSvgs(reqSvgs.keys()[iImage]).default}
//     //       />
//     //     </ResponsiveEmbed>
//     //   </React.StrictMode>,
//     //   cdiv
//     // );

//     // <SvgIcon {...props}>{reqSvgs(reqSvgs.keys()[iImage]).default}</SvgIcon>;
//   }
// };
// /**
//  * @deprecated The method should not be used
//  */
// export const getIconSVGFilePath = (iImage: number) => {
//   return reqSvgs.keys()[iImage] ? reqSvgs(reqSvgs.keys()[iImage]).default : "";
// };
// /**
//  * @deprecated The method should not be used
//  */
// export const getSVGContext = async function getFile<T>(
//   cFile: number,
//   arg: T
// ): Promise<any> {
//   return new Promise<any>((resolve) => {
//     fetch(getIconSVGFilePath(cFile), {
//       method: "GET",
//       headers: {
//         "Content-Type": "image/svg+xml; charset=UTF-8",
//         Accept: "image/svg+xml; charset=UTF-8",
//       },
//     }).then((response) => {
//       if (response.ok) {
//         response.body
//           .getReader()
//           .read()
//           .then(({ done, value }) => {
//             switch (arg.constructor) {
//               case ArrayBuffer:
//                 let cbuffer = new ArrayBuffer(value.length);
//                 value.map((value, index) => {
//                   //@ts-ignore
//                   cbuffer[index] = value as any;
//                   return value;
//                 });
//                 resolve(cbuffer);
//                 break;
//               case String:
//                 resolve(base64decode(bytesToBase64(value)));
//                 break;
//             }
//           });
//       }
//     });
//   });
// };
