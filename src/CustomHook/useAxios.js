import { useEffect } from "react";
import axios from "axios";
import { useVideoContext } from "../Context";

export const useAxios = (url) => {
  const { dispatch } = useVideoContext();

  useEffect(() => {
    (async () => {
      try {
        const { response, videos } = await axios.get("/api/products");
        if (response.status === 200) {
          dispatch({ type: "ALL_VIDEOS", payload: videos });
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return { dispatch };
};
