package com.amazon.cucumber.stepdefs;

import com.amazon.pages.HomePage;
import com.amazon.pages.ProductPage;
import com.amazon.pages.SearchResultPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LaptopTest {
    @When("^I enter \"([^\"]*)\" into search box$")
    public void iEnterIntoSearchBox(String product)  {
        new HomePage().inputSearchTextIntoSearchBox(product);
    }

    @And("^I click on Product name \"([^\"]*)\"$")
    public void iClickOnProductName(String product) throws InterruptedException {
        new SearchResultPage().clickOnProduct(product);
    }

    @And("^I click on 'SEARCH' button$")
    public void iClickOnSEARCHButton() {
        new HomePage().clickOnSearchButton();
    }

    @And("^I change quantity \"([^\"]*)\"$")
    public void iChangeQuantity(String qty)  {
        new ProductPage().selectQtyFromDropDown(qty);
    }

    @And("^I click on 'Add To Cart' button$")
    public void iClickOnAddToCartButton() {
        new ProductPage().clickOnAddToCart();
    }

    @Then("^Product added to cart successfully$")
    public void productAddedToCartSuccessfully() throws InterruptedException {
        Thread.sleep(1000);
        new ProductPage().verifyLaptopAddToCartMessage("Added to Cart");
    }


}
