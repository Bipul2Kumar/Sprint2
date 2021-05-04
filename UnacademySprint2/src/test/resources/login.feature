
Feature: Login Unacademy

@first
Scenario: Verification of Login button
	Given User is on Unacademy home page
	When User clicks on Login button
	Then User gets textfield to enter phone number


@second	
Scenario Outline: Verification of phone number field with invalid inputs
	Given User is on login page
	When User selects non-India country code
	And User enters invalid "<phone number>"
	And User clicks login button
	Then error message displayed
	Then close the browser
	Examples:
		|phone number|
		|213436550567890|
		|21343|
		
@third
Scenario Outline: Verification of valid phone number inputs
	Given User is on login page
	When User selects India country code
	And User enters valid "<phone number>"
	And User clicks login button
	Then close the browser
	Examples:
		|phone number|
		|9504031690|
		|8584994347|
		

@fifth
Scenario: Successful Verification of phone number field
	Given User is on login page
	When User enters valid phone number 
	And clicks on login
	Then User is displayed OTP sent message
	Then close the browser
	
@sixth
Scenario Outline: Verification of invalid OTP
	Given User is on Enter OTP page
	When User enters an invalid "<OTP>" 
	And User clicks on submit
	Then error message is displayed
	Then close the browser
	Examples:
	|OTP|
	|6228|
	|622878654|
	
@seventh
Scenario: Unsuccessful login with unregistered email id
	Given User is on Login page
	When User clicks on continue with email link
	And enters unregistered mail id 
	When User clicks login 
	Then error message is displayed
	Then close browser
	
@eight
Scenario: Registered email id
	Given User is on Login page
	When User clicks on continue with email link
	And enters registered email id
	When User clicks login
	Then User redirected to enter OTP
	Then close browser
	