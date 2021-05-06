$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/Register.feature");
formatter.feature({
  "line": 1,
  "name": "Registration",
  "description": "",
  "id": "registration",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "User is on the Unacademy Home_Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on a Registration Page",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterUnacademy.user_is_on_a_Registration_Page()"
});
formatter.result({
  "duration": 17697508319,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Successfull registration by valid inputs",
  "description": "",
  "id": "registration;successfull-registration-by-valid-inputs",
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
  "name": "User select the Country_Code",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enter valid phone number",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enter valid Otp",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enter all others values",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User should able to successfully registered",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterUnacademy.user_select_the_Country_Code()"
});
formatter.result({
  "duration": 4383374295,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUnacademy.user_enter_valid_phone_number()"
});
formatter.result({
  "duration": 599022882,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUnacademy.user_enter_valid_Otp()"
});
formatter.result({
  "duration": 1230169130,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUnacademy.user_enter_all_others_values()"
});
formatter.result({
  "duration": 2920717129,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUnacademy.user_click_on_submit_button()"
});
formatter.result({
  "duration": 293152824,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUnacademy.user_should_able_to_successfully_registered()"
});
formatter.result({
  "duration": 66313,
  "status": "passed"
});
});