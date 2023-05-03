import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (sw, ne) => {
  try {
    //   const response = await axios.request(options);
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "X-RapidAPI-Key": "6f2cfb883dmshb4ecfbf665e3795p17fb75jsn6441f1ad6266",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });

    return data;
  } catch (error) {
    console.error(error);
  }
};
