
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

