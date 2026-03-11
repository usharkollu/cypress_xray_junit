### Cypress Xray Report utility
- This a library that I used in one of our company automation repos. This library takes the screenshot of the pages, if an error occurs during the execution of a test. But noticied one bug in the library. 
- This library was capturing screenshots if the test script is located at the immediate parent folder level
- Created this repo to showcase the issue to the [developer](https://github.com/alecmestroni/cypress-xray-junit-reporter/issues/1) of the package and got the issue resolved. Developer was able to reproduce the issue and fixed it.
### cypress_xray_junit
  - `Run 'npm i'`
  - `Run 'npm run runtests'`
      - `You will get an error saying screenshot is not present.`
