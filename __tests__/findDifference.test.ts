import { findDifference } from '../src/validator/modules';

describe('Unit tests for findDifference module', () => {
  test(`Testing initial state run`, () => {
    const validationState = {
      email: {
        value: '',
        showError: false,
        statuses: [false],
        touched: false
      },
      password: {
        value: '',
        showError: false,
        statuses: [false],
        touched: false
      }
    };
    const initialState = {
      email: '',
      password: ''
    };
    const updatedArgsFiled: string[] = [];
    const expectedNextDifference = {};
    const difference = findDifference(
      initialState,
      validationState,
      updatedArgsFiled
    );
    expect(difference).toEqual(expectedNextDifference);
  });

  test(`Testing one field state change run`, () => {
    const validationState = {
      email: {
        value: '',
        showError: false,
        statuses: [false],
        touched: true
      },
      password: {
        value: '',
        showError: false,
        statuses: [false],
        touched: false
      }
    };
    const nextState = {
      email: 'a',
      password: ''
    };
    const updatedArgsFiled: string[] = [];
    const expectedNextDifference = {
      email: 'a'
    };

    const difference = findDifference(
      nextState,
      validationState,
      updatedArgsFiled
    );
    expect(difference).toEqual(expectedNextDifference);
  });

  test(`Testing two fields state change run`, () => {
    const validationState = {
      email: {
        value: '',
        showError: false,
        statuses: [false],
        touched: false
      },
      password: {
        value: '',
        showError: false,
        statuses: [false],
        touched: false
      }
    };
    const nextState = {
      email: 'someMail@mail.com',
      password: 'somepassword'
    };
    const updatedArgsFiled: string[] = [];

    const expectedNextDifference = {
      email: 'someMail@mail.com',
      password: 'somepassword'
    };

    const difference = findDifference(
      nextState,
      validationState,
      updatedArgsFiled
    );
    expect(difference).toEqual(expectedNextDifference);
  });

  test(`Testing extended state run`, () => {
    const validationState = {
      email: {
        value: '',
        showError: false,
        statuses: [false],
        touched: false
      },
      password: {
        value: '',
        showError: false,
        statuses: [false],
        touched: false
      }
    };
    const updatedArgsFiled: string[] = [];
    const extendedState = {
      email: '',
      password: '',
      message: 'no need to validate'
    };

    const difference = findDifference(
      extendedState,
      validationState,
      updatedArgsFiled
    );
    expect(difference).toEqual({});
  });

  test(`Testing inserted arguments update`, () => {
    const validationState = {
      email: {
        value: '',
        showError: false,
        statuses: [false],
        touched: true
      },
      password: {
        value: '',
        showError: false,
        statuses: [false],
        touched: false
      }
    };
    const nextState = {
      email: '',
      password: ''
    };
    const updatedArgsFiled: string[] = ['email'];
    const expectedNextDifference = {
      email: ''
    };

    const difference = findDifference(
      nextState,
      validationState,
      updatedArgsFiled
    );
    expect(difference).toEqual(expectedNextDifference);
  });
});
