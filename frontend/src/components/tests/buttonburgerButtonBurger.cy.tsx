import ButtonBurger from '../buttonburger'

describe('<ButtonBurger />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ButtonBurger />)
  })
})