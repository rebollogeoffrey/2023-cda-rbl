import CreateAccountForm from '../formcreateaccount'

describe('<CreateAccountForm />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CreateAccountForm />)
  })
})