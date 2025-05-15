$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Feature_TotallOrder.feature");
formatter.feature({
  "name": "Totall Order done as a Customer",
  "description": "  As a Customer i want to see my all order list\n  in my profile page.",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Totall Order Count in Profile page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@OrderList"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the home page as a Customer",
  "rows": [
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "step_definations.Customer_Totall_Order.i_am_on_the_home_page_as_a_Customer(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Profile button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definations.Customer_Totall_Order.i_click_the_Profile_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the orders button",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definations.Customer_Totall_Order.i_click_the_orders_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Total Order count is smaller than 100",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definations.Customer_Totall_Order.verify_Total_Order_count_is_smaller_than(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});