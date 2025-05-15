package base;

import java.io.FileInputStream;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

//import utlis.ExcelReader;

public class Base {

	public static WebDriver driver; // default
	public static FileInputStream fis;
	public static Properties config;
	public static String host;
	//public static ExcelReader excelReader; //use for excelfile
	//public static List<Map<String, String>> testData;

	//Url Method
	public static void navigateURL(String url) {
		driver.get(url);
	}
  //locator only use click
	public static void click(By locator) {
		driver.findElement(locator).click();
	}

	public static void clear(By locator) {
		driver.findElement(locator).clear();
	}
 //sendkeys method
	public static void sendkeys(By locator, String value) {
		driver.findElement(locator).sendKeys(value);
	}
 //web elepent verify like paragraph type
	public static String getElementText(By locator) {
		// Get the Text of that Element (H3) Online Access
		WebElement element = driver.findElement(locator);
		// get the text of that element
		String s = element.getText();
		return s;
	}
	//totall count list like orderlist
	public static int getTotalElementsCount(By locator) {
	    List<WebElement> webElements = driver.findElements( locator );
	    int totalCount = webElements.size();		
		return totalCount;
	}
	//dropdown list
	public static void selectDropDownMenu(By locator, String textToSelect) {
		Select dropDownWebElement;
		dropDownWebElement = new Select( driver.findElement( locator ) );
		dropDownWebElement.selectByVisibleText(textToSelect);
	}
	
}
