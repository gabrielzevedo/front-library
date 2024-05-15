/// <reference types="cypress" />
import { IconCircular } from './IconCircular'

describe('Variants', () => {
  it('Success', () => {
    cy.mount(<IconCircular variant="success" />)
    cy.get('.icon-circular').should('have.class', 'bg-primary')
    cy.get('svg path')
    cy.get('svg').should('have.class', 'icon-check')
  })

  it('Warning', () => {
    cy.mount(<IconCircular variant="warning" />)
    cy.get('.icon-circular').should('have.class', 'bg-warning')
    cy.get('svg path')
    cy.get('svg').should('have.class', 'icon-exclamation')
  })

  it('Danger', () => {
    cy.mount(<IconCircular variant="danger" />)
    cy.get('.icon-circular').should('have.class', 'bg-danger')
    cy.get('svg path')
    cy.get('svg').should('have.class', 'icon-times')
  })
})

describe('CustomIconAndBackground', () => {
  it('CustomIconAndBackground', () => {
    cy.mount(<IconCircular icon="camera" bgClass="bg-[#d380ec]" />)
    cy.get('.icon-circular').should('have.class', 'bg-[#d380ec]')
    cy.get('svg path')
    cy.get('svg').should('have.class', 'icon-camera')
  })
})
