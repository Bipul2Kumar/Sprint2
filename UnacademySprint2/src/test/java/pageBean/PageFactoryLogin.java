package pageBean;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PageFactoryLogin 
{
	WebDriver driver;
	@FindBy(xpath="//button[contains(text(),'Login')]")
	WebElement loginbutton;
	@FindBy(xpath="//div[@class='CountryMenu__StyledSelectedMenu-sc-7z48zf-1 ihtqbR']//*[local-name()='svg']")
	WebElement countrycode;
	@FindBy(xpath="//input[@placeholder='Enter your mobile number']")
	WebElement getNum;
	@FindBy(css="button[class='Button__StyledButton-dg3jck-0 jerpTs']")
	WebElement login;
	@FindBy(xpath="//input[@placeholder='One time password']")
	WebElement otpNo;
	@FindBy(xpath="//button[normalize-space()='Verify OTP']")
	WebElement logOtp;
	/*@FindBy(xpath="//span[normalize-space()='India'")
	WebElement selectCountry;
	@FindBy(xpath="//h6[normalize-space()='Continue with email']")
	WebElement loginbyemail;
	@FindBy(xpath="//input[@placeholder='Email address']")
	WebElement emailaddress;
	@FindBy(css="button[class='Button__StyledButton-dg3jck-0 jerpTs EnterEmailStep__LoginButton-sc-1txz5a5-5 fRLyMV']")
	WebElement clicklogin;
	@FindBy(css="button[aria-label='Verify OTP']")
	WebElement verifyotp;*/
	public  PageFactoryLogin(WebDriver driver)
	{
		this.driver=driver;
		PageFactory.initElements(driver, this);
		
		
	}
	public void setLoginButton() {
		loginbutton.click();
	}
	public void setCountryCode(){
		
		countrycode.click();
	}
	public void getPhoneNo()
	{
		
		getNum.sendKeys("8584994347");
	}
	public void loginPage()
	{
		login.click();
	}
	public void otpNumber() throws Throwable
	{
		Thread.sleep(5000);
		otpNo.sendKeys("215466");
	}
	public void loginOtp() throws Throwable
	{
		Thread.sleep(5000);
		logOtp.click();
	}
		
	}
	
	
	
		
		
	
	
	
	

