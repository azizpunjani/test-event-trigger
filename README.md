# Test-event-trigger

Demonstrates an intermittent issue with triggering focus events on inputs from Ember acceptance tests.

- Run `ember test --serve`

Sometimes the tests in `tests/acceptance/event-triggering-test.js` will pass and sometimes they will fail.

I've found that they are more likely to fail when:

* chrome dev tools are open
* tests are run via testem against both phantomjs and chrome together (by hitting enter from the testem test runner in the console).

My investigation so far has lead me to conclude that the events are not triggered on the jquery element so it's not a problem with ember actions. While this app doesn't show it, i've previously had direct jquery bindings that don't fire either, however i've been unable to replicate this outside of an ember app. This may have something to do with the points above relating to running via testem in parallel with phantomjs, although I have no idea why.

I've also included tests for click events on a button. Note that these tests always pass. At this point, it seems that this issue is limited to input focus events.

