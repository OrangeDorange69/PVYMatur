describe('test', () => {
  it('test1', () => {
    cy.log('type shiiit')
  }),
  it.skip('test #2', () => {
    cy.log('test 2 type shiit')
  }),
  it('test 69', () => {
    cy.log('test69')
  })
});

describe('testovaci scenar 1', () => {
  before(() => {
    cy.log('before');
  });

  beforeEach(() => {
    cy.visit('https://uitestingplayground.com/textinput')
  }),

  it('test1', () => {
    cy.get('button#updatingButton').then((btn) => {cy.log(btn.text())})
  }),

  it('test2', () => {
    cy.get('input#newButtonName').invoke('attr', 'placeholder').then((ph) => {
      cy.log(ph)
    })
  }),

  it('test 3', () => {
    cy.title().should('eq', 'Text Input');
  })


  afterEach(() => {
  cy.log('aftereach')
  }),

  after(() => {
    cy.log('after');
  })
});


describe('něco', () => {
  it('test #1', () => {
    cy.log('67')
  });
});

describe('scenar', () => {
beforeEach(() => {
    cy.visit('https://uitestingplayground.com/textinput')
})

  it('test #1', () => {
    cy.get('input#newButtonName').type('David');
    cy.get('button#updatingButton').click().should('have.text', 'David');
  });
});