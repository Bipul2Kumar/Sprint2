Feature: Registration

@first
Scenario: Verification of Login button for Register
	Given User is on Unacademy home page for Register
	When User clicks on Login button for Register
	And User clicks on create your account link for Register
	Then User gets textfield to enter phone number for Register

@second
Scenario Outline: Verification of phone number field with invalid inputs for Register
	Given User is on registration page for Register
	When User selects India country code for Register
	When User enters invalid <phone number> and clicks Continue button for Register
	Then error is message displayed in page
	
	Examples:
		|phone number|
		|94973232188|
		|949732321|
		|0000000000|


@third
Scenario Outline: Verification of phone number field with invalid inputs for non India
	Given User is on registration page of Unacademy
	When User select non-India country code 
	And User enters invalid number "<phone number>"
	And User clicks on continue button
	Then error message display

	Examples:
		|phone number|
		|213436550567890|
		|21343|
		
@fourth
Scenario: Successful Verification of phone number field for register
	Given User is on registration page for registration
	When User enter valid phone number 
	And clicks continue
	Then User displayed OTP field for otp
	


	
@fifth
Scenario Outline: Verification of invalid OTP
	Given User is on verify OTP page
	When User enters an invalid otp  "<OTP>"
	And enter all other value
	When User click on the submit button
	Then error message displayed in page
	
	Examples:
	|OTP|
	|6228|
	|622878654|
	
	


	


	
