/// <reference types="cypress"/>

import SingleCovidDashboard from '../pages/singleCovidDashboard';
import { convertNumber } from '../helpers/utils';

const singleCovidDashboard = new SingleCovidDashboard();

context('covid cases Netherlands', () => {
    describe('validate the covid cases', () => {
        beforeEach(() => {
            cy.visit('https://www.worldometers.info/coronavirus/')
            cy.request('https://corona.lmao.ninja/v2/countries/netherlands?strict=true').as('call')
        })
        it('validates the total cases and deaths for Netherlands', () => {
            cy.get('#main_table_countries_today > :nth-child(2) > :nth-child(27) > [style="font-weight: bold; font-size:15px; text-align:left;"] > .mt_a')
                .should('have.text', 'Netherlands')
                .click()
            cy.url().should('include', 'https://www.worldometers.info/coronavirus/country/netherlands/');

            cy.get('@call').then(res => {
                singleCovidDashboard
                    .getTotalCases()
                    .then((text) => {
                        expect(text.trim()).eq(convertNumber(res.body.cases))
                    });

                singleCovidDashboard
                    .getTotalDeaths()
                    .then((text) => {
                        expect(text.trim()).eq(convertNumber(res.body.deaths))
                    });
            });
        });
    });
});