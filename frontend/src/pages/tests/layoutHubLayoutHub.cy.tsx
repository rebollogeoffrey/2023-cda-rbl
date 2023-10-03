import LayoutHub from '../layoutHub'

describe('<LayoutHub />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<LayoutHub />)
  })
})