import { renderHook, act } from '@testing-library/react-hooks';
import useLocalStorage from '../../src/hooks/useLocalStorage';

// Mock localStorage
const mockLocalStorage = (() => {
  let store = {};
  return {
    getItem: jest.fn((key) => store[key] || null),
    setItem: jest.fn((key, value) => {
      store[key] = value.toString();
    }),
    clear: jest.fn(() => {
      store = {};
    })
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage
});

describe('useLocalStorage', () => {
  beforeEach(() => {
    mockLocalStorage.clear();
    jest.clearAllMocks();
  });

  test('should use initial value when localStorage is empty', () => {
    const { result } = renderHook(() => useLocalStorage('testKey', 'initialValue'));
    expect(result.current[0]).toBe('initialValue');
  });

  test('should use value from localStorage if it exists', () => {
    mockLocalStorage.getItem.mockReturnValueOnce(JSON.stringify('storedValue'));
    const { result } = renderHook(() => useLocalStorage('testKey', 'initialValue'));
    expect(result.current[0]).toBe('storedValue');
  });

  test('should update localStorage when value changes', () => {
    const { result } = renderHook(() => useLocalStorage('testKey', 'initialValue'));
    
    act(() => {
      result.current[1]('newValue');
    });
    
    expect(result.current[0]).toBe('newValue');
    expect(mockLocalStorage.setItem).toHaveBeenCalledWith('testKey', JSON.stringify('newValue'));
  });

  test('should handle objects as values', () => {
    const initialObject = { test: 'value' };
    const { result } = renderHook(() => useLocalStorage('testKey', initialObject));
    
    expect(result.current[0]).toEqual(initialObject);
    
    const newObject = { updated: 'object' };
    act(() => {
      result.current[1](newObject);
    });
    
    expect(result.current[0]).toEqual(newObject);
    expect(mockLocalStorage.setItem).toHaveBeenCalledWith('testKey', JSON.stringify(newObject));
  });

  test('should handle function updates', () => {
    const { result } = renderHook(() => useLocalStorage('testKey', { count: 0 }));
    
    act(() => {
      result.current[1](prev => ({ count: prev.count + 1 }));
    });
    
    expect(result.current[0]).toEqual({ count: 1 });
  });
});