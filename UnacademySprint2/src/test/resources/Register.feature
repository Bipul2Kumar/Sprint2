Feature: Registration

@first
Scenario: Verification of Login button
	Given User is on Unacademy home page
	When User clicks on Login button
	And User clicks on create your account link
	Then User gets textfield to enter phone number

@second
Scenario Outline: Verification of phone number field with invalid inputs
	Given User is on registration page
	When User selects India country code 
	When User enters invalid <phone number> and clicks Continue button
	Then error is message displayed
	Then close the browser
	Examples:
		|phone number|
		|94973232188|
		|949732321|
		|0000000000|


@third
Scenario Outline: Verification of phone number field with invalid inputs
	Given User is on registration page
	When User selects non-India country code
	And User enters invalid "<phone number>"
	And User clicks continue button
	Then error message displayed
	Then close the browser
	Examples:
		|phone number|
		|213436550567890|
		|21343|
		
@fourth
Scenario: Successful Verification of phone number field
	Given User is on registration page
	When User enters valid phone number
	And clicks on continue
	Then User displayed OTP field
	Then close the browser


	
@fifth
Scenario Outline: Verification of invalid OTP
	Given User is on verify OTP page
	When User enters an invalid "<OTP>"
	And enters all other values
	When User clicks on submit
	Then error message displayed
	Then close the browser
	Examples:
	|OTP|
	|6228|
	|622878654|
	
	


	


	
