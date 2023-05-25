# Lab 8 - Starter

Prisha Anand

1. I would add my tests for the Recipe project within a Github action that runs whenever code is pushed since this would let me to have all of the tests be automated, and run anytime I pushed a change to the Github. Doing so would allow me to ensure testing happens after every major change (usually when a commit and push to github is made). Locally running the tests on the other hand would make it possible for one to forget to test everytime, or one could also get lazy and decide not to test. Running for every commit serves as a good incremental way to check that code works (we don't want faulty code in the repo), rather than waiting until the very end before testing all at once as it will be more of a pain to fix errors then. 
2. No, because end to end testing tests the UI functionality of the page. A function returning the correct output is not part of the UI tests (rather it would fall under unti testing). 
3. No, because this seems like a feature that requires interaction with others. More specifically, the message feature in this case is to be sent to another user, thus requires a form of interaction. Using a unit test in this case would not let us check if the user receieved the proper message that was sent by another user, since unit testing does not allow for this interactivity between pages/thoughout. 
4. Yes, this feature does not require interaction with other pages or users. It simply prevents the user from typing more than 80 characters, which does not depend on any other page so can easily be checked with a unit test. 
