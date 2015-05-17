module.exports = function ucPlatformjJudge(ua, browser) {
  if(ua && browser && ua.match(/UC/) && browser.name === 'Android Browser') {
    var ucstr = ua.substring(ua.indexOf('UC'), ua.length);
    var uclen = ucstr.indexOf(' ');
    uclen = uclen > -1 ? uclen : ucstr.length;
    browser.name = 'UC Android Browser';
    browser.version = ucstr.substring(ucstr.indexOf('/') + 1, uclen);
  }

  return browser;
};

