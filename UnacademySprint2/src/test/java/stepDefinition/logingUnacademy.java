package stepDefinition;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class logingUnacademy 
{
	WebDriver driver;
	@Given("User is on Unacademy home page")
	public void user_is_on_unacademy_home_page() {
		System.setProperty("webdriver.chrome.driver", "G:\\SeleniumSoftware\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://unacademy.com/");
		driver.manage().window().maximize();
		
	    
	}

	@When("User clicks on Login button")
	public void user_clicks_on_login_button() {
		driver.findElement(By.xpath("//button[contains(text(),'Login')]")).click();
	}

	@Then("User gets textfield to enter phone number")
	public void user_gets_textfield_to_enter_phone_number() throws InterruptedException {
		Thread.sleep(2000);
		driver.findElement(By.xpath("//div[@class='CountryMenu__StyledSelectedMenu-sc-7z48zf-1 ihtqbR']//*[local-name()='svg']")).click();
		
		driver.findElement(By.xpath("//span[normalize-space()='India']")).click();
		driver.findElement(By.xpath("//h6[normalize-space()='Continue with email']")).click();
		
		driver.findElement(By.xpath("//input[@placeholder='Email address']")).sendKeys("bipul161616@gmail.com");
		
		driver.findElement(By.cssSelector("button[class='Button__StyledButton-dg3jck-0 jerpTs EnterEmailStep__LoginButton-sc-1txz5a5-5 fRLyMV']")).click();
		//driver.findElement(By.cssSelector("input[placeholder='Enter your mobile number']")).sendKeys("9504031690");
		//driver.findElement(By.xpath("//button[@class='Button__StyledButton-dg3jck-0 jerpTs']")).click();
		Thread.sleep(20000);
		driver.findElement(By.cssSelector("button[aria-label='Verify OTP']")).click();;
		//driver.findElement(By.xpath("//input[@placeholder='One time password']")).sendKeys("566544");
		//driver.findElement(By.xpath("//input[@placeholder='Name']")).sendKeys("Bipul Kumar");
		//driver.findElement(By.xpath("//input[@placeholder='Email address']")).sendKeys("bipul161616@gmail.com");
		//driver.findElement(By.xpath("//button[normalize-space()='Select - State of residence']")).click();
		//driver.findElement(By.xpath("//span[normalize-space()='Bihar']")).click();
		//driver.findElement(By.xpath("//button[normalize-space()='Verify OTP']")).click();
		
		
	    
	}
	

}
