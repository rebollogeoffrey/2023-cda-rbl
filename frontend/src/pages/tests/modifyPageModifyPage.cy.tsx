import ModifyPage from '../modifyPage'

describe('<ModifyPage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ModifyPage />)
  })
})