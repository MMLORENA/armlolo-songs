describe("Given Armlolo Songs app", () => {
  describe("When the user add a song name 'armlolo.mp3' and the user clicks on the song image", () => {
    it("Then the 'armlolo' song should be play", () => {
      cy.visit("/home");
      cy.contains("Homepage");
      cy.get("label")
        .contains("Click here to provide a song")
        .click()
        .selectFile("cypress/e2e/armlolo.mp3");
      cy.get("button").contains("Send Song").click();
      cy.get("img").click();
      cy.get("audio").should("be.visible");
    });
  });
});
