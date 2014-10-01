Package.describe({
  name: 'jonperl:match-ex',
  summary: 'Additional match patterns.',
  version: '0.1.1',
  git: 'https://github.com/jperl/meteor-match-ex.git'
});

Package.onUse(function (api) {
  var both = ['server', 'web'];
  api.versionsFrom('METEOR@0.9.0');
  api.use(['check', 'underscore'], both);

  api.addFiles('match_ex.js', both);

  api.export('MatchEx', both);
});

Package.onTest(function (api) {
  api.use(['underscore', 'ejson', 'tinytest']);

  api.addFiles('match_ex_tests.js', ['web', 'server']);
});
