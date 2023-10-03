import ModifyAccountForm from '../formmodifyaccount'

describe('<ModifyAccountForm />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ModifyAccountForm />)
  })
})