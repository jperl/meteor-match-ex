Package.describe({
  name: 'jperl:match-ex',
  summary: 'Additional match patterns.',
  version: '1.0.0',
  git: 'https://github.com/jperl/meteor-match-ex.git'
});

Package.onUse(function (api) {
  var both = ['server', 'web'];

  api.versionsFrom('1.0');
  api.use(['check', 'underscore'], both);

  api.addFiles('match_ex.js', both);

  api.export('MatchEx', both);
});

Package.onTest(function (api) {
  api.use(['underscore', 'ejson', 'tinytest', 'jperl:match-ex']);

  api.addFiles('match_ex_tests.js', ['web', 'server']);
});
