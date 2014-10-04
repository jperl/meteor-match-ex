MatchEx = {};

var nullOrUndefined = function (val) {
  return val === null || typeof(val) === 'undefined';
};

MatchEx.AlphaNumeric = function (optional, allowSpaces) {
  return Match.Where(function (email) {
    if (optional && nullOrUndefined(email)) return true;

    var alphaNumericRegex = /^[a-z0-9]+$/i, alphaNumericWithSpacesRegex = /^[a-z\d\-_\s]+$/i;
    return allowSpaces ? alphaNumericWithSpacesRegex.test(email)
      : alphaNumericRegex.test(email);
  });
};

MatchEx.Date = function (optional, allowEmpty) {
  return Match.Where(function (date) {
    if (allowEmpty && date === '') return true;

    if (optional && nullOrUndefined(date)) return true;

    var dateRegex = /\d{4}-\d{2}-\d{2}/; //2014-05-01
    return dateRegex.test(date);
  });
};

MatchEx.Enum = function (enumObject, optional) {
  return MatchEx.OneOf(_.values(enumObject), optional);
};

MatchEx.Email = function (optional) {
  return Match.Where(function (email) {
    if (optional && nullOrUndefined(email)) return true;

    var emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
    return emailRegex.test(email);
  });
};

MatchEx.OneOf = function (values, optional) {
  return Match.Where(function (value) {
    if (optional && nullOrUndefined(value)) return true;

    return _.contains(values, value);
  });
};

MatchEx.Url = function (optional, ignoreProtocol) {
  return Match.Where(function (url) {
    if (optional && nullOrUndefined(url)) return true;
    if (ignoreProtocol) url = 'http://' + url;

    var urlRegex = /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
    return urlRegex.test(url);
  });
};

MatchEx.String = function (minChar, maxChar) {
  return Match.Where(function (str) {
    if (typeof str !== 'string') return false;

    if (minChar && str.length < minChar) return false;
    if (maxChar && str.length > maxChar) return false;

    return true;
  });
};