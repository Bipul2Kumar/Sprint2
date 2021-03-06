package PageFactoryPOM;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PageFactoryLogin 
{
	WebDriver driver;
	@FindBy(xpath="//button[contains(text(),'Login')]")
	WebElement loginbutton;
	@FindBy(xpath="//p[@class='P1-llcrra-0 CountryMenu__BoldP1-sc-7z48zf-0 dEUMYL dlHJTQ']")
	WebElement countrycode;
	@FindBy(xpath="//span[@class='MenuItem__Label-sc-3auwg3-3 gAJfoK']")
	WebElement selectCountry;
	@FindBy(xpath="//input[@placeholder='Enter your mobile number']")
	WebElement getNum;
	@FindBy(css="button[class='Button__StyledButton-dg3jck-0 jerpTs']")
	WebElement login;
	@FindBy(xpath="//input[@placeholder='One time password']")
	WebElement otpNo;
	@FindBy(xpath="//button[normalize-space()='Verify OTP']")
	WebElement logOtp;
	
	@FindBy(xpath="//h6[normalize-space()='Continue with email']")
	WebElement contWithEmail ;
	@FindBy(css="input[placeholder='Email address']")
	WebElement enterEmail;
	@FindBy(css="button[class='Button__StyledButton-dg3jck-0 jerpTs EnterEmailStep__LoginButton-sc-1txz5a5-5 fRLyMV']")
	WebElement emailLoginButton;
	@FindBy(xpath="//input[@placeholder='One time password']")
	WebElement enterOtp;
	@FindBy(css="button[aria-label='Verify OTP']")
	WebElement verifyOtp;
	@FindBy(xpath="//p[@class='TextField__StyledP2-sc-17ki4o0-0 huYVfv']")
	WebElement errors;
	public  PageFactoryLogin(WebDriver driver)
	{
		this.driver=driver;
		PageFactory.initElements(driver, this);
		
		
	}
	public void setLoginButton() throws Throwable {
		loginbutton.click();
		Thread.sleep(5000);
	}
	public void setCountryCode() throws Throwable{
		
			countrycode.click();
	}
	public void countryToSelect() throws Throwable
	{
		
		selectCountry.click();
	}
	public void getPhoneNo(String numb)
	{
		
		getNum.sendKeys(numb);
		
	}
	public void loginPage()
	{
		login.click();
	}
	public void otpNumber() throws Throwable
	{
		
		otpNo.sendKeys("");
	}
	public void loginOtp() throws Throwable
	{
		Thread.sleep(20000);
		logOtp.click();
	}
	public void byEmail()
	{
		contWithEmail.click();
	}
	public void enterEmailId()
	{
		enterEmail.sendKeys("bipul161616@gmail.com");
		
	}
	public void logButton()
	{
		emailLoginButton.click();
	}
	public void otpEnter() throws Throwable
	{
		enterOtp.sendKeys("");
	}
	public void verifyTheOtp() throws Throwable
	
	{
		Thread.sleep(20000);
		verifyOtp.click();
	}
	public void errorMessage()
	{
		
		errors.getText();
	}
	
	
		
}
	
	
	
		
		
	
	
	
	

