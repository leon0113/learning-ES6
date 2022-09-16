// Add Border handler
document.getElementById('add-border').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    container.style.border = '5px solid blue';
})

// add background handler
function addBackgroundColor() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue';
    }
}

// Add Friend handler

document.getElementById('add-friend').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    // friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
    <h3 class="friend-name">Friend-New</h3>
            <p>Nostrum, praesentium!</p>
    `;
    container.appendChild(friendDiv);
})