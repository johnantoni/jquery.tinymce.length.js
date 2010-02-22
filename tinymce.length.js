// setup tinymce
$("textarea.tinymce").tinymce({

    // Theme
    theme: "advanced",

    // Mode
    mode: "textareas",

    // Allowed elements
    valid_elements: "em,strong,a[href|target],blockquote,p,span[style],ul,li",

    // Theme options
    theme_advanced_path: false,
    theme_advanced_buttons1: "bold,italic,underline,|,bullist,numlist,|,undo,redo",
    theme_advanced_buttons2: "",
    theme_advanced_buttons3: "",
    theme_advanced_statusbar_location: "bottom",
    theme_advanced_text_colors: false,
    theme_advanced_more_colors: false,
    theme_advanced_toolbar_location: "top",
    theme_advanced_toolbar_align: "left",

    // Plugins
    plugins: "paste,safari",

    // Paste
    paste_use_dialog: false,
    paste_auto_cleanup_on_paste: true,
    paste_convert_headers_to_strong: false,
    paste_strip_class_attributes: "all",
    paste_remove_spans: true,
    paste_remove_styles: true,

    // Dimensions
    width: "600",
    height: "300",

    setup: function(ed) {
        this.textLimit = 100;
        ed.onKeyUp.add(function(ed, e) {
            var strip = (tinyMCE.activeEditor.getContent()).replace(/(<([^>]+)>)/ig, "");
            if (strip.length > this.textLimit) {
                var txt = this.prevText; //strip.substring(0, this.textLimit);
                tinyMCE.execCommand('mceSetContent', false, txt);

                tinymce.DOM.setHTML(tinymce.DOM.get(tinyMCE.activeEditor.id + '_path_row'), "Reached text limit of " + this.textLimit + " characters");
                return false;
            }
            else {
                var text = (this.textLimit - strip.length) + " Characters left"
                tinymce.DOM.setHTML(tinymce.DOM.get(tinyMCE.activeEditor.id + '_path_row'), text);
                this.prevText = strip;
            }
        });
    }
});