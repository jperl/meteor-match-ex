Tinytest.add('MatchEx.Enum allows values that are part of the enum only', function (test) {
  var Dairy = {
    CHEESE: 1,
    MILK: 2
  };

  check(Dairy.CHEESE, MatchEx.Enum(Dairy));

  test.throws(function () {
    check(0, MatchEx.Enum(Dairy));
  });
});

var invalidEmails = ['.com', '@perl.com', 'jon@perl.', 'jon@perl', 'jon@.com'];

Tinytest.add('MatchEx.Email allows valid emails only', function (test) {
  check('mr@perl.com', MatchEx.Email());

  _.each(invalidEmails, function (invalidUrl) {
    test.throws(function () {
      check(invalidUrl, MatchEx.Url());
    });
  });
});

Tinytest.add('MatchEx.Date allows values that are valid dates', function (test) {
  check('2014-01-20', MatchEx.Date());

  check('', MatchEx.Date(false, true));

  test.throws(function () {
    check('2014-5-1', MatchEx.Date());
  });
});


Tinytest.add('MatchEx.OneOf allows values that are part of the options only', function (test) {
  check('cheese', MatchEx.OneOf(['milk', 'cheese']));

  test.throws(function () {
    check('cookies', MatchEx.OneOf(['milk', 'cheese']));
  });
});

Tinytest.add('MatchEx.Url allows valid urls only', function (test) {
  var validUrls = ['http://www.google-com.123.com', 'https://www.google-com.com', 'http://google-com.com', 'http://google.com'];
  _.each(validUrls, function (validUrl) {
    check(validUrl, MatchEx.Url());
  });

  var invalidUrls = _.union(invalidEmails, ['http://www.google-com.123', 'google.com']);
  _.each(invalidUrls, function (invalidUrl) {
    test.throws(function () {
      check(invalidUrl, MatchEx.Url());
    });
  });
});