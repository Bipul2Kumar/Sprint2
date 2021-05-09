@login
Feature: Login by Email

Background: User is on the Unacademy home page
Given User is on a login page

@first
Scenario: Successful login with valid email
When User click continue with emails
	And User should enters registered email
	And User clicks login buttons
	And User should  enter the valid otp
	And User click the verify otp buttons
Then User should be able to login

@second
Scenario: Unsuccessful login with invalid email
When User click continue with email
	And User should enters invalid email
	And User clicks login
Then User should get error message

@third
Scenario: Unsuccessful login with valid email and invalid otp
When User click continue with the emailId
	And User should enters valid email
	And User should  clicks login buttons
	And User should enter the invalid otp
	And User clicks the verify otp buttons
Then User will get error message