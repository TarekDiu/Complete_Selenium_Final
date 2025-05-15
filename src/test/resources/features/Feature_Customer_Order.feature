
@Sanity @Regression
Feature: Customer Order Successfully 
  As a registered customer
  I want to place orders for products
  So that I can receive items I want to purchase 
  
  Scenario: Customer Order Page 
    Given I am In the home page as a Customer
    |userId               |password  |       
    |tarek12345@gmail.com | Tarek746@| 
    And the customer has added products to the cart
    Then the customer put it her name in the name field
    Then the customer put it her Phone number in Phone number field
    Then the customer put it her address in the address  field
    Then the customer click the shipping method
    And the customer complete the order click submit button
    Then Verify the order Complete By assertion method

 