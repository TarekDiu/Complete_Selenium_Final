Feature: Verify Customer Login functionality

 @sanity @login
 Scenario Outline: Verify Customer Login functionality happy path
   Given I am in landing page
   When I Click on Login menu
   Then Enter User Id as "<userId>"          
   And I Enter Password as "<password>"
   And I Click on Login Button
   Then Verify the home page with errormessage 

    Examples:
     |userId               |password  |       
     |tarek12345@gmail.com | Tarek746@|