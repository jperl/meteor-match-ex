# MatchEx
-------
Additional match patterns for meteor.

**Install `meteor add jonperl:match-ex`**


## AlphaNumeric

```javascript
  check('abc123', MatchEx.AlphaNumeric());
  // passes
  check('~!', MatchEx.AlphaNumeric());
  // throws
```

## Date

```javascript
  check(new Date(), MatchEx.Date());
  // passes
  check('2014-11-23', MatchEx.Date());
  // throws
```

## Email

```javascript
  check('jenny@theblock.co', MatchEx.Email());
  // passes
  check('fail@gmail', MatchEx.Email());
  // throws
```

## Function

```javascript
  check(function () {
    // some function
  }, MatchEx.Function());
  // passes
  check('fail', MatchEx.Function());
  // throws
```

## OneOf

```javascript
  check('events', MatchEx.OneOf(['people','events','groups]))'
  // passes
  check('calendar', MatchEx.OneOf(['people','events','groups]))'
  // throws

```

## String *with min/max length*

```javascript
  check('short', MatchEx.String(1,5));
  // passes
  check('toolong', MatchEx.String(1,5));
  // throws
```

## Url

```javascript
  check('http://www.google.com', MatchEx.Url());
  // passes
  check('facebook/myself', MatchEx.Url());
  // throws
```
