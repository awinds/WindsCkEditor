﻿/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @fileOverview Horizontal Rule plugin.
 */

( function() {
	var horizontalruleCmd = {
		canUndo: false, // The undo snapshot will be handled by 'insertElement'.
		exec: function( editor ) {
			var hr = editor.document.createElement( 'hr' );
			editor.insertElement( hr );
		},

		allowedContent: 'hr',
		requiredContent: 'hr'
	};

	var pluginName = 'horizontalrule';

	// Register a plugin named "horizontalrule".
	CKEDITOR.plugins.add( pluginName, {
		// jscs:disable maximumLineLength
		lang: 'en,zh-cn', // %REMOVE_LINE_CORE%
		// jscs:enable maximumLineLength
		icons: 'horizontalrule', // %REMOVE_LINE_CORE%
		hidpi: true, // %REMOVE_LINE_CORE%
		init: function( editor ) {
			if ( editor.blockless )
				return;

			editor.addCommand( pluginName, horizontalruleCmd );
			editor.ui.addButton && editor.ui.addButton( 'HorizontalRule', {
				label: editor.lang.horizontalrule.toolbar,
				command: pluginName,
				toolbar: 'insert,40'
			} );
		}
	} );
} )();
