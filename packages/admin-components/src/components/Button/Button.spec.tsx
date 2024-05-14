/// <reference types="cypress" />
import { Button } from './Button'

describe('Variants', () => {
  it('Primary', () => {
    cy.mount(<Button variant="primary" />)
    cy.get('button').should('have.class', 'bg-primary')
  })

  it('Secondary', () => {
    cy.mount(<Button variant="secondary" />)
    cy.get('button').should('have.class', 'bg-primary-light text-primary-bold')
  })

  it('Tertiary', () => {
    cy.mount(<Button variant="tertiary" />)
    cy.get('button').should('have.class', 'bg-inverted-2 text-on-primary')
  })

  it('Warning', () => {
    cy.mount(<Button variant="warning" />)
    cy.get('button').should('have.class', 'bg-warning text-on-base')
  })

  it('Danger', () => {
    cy.mount(<Button variant="danger" />)
    cy.get('button').should('have.class', 'bg-danger text-base-1')
  })

  it('Outline', () => {
    cy.mount(<Button variant="outline" />)
    cy.get('button').should('have.class', 'border border-inverted-2 text-inverted-2')
  })

  it('OutlineSecondary', () => {
    cy.mount(<Button variant="outlineSecondary" />)
    cy.get('button').should('have.class', 'border border-primary text-primary')
  })
})

describe('Sizes', () => {
  it('Large', () => {
    cy.mount(<Button size="large" />)
    cy.get('button').should('have.class', 'h-14')
  })

  it('Default', () => {
    cy.mount(<Button />)
    cy.get('button').should('have.class', 'h-12')
  })

  it('Small', () => {
    cy.mount(<Button size="small" />)
    cy.get('button').should('have.class', 'h-10')
  })
})

describe('States', () => {
  it('Disabled', () => {
    cy.mount(<Button disabled />)
    cy.get('button').should('be.disabled')
  })

  it('Loading', () => {
    cy.mount(<Button loading />)
    cy.get('button').should('have.class', 'bg-base-3')
    cy.get('button svg').should('have.class', 'icon-loading')
  })
})

describe('Icon', () => {
  it('IconEdit', () => {
    cy.mount(<Button icon="edit" />)
    cy.get('button svg').should('have.class', 'icon-edit')
  })

  it('IconPositionLeft', () => {
    cy.mount(<Button icon="edit" iconPosition="left" />)
    cy.get('button svg').should('have.class', 'mr-2')
  })

  it('IconPositionRight', () => {
    cy.mount(<Button icon="edit" iconPosition="right" />)
    cy.get('button svg').should('have.class', 'ml-3')
  })
})

describe('Custom Classes', () => {
  it('FullWidth', () => {
    cy.mount(<Button className="w-full" />)
    cy.get('button').should('have.class', 'w-full')
  })

  it('Custom', () => {
    cy.mount(<Button className="custom" />)
    cy.get('button').should('have.class', 'custom')
  })
})

describe('Action', () => {
  it('Button', () => {
    cy.mount(<Button onClick={() => alert('Clicked!')} />)
    let alerted = ''
    cy.on('window:alert', (msg) => (alerted = msg))
    cy.get('button')
      .click()
      .then(() => expect(alerted).to.match(/Clicked!/))
  })

  it('Link', () => {
    cy.mount(<Button as="a" href="https://google.com" />)
    cy.get('a').should('have.attr', 'href').and('include', 'google')
  })
})
