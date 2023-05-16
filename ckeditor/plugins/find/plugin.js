/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.plugins.add( 'find', {
	requires: 'dialog',
	// jscs:disable maximumLineLength
	lang: 'en,zh-cn', // %REMOVE_LINE_CORE%
	// jscs:enable maximumLineLength
	icons: 'find,find-rtl,replace', // %REMOVE_LINE_CORE%
	hidpi: true, // %REMOVE_LINE_CORE%
	init: function( editor ) {
		var findCommand = editor.addCommand( 'find', new CKEDITOR.dialogCommand( 'find' ) ),
			replaceCommand = editor.addCommand( 'replace', new CKEDITOR.dialogCommand( 'find', {
				tabId: 'replace'
			} ) );

		findCommand.canUndo = false;
		findCommand.readOnly = 1;

		replaceCommand.canUndo = false;

		if ( editor.ui.addButton ) {
			editor.ui.addButton( 'Find', {
				label: editor.lang.find.find,
				command: 'find',
				toolbar: 'find,10'
			} );

			editor.ui.addButton( 'Replace', {
				label: editor.lang.find.replace,
				command: 'replace',
				toolbar: 'find,20'
			} );
		}

		CKEDITOR.dialog.add( 'find', this.path + 'dialogs/find.js' );
	}
} );

/**
 * Defines the style to be used to highlight results with the find dialog.
 *
 *		// Highlight search results with blue on yellow.
 *		config.find_highlight = {
 *			element: 'span',
 *			styles: { 'background-color': '#ff0', color: '#00f' }
 *		};
 *
 * @cfg
 * @member CKEDITOR.config
 */
CKEDITOR.config.find_highlight = { element: 'span', styles: { 'background-color': '#004', color: '#fff' } };
