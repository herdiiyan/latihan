// function deleteData(id) {
//     console.log(id + ' Will be Deleted ');
// }


$(function () {
    var tBody = $('#tabletbody');

    var jqxhr = $.get({
        url: "http://localhost:8080/buku/bukuAll",
        data: {
            type: "buku/bukuAll"
        },
        cache: false
    }).done(function (data) {
        console.log(data.data);
        for (o of data.data) {
            var tr = $('<tr>');
            tr.append('<td>' + o.id + '</td>');
            tr.append('<td>' + o.judul + '</td>');
            tr.append('<td>' + o.penerbit + '</td>');
            tr.append('<td>' + o.denda + '</td>');
            tr.append('<td>' + o.stok + '</td>');

            var button = $('<button>', {
                'data-id': o.id,
                text: 'Delete',
                click: deleteData
            });
            // tr.append('<button class="button-delete" onclick="deleteData(\'' + o.id + '\')">Hapus</button>');
            tr.append(button);
            tBody.append(tr);
        }
    }).fail(function (jrqXHR, textStatus, errorThrown) {
        console.log('ERROR: ' + textStatus);
    }).always(function () {
        console.log('FINISHED');
    });

    var deleteData = function () {
        var id = $(this).data("id");
        console.log(id + ' Will be deleted. ')
    }
});