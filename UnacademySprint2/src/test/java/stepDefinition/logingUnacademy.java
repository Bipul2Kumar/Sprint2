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
import pageBean.PageFactoryLogin;
@Test
public class logingUnacademy 
{
	 WebDriver driver;
	 PageFactoryLogin obj;
	@Test(priority=1)
	@Given("User is on Unacademy home page")
	public void user_is_on_unacademy_home_page() throws Throwable {
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
		
	    
	}
	@Test(priority=2)
	@When("User clicks on Login button")
	public void user_clicks_on_login_button() throws Throwable {
		obj.setLoginButton();
		Thread.sleep(2000);
		
	}
	@Test(priority=3)
	@Then("User gets textfield to enter phone number")
	public void user_gets_textfield_to_enter_phone_number() throws Throwable {
		obj.getPhoneNo();
		obj.loginPage();
		obj.otpNumber();
		obj.loginOtp();
		
		
		
}
	@Given("^User is on login page$")
	public void user_is_on_login_page() throws Throwable {
	    
	}

	@When("^User selects non-India country code$")
	public void user_selects_non_India_country_code() throws Throwable {
	  
	}

	@When("^User enters invalid \"([^\"]*)\"$")
	public void user_enters_invalid(String arg1) throws Throwable {
	    
	}

	@When("^User clicks login button$")
	public void user_clicks_login_button() throws Throwable {
	   
	}

	@Then("^error message displayed$")
	public void error_message_displayed() throws Throwable {
	   
	}

	@Then("^close the browser$")
	public void close_the_browser() throws Throwable {
	  
	}

	@When("^User selects India country code$")
	public void user_selects_India_country_code() throws Throwable {
	    
	}

	@When("^User enters valid \"([^\"]*)\"$")
	public void user_enters_valid(String arg1) throws Throwable {
	   
	}

	@When("^User enters valid phone number$")
	public void user_enters_valid_phone_number() throws Throwable {
	  
	}

	@When("^clicks on login$")
	public void clicks_on_login() throws Throwable {
	 
	}

	@Then("^User is displayed OTP sent message$")
	public void user_is_displayed_OTP_sent_message() throws Throwable {
	   
	}

	@Given("^User is on Enter OTP page$")
	public void user_is_on_Enter_OTP_page() throws Throwable {
	   
	}

	@When("^User enters an invalid \"([^\"]*)\"$")
	public void user_enters_an_invalid(String arg1) throws Throwable {
	   
	}

	@When("^User clicks on submit$")
	public void user_clicks_on_submit() throws Throwable {
	
	}

	@Then("^error message is displayed$")
	public void error_message_is_displayed() throws Throwable {
	    
	}

	@Given("^User is on Login page$")
	public void user_is_on_Login_page() throws Throwable {
	    
	}

	@When("^User clicks on continue with email link$")
	public void user_clicks_on_continue_with_email_link() throws Throwable {
	    
	}

	@When("^enters unregistered mail id$")
	public void enters_unregistered_mail_id() throws Throwable {
	    
	}

	@When("^User clicks login$")
	public void user_clicks_login() throws Throwable {
	    
	}

	@Then("^close browser$")
	public void close_browser() throws Throwable {
	    
	}

	@When("^enters registered email id$")
	public void enters_registered_email_id() throws Throwable {
	    
	}

	@Then("^User redirected to enter OTP$")
	public void user_redirected_to_enter_OTP() throws Throwable {
	    
	}



}
