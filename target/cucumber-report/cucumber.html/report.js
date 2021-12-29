$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Laptop.feature");
formatter.feature({
  "line": 1,
  "name": "Laptop Search",
  "description": "\r\nUser should search laptop and add to cart successfully",
  "id": "laptop-search",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Verify user should add laptop to cart successfully",
  "description": "",
  "id": "laptop-search;verify-user-should-add-laptop-to-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I enter \"\u003cPRODUCT\u003e\" into search box",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on \u0027SEARCH\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on Product name \"\u003cPRODUCT NAME\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I change quantity \"\u003cQUANTITY\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on \u0027Add To Cart\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Product added to cart successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "laptop-search;verify-user-should-add-laptop-to-cart-successfully;",
  "rows": [
    {
      "cells": [
        "PRODUCT",
        "PRODUCT NAME",
        "QUANTITY"
      ],
      "line": 16,
      "id": "laptop-search;verify-user-should-add-laptop-to-cart-successfully;;1"
    },
    {
      "comments": [
        {
          "line": 17,
          "value": "#      | Laptop  | Alienware M15 R6 Gaming Laptop, 15.6 inch QHD 240Hz Display, Intel Core i7-11800H, 32GB DDR4 RAM, 1TB SSD, NVIDIA GeForce RTX 3080 8GB GDDR6, Windows 11 Home, Dark Side of The Moon (Latest Model) | 3        |"
        }
      ],
      "cells": [
        "Laptop",
        "ASUS L410 MA-DB04 Ultra Thin Laptop, 14” FHD Display, Intel Celeron N4020 Processor, 4GB RAM, 128GB Storage, NumberPad, Windows 10 Home in S Mode, Star Black",
        "3"
      ],
      "line": 18,
      "id": "laptop-search;verify-user-should-add-laptop-to-cart-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 24291158300,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on Homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "comments": [
    {
      "line": 17,
      "value": "#      | Laptop  | Alienware M15 R6 Gaming Laptop, 15.6 inch QHD 240Hz Display, Intel Core i7-11800H, 32GB DDR4 RAM, 1TB SSD, NVIDIA GeForce RTX 3080 8GB GDDR6, Windows 11 Home, Dark Side of The Moon (Latest Model) | 3        |"
    }
  ],
  "line": 18,
  "name": "Verify user should add laptop to cart successfully",
  "description": "",
  "id": "laptop-search;verify-user-should-add-laptop-to-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I enter \"Laptop\" into search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on \u0027SEARCH\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on Product name \"ASUS L410 MA-DB04 Ultra Thin Laptop, 14” FHD Display, Intel Celeron N4020 Processor, 4GB RAM, 128GB Storage, NumberPad, Windows 10 Home in S Mode, Star Black\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I change quantity \"3\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on \u0027Add To Cart\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Product added to cart successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Laptop",
      "offset": 9
    }
  ],
  "location": "LaptopTest.iEnterIntoSearchBox(String)"
});
formatter.result({
  "duration": 2131347600,
  "status": "passed"
});
formatter.match({
  "location": "LaptopTest.iClickOnSEARCHButton()"
});
formatter.result({
  "duration": 18712687700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ASUS L410 MA-DB04 Ultra Thin Laptop, 14” FHD Display, Intel Celeron N4020 Processor, 4GB RAM, 128GB Storage, NumberPad, Windows 10 Home in S Mode, Star Black",
      "offset": 25
    }
  ],
  "location": "LaptopTest.iClickOnProductName(String)"
});
formatter.result({
  "duration": 43114413700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(@class,\u0027s-pagination-item s-pagination-next\u0027)]\"}\n  (Session info: chrome\u003d96.0.4664.110)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027MAHISHA\u0027, ip: \u0027192.168.1.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [6bd105a23ff225d6280c20d851241b5e, findElement {using\u003dxpath, value\u003d//a[contains(@class,\u0027s-pagination-item s-pagination-next\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\KAUSHA~1.MAH\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:55097}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:55097/devtoo..., se:cdpVersion: 96.0.4664.110, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6bd105a23ff225d6280c20d851241b5e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.click(Unknown Source)\r\n\tat com.amazon.utility.Utility.doClickOnElement(Utility.java:35)\r\n\tat com.amazon.pages.SearchResultPage.clickOnProduct(SearchResultPage.java:46)\r\n\tat com.amazon.cucumber.stepdefs.LaptopTest.iClickOnProductName(LaptopTest.java:18)\r\n\tat ✽.And I click on Product name \"ASUS L410 MA-DB04 Ultra Thin Laptop, 14” FHD Display, Intel Celeron N4020 Processor, 4GB RAM, 128GB Storage, NumberPad, Windows 10 Home in S Mode, Star Black\"(Laptop.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 19
    }
  ],
  "location": "LaptopTest.iChangeQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopTest.iClickOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopTest.productAddedToCartSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 358166700,
  "status": "passed"
});
});