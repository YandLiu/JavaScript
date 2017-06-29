// ==UserScript==
// @name        Out of sight, out of mind!
// @namespace   Yandong Liu
// @include     https://www.firefox.net.cn/*
// @include     http://*/forum-*-*
// @include     http://*/forum-*-*.html
// @include     http://*/showforum-*.html
// @include     http://*/forum.php?mod=forumdisplay*
// @include     http://*/forum/viewforum.php?f=*
// @include     http://*/forum/search.php?*
// @include     https://*/forum-*-*
// @include     https://*/forum-*-*.html
// @include     https://*/showforum-*.html
// @include     https://*/forum.php?mod=forumdisplay*
// @include     https://*/forum/viewforum.php?f=*
// @include     https://*/forum/search.php?*
// @version     1.1
// @grant       none
// ==/UserScript==
var usersList = ['warb', 'kkmanleg'];
var usersCount = 0;
var postsCount = 0;
var flag = 0;
var totalList;
var toBeRemovedPost;
removeIt();
function removeIt() {
    if (document.domain == 'www.firefox.net.cn') {
        totalList = document.querySelectorAll('#J_posts_list p.info>a:first-child');
        for (x of usersList) {
            for (y of totalList) {
                if (y.textContent == x) {
                    flag = 1;
                    postsCount++;
                    toBeRemovedPost = y.parentNode.parentNode.parentNode;
                    toBeRemovedPost.parentNode.removeChild(toBeRemovedPost);
                    // console.log(toBeRemovedUsersList[x] + '\'s post removed!');
                    // console.log(toBeRemovedPostsCount + ' toBeRemoved posts removed so far.');
                }
            }
            if (flag)
                usersCount++;
            flag = 0;
        }
    }
    else if (document.domain == 'www.lightnovel.cn') {
        totalList = document.querySelectorAll('tbody tr td.by a');
        for (x of usersList) {
            for (y of totalList) {
                if (y.href.match('space-uid')) {
                    if (y.textContent == x) {
                        flag = 1;
                        postsCount++;
                        toBeRemovedPost = y.parentNode.parentNode.parentNode.parentNode;
                        toBeRemovedPost.parentNode.removeChild(toBeRemovedPost);
                    }
                }
            }
            if (flag)
                usersCount++;
            flag = 0;
        }
    }
    if (usersCount == 1)
        console.log('1 unwanted user encountered :(');
    else
        console.log(usersCount + ' unwanted users encountered :(');
    if (postsCount == 1)
        console.log('1 unwanted post removed! :)');
    else
        console.log(postsCount + ' unwanted posts removed! :)');
}
