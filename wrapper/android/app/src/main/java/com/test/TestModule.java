package com.test;

import android.widget.Toast;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

import java.util.Map;
import java.util.HashMap;

public class TestModule extends ReactContextBaseJavaModule {

  public TestModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @ReactMethod
  public void getTestString(Promise promise) {
    promise.resolve("test string dsfdsfs");
  }

  @Override
  public String getName() {
    return "test";
  }

}
