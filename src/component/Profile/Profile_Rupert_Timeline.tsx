import { Component } from "react";
import { Profile_Rupert_Timeline_Item as Item } from "./Profile_Rupert_Timeline_Item";
import Timeline from "@material-ui/lab/Timeline";
import {
  FILE_Bootstrap as Bootstrap,
  FILE_CSS as CSS,
  FILE_TypeScript as TypeScript,
  FILE_CSharp as CSharp,
  FILE_HTML as HTML,
  FILE_JQuery as JQuery,
  FILE_Java as Java,
  FILE_JavaScript as JavaScript,
  FILE_Kotlin as Kotlin,
  FILE_MongoDB as MongoDB,
  FILE_Mysql as Mysql,
  FILE_Node as  Node,
  FILE_PHP as PHP,
  FILE_Python as Python,
  FILE_React as React,
} from "./../../assets/images/index";
import { getSVGIconAsResponsive as GetIcon } from "./../../BaseJSX";

interface IProfile_Rupert_TimelineState {}

interface IProfile_Rupert_Timeline {}

export class Profile_Rupert_Timeline extends Component<
  IProfile_Rupert_Timeline,
  IProfile_Rupert_TimelineState
> {
  render() {
    return (
      <Timeline align="alternate">
        <Item
          content="PS: I failed the OCG Typing Certificat"
          headline="Ten-finger system"
          time="2012"
          color="grey"
        />
        <Item
          icon={GetIcon(HTML)}
          content="A long, long time ago, I started developing HTML. It was my first school, urging me to struggle me through my way."
          headline="HTML"
          time="2016"
          color="inherit"
        />
        <Item
          icon={GetIcon(CSS)}
          content="Along with HTML I started to get interressted in web styling. A basic HTML-Button don't look nice. I tried my best establishing good looking websides. It turned out, that I wasn't good at this point."
          headline="CSS"
          color="inherit"
        />
        <Item
          icon={GetIcon(PHP)}
          content="HTML and CSS have been useful techniques to build static webpages but, how don't expected, I queued at some point. So I had to get up my ass finding a way to build non static websites. At the very beginning I got my PHP content out of files where I read and write out every single line as a paragraph."
          headline="PHP"
          time="2017"
          color="inherit"
        />
        <Item icon={GetIcon(Bootstrap)} headline="Bootstrap" color="inherit" />
        <Item icon={GetIcon(JQuery)} headline="jQuery" color="inherit" />
        <Item headline="Ajax" color="grey" />
        <Item
          icon={GetIcon(Python)}
          content="Developing webpages is cool but the world is quite bigger. In my school I wrote my first python console scripts."
          headline="Python"
          time="2018"
          color="inherit"
        />
        <Item
          icon={GetIcon(Java)}
          content="Predictable, I ran into some trouples with PHP. So my uncle helped me lerning building webpages using Java. At this moment the foundation stone was laid for a widley developing career."
          headline="Java"
          time="2019"
          color="inherit"
        />
        <Item icon={GetIcon(Mysql)} headline="MySQL" color="inherit" />
        <Item
          icon={GetIcon(JavaScript)}
          content="Following, I starded seeing the hard need of JavaScript in my sides functionallity."
          headline="JavaScript"
          color="inherit"
        />
        <Item icon={GetIcon(MongoDB)} headline="MongoDB" color="inherit" />
        <Item
          icon={GetIcon(Kotlin)}
          content="With the time I got interested build some Apps with Kotlin for my phone. Begining with some basic language knowing, getting first time in touch with Thread issues till building good looking simple basic applications."
          headline="Kotlin"
          time="2020"
          color="inherit"
        />
        <Item icon={GetIcon(React)} headline="React" color="inherit" />
        <Item icon={GetIcon(Node)} headline="Node" color="inherit" />
        <Item
          icon={GetIcon(TypeScript)}
          content="I discoverd React. I realy hate the type insecurity of JavaScript so getting in touch with TypeScript was the result."
          headline="TypeScript"
          color="inherit"
        />
        <Item
          icon={GetIcon(CSharp)}
          content="Arrived in 2021 I was really good in webdeveloping. But I was getting sad because I haven't found out a proper way to build Windows Applications. Google helped me getting known of WPF and XAML which was the really best way for me building useful tools on Windows. With the basics of Java, it was realy easy to get into C#."
          headline="C#"
          time="2021"
          color="inherit"
          lastitem
        />
      </Timeline>
    );
  }
}
