module.exports = {
  SET_USER(state, user) {
    state.user = user;
  },
  SET_BLOGS(state, blogs) {
    state.blogs = blogs;
  },
  SET_USER_BLOGS(state, blogs) {
    state.userBlogs = blogs;
  },
  SET_USER_FOLLOWING_TAGS(state, tags) {
    state.tagsUserFollowing = tags;
  },
  SET_SUGGESTED_TAGS(state, tags) {
    state.tagsSuggested = tags;
  }
};