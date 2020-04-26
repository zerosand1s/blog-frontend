const _ = require('lodash');

module.exports = {
  getUser(state) {
    return state.user;
  },
  getBlogs(state) {
    return state.blogs;
  },
  getUserBlogs(state) {
    return state.userBlogs;
  },
  getTagsUserFollowing(state) {
    return state.tagsUserFollowing;
  },
  getTagsSuggested(state) {
    if (!state.tagsUserFollowing.length) {
      return state.tagsSuggested;
    } else {
      return _.differenceBy(state.tagsSuggested, state.tagsUserFollowing, 'name');
    }
  }
}