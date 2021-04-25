# CpGame

The project was generated with ANGULAR CLI so
- to run it use `ng serve`
- to run tests use  `ng test`

A few words of comment:

As this is only a recruitment task - the application has some trade offs:

- there is no error handling and loaders
- test coverage is quite low. I wrote tests only for 1 component, 1 service, and the reducer (to show you how I test different things)
- TS types probably could be better
- to make it easier, I don't allow to get the same card for both users (there is a recursive function which checks whether cards are different or not)
- I haven't put too much effort on styling

