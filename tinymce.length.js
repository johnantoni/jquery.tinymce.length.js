// setup tinymce
$("textarea.tinymce").tinymce({

    // Allowed elements
    valid_elements: "em,strong,a[href|target],blockquote,p,span[style],ul,li",

    // Theme
    theme: "advanced",

    // Theme options
    theme_advanced_path : false,
    theme_advanced_buttons1: "bold,italic,underline",
    theme_advanced_buttons2: "",
    theme_advanced_buttons3: "",
    theme_advanced_statusbar_location : "bottom",
    theme_advanced_text_colors: false,
    theme_advanced_more_colors: false,
    theme_advanced_toolbar_location: "top",
    theme_advanced_toolbar_align: "left",

    // Plugins
    plugins: "paste",

    // Paste
    paste_use_dialog: false,
    paste_auto_cleanup_on_paste: true,
    paste_convert_headers_to_strong: false,
    paste_strip_class_attributes: "all",
    paste_remove_spans: true,
    paste_remove_styles: true,

    // Dimensions
    width: "500",
    height: "200",

    setup : function(ed) {
      ed.onKeyUp.add(function(ed, e) {
        var strip = (tinyMCE.activeEditor.getContent()).replace(/(<([^>]+)>)/ig,"");
        var text = strip.split(' ').length + " Words, " +  strip.length + " Characters"
        tinymce.DOM.setHTML(tinymce.DOM.get(tinyMCE.activeEditor.id + '_path_row'), text);
      });
    }

});