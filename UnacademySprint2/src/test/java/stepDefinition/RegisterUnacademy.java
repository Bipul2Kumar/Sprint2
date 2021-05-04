package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;
import org.testng.annotations.Test;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import pageBean.PageFactoryRegister;

public class RegisterUnacademy {
	WebDriver driver;
	PageFactoryRegister pfr;
	@Test(priority=1)
	@Given("User is on Unacademy home page for Register")
	public void user_is_on_unacademy_home_page_for_register() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "G:\\SeleniumSoftware\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		//implicit wait
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

		//loading page factory
		pfr = new PageFactoryRegister(driver);
		pfr = PageFactory.initElements(driver,PageFactoryRegister.class );
		//loading website
		driver.get("https://unacademy.com/");
				
		//maximizing browser
		driver.manage().window().maximize();
		String title = driver.getTitle();
	    
	    //asserting page title
	    String expected_title = "Unacademy - India's Largest Online Learning Platform for UPSC CSE, JEE, NEET, CBSE and 35+ exams";
	    Assert.assertEquals(title, expected_title);
		  
	      if(title.contentEquals("Unacademy - India's Largest Online Learning Platform for UPSC CSE, JEE, NEET, CBSE and 35+ exams")) {
		  System.out.println("Title Matched. User on home page"); } 
		  else {
		  System.out.println("Title NOT Matched."); }
		  //Thread.sleep(3000);
		 // pfr.loginButt();
		  //pfr.createAccount();
			
	}
	@Test(priority=2)
	@When("User clicks on Login button for Register")
	public void user_clicks_on_login_button_for_register() throws Throwable  {
	
		 pfr.loginButt();
		
	    
	}
	@Test(priority=3)
	@When("User clicks on create your account link for Register")
	public void user_clicks_on_create_your_account_link_for_register() throws Throwable {
		Thread.sleep(3000);
		pfr.createAccount();
	    
	}
	@Test( priority=4)

	@Then("User gets textfield to enter phone number for Register")
	public void user_gets_textfield_to_enter_phone_number_for_register() throws Throwable {
		
	  Thread.sleep(3000);
	}
	@Test( priority=5)
	@Given("User is on registration page for Register")
	public void user_is_on_registration_page_for_register() {
		String title = driver.getTitle();
		String expectedTitle = "Join Unacademy";
	    Assert.assertEquals(title, expectedTitle);
		  
	      if(title.contentEquals("Join Unacademy")) {
		  System.out.println("Title Matched. User on register home page"); } 
		  else {
		  System.out.println("Title NOT Matched."); }
	 
	}
	@Test
	@When("User selects India country code for Register")
	public void user_selects_india_country_code_for_register() {
	
	}
	@Test
	@When("User enters invalid {int} and clicks Continue button for Register")
	public void user_enters_invalid_and_clicks_continue_button_for_register(Integer int1) {
	   
	}
	@Test
	@Then("error is message displayed in page")
	public void error_is_message_displayed_in_page() {
	    
	}

	@Given("User is on registration page of Unacademy")
	public void user_is_on_registration_page_of_unacademy() {
	 
	}
	@Test
	@When("User select non-India country code")
	public void user_select_non_india_country_code() {
	  
	}
	@Test
	@When("User enters invalid number {string}")
	public void user_enters_invalid_number(String string) {
	
	}
	@Test
	@When("User clicks on continue button")
	public void user_clicks_on_continue_button() {
	    
	}
	@Test
	@Then("error message display")
	public void error_message_display() {
	   
	}
	@Test
	@Given("User is on registration page for registration")
	public void user_is_on_registration_page_for_registration() {
	    
	}
	@Test
	@When("User enter valid phone number")
	public void user_enter_valid_phone_number() {
	    
	}
	@Test
	@When("clicks continue")
	public void clicks_continue() {
	    
	}
	@Test
	@Then("User displayed OTP field for otp")
	public void user_displayed_otp_field_for_otp() {
	    
	}
	@Test
	@Given("User is on verify OTP page")
	public void user_is_on_verify_otp_page() {
	   
	}
	@Test
	@When("User enters an invalid otp  {string}")
	public void user_enters_an_invalid_otp(String string) {
	   
	}
	@Test
	@When("enter all other value")
	public void enter_all_other_value() {
	   
	}
	@Test
	@When("User click on the submit button")
	public void user_click_on_the_submit_button() {
	
	}
	@Test
	@Then("error message displayed in page")
	public void error_message_displayed_in_page() {
	  
	}
}
