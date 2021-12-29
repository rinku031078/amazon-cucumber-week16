package com.amazon.cucumber.stepdefs;

import com.amazon.pages.HomePage;
import com.amazon.pages.ProductPage;
import com.amazon.pages.SearchResultPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MobilePhoneTest {
    @When("^I enter mobile phone \"([^\"]*)\" into search box$")
    public void iEnterMobilePhoneIntoSearchBox(String product)  {
        new HomePage().inputSearchTextIntoSearchBox(product);

    }

    @And("^I click on mobile phone \"([^\"]*)\"$")
    public void iClickOnMobilePhone(String product) throws InterruptedException {
        new SearchResultPage().clickOnProduct(product);
    }

    @And("^I select quantity \"([^\"]*)\"$")
    public void iSelectQuantity(String qty)  {
        new ProductPage().selectQtyFromDropDown(qty);
    }

    @And("^I click on Add To Cart button$")
    public void iClickOnAddToCartButton() {
        new ProductPage().clickOnAddToCart();
    }

    @Then("^I can see Product added to cart successfully$")
    public void iCanSeeProductAddedToCartSuccessfully() throws InterruptedException {
        new ProductPage().verifyMobileAddToCartMessage("Added to Cart");
    }
}
