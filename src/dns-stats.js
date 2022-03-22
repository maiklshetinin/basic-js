const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
  function getDNSStats(domains) {
    let obj = {}
    for (i = 0; i < domains.length; i++) {
        let domain = domains[i].split('.').reverse()
        let dom = ''
        for (j = 0; j < domain.length; j++) {
            dom += '.' + domain[j]
            if (!obj[dom]) {
                obj[dom] = 1
            } else if (obj[dom]) {
                obj[dom] += 1
            }
        }
    }
    return obj
}


module.exports = {
  getDNSStats
};
