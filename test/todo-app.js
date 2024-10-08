import { Selector } from "testcafe";

fixture("ToDo app tests")
    .page("https://test.boulund.net/todo/");

test("Adding items", async t => {
    await t
        // Arrange + Act
        .typeText(Selector("#todo-input"), "Water flowers")
        .click(Selector(".todo-form input[type='submit']"))
        .typeText(Selector("#todo-input"), "Buy milk")
        .click(Selector(".todo-form input[type='submit']"))
        // Assert
        .expect(Selector("#todo-list").childElementCount).eql(2);
});

test("Removing items", async t => {
    await t
        // Arrange
        .typeText(Selector("#todo-input"), "Water flowers")
        .click(Selector(".todo-form input[type='submit']"))
        // Act
        .click(Selector(".todo-item:first-of-type button"))
        // Assert
        .expect(Selector("#todo-list").childElementCount).eql(0);
});