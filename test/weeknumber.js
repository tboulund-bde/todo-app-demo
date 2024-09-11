import { Selector } from "testcafe";

fixture("Weeknumber.com tests")
    .page("https://weeknumber.com");

test("Link to Danish version", async t => {
    await t
        // Pre-assertion
        .expect(Selector("#ugenr").innerText).contains("Week")
        // Arrange
        .click(Selector("#menu > footer > ul > li:nth-child(1) > a"))
        // Act
        .click(Selector("a[hreflang='da']"))
        // Assertion
        .expect(Selector("#ugenr").innerText).contains("Uge");
});

test("Validate input", async t => {
    await t
        // Arrange
        .typeText(Selector("#q"), "December 1 2024")
        // Act
        .pressKey("enter")
        // Assert
        .expect(Selector("#ugenr").innerText).eql("week 48")
        .expect(Selector("#description").innerText).contains("2024");
});