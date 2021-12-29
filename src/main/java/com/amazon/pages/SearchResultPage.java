package com.amazon.pages;

import com.amazon.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class SearchResultPage extends Utility {

    private static final Logger log = LogManager.getLogger(SearchResultPage.class.getName());

    public SearchResultPage() {
        PageFactory.initElements(driver, this);
    }


        //    @CacheLookup
    @FindBy(xpath = "//span[@class='a-size-medium a-color-base a-text-normal']")
        List<WebElement> productOnPage;

    //    @CacheLookup
    @FindBy(xpath = "//a[contains(@class,'s-pagination-item s-pagination-next')]")
    WebElement nextPage;


        public void clickOnProduct(String product) throws InterruptedException {
        List<WebElement> results = productOnPage;
        boolean isPresent = false;
        int totalPages = 20;
            for (int i = 0; i < totalPages; i++) {
                for (WebElement name : productOnPage) {
                Thread.sleep(1000);
                    if (name.getText().equalsIgnoreCase(product)) {
                        Thread.sleep(1000);
                        name.click();
                        isPresent = true;
                        break;
                    }
                }
                if (!isPresent) {
//                    Thread.sleep(1000);
                    doClickOnElement(nextPage);
                } else {
                    break;
                }
            }
        }




//    @FindBy(css = ".s-pagination-item.s-pagination-next.s-pagination-button.s-pagination-separator")
//    WebElement nextPageButtonByCss;
//
//    //  @CacheLookup
//    @FindBy(xpath = "//div[@class='s-main-slot s-result-list s-search-results sg-row']//div//div//div//div//div//div//div//div//div//h2//a")
//    List<WebElement> searchResultAllTexts;
//
//    //  @CacheLookup
//    @FindBy(xpath = "//a[normalize-space()='Next']")
//    WebElement nextPageButtonByXpath;
//
//    public void clickOnProduct(String item) {
//        System.out.println("size of items list: " + searchResultAllTexts.size());
//        String actualItem = "";
//        String actual2 = "";
//        int s = 4;
//        boolean mybreak = false;
//        for (int i = 0; i <= s; i++) {
//            for (int j = 1; j < searchResultAllTexts.size(); j++) {
//
//                if (searchResultAllTexts.get(j).getText().contains("\"")) {
//                    actual2 = searchResultAllTexts.get(j).getText().replace("\"", "inch").trim();
//                    if (actual2.equals(item)) {
//                        actualItem = actual2;
//                        System.out.println("item with problem quote="+actualItem);
////                        log.info("finiding item:= " + actual2);
//                        mybreak = true;
//                        break;
//                    }
//                } else if (searchResultAllTexts.get(j).getText().trim().equals(item)) {
//                    actualItem = searchResultAllTexts.get(j).getText();
//                    System.out.println("Item without quote=" + actualItem);
//                    mybreak = true;
//                    break;
//                }
//                if (mybreak) {
//                    break;
//                }
//            }
//            if (!mybreak) {
//                // doWaitUntilVisibilityOfElementLocated(By.xpath("//a[normalize-space()='Next']"), 2);
//                // nextPageButton.click();
//                javaExecutorScriptExecuteScriptToClick(nextPageButtonByCss);
//            }
//        }
////        boolean expected = actualItem.contains(item);
//////        log.info("Asserting item by name: " + item);
////        Assert.assertTrue(expected);
//    }




//    public boolean clickOnProduct(String product) {
//        boolean myBreak = true;
//        boolean isDisplayed = false;
//        while (myBreak) {
//            for (WebElement e : productOnPage) {
//                if (e.getText().equalsIgnoreCase(product)) {
//                    e.click();
//                    isDisplayed = true;
//                    myBreak = false;
//                    break;
//                }
//            }
//            if (myBreak) {
//                if (!driver.getCurrentUrl().contains("page20")) {
//                    nextPage.click();
//                } else {
//                    isDisplayed = false;
//                    myBreak = false;
//                }
//                PageFactory.initElements(driver, this);
//            }
//        }
//        driver.navigate().to("https://www.amazon.com/s?k=Laptop&ref=nb_sb_noss");
//        return isDisplayed;
//    }



}
