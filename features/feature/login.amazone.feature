Feature: loging into Amazone.

  @all
    Scenario: as a user I should be able to log in into Amazone.
        Given I am on amazone site
        When I mouse over on the sing in link
        When click log in buton
        When enter "michael06@gmail.com" as user name
        When click to continue
        When enter "54password54" as my password
        Then the sing button should be displayed.
