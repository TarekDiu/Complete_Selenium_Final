package step_definations;

import base.Base;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import pages.Feature_LoginFunction;
import static org.junit.Assert.assertEquals;



public class Customer_Order extends Base {

	@Given("I am In the home page as a Customer")
	public void i_am_In_the_home_page_as_a_Customer(io.cucumber.datatable.DataTable dataTable) {
		
		String welcomeMsg = Feature_LoginFunction.loginAsCustomer(dataTable.cell(1, 0), dataTable.cell(1, 1));
		assertEquals("হটলাইনঃ" , welcomeMsg);	
	}

	@Given("the customer has added products to the cart")
	public void the_customer_has_added_products_to_the_cart() {
		
		click(Feature_LoginFunction.Order_Button);

	}

	@Then("the customer put it her name in the name field")
	public void the_customer_put_it_her_name_in_the_name_field() {
		sendkeys(Feature_LoginFunction.Customer_Name, "Tarek");

	}

	@Then("the customer put it her Phone number in Phone number field")
	public void the_customer_put_it_her_Phone_number_in_Phone_number_field() {
		sendkeys(Feature_LoginFunction.Customer_Phone, "01715731507");
		

	}

	@Then("the customer put it her address in the address  field")
	public void the_customer_put_it_her_address_in_the_address_field() {
		
		sendkeys(Feature_LoginFunction.Customer_Address, "Ixelles, Brussels");

	}

	@Then("the customer click the shipping method")
	public void the_customer_click_the_shipping_method() {
		click(Feature_LoginFunction.Customer_Area);

	}

	@Then("the customer complete the order click submit button")
	public void the_customer_complete_the_order_click_submit_button(){
		click(Feature_LoginFunction.Order_Submit);
		
		
	}

	@Then("Verify the order Complete By assertion method")
	public void verify_the_order_Complete_By_assertion_method() {
		
		String myexpectValue= getElementText(Feature_LoginFunction.labelWelcomeMessage);
		assertEquals("ট্র্যাক অর্ডার", myexpectValue);
		System.out.println("My Order is Successfully Done");
		
		
		
	}

}
