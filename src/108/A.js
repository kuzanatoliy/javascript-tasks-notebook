/* eslint-disable complexity */
module.exports = {
  getPolindromeTime: (time) => {
    if (time < '01:10') {
      return '01:10';
    } else if (time < '02:20') {
      return '02:20';
    } else if (time < '03:30') {
      return '03:30';
    } else if (time < '04:40') {
      return '04:40';
    } else if (time < '05:50') {
      return '05:50';
    } else if (time < '10:01') {
      return '10:01';
    } else if (time < '11:11') {
      return '11:11';
    } else if (time < '12:21') {
      return '12:21';
    } else if (time < '13:31') {
      return '13:31';
    } else if (time < '14:41') {
      return '14:41';
    } else if (time < '15:51') {
      return '15:51';
    } else if (time < '20:02') {
      return '20:02';
    } else if (time < '21:12') {
      return '21:12';
    } else if (time < '22:22') {
      return '22:22';
    } else if (time < '23:32') {
      return '23:32';
    } else {
      return '00:00';
    }
  },
};
