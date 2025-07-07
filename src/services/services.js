import { TempMail } from "tempmail.lol";

const tempmail = new TempMail("tempmail.20250708.ldbklx01cdtjk82oeat46hlm9b6e6oozsxcrv0swzei8ewee");

const generateRandomEmailAddresses = () => {
  return tempmail.createInbox();
};

const getMailBox = (token) => {
  return tempmail.checkInbox(token);
};

const services = {
    generateRandomEmailAddresses,
    getMailBox
}

export default services