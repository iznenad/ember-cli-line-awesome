/* eslint-env node */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-line-awesome',
  included() {
    this.import('vendor/line-awesome.min.css');

    this.import('vendor/la-brands-400.eot', {
      destDir: 'fonts'
    });

    this.import('vendor/la-brands-400.svg', {
      destDir: 'fonts'
    });

    this.import('vendor/la-brands-400.ttf', {
      destDir: 'fonts'
    });

    this.import('vendor/la-brands-400.woff', {
      destDir: 'fonts'
    });

    this.import('vendor/la-brands-400.woff2', {
      destDir: 'fonts'
    });

    this.import('vendor/la-regular-400.eot', {
      destDir: 'fonts'
    });

    this.import('vendor/la-regular-400.svg', {
      destDir: 'fonts'
    });

    this.import('vendor/la-regular-400.ttf', {
      destDir: 'fonts'
    });

    this.import('vendor/la-regular-400.woff', {
      destDir: 'fonts'
    });

    this.import('vendor/la-regular-400.woff2', {
      destDir: 'fonts'
    });

    this.import('vendor/la-solid-900.eot', {
      destDir: 'fonts'
    });

    this.import('vendor/la-solid-900.svg', {
      destDir: 'fonts'
    });

    this.import('vendor/la-solid-900.ttf', {
      destDir: 'fonts'
    });

    this.import('vendor/la-solid-900.woff', {
      destDir: 'fonts'
    });

    this.import('vendor/la-solid-900.woff2', {
      destDir: 'fonts'
    });


  },
  treeForVendor(vendorTree) {

    let cssFolder = path.dirname(require.resolve('line-awesome/dist/line-awesome/css/line-awesome.min.css'));

    var lineAwesomeTree = new Funnel(cssFolder, {
      files: ['line-awesome.min.css']
    });

    let fontsFolder = path.dirname(require.resolve('line-awesome/dist/line-awesome/fonts/la-brands-400.eot'));

    var fontsTree = new Funnel(fontsFolder, {
      files: [
        'la-brands-400.eot',
        'la-brands-400.svg',
        'la-brands-400.ttf',
        'la-brands-400.woff',
        'la-brands-400.woff2',
        'la-regular-400.eot',
        'la-regular-400.svg',
        'la-regular-400.ttf',
        'la-regular-400.woff',
        'la-regular-400.woff2',
        'la-solid-900.eot',
        'la-solid-900.svg',
        'la-solid-900.ttf',
        'la-solid-900.woff',
        'la-solid-900.woff2'
      ]
    });

    return new MergeTrees([vendorTree, lineAwesomeTree, fontsTree].filter(Boolean));
  }
};
