package stepDefinition;
import java.io.File;
import java.io.FileInputStream;
import java.util.concurrent.TimeUnit;

import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;
import org.testng.annotations.Test;

import PageFactoryPOM.PageFactoryLogin;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
@Test
public class logingUnacademy 
{
	 WebDriver driver;
	 PageFactoryLogin obj;
	 @Test(priority=1)
	 @Given("^User is on login page$")
	 public void user_is_on_login_page() throws Throwable 
	 {
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

	 @When("^User selects country code$")
	 public void user_selects_country_code() throws Throwable 
	 {
		 obj.setLoginButton();
		 obj.setCountryCode(); 
		 obj.countryToSelect();
		 Thread.sleep(2000);
	 }
	 @Test(priority=3)
	 @When("^User enters registered phone number$")
	 public void user_enters_registered_phone_number() throws Throwable 
	 {
		 obj = new PageFactoryLogin(driver);
		 obj = PageFactory.initElements(driver,PageFactoryLogin.class );
		
		 
		 File credentials = new File("G:\\SeleniumSoftware\\number.xlsx");
			FileInputStream fis = new FileInputStream(credentials);
			XSSFWorkbook wb = new XSSFWorkbook(fis);
			XSSFSheet sheet1=wb.getSheetAt(0);
			DataFormatter formatter = new DataFormatter();
			String numb = formatter.formatCellValue(sheet1.getRow(0).getCell(0));
			obj.getPhoneNo(numb);
			Thread.sleep(20000);
	 }
	 @Test(priority=4)
	 @When("^User click login button$")
	 public void user_click_login_button() throws Throwable { 
		 obj.loginPage();
	 }
	 @Test(priority=5)
	 @When("^User should enter valid otp$")
	 public void user_should_enter_valid_otp() throws Throwable {
		 obj.otpNumber();
	   
	 }
	 @Test(priority=6)
	 @When("^click on verify otp button$")
	 public void click_on_verify_otp_button() throws Throwable {
		 obj.loginOtp();
	    
	 }
	 @Test(priority=7)
	 @Then("^User should be able to login successfully$")
	 public void user_should_be_able_to_login_successfully() throws Throwable {
		 
	     
	 }

}
