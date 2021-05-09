package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;
import org.testng.annotations.Test;

import PageFactoryPOM.PageFactoryRegister;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class RegisterUnacademy {
	WebDriver driver;
	

	private PageFactoryRegister pfr;
	@Test(priority=1) 
	@Given("^User is on a Registration Page$")
	public void user_is_on_a_Registration_Page() throws Throwable {
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
			System.out.println("Title Matched. User on home page"); 
		} 
		else 
		{
			System.out.println("Title NOT Matched."); 
		}
		pfr.loginButt();
		Thread.sleep(3000);

		pfr.createAccount();


	}
	@Test(priority=1)
	@When("^User select the Country_Code$")
	public void user_select_the_Country_Code() throws Throwable {
		pfr.countryIconLink();
		Thread.sleep(2000);
		pfr.CountryCode();



	}
	@Test(priority=2)
	@When("^User enter valid phone number$")
	public void user_enter_valid_phone_number() throws Throwable {
		pfr.enterNumber();
		pfr.eneterContinue();
	}
	@Test(priority=3)
	@When("^User enter valid Otp$")
	public void user_enter_valid_Otp() throws Throwable {
		Thread.sleep(20000);
		pfr.enterOTP();

	}
	@Test(priority=4)
	@When("^User enter all others values$")
	public void user_enter_all_others_values() throws Throwable {
		pfr.enterName();
		pfr.enterEmailId();
		pfr.clickStateIcon();
		pfr.selectAnyState();

	}
	@Test(priority=5)
	@When("^User click on submit button$")
	public void user_click_on_submit_button() throws Throwable {
		pfr.clickSubmitButton();

	}
	@Test(priority=6)
	@Then("^User should able to successfully registered$")
	public void user_should_able_to_successfully_registered() throws Throwable {
		String expected = "Confirm your email:";
		String actual = driver.findElement(By.xpath("//h5[normalize-space()='Confirm your email:']")).getText();
		Assert.assertEquals(actual, expected);
		if(actual.contentEquals("Confirm your email:"))
		{
			System.out.println("Confirm your email:");

		}
		else
		{
			System.out.println("Test Fail");
		}

	}
	@Test(priority=1)
	@When("^User select Country_Code$")
	public void user_select_Country_Code() throws Throwable {
		pfr.countryIconLink();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//span[normalize-space()='Bangladesh']")).click();
	}
	@Test(priority=2)
	@When("^User enter invalid phone number (\\d+)$")
	public void user_enter_invalid_phone_number(String InvalidNumber ) throws Throwable {
		pfr.invalidNumber(InvalidNumber);
		pfr.eneterContinue();


	}
	@Test(priority=3)
	@When("^User click on continue link$")
	public void user_click_on_continue_link() throws Throwable
	{
		pfr.eneterContinue();
	}
	@Test(priority=4)
	@Then("^User should get an error messages$")
	public void user_should_get_an_error_messages() throws Throwable {
		String expected = "Phone number is not valid";
		String actual = driver.findElement(By.xpath("//p[@class='TextField__StyledP2-sc-17ki4o0-0 huYVfv']")).getText();
		Assert.assertEquals(actual, expected);

		if(actual.contentEquals("Phone number is not valid"))
		{
			System.out.println("Phone number is not valid");

		}
		else
		{
			System.out.println("Test Fail");
		}

	}
	@Test(priority=1)
	@When("^User enter the correct phone number$")
	public void user_enter_the_correct_phone_number() throws Throwable {
		pfr.enterNumber();
		pfr.eneterContinue();
	}
	@Test(priority=2)
	@When("^User enter Invalid Otp (\\d+)$")
	public void user_enter_Invalid_Otp(String InvalidOtp) throws Throwable {
		pfr.invalidOtp(InvalidOtp);

	}
	@Test(priority=3)
	@When("^User enter the all other values$")
	public void user_enter_the_all_other_values() throws Throwable {
		pfr.enterName();
		pfr.enterEmailId();
		pfr.clickStateIcon();
		pfr.selectAnyState();

	}
	@Test(priority=4)
	@When("^User click on  the submit button$")
	public void user_click_on_the_submit_button() throws Throwable {
		pfr.clickSubmitButton();

	}
	@Test(priority=5)
	@Then("^User get error message invalid otp$")
	public void user_get_error_message_invalid_otp() throws Throwable {
		String expected = "This OTP is not valid";
		String actual = driver.findElement(By.xpath("//p[@class='TextField__StyledP2-sc-17ki4o0-0 huYVfv']")).getText();
		Assert.assertEquals(actual, expected);



		if(actual.contentEquals("This OTP is not valid"))
		{
			System.out.println("This OTP is not valid");

		}
		else
		{
			System.out.println("Test Fail");
		}



	}

}