$(document).ready(function () {
    getCurrentUser(drawUserData);
})


function drawUserData(user) {
    let roles = "";
    user.roles.forEach(role => {
        roles += `${role.name} `;
    })
    $('div#email').text(`${user.email}`);
    $('div#roles').text(roles);
    $('td#currentId').text(`${user.id}`);
    $('td#currentFirstName').text(`${user.firstName}`);
    $('td#currentLastName').text(`${user.lastName}`);
    $('td#currentAge').text(`${user.age}`);
    $('td#currentEmail').text(`${user.email}`);
    $('td#currentRoles').text(roles);

    if (roles.indexOf('ADMIN') < 0) {
         $('#admin-page').hide();
    }
}

