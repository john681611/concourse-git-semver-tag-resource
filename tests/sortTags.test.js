const sortTags = require('../assets/sortTags');

describe('filterTags', () => {
    it('should return an array', () => {
        expect(sortTags.filterTags()).toEqual([]);
    });

    it('should return an empty array if all tags are invalid', () => {
        expect(sortTags.filterTags(['bob','kev'])).toEqual([]);
    });

    it('should return an array of valid semvers', () => {
        expect(sortTags.filterTags(['bob','kev', '1.0.0', '2.3.5-dev'])).toEqual([
            '1.0.0',
            '2.3.5-dev'
        ]);
    });

    it('should return an array of valid semvers that pass filter', () => {
        expect(sortTags.filterTags(['bob','kev', '1.0.0', '2.3.5-dev'], 'dev')).toEqual([
            '2.3.5-dev'
        ]);
    });

    it('should return an array pure semver', () => {
        expect(sortTags.filterTags(['bob','kev', '1.0.0', '2.3.5-dev'], '\\d+\\.\\d+\\.\\d+$')).toEqual([
            '1.0.0'
        ]);
    });
});