// @flow
'use strict';

import { NativeModules } from 'react-native';

const TestModule = NativeModules.test;

class Test {

  static getTestString () {
    return TestModule.getTestString();
  }

}

module.exports = Test;
