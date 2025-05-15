package step_definations;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.By;
import base.Base;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.Feature_LoginFunction;
import pages.HomePage;

public class CustomerLogin extends Base {

	@Given("I am in landing page")
	public void i_am_in_landing_page() {
		navigateURL(host);
	}

	@When("I Click on Login menu")
	public void i_Click_on_Login_menu() {
		click(Feature_LoginFunction.Customer_Login_Button); //its come from Feature_Login Function
	}

	@Then("Enter User Id as {string}")
	public void enter_User_Id_as(String userId) {

		sendkeys(Feature_LoginFunction.Customer_Email, userId);

	}

	@Then("I Enter Password as {string}")
	public void i_Enter_Password_as(String password) {
		sendkeys( Feature_LoginFunction.customer_Password, password);
	}

	@Then("I Click on Login Button")
	public void i_Click_on_Login_Button() {

		click(Feature_LoginFunction.Customer_Submit);
	}
	
	@Then("Verify the home page with errormessage")
	public void verify_the_home_page_with_errormessage() {
	    String errorMesageString = getElementText(HomePage.Home_Page); //Home_Page vaibale come rom HomePage Class 
	    assertEquals("হটলাইনঃ", errorMesageString );
	    System.out.println("My Customer Login is successfull tested");
	}
	
	
	
	


}
