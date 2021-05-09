$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/LoginByEmail.feature");
formatter.feature({
  "line": 2,
  "name": "Login by Email",
  "description": "",
  "id": "login-by-email",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "User is on the Unacademy home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on a login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginByEmailId.user_is_on_a_login_page()"
});
formatter.result({
  "duration": 16274045873,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Successful login with valid email",
  "description": "",
  "id": "login-by-email;successful-login-with-valid-email",
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
  "name": "User click continue with emails",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User should enters registered email",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks login buttons",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should  enter the valid otp",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User click the verify otp buttons",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginByEmailId.user_click_continue_with_emails()"
});
formatter.result({
  "duration": 121210314,
  "status": "passed"
});
formatter.match({
  "location": "LoginByEmailId.user_should_enters_registered_email()"
});
formatter.result({
  "duration": 233744390,
  "status": "passed"
});
formatter.match({
  "location": "LoginByEmailId.user_clicks_login_buttons()"
});
formatter.result({
  "duration": 81754453,
  "status": "passed"
});
formatter.match({
  "location": "LoginByEmailId.user_should_enter_the_valid_otp()"
});
formatter.result({
  "duration": 3112646654,
  "status": "passed"
});
formatter.match({
  "location": "LoginByEmailId.user_click_the_verify_otp_buttons()"
});
formatter.result({
  "duration": 20123452112,
  "status": "passed"
});
formatter.match({
  "location": "LoginByEmailId.user_should_be_able_to_login()"
});
formatter.result({
  "duration": 2199737009,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is on the Unacademy home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on a login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginByEmailId.user_is_on_a_login_page()"
});
formatter.result({
  "duration": 18079596446,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Unsuccessful login with invalid email",
  "description": "",
  "id": "login-by-email;unsuccessful-login-with-invalid-email",
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
  "name": "User click continue with email",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User should enters invalid email",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks login",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should get error message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginByEmailId.user_click_continue_with_email()"
});
formatter.result({
  "duration": 98888971,
  "status": "passed"
});
formatter.match({
  "location": "LoginByEmailId.user_should_enters_invalid_email()"
});
formatter.result({
  "duration": 177406412,
  "status": "passed"
});
formatter.match({
  "location": "LoginByEmailId.user_clicks_login()"
});
formatter.result({
  "duration": 68439372,
  "status": "passed"
});
formatter.match({
  "location": "LoginByEmailId.user_should_get_error_message()"
});
formatter.result({
  "duration": 269824959,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is on the Unacademy home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on a login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginByEmailId.user_is_on_a_login_page()"
});
formatter.result({
  "duration": 17651919254,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Unsuccessful login with valid email and invalid otp",
  "description": "",
  "id": "login-by-email;unsuccessful-login-with-valid-email-and-invalid-otp",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@third"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User click continue with the emailId",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User should enters valid email",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User should  clicks login buttons",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User should enter the invalid otp",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User clicks the verify otp buttons",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User will get error message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginByEmailId.user_click_continue_with_the_emailId()"
});
formatter.result({
  "duration": 113758043,
  "status": "passed"
});
formatter.match({
  "location": "LoginByEmailId.user_should_enters_valid_email()"
});
formatter.result({
  "duration": 231281547,
  "status": "passed"
});
formatter.match({
  "location": "LoginByEmailId.user_should_clicks_login_buttons()"
});
formatter.result({
  "duration": 78193586,
  "status": "passed"
});
formatter.match({
  "location": "LoginByEmailId.user_should_enter_the_invalid_otp()"
});
formatter.result({
  "duration": 1804081400,
  "status": "passed"
});
formatter.match({
  "location": "LoginByEmailId.user_clicks_the_verify_otp_buttons()"
});
formatter.result({
  "duration": 20135909235,
  "status": "passed"
});
formatter.match({
  "location": "LoginByEmailId.user_will_get_error_message()"
});
formatter.result({
  "duration": 320692352,
  "status": "passed"
});
});