import StatisticPage from '../statisticPage'

describe('<StatisticPage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<StatisticPage />)
  })
})