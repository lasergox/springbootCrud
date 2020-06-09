function getAllUsers(callback) {
    let promise = $.ajax('admin/allUsers', { success: function (data) {
            callback(data);
        }});
    return promise;
}

function getCurrentUser(callback) {
    let promise = $.ajax('user/currentUser', { success: function (data) {
            callback(data);
        }});
    return promise;
}


function addUserRequest(user, callback) {
     let promise = $.ajax({
        url: "/admin/add",
        method: 'POST',
        data: JSON.stringify(user),
        contentType: 'application/json',
        success: function (data) {
            callback(data)
        }
     });
     return promise;
}

function updateUserRequest(user, callback) {
    let promise = $.ajax({
        url: "/admin/update",
        method: 'POST',
        data: JSON.stringify(user),
        contentType: 'application/json',
        success: function (data) {
            callback(data)
        }
    });
    return promise;
}

function deleteUserRequest(user, callback) {
    let promise = $.ajax({
        url: "/admin/delete",
        method: 'POST',
        data: JSON.stringify(user),
        contentType: 'application/json',
        success: function (data) {
            callback(data)
        }
    });
    return promise;
}

