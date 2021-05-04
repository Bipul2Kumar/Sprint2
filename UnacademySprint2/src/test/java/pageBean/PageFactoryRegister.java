package pageBean;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PageFactoryRegister 
{
	WebDriver driver;
	
	@FindBy(xpath="//button[contains(text(),'Login')]")
	WebElement loginbutton;
	@FindBy(css="h6[class='H6-sc-1gn2suh-0 EnterNumberStep__StyledH6-sc-17qxvlo-3 fNyXoW fUlspL']")
	WebElement creatAcc;
	@FindBy(css="h2[class='H2-s1k28w-0 EnterNumberStep__Header-sc-17qxvlo-4 bKKwLD cabAav']")
	WebElement title;
			/*
	 * 
	 * @FindBy(className="MenuItem__Label-sc-3auwg3-3 gAJfoK") WebElement
	 * countryCode;
	 * 
	 * @FindBy(css="input[placeholder='Enter your mobile number']") WebElement
	 * fillNo;
	 * 
	 * @FindBy(css="button[aria-label='Continue']") WebElement continueB;
	 * //@FindBy(xpath="//button[contains(text(),'Login')]") //WebElement
	 * loginbutton;
	 */	


public  PageFactoryRegister(WebDriver driver)
{
	this.driver=driver;
	PageFactory.initElements(driver, this);
	
	
}
	public void loginButt() 
	{
	
		loginbutton.click();
	}
	public void createAccount()
	{
		creatAcc.click();
	}
	public void titleVerify()
	{
		title.isDisplayed();
	}
	/*
	 * public void indiaCountryCode() { countryCode.click(); } public void
	 * enterNumber() { fillNo.sendKeys("phone numbe"); } public void
	 * continueButton() { continueB.click(); }
	 */
	
}
