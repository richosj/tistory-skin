const $ = require('cheerio').load(
  require('fs').readFileSync('docs/index.xml'), {
    normalizeWhitespace: true,
    xmlMode: true
  }
);

module.exports = {
  /**
   * Tistory skin name
   */
  name: $('skin > information > name').text(),

  /**
   * Tistory session cookie value
   */
  ts_session: new String(),

  /**
   * Tistory blog URL
   */
  url: new String(),

  /** 
   * Preview
   */
  preview: {
    /**
     * Preview Mode
     * 
     * index
     * entry 
     * category 
     * tag,
     * location
     * media,
     * guestbook
     */
    mode: 'index'
  },

  /**
   * Build
   */
  build: {
    /**
     * Assets public path
     */
    public_path: new String()
  }
};