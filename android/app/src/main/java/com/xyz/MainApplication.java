package com.xyz;

import android.app.Application;
import android.util.Log;

import com.facebook.react.ReactApplication;
import com.imagepicker.ImagePickerPackage;
import com.reactlibrary.RNMlKitOcrPackage;

import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new ImagePickerPackage(),
            new RNMlKitOcrPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    Log.i("SYDNEY", "STEP 1");
    Log.i("SYDNEY", "STEP 2");
    Log.i("SYDNEY", "STEP 3");
    SoLoader.init(this, /* native exopackage */ false);
  }
}
