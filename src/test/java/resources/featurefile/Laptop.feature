Feature: Laptop Search

  User should search laptop and add to cart successfully

  Background: I am on Homepage

  @Smoke
  Scenario Outline: Verify user should add laptop to cart successfully
    When  I enter "<PRODUCT>" into search box
    And   I click on 'SEARCH' button
    And   I click on Product name "<PRODUCT NAME>"
    And   I change quantity "<QUANTITY>"
    And   I click on 'Add To Cart' button
    Then  Product added to cart successfully
    Examples:
      | PRODUCT | PRODUCT NAME                                                                                                                                                                                        | QUANTITY |
#      | Laptop  | Alienware M15 R6 Gaming Laptop, 15.6 inch QHD 240Hz Display, Intel Core i7-11800H, 32GB DDR4 RAM, 1TB SSD, NVIDIA GeForce RTX 3080 8GB GDDR6, Windows 11 Home, Dark Side of The Moon (Latest Model) | 3        |
      | Laptop  | ASUS L410 MA-DB04 Ultra Thin Laptop, 14” FHD Display, Intel Celeron N4020 Processor, 4GB RAM, 128GB Storage, NumberPad, Windows 10 Home in S Mode, Star Black                                       | 3        |
#      | Laptop  | HP 15.6 Inch Touch Screen Laptop 256GB SSD ( 8th Gen i5-8265U, 12GB RAM, UHD 620 Graphics) Natural Silver                                                                                           | 3        |
