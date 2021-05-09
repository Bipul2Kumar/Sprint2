$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/LoginByNumber.feature");
formatter.feature({
  "line": 2,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LoginByNumber"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "User is on Unacademy home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginByNumber.user_is_on_login_page()"
});
formatter.result({
  "duration": 16211137231,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Successful login with valid phone number",
  "description": "",
  "id": "login;successful-login-with-valid-phone-number",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@first"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User selects country code",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters registered phone number",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should enter valid otp",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "click on verify otp button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginByNumber.user_selects_country_code()"
});
formatter.result({
  "duration": 304588002,
  "status": "passed"
});
formatter.match({
  "location": "LoginByNumber.user_enters_registered_phone_number()"
});
formatter.result({
  "duration": 1186783823,
  "status": "passed"
});
formatter.match({
  "location": "LoginByNumber.user_click_login_button()"
});
formatter.result({
  "duration": 76666326,
  "status": "passed"
});
formatter.match({
  "location": "LoginByNumber.user_should_enter_valid_otp()"
});
formatter.result({
  "duration": 815533027,
  "status": "passed"
});
formatter.match({
  "location": "LoginByNumber.click_on_verify_otp_button()"
});
formatter.result({
  "duration": 20128899052,
  "status": "passed"
});
formatter.match({
  "location": "LoginByNumber.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 1031110161,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is on Unacademy home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginByNumber.user_is_on_login_page()"
});
formatter.result({
  "duration": 15322570713,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "UnSuccessful login with invalid phone number",
  "description": "",
  "id": "login;unsuccessful-login-with-invalid-phone-number",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@second"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User selects country codes",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enters invalid phone number",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User get error message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginByNumber.user_selects_country_codes()"
});
formatter.result({
  "duration": 2325398535,
  "status": "passed"
});
formatter.match({
  "location": "LoginByNumber.user_enters_invalid_phone_number()"
});
formatter.result({
  "duration": 20231622366,
  "status": "passed"
});
formatter.match({
  "location": "LoginByNumber.user_clicks_login_button()"
});
formatter.result({
  "duration": 106511394,
  "status": "passed"
});
formatter.match({
  "location": "LoginByNumber.user_get_error_message()"
});
formatter.result({
  "duration": 10088637150,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//p[@class\u003d\u0027TextField__StyledP2-sc-17ki4o0-0 huYVfv\u0027]\"}\n  (Session info: chrome\u003d90.0.4430.93)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-MEL20CT\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\User\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:61787}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 8522965506307f14ebd4ec1ca101e402\n*** Element info: {Using\u003dxpath, value\u003d//p[@class\u003d\u0027TextField__StyledP2-sc-17ki4o0-0 huYVfv\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefinition.LoginByNumber.user_get_error_message(LoginByNumber.java:166)\r\n\tat ✽.Then User get error message(src/test/resources/Features/LoginByNumber.feature:21)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 4,
  "name": "User is on Unacademy home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginByNumber.user_is_on_login_page()"
});
formatter.result({
  "duration": 15474531862,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "UnSuccessful login with invalid otp",
  "description": "",
  "id": "login;unsuccessful-login-with-invalid-otp",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@Third"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User select any country code",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User enters registered phone numbers",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User clicks the login button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User should enter invalid otp",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User get an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginByNumber.user_select_any_country_code()"
});
formatter.result({
  "duration": 2320950408,
  "status": "passed"
});
formatter.match({
  "location": "LoginByNumber.user_enters_registered_phone_numbers()"
});
formatter.result({
  "duration": 20228521066,
  "status": "passed"
});
formatter.match({
  "location": "LoginByNumber.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 103074930,
  "status": "passed"
});
formatter.match({
  "location": "LoginByNumber.user_should_enter_invalid_otp()"
});
formatter.result({
  "duration": 21291553596,
  "status": "passed"
});
formatter.match({
  "location": "LoginByNumber.user_get_an_error_message()"
});
formatter.result({
  "duration": 358645112,
  "status": "passed"
});
});