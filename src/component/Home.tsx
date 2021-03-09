import React, {
  Component,
  RefObject,
  useEffect,
  useRef,
  createRef,
} from "react";
import { Row, Col, Card } from "react-bootstrap";
import ReactPlayer from "react-player";
import { VolumeOff, VolumeUp, InfoOutlined } from "@material-ui/icons";
import { Button, Popover } from "@material-ui/core";

interface iHome {}
interface iHomeState {
  player?: Record<string, any>;
  muted: boolean;
  open?: any;
}

export default class Home extends Component<iHome, iHomeState> {
  constructor(props: iHomeState) {
    super(props);

    //
    this.state = {
      muted: true,
      open: undefined,
    };

    //
    this.toggle = this.toggle.bind(this);
    this.handlePopoverOpen = this.handlePopoverOpen.bind(this);
    this.handlePopoverClose = this.handlePopoverClose.bind(this);
    this.isOpen = this.isOpen.bind(this);
  }

  componentDidMount() {}

  toggle() {
    this.setState({ muted: !this.state.muted });
    // console.log(Object.keys(this.state.player));
  }

  handlePopoverOpen(event: any) {
    this.setState({ open: event.currentTarget });
  }

  handlePopoverClose() {
    this.setState({ open: undefined });
  }

  isOpen(): boolean {
    return Boolean(this.state.open);
  }
  // popoverInfo() {
  //   const CustomLink = React.forwardRef((linkProps, ref) => (
  //     <Link ref={this.state.PopoverRef} {...linkProps} />
  //   ));

  //   return Popover;
  // }

  render() {
    return (
      <div>
        <div className="position-relative YTiframeContainer">
          <ReactPlayer
            className="position-absolute YTiframe"
            url="https://www.youtube.com/watch?v=EEIk7gwjgIM"
            playing={true}
            height="100%"
            width="100%"
            muted={this.state.muted}
            light={false}
            onPlay={() => {}}
            onPause={() => {}}
            onReady={(pplayer: ReactPlayer) => {
              this.setState({ player: pplayer.getInternalPlayer() });
              pplayer.getInternalPlayer().playVideo();
            }}
          />
          <div className="position-absolute YTiframe">
            <div className="position-absolute" style={{ bottom: 74, left: 14 }}>
              <InfoOutlined
                aria-owns={this.isOpen() ? "mouse-over-popover" : undefined}
                aria-haspopup="true"
                onMouseEnter={this.handlePopoverOpen}
                onMouseLeave={this.handlePopoverClose}
                className="text-100 position-absolute"
                style={{ fontSize: 60 }}
              />
              <Popover
                anchorEl={this.state.open}
                id="mouse-over-popover"
                style={{
                  pointerEvents: "none",
                }}
                // component={this.popoverInfo}
                // ref={this.state.PopoverRef}
                open={this.isOpen()}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                onClose={this.handlePopoverClose}
                disableRestoreFocus
              >
                <h1>I am a popover</h1>
              </Popover>
            </div>
          </div>
          <div className="position-absolute Banner bg-800 p-5">
            <div className="mt-3">
              <div className="d-flex flex-row-reverse" onClick={this.toggle}>
                <Button variant="outlined" className="text-white">
                  {this.state.muted ? <VolumeUp /> : <VolumeOff />}
                </Button>
              </div>
              <h1 className="text-white">Rupert Bogensperger</h1>
              <div className="p-3  position-relative mb-5">
                <Row className="h-2 w-75 position-absolute border">
                  <Col xs="2" className="bg-success"></Col>
                  <Col xs="10" className="bg-light"></Col>
                </Row>
              </div>
              <Card>
                <Card.Body>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Duis
                  autem vel eum iriure dolor in hendrerit in vulputate velit
                  esse molestie consequat, vel illum dolore eu feugiat nulla
                  facilisis at vero eros et accumsan et iusto odio dignissim qui
                  blandit praesent luptatum zzril delenit augue duis dolore te
                  feugait nulla facilisi. Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh euismod
                  tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                  wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                  consequat. Duis autem vel eum iriure dolor in hendrerit in
                  vulputate velit esse molestie consequat, vel illum dolore eu
                  feugiat nulla facilisis at vero eros et accumsan et iusto odio
                  dignissim qui blandit praesent luptatum zzril delenit augue
                  duis dolore te feugait nulla facilisi. Nam liber tempor cum
                  soluta nobis eleifend option congue nihil imperdiet doming id
                  quod mazim placerat facer possim assum. Lorem ipsum dolor sit
                  amet, consectetuer adipiscing elit, sed diam nonummy nibh
                  euismod tincidunt ut laoreet dolore magna aliquam erat
                  volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                  tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                  commodo consequat. Duis autem vel eum iriure dolor in
                  hendrerit in vulputate velit esse molestie consequat, vel
                  illum dolore eu feugiat nulla facilisis. At vero eos et
                  accusam et justo duo dolores et ea rebum. Stet clita kasd
                  gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                  amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                  sed diam nonumy eirmod tempor invidunt ut labore et dolore
                  magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                  et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                  no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, At accusam
                  aliquyam diam diam dolore dolores duo eirmod eos erat, et
                  nonumy sed tempor et et invidunt justo labore Stet clita ea et
                  gubergren, kasd magna no rebum. sanctus sea sed takimata ut
                  vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum
                  dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                  eirmod tempor invidunt ut labore et dolore magna aliquyam
                  erat. Consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore et dolore magna aliquyam erat, sed
                  diam voluptua. At vero eos et accusam et justo duo dolores et
                  ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                  est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                  consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                  invidunt ut labore et dolore magna aliquyam erat, sed diam
                  voluptua. At vero eos et accusam et justo duo dolores et ea
                  rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                  consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                  invidunt ut labore et dolore magna aliquyam erat, sed diam
                  voluptua. At vero eos et accusam et justo duo dolores et ea
                  rebum. Stet clita kasd gubergren, no sea takimata sanctus.
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Duis
                  autem vel eum iriure dolor in hendrerit in vulputate velit
                  esse molestie consequat, vel illum dolore eu feugiat nulla
                  facilisis at vero eros et accumsan et iusto odio dignissim qui
                  blandit praesent luptatum zzril delenit augue duis dolore te
                  feugait nulla facilisi. Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh euismod
                  tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                  wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                  consequat. Duis autem vel eum iriure dolor in hendrerit in
                  vulputate velit esse molestie consequat, vel illum dolore eu
                  feugiat nulla facilisis at vero eros et accumsan et iusto odio
                  dignissim qui blandit praesent luptatum zzril delenit augue
                  duis dolore te feugait nulla facilisi. Nam liber tempor cum
                  soluta nobis eleifend option congue nihil imperdiet doming id
                  quod mazim placerat facer possim assum. Lorem ipsum dolor sit
                  amet, consectetuer adipiscing elit, sed diam nonummy nibh
                  euismod tincidunt ut laoreet dolore magna aliquam erat
                  volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                  tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                  commodo
                </Card.Body>
              </Card>{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
