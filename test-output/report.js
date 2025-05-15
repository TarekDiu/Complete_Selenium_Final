$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Feature_Customer_Order.feature");
formatter.feature({
  "name": "Customer Order Successfully",
  "description": "  As a registered customer\n  I want to place orders for products\n  So that I can receive items I want to purchase ",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@CustomerOrder"
    }
  ]
});
formatter.scenario({
  "name": "Customer Order Page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@CustomerOrder"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am In the home page as a Customer",
  "rows": [
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "step_definations.Customer_Order.i_am_In_the_home_page_as_a_Customer(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the customer has added products to the cart",
  "keyword": "And "
});
formatter.match({
  "location": "step_definations.Customer_Order.the_customer_has_added_products_to_the_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the customer put it her name in the name field",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definations.Customer_Order.the_customer_put_it_her_name_in_the_name_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the customer put it her Phone number in Phone number field",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definations.Customer_Order.the_customer_put_it_her_Phone_number_in_Phone_number_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the customer put it her address in the address  field",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definations.Customer_Order.the_customer_put_it_her_address_in_the_address_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the customer click the shipping method",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definations.Customer_Order.the_customer_click_the_shipping_method()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the customer complete the order click submit button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definations.Customer_Order.the_customer_complete_the_order_click_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the order Complete By assertion method",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definations.Customer_Order.verify_the_order_Complete_By_assertion_method()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});r",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definations.CustomerLoginExcel.i_log_in_my_profile_successfully_error()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Customerlogin using my Exelfile data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@excelfile"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in website homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definations.CustomerLoginExcel.i_am_in_website_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clicked the সাইন ইন Button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definations.CustomerLoginExcel.i_clicked_the_সাইন_ইন_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Put it my Email in Email field \"1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definations.CustomerLoginExcel.i_Put_it_my_Email_in_Email_field(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Put it my  Password in Password field",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definations.CustomerLoginExcel.i_Put_it_my_Password_in_Password_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the সাবমিট Button",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definations.CustomerLoginExcel.i_click_the_সাবমিট_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I log in my profile successfully error",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definations.CustomerLoginExcel.i_log_in_my_profile_successfully_error()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});