# This a library that I used in one of our company automation repos.
# This library takes the screenshot of the pages, if an error occurs during the execution of a test.
# But noticied one bug in the library. 
# The library currently only captures screenshots if the test script is located at the immediate parent folder level
# Created this repo to showcase the issue to the developer of the package and got the issue resolved.
# cypress_xray_junit
  - `Run 'npm i'`
  - `Run 'npm run runtests'`
      - `You will get an error saying screenshot is not present.`
