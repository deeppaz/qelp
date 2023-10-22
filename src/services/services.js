import qelp from "../services/common/http-common";

const generateRandomEmailAddresses = ({count}) => {
  return qelp.get(`?action=genRandomMailbox&count=${count}`);
};

const generateListOfActiveDomain = () => {
    return qelp.get(`action=getDomainList`);
};

const getMailBox = ({username, domain}) => {
  return qelp.get(`?action=getMessages&login=${username}&domain=${domain}`);
};

const getSingleMessage = ({username, domain, id}) => {
  return qelp.get(`/action=readMessage&login=${username}&domain=${domain}&id=${id}`);
};

const attachmentDownload = ({username, domain, id, file}) => {
  return qelp.get(`/action=download&login=${username}&domain=${domain}&id=${id}&file=${file}`);
};

const services = {
    generateRandomEmailAddresses,
    generateListOfActiveDomain,
    getMailBox,
    getSingleMessage,
    attachmentDownload
}

export default services