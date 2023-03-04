let $ = django.jQuery;
let file_input = $('#file_input');
// let folder_input = $('#folder_input')[0];

$(document).ready(function () {
    addDependencies($("#photo_set-empty"));
    $(".dynamic-photo_set").map(function () {
        addDependencies($("#" + this.id))
    })
});


file_input.change(function () {
    for (const file of file_input[0].files) {
        createNewTabInline(file);
    }
    file_input[0].value = '';
});

function getInputField(inline) {
    return inline.children(".field-photo").children();
}

function getPreviewField(inline) {
    return inline.children(".field-image_tag").children();
}

// add dependencies "input preview image"
function addDependencies(inline) {
    getInputField(inline).change((event) => {
        let inputField = event.target;
        let inline = $(event.target).parent().parent();
        if (!inline.hasClass('dynamic-photo_set')) {
            inline = inline.parent()
        }
        getPreviewField(inline).html(
            '<img src="' + URL.createObjectURL(inputField.files[0]) + '" width="150" height="150"/>'
        );
    })
}


// function isEmptyTabInline(inline) {
//     return !(inline.children[1].children[0].value ||
//            inline.children[2].children[0].value);
// }


function createNewTabInline(file) {
    // Отстойно написано... Искуственно кликаю на блок
    // TODO разобраться с jQuery, получить функцию добавление.
    $("#photo_set-group .add-row")[0].children[0].children[0].click();

    let dt = new DataTransfer();
    dt.items.add(file);
    let file_list = dt.files;

    let tabInline = $('.dynamic-photo_set').last();
    getInputField(tabInline)[0].files = file_list;
    getInputField(tabInline).trigger("change");
}

