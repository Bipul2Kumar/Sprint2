package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;
import org.testng.annotations.Test;

import PageFactoryPOM.PageFactoryLogin;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginByEmailId 
{
	WebDriver driver;
	PageFactoryLogin obj;
	@Test(priority=1)
	@Given("^User is on a login page$")
	public void user_is_on_a_login_page() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "G:\\SeleniumSoftware\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
	
		//implicit wait
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		//loading page factory
		  obj = new PageFactoryLogin(driver);
		 obj = PageFactory.initElements(driver,PageFactoryLogin.class );
		
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
		  Thread.sleep(3000);
		  obj.setLoginButton();
		
	 
	}
	@Test(priority=2)
	@When("^User click continue with emails$")
	public void user_click_continue_with_emails() throws Throwable {
		obj.byEmail();
	  
	}
	@Test(priority=3)
	@When("^User should enters registered email$")
	public void user_should_enters_registered_email() throws Throwable {
		obj.enterEmailId();
	   
	}
	@Test(priority=4)
	@When("^User clicks login buttons$")
	public void user_clicks_login_buttons() throws Throwable {
		obj.logButton();
	    
	}
	@Test(priority=5)
	@When("^User should  enter the valid otp$")
	public void user_should_enter_the_valid_otp() throws Throwable {
		obj.otpEnter();
		Thread.sleep(2000);
	    
	}
	@Test(priority=6)
	
	@When("^User click the verify otp buttons$")
	public void user_click_the_verify_otp_buttons() throws Throwable {
		obj.verifyTheOtp();
	}
	
	@Test(priority=7)
	@Then("^User should be able to login$")
	public void user_should_be_able_to_login() throws Throwable {
		
	  
	}
	@Test(priority=1)
	@When("^User click continue with email$")
	public void user_click_continue_with_email() throws Throwable 
	{
		obj.byEmail();
	}
	@Test(priority=2)
	@When("^User should enters invalid email$")
	public void user_should_enters_invalid_email() throws Throwable 
	{
		
		driver.findElement(By.cssSelector("input[placeholder='Email address']")).sendKeys("bipul2@gmail.com");  
	}
	@Test(priority=3)
	@When("^User clicks login$")
	public void user_clicks_login() throws Throwable {
		obj.logButton();
	   
	}
	@Test(priority=4)
	@Then("^User should get error message$")
	public void user_should_get_error_message() throws Throwable {
	    
	}
	@Test(priority=1)
	@When("^User click continue with the emailId$")
	public void user_click_continue_with_the_emailId() throws Throwable 
	{
		obj.byEmail();
	}
	@Test(priority=2)
	@When("^User should enters valid email$")
	public void user_should_enters_valid_email() throws Throwable {
		obj.enterEmailId();
		
	   
	}
	@Test(priority=3)
	@When("^User should  clicks login buttons$")
	public void user_should_clicks_login_buttons() throws Throwable {
		obj.logButton(); 
	}
	@Test(priority=4)
	@When("^User should enter the invalid otp$")
	public void user_should_enter_the_invalid_otp() throws Throwable {
		driver.findElement(By.xpath("//input[@placeholder='One time password']")).sendKeys("647645");
		
	    
	}
	@Test(priority=5)
	@When("^User clicks the verify otp buttons$")
	public void user_clicks_the_verify_otp_buttons() throws Throwable {
		obj.verifyTheOtp();
	   
	}
	@Test(priority=6)
	@Then("^User will get error message$")
	public void user_will_get_error_message() throws Throwable {
		String expected = "This OTP is not valid";
		String actual = driver.findElement(By.xpath("//p[@class='TextField__StyledP2-sc-17ki4o0-0 huYVfv']")).getText();
		Assert.assertEquals(actual, expected);
		//System.out.println("This OTP is not valid");
		if(actual.contentEquals("This OTP is not valid"))
		{
			System.out.println("Please Enter Valid Otp");
			
		}
		else
		{
			System.out.println("Test Fail");
		}
		driver.close();
	    
	}

	


	

}
