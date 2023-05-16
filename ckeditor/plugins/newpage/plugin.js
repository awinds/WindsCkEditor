/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @fileOverview Horizontal Page Break.
 */

// Register a plugin named "newpage".
CKEDITOR.plugins.add( 'newpage', {
	// jscs:disable maximumLineLength
	lang: 'en,zh-cn', // %REMOVE_LINE_CORE%
	// jscs:enable maximumLineLength
	icons: 'newpage,newpage-rtl', // %REMOVE_LINE_CORE%
	hidpi: true, // %REMOVE_LINE_CORE%
	init: function( editor ) {
		editor.addCommand( 'newpage', { modes: { wysiwyg: 1, source: 1 },

			exec: function( editor ) {
				var command = this;
				editor.setData( editor.config.newpage_html || '', function() {
					editor.focus();
					// Save the undo snapshot after all document changes are affected. (https://dev.ckeditor.com/ticket/4889)
					setTimeout( function() {
						editor.fire( 'afterCommandExec', {
							name: 'newpage',
							command: command
						} );
						editor.selectionChange();

					}, 200 );
				} );
			},
			async: true
		} );

		editor.ui.addButton && editor.ui.addButton( 'NewPage', {
			label: editor.lang.newpage.toolbar,
			command: 'newpage',
			toolbar: 'document,20'
		} );
	}
} );

/**
 * The HTML to load in the editor when the "new page" command is executed.
 *
 *		config.newpage_html = '<p>Type your text here.</p>';
 *
 * @cfg {String} [newpage_html='']
 * @member CKEDITOR.config
 */
