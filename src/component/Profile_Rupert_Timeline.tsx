import React, { Component } from 'react';
import { Image } from "react-bootstrap";
import { Profile_Rupert_Timeline_Item as Item } from "./Profile_Rupert_Timeline_Item";
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { getIconFromSVGContext as GetIcon } from "./BaseJSX";

interface IProfile_Rupert_TimelineState {

}

interface IProfile_Rupert_Timeline {

}

export class Profile_Rupert_Timeline extends Component<IProfile_Rupert_Timeline, IProfile_Rupert_TimelineState>{

  render() {
    return (
      <Timeline align="alternate">
        <Item icon={GetIcon(1000)} content="PS: I failed the OCG Typing Certificat" headline="Ten-finger system" time="2012" color="grey" />
        <Item icon={GetIcon(3)} content="A long, long time ago, I started developing HTML. It was my first school, urging me to struggle me through my way." headline="HTML" time="2016" color="grey" />
        <Item icon={GetIcon(2)} content="Along with HTML I started to get interressted in web styling. A basic HTML-Button don't look nice. I tried my best establishing good looking websides. It turned out, that I wasn't good at this point." headline="CSS" color="grey" />
        <Item icon={GetIcon(10)} content="HTML and CSS have been useful techniques to build static webpages but, how don't expected, I queued at some point. So I had to get up my ass finding a way to build non static websites. At the very beginning I got my PHP content out of files where I read and write out every single line as a paragraph." headline="PHP" time="2017" color="grey" />
        <Item icon={GetIcon(0)} headline="Bootstrap" color="grey" />
        <Item icon={GetIcon(5)} headline="jQuery" color="grey" />
        <Item icon={GetIcon(1000)} headline="Ajax" color="grey" />
        <Item icon={GetIcon(9)} content="Developing webpages is cool but the world is quite bigger. In my school I wrote my first python console scripts." headline="Python" time="2018" color="grey" />
        <Item icon={GetIcon(4)} content="Predictable, I ran into some trouples with PHP. So my uncle helped me lerning building webpages using Java. At this moment the foundation stone was laid for a widley developing career." headline="Java" time="2019" color="grey" />
        <Item icon={GetIcon(7)} headline="MySQL" color="grey" />
        <Item icon={GetIcon(13)} content="Following, I starded seeing the hard need of JavaScript in my sides functionallity." headline="JavaScript" color="grey" />
        <Item icon={GetIcon(14)} headline="MongoDB" color="grey" />
        <Item icon={GetIcon(6)} content="With the time I got interested build some Apps with Kotlin for my phone. Begining with some basic language knowing, getting first time in touch with Thread issues till building good looking simple basic applications." headline="Kotlin" time="2020" color="grey" />
        <Item icon={GetIcon(11)} headline="React" color="grey" />
        <Item icon={GetIcon(8)} headline="Node" color="grey" />
        <Item icon={GetIcon(12)} content="I discoverd React. I realy hate the type insecurity of JavaScript so getting in touch with TypeScript was the result." headline="TypeScript" color="grey" />
        <Item icon={GetIcon(1)} content="Arrived in 2021 I was really good in webdeveloping. But I was getting sad because I haven't found out a proper way to build Windows Applications. Google helped me getting known of WPF and XAML which was the really best way for me building useful tools on Windows. With the basics of Java, it was realy easy to get into C#." headline="C#" time="2021" color="grey" lastitem />
      </Timeline>
    );
  }
}
