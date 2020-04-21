import petListReducer from '../reducers/petListReducer';
import filterReducer from '../reducers/filterReducer';
import { initPetState } from '../reducers/initState';
import { initFilterState } from '../reducers/initState';

describe('petList reducer', () => {
  it('should return the init state', () => {
    expect(petListReducer(undefined, {})).toEqual(initPetState);
  });

  it('should process a pet list json', () => {
    expect(petListReducer)
  })
});

describe('filter reducer', () => {
  it('should return the init state', () => {
    expect(filterReducer(undefined, {})).toEqual(initFilterState);
  });

  it('should handle static filter change', () => {
    expect(filterReducer(initFilterState, {
      type: 'CHANGE_FILTER',
      staticFilter: 'type'
    })).toEqual({
      staticFilter: 'type',
      dinamicFilter: '',
    })
  })

  it('should handle dinamic filter change', () => {
    expect(filterReducer({
      staticFilter: 'type',
      dinamicFilter: ''
    }, {
      type: 'CHANGE_DINAMIC_FILTER',
      dinamicFilter: 'Cat'
    })).toEqual({
      staticFilter: 'type',
      dinamicFilter: 'Cat',
    })
  })
});