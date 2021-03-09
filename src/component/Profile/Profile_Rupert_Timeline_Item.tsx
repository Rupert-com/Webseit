import { Component } from "react";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

interface IProfile_Rupert_Timeline_ItemState {
  lastitem: boolean;
  time?: string;
  headline: string;
  content?: string;
  icon: JSX.Element;
  color?: "inherit" | "primary" | "secondary" | "grey";
}

interface IProfile_Rupert_Timeline_Item {
  lastitem?: boolean;
  time?: string;
  headline: string;
  content?: string;
  icon?: JSX.Element;
  color?: "inherit" | "primary" | "secondary" | "grey";
}

export class Profile_Rupert_Timeline_Item extends Component<
  IProfile_Rupert_Timeline_Item,
  IProfile_Rupert_Timeline_ItemState
> {
  constructor(props: IProfile_Rupert_Timeline_Item) {
    super(props);

    this.state = {
      content: props.content,
      headline: props.headline,
      icon: props.icon,
      lastitem: props.lastitem ? props.lastitem : false,
      color: props.color,
      time: props.time,
    };
  }

  render() {
    return (
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="caption">{this.state.time}</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color={this.state.color} className="rounded">
            {this.state.icon}
          </TimelineDot>
          {!this.props.lastitem && <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent>
          <Paper
            elevation={1}
            style={{ padding: "6px 16px" }}
            className="rounded border-bottom border-tailor"
          >
            <Typography variant="h6" component="h1">
              {this.state.headline}
            </Typography>
            {this.state.content && (
              <Typography>{this.state.content}</Typography>
            )}
          </Paper>
        </TimelineContent>
      </TimelineItem>
    );
  }
}
