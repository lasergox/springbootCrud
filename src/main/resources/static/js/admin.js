$(document).ready(function () {
    $("#addUser").click(function () {
        let roles = [];
        $('#newRoles').find(':selected').each(function (i, selected) {
            roles.push({name: $(selected).val()});
        });

        let user = {
            firstName: $("#newFirstName").val(),
            lastName: $("#newLastName").val(),
            age: $("#newAge").val(),
            email: $("#newEmail").val(),
            password: $("#newPassword").val(),
            roles: roles
        };
        addUserRequest(user, addUserToTable);
        $('#users-table').trigger('click');
        addUserForm[0].reset();
    });

    $("#doEdit").click(function () {
        let roles = [];
        $('#editRoles').find(':selected').each(function (i, selected) {
            roles.push({name: $(selected).val()});
        });

        let user = {
            id:$("#editId").val(),
            firstName: $("#editFirstName").val(),
            lastName: $("#editLastName").val(),
            age: $("#editAge").val(),
            password: $("#editPassword").val(),
            email: $("#editEmail").val(),
            roles: roles,
        };
        updateUserRequest(user, updateUserToTable);

    });

    $("#doDelete").click(function () {
        let userId = $("#deleteId").val()
        let user = {
            id: userId,
        }
        deleteUserRequest(user, function (){
            $('#deleteModal').modal('hide');
            $(`#user-${userId}`).remove();
        });
    });

    $("#user-page").click(function () {
        $(location).attr('href', '/user');
        $('#user-page').removeAttribute('hidden');
    })
});

let usersTable = $('#usersTable');
let addUserForm = $('#addUserForm');

function updateUserToTable(user) {
    let roles = [];
    let userRow = $(`tr#user-${user.id}`);
    user.roles.forEach(role => {
        roles += `${role.name} `;
    })

    userRow.find('#firstName').text(user.firstName);
    userRow.find('#lastName').text(user.lastName);
    userRow.find('#age').text(user.age);
    userRow.find('#email').text(user.email);
    userRow.find('#password').text(user.password);
    userRow.find('#roles').text(roles);
    $('#editModal').modal('hide');
}

function drawUserTable(users) {
    users.forEach(user => {
        addUserToTable(user)
    });
}

function addUserToTable(user) {
    let roles = "";
    user.roles.forEach(role => {
        roles += `${role.name} `;
    })
    usersTable.append(`<tr id="user-${user.id}">
                <td>${user.id}</td>
                <td id="firstName">${user.firstName}</td>
                <td id="lastName">${user.lastName}</td>
                <td id="age">${user.age}</td>
                <td id="email">${user.email}</td>
                <td id="password" hidden>${user.password}</td>
                <td id="roles">${roles}</td>
                <td><button type="button" class="btn btn-info" data-toggle="modal" data-target="#editModal"
                            data-user-id="${user.id}">Edit</button></td>
                <td><button type="button" class="btn btn-danger" data-toggle="modal" data-target="#deleteModal"
                            data-user-id="${user.id}">Delete</button></td>
                 </tr>`);
}

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

    if (roles.indexOf('ADMIN') >= 0) {

    }
}

getCurrentUser(drawUserData);
getAllUsers(drawUserTable);


