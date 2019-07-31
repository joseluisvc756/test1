const assert = require('assert');
const User = require('../src/user')
describe('Creating records', () => {
	it('Save a user',(done) => {
		const joe = new User({ name: 'Joe' });

		joe.save()
			.then(() => {
				//Has joe been saved successfully?
				assert(!joe.IsNew);
				done();
			});

	});

});