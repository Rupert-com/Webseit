//
const ISSAPIUrl = "http://api.open-notify.org/iss-now.json";

export interface IISSData {
  iss_position: {
    latitude: number;
    longitude: number;
  };
  message: string;
  timestamp: number;
}

export const fetchCurrentISSData = function doFetchISSDataFromAPI(): Promise<IISSData> {
  const requestOptions: RequestInit = {
    method: "GET",
    // headers: { "Content-Type": "application/json", },
  };

  const Wait = new Promise<IISSData>((success) => {
    fetch(ISSAPIUrl, requestOptions)
      .then((response) => response.json())
      .then((data: IISSData) =>
        data.message === "success" ? success(data) : ""
      )
      .catch((Ex) => {
        console.log(Ex);
      });
  });

  return Wait;
};
