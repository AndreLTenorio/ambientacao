class DashboardPage {
  selectorsList = {
    dashboardGrid: ".orangehrm-dashboard-grid"
  }

  checkDashboardPage() {
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index');
    cy.get(this.selectorsList.dashboardGrid).should('be.visible');
  }
}

export default DashboardPage