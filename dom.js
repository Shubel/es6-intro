document.getElementById("add-border").addEventListener("click", function () {
    const friendsArea = document.getElementById("friends-area");
    friendsArea.style.border = "3px solid yellow";
});

function addBackgroundColor () {
const friends = document.getElementsByClassName("friend");
for (const friend of friends) {
    friend.style.backgroundColor = "tomato";
};
};

document.getElementById("add-friend").addEventListener("click", function () {
    const friendsArea = document.getElementById("friends-area");
    const addedFriend = document.createElement("div");
    addedFriend.classList.add("friend");
    addedFriend.innerHTML = `
        <h4 class="friend-name">New Friend</h4>
        <p>Obcaecati architecto iste ducimus.</p>
        `;
        friendsArea.appendChild(addedFriend);
});
