$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Feature_Customer_LoginExcelFile.feature");
formatter.feature({
  "name": "Verify Customer Login functionality using ExelFile",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@excelfile"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verify Customerlogin using my Exelfile data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am in website homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "I clicked the সাইন ইন Button",
  "keyword": "When "
});
formatter.step({
  "name": "I Put it my Email in Email field \"\u003crownumber\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I Put it my  Password in Password field",
  "keyword": "Then "
});
formatter.step({
  "name": "I click the সাবমিট Button",
  "keyword": "Then "
});
formatter.step({
  "name": "I log in my profile successfully error",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "rownumber"
      ]
    },
    {
      "cells": [
        "0"
      ]
    },
    {
      "cells": [
        "1"
      ]
    }
  ]
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
  "name": "I Put it my Email in Email field \"0\"",
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
formatter.uri("file:src/test/resources/features/Feature_TotallOrder.feature");
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