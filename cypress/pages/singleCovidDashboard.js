class SingleCovidDashboard {
    getTotalCases() {
        return cy.get(':nth-child(6) > .maincounter-number > span').invoke('text');
    }

    getTotalDeaths() {
        return cy.get(':nth-child(7) > .maincounter-number > span').invoke('text');
    }
}

export default SingleCovidDashboard;