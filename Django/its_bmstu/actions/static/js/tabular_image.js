let $ = django.jQuery;
let dropImageZone = $('#dropImageZone');
let clearAllButton = $("#clearAllImages");

$(document).ready(function () {
    addDependencies($("#photo_set-empty"));
    $(".dynamic-photo_set").map(function () {
        addDependencies($("#" + this.id))
    })
});

clearAllButton.on("click", function (e) {
    $(".dynamic-photo_set").map(function (el) {
        $('.delete input', this).prop('checked', true);
        $(".delete a", this).click();
    });
});

// ************ Drag&Drop JS  ************
dropImageZone.on("dragover", function (e) {
    e.preventDefault();
    $(this).addClass("hover");
})

dropImageZone.on("dragleave", function (e) {
    e.preventDefault();
    $(this).removeClass("hover");
})

dropImageZone[0].addEventListener("drop", function (e) {
    e.preventDefault();
    const items = e.dataTransfer.items;

    for (var i = 0; i < items.length; i++) {
        // webkitGetAsEntry is where the magic happens
        var item = items[i].webkitGetAsEntry();
        if (item) {
            traverseFileTree(item);
        }
    }

    dropImageZone.removeClass("hover");
})

function traverseFileTree(item, path) {
    path = path || "";
    if (item.isFile) {
        // Get file
        item.file(function (file) {
            if (file.type.split("/")[0] === "image") {
                createNewTabInline(file);
            }
        });
    } else if (item.isDirectory) {
        // Get folder contents
        var dirReader = item.createReader();
        dirReader.readEntries(function (entries) {
            for (var i = 0; i < entries.length; i++) {
                traverseFileTree(entries[i], path + item.name + "/");
            }
        });
    }
}

// ***************************************

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

function deleteEmptyImages() {
    $(".dynamic-photo_set").map(function () {
        if (isEmptyTabInline($(this))) {
            $(this).children(".delete")
                .children("div")
                .children("a").click()
        }
    })
}


function isEmptyTabInline(inline) {
    return !getInputField(inline).val();
}


function createNewTabInline(file) {
    deleteEmptyImages()
    // Отстойно написано... Искуственно кликаю на блок
    $("#photo_set-group .add-row")[0].children[0].children[0].click();

    let dt = new DataTransfer();
    dt.items.add(file);
    let file_list = dt.files;

    let tabInline = $('.dynamic-photo_set').last();
    getInputField(tabInline)[0].files = file_list;
    getInputField(tabInline).trigger("change");
}

