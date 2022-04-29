
const path = require('path');

export const fileDirectory = __dirname + '../../../../../private/files';

export const imageDirectory = () => {
  const fileName =  path.join(fileDirectory + '/image/' );
  return fileName;
}

export const videoDirectory = () => {
  const fileName =  path.join(fileDirectory + '/video/' );
  return fileName;
}

export const htmlDirectory = () => {
  const fileName =  path.join(fileDirectory + '/html/' );
  return fileName;
}