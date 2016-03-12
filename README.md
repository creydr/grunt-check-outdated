# grunt-check-outdated (Version 0.1.0)

[![NPM version](https://travis-ci.org/creydr/grunt-check-outdated.svg?branch=master)](https://travis-ci.org/creydr/grunt-check-outdated)

> Grunt Plugin to detect and list outdated npm packages, used in the project.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-check-outdated --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-check-outdated');
```

## The "outdated" task

### Overview
In your project's Gruntfile, add a section named `outdated` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  outdated: {
    checkDev: true
  },
});
```

### Example

![Example Output](http://fs5.directupload.net/images/160312/g66u7x5v.png)

### Options

#### checkDev
Type: `Boolean`
Default value: `false`

Specifies if development dependencies should be checked.

#### checkProd
Type: `Boolean`
Default value: `true`

Specifies if production dependencies should be checked.

#### onlyStable
Type: `Boolean`
Default value: `false`

Specifies if it should only lists dependencies with newer stable versions.

### Usage Examples

#### Check Development dependencies
In this example, the Development dependencies will be included to check for newer versions.

```js
grunt.initConfig({
  outdated: {
    checkDev: true
  },
});
```

#### Check only for stable versions
In this example, the plugin lists only newer versions if a newer stable version is available.

```js
grunt.initConfig({
  check_outdated: {
    onlyStable: true
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

* 2016-03-06  v0.1.0  Basic support to list dependencies with newer versions.
