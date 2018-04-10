# amaranth-aurelia-utils

[![npm Version](https://img.shields.io/npm/v/amaranth-aurelia-utils.svg)](https://www.npmjs.com/package/amaranth-aurelia-utils)
[![TravisCI](https://travis-ci.org/amaranth-framework/utils.svg?branch=master)](https://travis-ci.org/amaranth-framework/utils)
[![CircleCI](https://circleci.com/gh/amaranth-framework/utils.svg?style=shield)](https://circleci.com/gh/amaranth-framework/utils)

> NOTE: We have some issues on TravisCI, with Karma not stoping after test is done. Bare with us.

This library is part of the [Amaranth](~) Framework) projects (was originaly developed for an extension of [amaranth-framework](https://amaranth-framework.io) and contains amaranth functionality util among all projects Amaranth is set to develop.

## Documention

You can read the documentation for the amaranth framework [here](~). If you would like to help improve this documentation, the source for many of the docs can be found in the doc folder within this repository. Other docs, not related to the general framework, but directed at specific libraries, can be found in the doc folder of those libraries.

## Platform Support

This library can be used in the **browser** only.

## Building The Code

To build the code, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

  ```shell
  npm install
  ```
3. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

  ```shell
  # gulp will be installed localy by using `npm install`
  ```
4. To build the code, you can now run:

  ```shell
  npm run build
  ```
5. You will find the compiled code in the `dist` folder, available in three module formats: AMD, CommonJS and ES6.

6. See `gulpfile.js` for other tasks related to generating the docs and linting.

## Running The Tests

To run the unit tests, first ensure that you have followed the steps above in order to install all dependencies and successfully build the library. Once you have done that, proceed with these additional steps:

1. Ensure that the [Karma](http://karma-runner.github.io/) CLI is installed. If you need to install it, use the following command:

  ```shell
  npm install -g karma-cli
  ```
2. Ensure that [jspm](http://jspm.io/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g jspm
  ```
3. Install the client-side dependencies with jspm:

  ```shell
  jspm install
  ```

4. You can now run the tests with this command:

  ```shell
  karma start
  ```