;(function($){
    var dialog = $('#gist-embed-form');
    if(dialog.length > 0) {
        dialog.submit(function() {
            console.log('dialog submitted');
            var link = dialog.find('#gist-url-field')
                , file = dialog.find('#gist-file-field')
                , line = dialog.find('#gist-line-field')
                , intRegex = /^\d+$/
                , code = '';

            if(link == '') {
                alert('Please provide a link to your gist.');
                return false;
            }

            var gist = link.val().split('/')[4];
            if(!intRegex.test(gist)) {
                alert('Invalid gist link, the gist ID found in your link was ' + gist + '.');
                return false;
            }

            code = '<code data-gist-id="gist-' + gist + '"';
            if(file.val().length > 0) {
                code += ' data-file="' + file.val() + '"';
            }
            if(line.val().length > 0) {
                code += ' data-line="' + line.val() + '"';
            }
            code += '>' + link.val() + '</code>';

            tinyMCE.execInstanceCommand('content', "mceInsertContent", false, code);
            tinyMCEPopup.close();

            return false;
        })
    }
})(jQuery);