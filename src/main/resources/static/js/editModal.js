 $(document).ready(function () {

     $("#editModal").on('show.bs.modal', function (e) {
         let userId = $(e.relatedTarget).data('user-id');
         let cols = $('#user-' + userId + ' td');
         let id = $(cols[0]).text();
         let firstName = $(cols[1]).text();
         let lastName = $(cols[2]).text();
         let age = $(cols[3]).text();
         let email = $(cols[4]).text();
         let password = $(cols[5]).text();

         $('#editId').val(id);
         $('#editFirstName').val(firstName);
         $('#editLastName').val(lastName);
         $('#editAge').val(age);
         $('#editEmail').val(email);
         $('#editPassword').val(password);

     });

     $("#editModal").on('hidden.bs.modal', function () {
         var form = $(this).find('form');
         form[0].reset();
     });

 });