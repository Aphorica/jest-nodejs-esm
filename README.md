# Using Jest in a NodeJS application with ESM with Supertest

##### _Rick Berger - Aphorica, Inc_

---

There are several descriptions on line for using _jest_ in _NodeJS_, and for using _jest_
for ES6 code, but no working examples for using _jest_ with _NodeJS_ _and_ ES6 (provided
through _esm_) (which is what I need.)

The _jest_ folks have hinted there would be a configuration setting for _esm_, but
that hasn't happened, yet, so here is a technique that can be used until it does.

This _github_ repo demonstrats a working example.  It entails a small
_node_ application that has a single _get_: `/testme`.  The _get_ returns
a _200_ status code and the text _I'm here!!_

## Installation

*Fairly simple:*

 - Make sure NodeJS is installed (I'm using version 10.17.0)
 - Optionally install Yarn
 - clone the repository
 - CD into the cloned directory and type `yarn install` (or `npm install`)

## Start The Server

 - From inside the cloned directory, type `yarn server` (or `npm run server`)
 - Now, you can `curl localhost:3000/testme` (from another command window)
   and see the response.

## Run the Test

 - The server should not be running during testing &ndash; _supertest_ sets
   up a local server for each test (see below).
 - From inside the cloned directory, type `yarn test` (or `npm run test`)

## Files Organization

 - the _&#95;&#95;tests&#95;&#95;_ directory contains test files, per
   standard _jest_ organization.  It holds a single file: _testme_test.js_.
 - Entry Files:
  - _nodetest.js_ is the top-level entry point for _esm_ &ndash; it imports _main.js_.
  - _main.js_ imports _app.js_ and then starts the _listen_ loop.
  - _app.js_ is the actual node application.


 It's organized this way so the transformers work correctly for _esm_ for the
 application, and so that running the test under _NodeJS_ doesn't interfere with
 running the test &mdash; in a scenario where you're running multiple tests, _supertest_ will
 instantiate a server for each test, which can result in port conflicts if the
 _NodeJS_ server is running.

## _.babelrc.js_ File

 This is a custom configuration &ndash; it configures babel to ignore any transforms except for tests.

## Enabling in Your Project

 - If you haven't already, install _esm_ in your project.
 - Refactor your entry .js files as described in the _Files Organization_ section.
 - Install all of the devDependencies packages found in the _package.json_ file.
 - Copy over the _.babelrc.js_ file to your project root.
 - If you don't have one, you might want to copy the _jest.config.js_ file to
   your project root.
 
## References

 1. [Endpoint testing with Jest and Supertest](https://zellwk.com/blog/endpoint-testing/)
 2. [Babel 7 dynamic config – making Babel work with esm, Jest, JSX, and Preact server-side rendering](https://calvinf.com/blog/2018/04/23/babel-7-dynamic-config-making-babel-work-with-esm-jest-jsx-and-preact-server-side-rendering/)<br/>
    <small><em>(Note I removed the </em>React<em> setting - not using it)</em></small>

