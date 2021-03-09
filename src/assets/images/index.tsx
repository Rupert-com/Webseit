import Bootstrap from "./../../media/Icons/0101_Bootstrap_logo.svg";
import CSharp from "./../../media/Icons/0102_C_Sharp_wordmark.svg";
import CSS from "./../../media/Icons/0103_CSS3_logo_and_wordmark.svg";
import HTML from "./../../media/Icons/0104_HTML5_logo_and_wordmark.svg";
import Java from "./../../media/Icons/0105_Java_programming_language_logo.svg";
import JQuery from "./../../media/Icons/0106_JQuery_logo.svg";
import Kotlin from "./../../media/Icons/0107_Kotlin-logo.svg";
import Mysql from "./../../media/Icons/0108_MySQL_logo.svg";
import Node from "./../../media/Icons/0109_Node.js_logo.svg";
import PHP from "./../../media/Icons/0110_PHP-logo.svg";
import Python from "./../../media/Icons/0111_Python_logo_and_wordmark.svg";
import React from "./../../media/Icons/0112_React-icon.svg";
import TypeScript from "./../../media/Icons/0113_TypeScript_Logo.svg";
import JavaScript from "./../../media/Icons/0114_javascript.svg";
import MongoDB from "./../../media/Icons/0115_MongoDB_Logo.svg";
import Github from "./../../media/Icons/0200_eb2adf00-27c7-11e7-9631-b17e7278f329-github.svg";
import Instagram from "./../../media/Icons/0201_Instagram-logo-2016_1_.svg";
import LinkedIn from "./../../media/Icons/0202_LinkedIn_Logo.svg";
import Rupert from "./../../media/RupertLogo_trans.png";

function getSVG(link: string) {
  return <object data={link} type="image/svg+xml"></object>;
}

export const SVG_Bootstrap = (): JSX.Element => getSVG(Bootstrap);
export const SVG_CSharp = (): JSX.Element => getSVG(CSharp);
export const SVG_CSS = (): JSX.Element => getSVG(CSS);
export const SVG_HTML = (): JSX.Element => getSVG(HTML);
export const SVG_Java = (): JSX.Element => getSVG(Java);
export const SVG_JQuery = (): JSX.Element => getSVG(JQuery);
export const SVG_Kotlin = (): JSX.Element => getSVG(Kotlin);
export const SVG_Mysql = (): JSX.Element => getSVG(Mysql);
export const SVG_Node = (): JSX.Element => getSVG(Node);
export const SVG_PHP = (): JSX.Element => getSVG(PHP);
export const SVG_Python = (): JSX.Element => getSVG(Python);
export const SVG_React = (): JSX.Element => getSVG(React);
export const SVG_TypeScript = (): JSX.Element => getSVG(TypeScript);
export const SVG_JavaScript = (): JSX.Element => getSVG(JavaScript);
export const SVG_MongoDB = (): JSX.Element => getSVG(MongoDB);
export const SVG_Github = (): JSX.Element => getSVG(Github);
export const SVG_Instagram = (): JSX.Element => getSVG(Instagram);
export const SVG_LinkedIn = (): JSX.Element => getSVG(LinkedIn);

export const SVG_Rupert = (): JSX.Element => <Rupert />;

export const FILE_Bootstrap = Bootstrap;
export const FILE_CSharp = CSharp;
export const FILE_CSS = CSS;
export const FILE_HTML = HTML;
export const FILE_Java = Java;
export const FILE_JQuery = JQuery;
export const FILE_Kotlin = Kotlin;
export const FILE_Mysql = Mysql;
export const FILE_Node = Node;
export const FILE_PHP = PHP;
export const FILE_Python = Python;
export const FILE_React = React;
export const FILE_TypeScript = TypeScript;
export const FILE_JavaScript = JavaScript;
export const FILE_MongoDB = MongoDB;
export const FILE_Github = Github;
export const FILE_Instagram = Instagram;
export const FILE_LinkedIn = LinkedIn;
export const FILE_Rupert = Rupert;
