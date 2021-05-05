
Feature: Login

Background: User is on Unacademy home page
Given User is on login page

@first
Scenario: Successful login with valid phone number
When User selects country code
	And User enters registered phone number
	And User click login button
	And User should enter valid otp
	And click on verify otp button
Then User should be able to login successfully
	
		
@second
Scenario: UnSuccessful login with invalid phone number
When User selects country codes
	And User enters invalid phone number
	And User clicks login button
Then User get error message
@Third
Scenario: UnSuccessful login with invalid otp
When User select any country code
	And User enters registered phone numbers
	And User clicks the login button
	And User should enter invalid otp
Then User get an error message

@fourth
Scenario: Successful login with valid email
When User click continue with emails
	And User should enters registered email
	And User clicks login buttons
	And User should  enter the valid otp
Then User should be able to login

@fifth
Scenario: Unsuccessful login with invalid email
When User click continue with email
	And User should enters invalid email
	And User clicks login
Then User should get error message

@sixth
Scenario: Unsuccessful login with valid email and invalid otp
When User click continue with the emailId
	And User should enters valid email
	And User should  clicks login buttons
Then User will get error message