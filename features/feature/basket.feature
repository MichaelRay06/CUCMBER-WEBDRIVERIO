
Feature: Testing Amazon searching feature

Background:
Given I am on amazone site
       

    @searchProductDisplayed, @all
    Scenario Outline: As a user, I should be able to search for ice-works 5000 product 
     When I handle cookies visibility  
        When I search for "<searchProduct>"
        When the search results are displayed
        #Then the search results has the "<expectedSearchProduct>" in it

    Examples:
            | searchProduct | 
            | Iceworks 5000 | 


   @basketTotal
    Scenario Outline: Check basket total
    When I search for "<searchProduct>"
    When the search results was displayed click on
    Then I add iceworks product to my basket
    When I check my basket total
    Then it should match the price of the item added into basket

    Examples:
              | searchProduct |
              | Iceworks 5000 |

      