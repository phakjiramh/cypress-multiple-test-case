describe("Visit Multiple URL", function () {
  ["https://www.google.com/", "https://www.facebook.com/"].forEach((url) => {
    it(`should visit ${url} correctly`, function () {
      cy.visit(url);
    });
  });
});

describe("Add Multiple TODO", () => {
  const TEST_DATA = [
    {
      value: "todo1",
    },
    {
      value: "todo 2",
    },
    {
      value: "todo 3",
    },
  ];

  beforeEach(() => {
    cy.visit("https://todomvc.com/examples/react/dist/");
  });

  TEST_DATA.forEach((todoItem) => {
    it("should add mutiple todo success", () => {
      cy.get('[data-testid="text-input"]').type(`${todoItem.value} {enter}`);
      cy.get("[data-testid=todo-item-label]").first().contains(todoItem.value);
    });
  });
});
