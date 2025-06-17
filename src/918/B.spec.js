const { transformData } = require('./B');

describe('918B. Radio Station', () => {
  it.each`
    n    | hosts                                                                     | stations                                                                                                          | result
    ${1} | ${['main 192.168.0.2', 'replica 192.168.0.1']}                            | ${['block 192.168.0.1;', 'proxy 192.168.0.2;']}                                                                   | ${['block 192.168.0.1; #replica', 'proxy 192.168.0.2; #main']}
    ${2} | ${['google 8.8.8.8', 'codeforces 212.193.33.27', 'server 138.197.64.57']} | ${['redirect 138.197.64.57;', 'block 8.8.8.8;', 'cf 212.193.33.27;', 'unblock 8.8.8.8;', 'check 138.197.64.57;']} | ${['redirect 138.197.64.57; #server', 'block 8.8.8.8; #google', 'cf 212.193.33.27; #codeforces', 'unblock 8.8.8.8; #google', 'check 138.197.64.57; #server']}
  `('Base test: $n', ({ hosts, stations, result }) => {
    expect(transformData(hosts, stations)).toStrictEqual(result);
  });
});
