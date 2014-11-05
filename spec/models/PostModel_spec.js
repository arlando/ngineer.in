var Post = require('../../js/models/PostModel');

describe('urlName', function () {

    it('should trim the url', function () {
        var post = new Post({ url: 'foo ' });
        expect(post.get('urlName')).toEqual('foo');
    });

    it('should be only lowercase', function () {
        var post = new Post({url: 'FOO'});
        expect(post.get('urlName')).toEqual('foo');
    });

    it('should replace spaces with dashes', function () {
        var post = new Post({url: 'foo bar'});
        expect(post.get('urlName')).toEqual('foo-bar');
    });
});