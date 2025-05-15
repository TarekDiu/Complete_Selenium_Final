package pages;


import org.openqa.selenium.By;

import base.Base;

public class Feature_LoginFunction extends Base {
	
	//loginCustomer Locator
	public static By Customer_Login_Button = By.xpath("//a[@class='sign-in-btn']//span[contains(text(),'সাইন ইন')]");
	public static By Customer_Email = By.xpath("//input[@id='email_phone']");
	public static By customer_Password = By.xpath("//input[@id='password']");
	public static By Customer_Submit = By.xpath("//button[@class='btn w-100 sign-in-btn']");
	
	//Order locator
	
	public static By Order_Button = By.xpath("//div[13]//div[2]//div[2]//button[2]");
	public static By Customer_Name = By.xpath("//input[@id='customer_name']");
	public static By Customer_Phone = By.xpath("//input[@id='customer_phone']");
	public static By Customer_Address = By.xpath("//textarea[@id='customer_address']");
	public static By Customer_Area = By.xpath("//select[@id='shipping_method']");
	public static By Order_Submit = By.xpath("//button[@id='conf_order_btn']");
	public static By labelWelcomeMessage =  By.xpath("//div[@class='header-right']//span[contains(text(),'ট্র্যাক অর্ডার')]");
	
	//UserProfilepage locator
	
	public static By Profile_Button = By.xpath("//span[@class='text-uppercase']");
	public static By Orders_Button = By.xpath("//a[contains(text(),'অর্ডারস')]");
	public static By tableRowsOrderlist =   By.xpath("//tr");
	
	
	
	// Actions
	public static String loginAsCustomer(String userId, String password) {
		  navigateURL(host);
		  click(Feature_LoginFunction.Customer_Login_Button);
		  sendkeys(Feature_LoginFunction.Customer_Email, userId);
		  sendkeys( Feature_LoginFunction.customer_Password, password);
		  click(Feature_LoginFunction.Customer_Submit);
		  String welcomeMsg = getElementText(HomePage.Home_Page);
		  return welcomeMsg;	
	}
	
	
	
	
	
	
	
	

}
