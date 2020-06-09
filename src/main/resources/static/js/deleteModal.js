 $(document).ready(function () {
     $("#deleteModal").on('show.bs.modal', function (e) {
         let userId = $(e.relatedTarget).data('user-id');
         let cols = $(`#user-${userId} td`);
         let id = $(cols[0]).text();
         let firstName = $(cols[1]).text();
         let lastName = $(cols[2]).text();
         let age = $(cols[3]).text();
         let email = $(cols[4]).text();
         let password = $(cols[5]).text();
         let roles = $(cols[6]).text().split(" ");

         let adminRole = "";
         let userRole = "";
         for (i = 0; i < roles.length; i++) {
             if (roles[i] == "ADMIN") {
                 adminRole = roles[i];
             } else if (roles[i] == "USER") {
                 userRole = roles[i];
             }
         }

         $('#deleteId').val(id);
         $('#deleteFirstName').val(firstName);
         $('#deleteLastName').val(lastName);
         $('#deleteAge').val(age);
         $('#deleteEmail').val(email);
         $('#deletePassword').val(password);
         $('#adminOption').text(adminRole);
         $('#userOption').text(userRole);
     });

     $("#deleteModal").on('hidden.bs.modal', function () {
         var form = $(this).find('form');
         form[0].reset();
     });
 });