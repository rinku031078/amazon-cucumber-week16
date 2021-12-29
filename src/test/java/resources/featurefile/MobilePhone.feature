Feature: Mobile phone Search

  User should search laptop and add to cart successfully

  Background: I am on a Homepage

#  @Smoke
  Scenario Outline: Verify user should add laptop to cart successfully
    When  I enter mobile phone "<PRODUCT>" into search box
    And   I click on 'SEARCH' button
    And   I click on mobile phone "<PRODUCT NAME>"
    And   I select quantity "<QUANTITY>"
    And   I click on Add To Cart button
    Then  I can see Product added to cart successfully
    Examples:
      | PRODUCT      | PRODUCT NAME                                                                                                                   | QUANTITY |
      | Mobile phone | Samsung Galaxy A52 5G, Factory Unlocked Smartphone, Android Cell Phone, Water Resistant, 64MP Camera, US Version, 128GB, Black | 2        |