Feature: Registration

Background: User is on the Unacademy Home_Page
Given User is on a Registration Page
 

@first
Scenario: Successfull registration by valid inputs
When User select the Country_Code 
When User enter valid phone number
And User enter valid Otp
And User enter all others values
And User click on submit button
Then User should able to successfully registered

@second
Scenario Outline:  Unsuccessfull registration by Invalid Phone Number
When User select Country_Code 
When User enter invalid phone number <InvalidNumber>
And User click on continue link
Then User should get an error messages

Examples:
| InvalidNumber |
| 56546         |
| 72747          |

@third
Scenario Outline: Unsuccessfull registration by Invalid Otp
When User select the Country_Code 
When User enter the correct phone number
And User enter Invalid Otp <InvalidOtp>
And User enter the all other values
And User click on  the submit button
Then User get error message invalid otp

Examples:
| InvalidOtp |
| 565644     |