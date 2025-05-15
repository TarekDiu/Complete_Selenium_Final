package step_definations;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import base.Base;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.Feature_LoginFunction;

public class Customer_Totall_Order extends Base {

	@Given("I am on the home page as a Customer")
	public void i_am_on_the_home_page_as_a_Customer(io.cucumber.datatable.DataTable dataTable) {
		String welcomeMsg = Feature_LoginFunction.loginAsCustomer(dataTable.cell(1, 0), dataTable.cell(1, 1));
		assertEquals("হটলাইনঃ" , welcomeMsg);		

	}

	@When("I click the Profile button")
	public void i_click_the_Profile_button() {
		click(Feature_LoginFunction.Profile_Button);
		

	}

	@Then("I click the orders button")
	public void i_click_the_orders_button() {
		
		click(Feature_LoginFunction.Orders_Button);

	}

	@Then("Verify Total Order count is smaller than {int}")
	public void verify_Total_Order_count_is_smaller_than(Integer maxCount) {
		
		int totalOrderCount = getTotalElementsCount(Feature_LoginFunction.tableRowsOrderlist );             
	    System.out.println("My totall order is :" + totalOrderCount);
	    
	    assertTrue(totalOrderCount < maxCount);
		

	}

}
