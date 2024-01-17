import axios from "axios";
import { APIS } from "../api/api";
import { JoinWaitlistTypes } from "../types/waitlist";

export const joinWaitlist = (data: JoinWaitlistTypes) => {
  return new Promise((resolve, reject) => {
    axios.post(APIS.WAITLIST.JOIN, data)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};


