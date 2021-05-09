package PageFactoryPOM;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PageFactoryRegister 
{
	WebDriver driver;

	@FindBy(xpath="//button[contains(text(),'Login')]")
	WebElement loginbutton;
	@FindBy(xpath="//h6[normalize-space()='create your account']")
	WebElement creatAcc;
	@FindBy(css="p[class='P1-llcrra-0 CountryMenu__BoldP1-sc-7z48zf-0 dEUMYL dlHJTQ']")
	WebElement countryIcon;
	@FindBy(xpath="//span[@class='MenuItem__Label-sc-3auwg3-3 gAJfoK']") 
	WebElement countryCode;
	@FindBy(css="button[aria-label='Continue']")
	WebElement continueButton;
	@FindBy(css="input[placeholder='Enter your mobile number']") 
	WebElement fillNo;
	@FindBy(css="input[placeholder='One time password']")
	WebElement enterOtp;
	@FindBy(css="input[placeholder='Name']")
	WebElement enterNam;
	@FindBy(css="input[placeholder='Email address']")
	WebElement enterEmail;
	@FindBy(xpath="//button[normalize-space()='Select - State of residence']")
	WebElement clickState;
	@FindBy(xpath="//span[normalize-space()='Bihar']")
	WebElement selectState;
	@FindBy(css="button[aria-label='Submit']")
	WebElement clickSubmit;
	@FindBy(css="input[placeholder='Enter your mobile number']") 
	WebElement InvalidNub;
	@FindBy(css="input[placeholder='One time password']")
	WebElement enterInvalidOtp;




	public  PageFactoryRegister(WebDriver driver)
	{
		this.driver=driver;
		PageFactory.initElements(driver, this);


	}
	public void loginButt() 
	{

		loginbutton.click();
	}
	public void createAccount() throws Throwable
	{
		Thread.sleep(2000);
		creatAcc.click();
	}
	public void countryIconLink()
	{
		countryIcon.click();
	}
	public void CountryCode() throws Throwable 
	{ 
		Thread.sleep(2000);
		countryCode.click(); 
	} 
	public void enterNumber() 
	{ 
		fillNo.sendKeys("9852745877");
	}
	public void eneterContinue()
	{
		continueButton.click();
	}
	public void enterOTP()
	{
		enterOtp.sendKeys("");
	}
	public void enterName() throws Throwable
	
	{
		Thread.sleep(2000);
		enterNam.sendKeys("Bipul Kumar");
	}
	public void enterEmailId()
	{
		enterEmail.sendKeys("bipul@gmail.com");
	}
	public void clickStateIcon()
	{
		clickState.click();
	}
	public void selectAnyState()
	{
		selectState.click();
	}
	public void clickSubmitButton()
	{
		clickSubmit.click();
	}
	public void invalidNumber(String InvalidNumber)
	{
		InvalidNub.sendKeys(InvalidNumber);
	}
	public void invalidOtp(String InvalidOtp)
	{
		enterInvalidOtp.sendKeys(InvalidOtp);
	}
	

}
