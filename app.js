
$(document).ready( function () {
  var data = [
    [
      "Sawako",
      "Ishida",
      "Nov 15th, 2016",
      "blah"
    ],
    [
      "Tea",
      "Cup",
      "May 3rd, 2016",
      "blahblah"
    ]

  ]
  $('#dt_table').DataTable({
    data: data
  });

  $('#dt_table').addClass('table table-striped table-bordered')
});
