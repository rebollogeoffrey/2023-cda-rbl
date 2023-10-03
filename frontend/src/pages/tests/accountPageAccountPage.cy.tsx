import AccountPage from '../accountPage'

describe('<AccountPage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AccountPage />)
  })
})