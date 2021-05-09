$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/Register.feature");
formatter.feature({
  "line": 3,
  "name": "Registration",
  "description": "",
  "id": "registration",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@registration"
    }
  ]
});
formatter.background({
  "line": 5,
  "name": "User is on the Unacademy Home_Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on a Registration Page",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterUnacademy.user_is_on_a_Registration_Page()"
});
formatter.result({
  "duration": 13341981985,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Successfull registration by valid inputs",
  "description": "",
  "id": "registration;successfull-registration-by-valid-inputs",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@first"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User select the Country_Code",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enter valid phone number",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enter valid Otp",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enter all others values",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should able to successfully registered",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterUnacademy.user_select_the_Country_Code()"
});
formatter.result({
  "duration": 4287996327,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUnacademy.user_enter_valid_phone_number()"
});
formatter.result({
  "duration": 378098537,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUnacademy.user_enter_valid_Otp()"
});
formatter.result({
  "duration": 20076798953,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUnacademy.user_enter_all_others_values()"
});
formatter.result({
  "duration": 2595083156,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUnacademy.user_click_on_submit_button()"
});
formatter.result({
  "duration": 324862889,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUnacademy.user_should_able_to_successfully_registered()"
});
formatter.result({
  "duration": 10080945329,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h5[normalize-space()\u003d\u0027Confirm your email:\u0027]\"}\n  (Session info: chrome\u003d90.0.4430.93)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-MEL20CT\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\User\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:59981}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 8d2b50c56ad082934f3760f007f778fe\n*** Element info: {Using\u003dxpath, value\u003d//h5[normalize-space()\u003d\u0027Confirm your email:\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefinition.RegisterUnacademy.user_should_able_to_successfully_registered(RegisterUnacademy.java:100)\r\n\tat ✽.Then User should able to successfully registered(src/test/resources/Features/Register.feature:16)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Unsuccessfull registration by Invalid Phone Number",
  "description": "",
  "id": "registration;unsuccessfull-registration-by-invalid-phone-number",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@second"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User select Country_Code",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User enter invalid phone number \u003cInvalidNumber\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User click on continue link",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should get an error messages",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "registration;unsuccessfull-registration-by-invalid-phone-number;",
  "rows": [
    {
      "cells": [
        "InvalidNumber"
      ],
      "line": 26,
      "id": "registration;unsuccessfull-registration-by-invalid-phone-number;;1"
    },
    {
      "cells": [
        "727471154552"
      ],
      "line": 27,
      "id": "registration;unsuccessfull-registration-by-invalid-phone-number;;2"
    },
    {
      "cells": [
        "46646"
      ],
      "line": 28,
      "id": "registration;unsuccessfull-registration-by-invalid-phone-number;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 5,
  "name": "User is on the Unacademy Home_Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on a Registration Page",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterUnacademy.user_is_on_a_Registration_Page()"
});
formatter.result({
  "duration": 13599715830,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Unsuccessfull registration by Invalid Phone Number",
  "description": "",
  "id": "registration;unsuccessfull-registration-by-invalid-phone-number;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@registration"
    },
    {
      "line": 18,
      "name": "@second"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User select Country_Code",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User enter invalid phone number 727471154552",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User click on continue link",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should get an error messages",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterUnacademy.user_select_Country_Code()"
});
formatter.result({
  "duration": 2320340223,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "727471154552",
      "offset": 32
    }
  ],
  "location": "RegisterUnacademy.user_enter_invalid_phone_number(String)"
});
formatter.result({
  "duration": 394715914,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUnacademy.user_click_on_continue_link()"
});
formatter.result({
  "duration": 47551732,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUnacademy.user_should_get_an_error_messages()"
});
formatter.result({
  "duration": 10046480952,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//p[@class\u003d\u0027TextField__StyledP2-sc-17ki4o0-0 huYVfv\u0027]\"}\n  (Session info: chrome\u003d90.0.4430.93)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-MEL20CT\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\User\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:60026}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 219352f260d2d54995b8ec4875340a5a\n*** Element info: {Using\u003dxpath, value\u003d//p[@class\u003d\u0027TextField__StyledP2-sc-17ki4o0-0 huYVfv\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefinition.RegisterUnacademy.user_should_get_an_error_messages(RegisterUnacademy.java:138)\r\n\tat ✽.Then User should get an error messages(src/test/resources/Features/Register.feature:23)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 5,
  "name": "User is on the Unacademy Home_Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on a Registration Page",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterUnacademy.user_is_on_a_Registration_Page()"
});
formatter.result({
  "duration": 11905072860,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Unsuccessfull registration by Invalid Phone Number",
  "description": "",
  "id": "registration;unsuccessfull-registration-by-invalid-phone-number;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@registration"
    },
    {
      "line": 18,
      "name": "@second"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User select Country_Code",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User enter invalid phone number 46646",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User click on continue link",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should get an error messages",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterUnacademy.user_select_Country_Code()"
});
formatter.result({
  "duration": 2287017051,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "46646",
      "offset": 32
    }
  ],
  "location": "RegisterUnacademy.user_enter_invalid_phone_number(String)"
});
formatter.result({
  "duration": 393968477,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUnacademy.user_click_on_continue_link()"
});
formatter.result({
  "duration": 67097685,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUnacademy.user_should_get_an_error_messages()"
});
formatter.result({
  "duration": 225668569,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "Unsuccessfull registration by Invalid Otp",
  "description": "",
  "id": "registration;unsuccessfull-registration-by-invalid-otp",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@third"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "User select the Country_Code",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "User enter the correct phone number",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User enter Invalid Otp \u003cInvalidOtp\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User enter the all other values",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User click on  the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User get error message invalid otp",
  "keyword": "Then "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "registration;unsuccessfull-registration-by-invalid-otp;",
  "rows": [
    {
      "cells": [
        "InvalidOtp"
      ],
      "line": 40,
      "id": "registration;unsuccessfull-registration-by-invalid-otp;;1"
    },
    {
      "cells": [
        "565644"
      ],
      "line": 41,
      "id": "registration;unsuccessfull-registration-by-invalid-otp;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 5,
  "name": "User is on the Unacademy Home_Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on a Registration Page",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterUnacademy.user_is_on_a_Registration_Page()"
});
formatter.result({
  "duration": 13691623919,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Unsuccessfull registration by Invalid Otp",
  "description": "",
  "id": "registration;unsuccessfull-registration-by-invalid-otp;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@registration"
    },
    {
      "line": 30,
      "name": "@third"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "User select the Country_Code",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "User enter the correct phone number",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User enter Invalid Otp 565644",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User enter the all other values",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User click on  the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User get error message invalid otp",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterUnacademy.user_select_the_Country_Code()"
});
formatter.result({
  "duration": 4336498548,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUnacademy.user_enter_the_correct_phone_number()"
});
formatter.result({
  "duration": 398220235,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "565644",
      "offset": 23
    }
  ],
  "location": "RegisterUnacademy.user_enter_Invalid_Otp(String)"
});
formatter.result({
  "duration": 1240454879,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUnacademy.user_enter_the_all_other_values()"
});
formatter.result({
  "duration": 2619142523,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUnacademy.user_click_on_the_submit_button()"
});
formatter.result({
  "duration": 310001013,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUnacademy.user_get_error_message_invalid_otp()"
});
formatter.result({
  "duration": 323159307,
  "status": "passed"
});
});