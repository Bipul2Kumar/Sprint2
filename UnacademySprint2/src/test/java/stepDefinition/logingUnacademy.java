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
	/*public void openBrowser() {
		
		//initalizing chrome driver
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
		
	}*/
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

	@When("User clicks on Login button")
	public void user_clicks_on_login_button() throws Throwable {
		obj.setLoginButton();
		Thread.sleep(2000);
		
	}
	
	@Then("User gets textfield to enter phone number")
	public void user_gets_textfield_to_enter_phone_number() throws Throwable {
		obj.getPhoneNo();
		obj.loginPage();
		obj.otpNumber();
		obj.loginOtp();
		
		
		
}

}
