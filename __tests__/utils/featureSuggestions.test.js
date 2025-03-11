import { getSuggestedFeatures, getDetailedFeatures } from '../../src/utils/featureSuggestions';

describe('featureSuggestions', () => {
  describe('getSuggestedFeatures', () => {
    test('returns correct features for Web Application', () => {
      const features = getSuggestedFeatures('Web Application');
      expect(features).toBe('User dashboard, Settings page, Notifications, Search functionality, User profiles');
    });

    test('returns correct features for E-commerce Site', () => {
      const features = getSuggestedFeatures('E-commerce Site');
      expect(features).toBe('Product listings, Shopping cart, Checkout process, User accounts, Search and filter');
    });

    test('returns empty string for unknown project type', () => {
      const features = getSuggestedFeatures('Unknown Type');
      expect(features).toBe('');
    });
  });

  describe('getDetailedFeatures', () => {
    test('returns detailed features array for Blog', () => {
      const features = getDetailedFeatures('Blog');
      expect(features).toBeInstanceOf(Array);
      expect(features.length).toBeGreaterThan(0);
      expect(features).toContain('Article listings with pagination');
    });

    test('returns empty array for unknown project type', () => {
      const features = getDetailedFeatures('Unknown Type');
      expect(features).toEqual([]);
    });
  });
});