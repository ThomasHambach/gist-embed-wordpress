;(function($){
    var dialog = $('#gist-embed-form');
    if(dialog.length > 0) {
        dialog.submit(function() {

            var link = $('#gist-url-field')
                , file = $('#gist-file-field')
                , line = $('#gist-line-field')
                , hideLines = $('#gist-hide-line-field')
                , removeFooter = $('#gist-remove-footer-field')
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

            // build code
            code = '<code data-gist-id="gist-' + gist + '"';
            if(file.val().length > 0) code += ' data-file="' + file.val() + '"';
            if(line.val().length > 0) code += ' data-line="' + line.val() + '"';
            if(hideLines.is(':checked')) code += ' data-hide-line-numbers="true"';
            if(removeFooter.is(':checked')) code += ' data-hide-footer="true"';
            code += '>' + link.val() + '</code>';

            // close popup and reset values
            link.val(''), file.val(''), line.val('');
            hideLines.attr('checked',false), removeFooter.attr('checked',false);

            tinyMCE.execInstanceCommand('content', "mceInsertContent", false, code);
            tinyMCEPopup.close();

            return false;
        })
    }
})(jQuery);