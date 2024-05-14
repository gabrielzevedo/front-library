/// <reference types="cypress" />
import { Icon } from './Icon'

describe('Icon', () => {
  it('Renders', () => {
    cy.mount(<Icon icon="cog" />)
    cy.get('svg').should('have.class', 'icon-cog')
  })
})

describe('Sizes', () => {
  it('Size 1', () => {
    cy.mount(<Icon icon="minus" size={1} />)
    cy.get('svg').should('have.class', 'size-1')
  })

  it('Size 2', () => {
    cy.mount(<Icon icon="minus" size={2} />)
    cy.get('svg').should('have.class', 'size-2')
  })

  it('Size 3', () => {
    cy.mount(<Icon icon="minus" size={3} />)
    cy.get('svg').should('have.class', 'size-3')
  })

  it('Size 4', () => {
    cy.mount(<Icon icon="minus" size={4} />)
    cy.get('svg').should('have.class', 'size-4')
  })

  it('Size 5', () => {
    cy.mount(<Icon icon="minus" size={5} />)
    cy.get('svg').should('have.class', 'size-5')
  })

  it('Size 6', () => {
    cy.mount(<Icon icon="minus" size={6} />)
    cy.get('svg').should('have.class', 'size-6')
  })

  it('Size 7', () => {
    cy.mount(<Icon icon="minus" size={7} />)
    cy.get('svg').should('have.class', 'size-7')
  })

  it('Size 8', () => {
    cy.mount(<Icon icon="minus" size={8} />)
    cy.get('svg').should('have.class', 'size-8')
  })

  it('Size 9', () => {
    cy.mount(<Icon icon="minus" size={9} />)
    cy.get('svg').should('have.class', 'size-9')
  })

  it('Size 10', () => {
    cy.mount(<Icon icon="minus" size={10} />)
    cy.get('svg').should('have.class', 'size-10')
  })
})

describe('Custom Classes', () => {
  it('Custom', () => {
    cy.mount(<Icon icon="minus" className="custom" />)
    cy.get('svg').should('have.class', 'custom')
  })

  it('FullWidth', () => {
    cy.mount(<Icon icon="minus" className="w-full" />)
    cy.get('svg').should('have.class', 'w-full')
  })
})
