const tagService = require('../services/tag.service');
const blogService = require('../services/blog.service');

module.exports = {
  setUser({ commit }, user) {
    commit('SET_USER', user);
  },
  setBlogs({ commit }, blogs) {
    commit('SET_BLOGS', blogs);
  },
  async setUserBlogs({ commit }) {
    const blogs = await blogService.getMyBlogs();
    commit('SET_USER_BLOGS', blogs);
  },
  async setUserFollowingTags({ commit }) {
    const tags = await tagService.getUserTags();
    commit('SET_USER_FOLLOWING_TAGS', tags);
  },
  async setSuggestedTags({ commit }) {
    const tags = await tagService.getAllTags();
    commit('SET_SUGGESTED_TAGS', tags);
  },
  async followTag({ dispatch }, id) {
    await tagService.follow(id);
    dispatch('setUserFollowingTags');
    dispatch('setSuggestedTags');
  }
};