/* feedreader.js
 * Author: Sašo Kunčič
 * Description: Udacity FEWD Nanodegree
 * 
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not empty.
         */
        it('one or more feeds defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it("all feeds' urls defined", function() {
            for (let feed of allFeeds) {
              expect(feed.url).toBeDefined();
              expect(feed.url.length).not.toBe(0);
            }
        });

         it("all feeds' names defined", function() {
            for (let feed of allFeeds) {
              expect(feed.name).toBeDefined();
              expect(feed.name.length).not.toBe(0);
            }
        });
    });

    describe('The menu', function() {

        it('pizza menu is hidden', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        it('pizza menu shown after theirst click and hidden after the second one', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function(){

        beforeEach(function(done){
            loadFeed(0, done);
        });

        it('feed loaded with at least a single feed entry', function() {
            let feedEntry = $('.feed .entry');
            // console.log('Initial Entries: '+ feedEntry[0].innerHTML);
            // console.log('Initial Entries: '+ feedEntry[1].innerHTML);
            expect(feedEntry.length).toBeGreaterThan(0);
        });
    });

    describe('New Feed Selection', function(){

        let firstFeedEntry = '';
        let secondFeedEntry = '';

        beforeEach(function(done){
            loadFeed(1, done);
            firstFeedEntry = $('.feed .entry');
            // console.log('New Feed Selection: '+ firstFeedEntry[0].innerHTML);
            loadFeed(2, done);

        });

        it('new feed differs from the old one', function() {
            secondFeedEntry = $('.feed .entry');
            // console.log('New Feed Selection: '+ secondFeedEntry[0].innerHTML);
            expect(firstFeedEntry[0].innerHTML).not.toBe(secondFeedEntry[0].innerHTML);
        });
    });
}());