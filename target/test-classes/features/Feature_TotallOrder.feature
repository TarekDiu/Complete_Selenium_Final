

Feature: Totall Order done as a Customer
  As a Customer i want to see my all order list
  in my profile page.

  @Sanity @OrderList
  Scenario: Totall Order Count in Profile page
    Given  I am on the home page as a Customer
    |userId               |password  |       
    |tarek12345@gmail.com | Tarek746@|  
    When I click the Profile button
    Then I click the orders button
    Then Verify Total Order count is smaller than 100
   

