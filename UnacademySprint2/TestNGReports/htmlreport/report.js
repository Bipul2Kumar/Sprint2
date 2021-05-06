$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/Register.feature");
formatter.feature({
  "line": 1,
  "name": "Registration",
  "description": "",
  "id": "registration",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Unsuccessfull registration by Invalid Phone Number",
  "description": "",
  "id": "registration;unsuccessfull-registration-by-invalid-phone-number",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@second"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User select Country_Code",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enter invalid phone number \u003cInvalidNumber\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User click on continue link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should get an error messages",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "registration;unsuccessfull-registration-by-invalid-phone-number;",
  "rows": [
    {
      "cells": [
        "InvalidNumber"
      ],
      "line": 24,
      "id": "registration;unsuccessfull-registration-by-invalid-phone-number;;1"
    },
    {
      "cells": [
        "56546"
      ],
      "line": 25,
      "id": "registration;unsuccessfull-registration-by-invalid-phone-number;;2"
    },
    {
      "cells": [
        "72747"
      ],
      "line": 26,
      "id": "registration;unsuccessfull-registration-by-invalid-phone-number;;3"
    }
  ],
  "keyword": "Examples"
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
  "duration": 21734137385,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Unsuccessfull registration by Invalid Phone Number",
  "description": "",
  "id": "registration;unsuccessfull-registration-by-invalid-phone-number;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@second"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User select Country_Code",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enter invalid phone number 56546",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User click on continue link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should get an error messages",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterUnacademy.user_select_Country_Code()"
});
formatter.result({
  "duration": 2363620662,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "56546",
      "offset": 32
    }
  ],
  "location": "RegisterUnacademy.user_enter_invalid_phone_number(String)"
});
formatter.result({
  "duration": 498743904,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUnacademy.user_click_on_continue_link()"
});
formatter.result({
  "duration": 72824785,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUnacademy.user_should_get_an_error_messages()"
});
formatter.result({
  "duration": 456808236,
  "status": "passed"
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
  "duration": 14435876900,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Unsuccessfull registration by Invalid Phone Number",
  "description": "",
  "id": "registration;unsuccessfull-registration-by-invalid-phone-number;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@second"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User select Country_Code",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enter invalid phone number 72747",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User click on continue link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should get an error messages",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterUnacademy.user_select_Country_Code()"
});
formatter.result({
  "duration": 2384079066,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "72747",
      "offset": 32
    }
  ],
  "location": "RegisterUnacademy.user_enter_invalid_phone_number(String)"
});
formatter.result({
  "duration": 516224895,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUnacademy.user_click_on_continue_link()"
});
formatter.result({
  "duration": 91355993,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUnacademy.user_should_get_an_error_messages()"
});
formatter.result({
  "duration": 380617927,
  "status": "passed"
});
});