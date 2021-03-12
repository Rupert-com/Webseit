import { Button, Popover, Paper, Fade } from "@material-ui/core";
import { Component } from "react";
import { IISSData, fetchCurrentISSData } from "../ISSData";
import { Row, Col, Card, Table, Container } from "react-bootstrap";
import { VolumeOff, VolumeUp, InfoOutlined } from "@material-ui/icons";
import moment from "moment";
import ReactPlayer from "react-player";
import ReactTextTransition, { presets } from "react-text-transition";

interface iHome {}
interface iHomeState {
  ISSData?: IISSData;
  muted: boolean;
  open?: any;
  player?: Record<string, any>;
  IBrowserPosition?: GeolocationPosition;
  CarousellData: { position: string; time: string };
  PopoverPosition: {
    top: number;
    left: number;
    grabed: boolean;
    lastGrapEventon?: { clientX: number; clientY: number };
  };
}

export default class Home extends Component<iHome, iHomeState> {
  constructor(props: iHomeState) {
    super(props);

    //
    this.state = {
      muted: true,
      open: undefined,
      CarousellData: { position: "", time: "" },
      PopoverPosition: {
        top:
          window.innerHeight < 800
            ? window.innerHeight / 1.2
            : window.innerHeight / 2,
        left: window.innerWidth / 3,
        grabed: false,
      },
    };

    //
    this.toggle = this.toggle.bind(this);
    this.handlePopoverOpen = this.handlePopoverOpen.bind(this);
    this.handlePopoverClose = this.handlePopoverClose.bind(this);
    this.isOpen = this.isOpen.bind(this);
    this.setCarouselData = this.setCarouselData.bind(this);
    this.leavePopoverGrab = this.leavePopoverGrab.bind(this);
    this.enterPopoverGrab = this.enterPopoverGrab.bind(this);
    this.movePopover = this.movePopover.bind(this);
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({ IBrowserPosition: position });
      });
    }

    // Interval Change Data
    setInterval(async () => {
      if (!this.isOpen()) return;
      this.setState({ ISSData: await fetchCurrentISSData() });
      this.setCarouselData();
    }, 2000);
  }

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

  setCarouselData() {
    let cElem = this.ISS("valid")
      ? // -14°-36.695999999999955'-36"N+140°22.164000000000783'22"E
        // // 54° 23                 '30.9"N +81°08                '50.0"W
        //
        this.ISS("lat") + "x" + this.ISS("lng")
      : // </a>
        "Loading ...";

    let cTime = this.ISS("valid")
      ? moment.unix(this.state.ISSData?.timestamp).format("HH:mm:ss")
      : "Loading ...";

    this.setState({ CarousellData: { position: cElem, time: cTime } });
  }

  enterPopoverGrab() {
    let original = this.state.PopoverPosition;
    let copy = { ...original, grabed: true };
    this.setState({ PopoverPosition: copy });
  }
  leavePopoverGrab() {
    let original = this.state.PopoverPosition;
    let copy = { ...original, grabed: false };
    this.setState({ PopoverPosition: copy });
  }

  movePopover(e: any) {
    //
    let original = this.state.PopoverPosition;
    let copy = {
      ...original,
      lastGrapEventon: { clientX: e.clientX, clientY: e.clientY },
    };

    if (this.state.PopoverPosition?.grabed) {
      copy.left -=
        this.state.PopoverPosition?.lastGrapEventon?.clientX - e.clientX;
      copy.top -=
        this.state.PopoverPosition?.lastGrapEventon?.clientY - e.clientY;
    }
    // console.log(e.clientX);
    //console.log(e.clientY);
    console.log(copy);
    this.setState({ PopoverPosition: copy });
  }
  //

  renderPopover(): JSX.Element {
    return (
      <div className="position-absolute" style={{ bottom: 74, left: 14 }}>
        <InfoOutlined
          aria-owns={this.isOpen() ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={this.handlePopoverOpen}
          // onMouseLeave={this.handlePopoverClose}
          className="text-100 position-absolute"
          style={{ fontSize: 60 }}
        />
        <Popover
          // anchorEl={this.state.open}
          anchorReference="anchorPosition"
          anchorPosition={{
            top: this.state.PopoverPosition.top,
            left: this.state.PopoverPosition.left,
          }}
          id="mouse-over-popover"
          // style={{ // So kann man das feld schließen, wenn es offen ist, und man nicht in dem Feld Reinclickt
          //   pointerEvents: "none",
          // }}
          // component={this.popoverInfo}
          // ref={this.state.PopoverRef}
          open={this.isOpen()}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          onClose={this.handlePopoverClose}
          disableRestoreFocus
          style={{ width: "700px", opacity: 0.85 }}
        >
          <Container
            className="p-3"
            //  style={{ cursor: "grab" }}
            // onMouseUp={this.leavePopoverGrab}
            // onMouseDown={this.enterPopoverGrab}
            // onMouseLeave={this.leavePopoverGrab}
            // onMouseMove={this.movePopover}
          >
            <h3>International Space Station</h3>
            <p>
              The International Space Station is a large spacecraft in orbit
              around Earth. It serves as a home where crews of astronauts and
              cosmonauts live. The space station is also a unique science
              laboratory. Several nations worked together to build and use the
              space station. The space station is made of parts that were
              assembled in space by astronauts. It orbits Earth at an average
              altitude of approximately 250 miles. It travels at 17,500 mph.
              This means it orbits Earth every 90 minutes. NASA is using the
              space station to learn more about living and working in space.
              These lessons will make it possible to send humans farther into
              space than ever before.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.nasa.gov/audience/forstudents/5-8/features/nasa-knows/what-is-the-iss-58.html"
            >
              NASA
            </a>
            <Table>
              <thead>
                <tr>
                  <th></th>
                  <th>ISS</th>
                  <th>You're</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Position [lat/long]:</td>
                  <td className="px-3">
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href={encodeURI(
                        `https://maps.google.com/?q=${this.ISS(
                          "lat",
                          !1
                        )},${this.ISS("lng", !1)}&ll=${this.ISS(
                          "lat",
                          !1
                        )},${this.ISS("lng", !1)}&z=1`
                      )}
                    >
                      {`${this.state.CarousellData?.position}`
                        .split("")
                        .map((n, i) => (
                          <ReactTextTransition
                            key={i}
                            text={n}
                            delay={i * 100}
                            inline
                            springConfig={presets.wobbly}
                            noOverflow
                          />
                        ))}
                    </a>
                  </td>
                  <td>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href={encodeURI(
                        `https://maps.google.com/?q=${this.state.IBrowserPosition?.coords.latitude},${this.state.IBrowserPosition?.coords.longitude}&ll=${this.state.IBrowserPosition?.coords.latitude},${this.state.IBrowserPosition?.coords.longitude}&z=1`
                      )}
                    >
                      {this.formatCoords(
                        this.state.IBrowserPosition?.coords.latitude
                      ) +
                        "x" +
                        this.formatCoords(
                          this.state.IBrowserPosition?.coords.longitude
                        )}
                    </a>
                  </td>
                </tr>
              </tbody>
            </Table>
            <Container>
              <Row className="justify-content-end">
                {this.state.CarousellData?.time}
              </Row>
            </Container>
          </Container>
        </Popover>
      </div>
    );
  }

  ISS(cmd: "lat" | "lng" | "glat" | "glng" | "valid", format: Boolean = true) {
    let cRVal;

    switch (cmd) {
      case "glng":
      case "glat":
        let cPos = this.state.ISSData?.iss_position;

        let cVal: number = cmd === "glat" ? cPos.latitude : cPos.longitude;

        let degrees: number | string = parseInt(cVal + "");
        let temp = 60 * (cVal - degrees);
        let minutes = parseInt(temp + "");
        let seconds = 60 * (temp - minutes);

        if (degrees > 0) degrees = "+" + degrees;
        //  print degrees, minutes, seconds
        // 32°29'47.0"S
        // +130°07'33.6"E
        return `${degrees}°${temp}'${minutes}"${cmd === "glat" ? "N" : "E"}`;

      case "lat":
        let clat = this.state.ISSData?.iss_position.latitude;
        if (clat) cRVal = clat;
        break;

      case "lng":
        let clng = this.state.ISSData?.iss_position.longitude;
        if (clng) cRVal = clng;
        break;

      case "valid":
        return (
          this.state.ISSData?.iss_position.longitude &&
          this.state.ISSData?.iss_position.latitude &&
          this.state.ISSData?.timestamp
        );
    }

    if (format && (cmd === "lng" || cmd === "lat"))
      return this.formatCoords(cRVal);
    return cRVal;
  }

  formatCoords(val: string | number): string {
    if (typeof val === "undefined") return;

    if (typeof val === "number") val = val + "";

    let c = val.indexOf(".") + 4;
    if (val.length > c) return val.substring(0, c);
    return val;
  }

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
          <div id="ReactPlayerOverlap" className="position-absolute YTiframe">
            {this.renderPopover()}
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
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
