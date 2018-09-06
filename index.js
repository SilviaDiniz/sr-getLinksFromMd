module.exports.getLinksFromMd = function getLinksFromMd(url) {
  var regex_url = new RegExp(/(https?:\/\/)?(www\.)?[a-z0-9]+(\.\w*)+\.\w{2,}/g);
  var regex_markdown = new RegExp(/(?<=\[).*?(?=\])/g)

  var links = url.match(regex_url);

  if(url === undefined || url === '') {
    throw new Error('Por favor digite sua url.');
  }

  if(typeof url === 'number' || typeof url !== 'string') {
    throw new Error('Por favor digite sua url.');
  }
  return links ? links: [];
};
