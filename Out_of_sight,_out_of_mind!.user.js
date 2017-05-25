// ==UserScript==
// @name        Out of sight, out of mind!
// @namespace   Yandong Liu
// @include     https://www.firefox.net.cn/*
// @version     1
// @grant       none
// ==/UserScript==
var usersList = ['warb'];
var usersCount = 0;
var postsCount = 0;
var flag = 0;
removeIt();
function removeIt() {
    var totalList = document.querySelectorAll('#J_posts_list p.info>a:first-child');
    for (x in usersList) {
        for (y in totalList) {
            if (totalList[y].textContent == usersList[x]) {
                flag = 1;
                postsCount++;
                let toBeRemovedPost = totalList[y].parentNode.parentNode.parentNode;
                toBeRemovedPost.parentNode.removeChild(toBeRemovedPost);
                // console.log(toBeRemovedUsersList[x] + '\'s post removed!');
                // console.log(toBeRemovedPostsCount + ' toBeRemoved posts removed so far.');
            }
        }
        if (flag)
            usersCount++;
        flag = 0;
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
