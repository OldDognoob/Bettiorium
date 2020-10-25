import { API_HOST } from "./const";
import axios from "axios";

export const registerUser = (data) => {
  return axios({
    method: "POST",
    url: API_HOST + "/signup",
    headers: {
      "Content-Type": "application/json"
    },
    data: {
      campaignUuid: "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
      data
    }
  });
};
