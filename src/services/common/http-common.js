import axios from "axios";

export default axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://api.tempmail.lol/v2/",
  headers: {
    "Content-type": "application/json",
    "Authorization": "Bearer tempmail.20250708.ldbklx01cdtjk82oeat46hlm9b6e6oozsxcrv0swzei8ewee",
  },
});
