package com.amazon.pages;

import com.amazon.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

public class ProductPage extends Utility {

    private static final Logger log = LogManager.getLogger(ProductPage.class.getName());

    public ProductPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy (id = "add-to-cart-button")
    WebElement addToCartButton;

    @CacheLookup
    @FindBy(id = "quantity")
    WebElement selectQty;

    @CacheLookup
//    @FindBy(xpath = "//span[@class='a-size-medium-plus a-color-base sw-atc-text a-text-bold']")
    @FindBy(xpath = "//div[@id='attachDisplayAddBaseAlert']//h4[@class='a-alert-heading'][normalize-space()='Added to Cart']")
    WebElement mobileAddToCartMessage;

    @CacheLookup
//    @FindBy(xpath = "//div[@id='attachDisplayAddBaseAlert']/div[1]/h4[1]")
    @FindBy(xpath = "//div[@id='attachDisplayAddBaseAlert']//h4[@class='a-alert-heading'][normalize-space()='Added to Cart']")
    WebElement laptopAddToCartMessage;



    public void selectQtyFromDropDown(String qty) {
        doSelectByValueFromDropDown(selectQty,qty);
        log.info("Selecting quantity from dropdown  " + qty.toString());
    }

    public void clickOnAddToCart(){
        doClickOnElement(addToCartButton);
        log.info("Clicking on Add to cart button  " + addToCartButton.toString());
    }

    public void verifyLaptopAddToCartMessage(String message) throws InterruptedException {
        Thread.sleep(1000);
        String actualString = doGetTextFromElement(laptopAddToCartMessage);
        System.out.println("text of message: " + actualString);
        Assert.assertTrue(actualString.contains((message)));
        log.info("Verifying laptop added to cart message  " + message.toString());

    }

    public void verifyMobileAddToCartMessage(String message) throws InterruptedException {
        Thread.sleep(2000);
        String actualString = doGetTextFromElement(mobileAddToCartMessage);
        System.out.println("text of message: " + actualString);
        Assert.assertTrue(actualString.contains((message)));
        log.info("Verifying mobild phone added to cart message  " + message.toString());

    }

}
