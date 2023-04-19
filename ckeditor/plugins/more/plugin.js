/**
 * 增加more按钮到工具栏上，插入<!--more-->
 */

// 注册插件
CKEDITOR.plugins.add( 'more', {

	// Register the icons. They must match command names.
	icons: 'more',

	// The plugin initialization logic goes inside this method.
	init: function( editor ) {

		// Define the editor command that inserts a more.
		editor.addCommand( 'insertMore', {

			// Define the function that will be fired when the command is executed.
			exec: function( editor ) {
				// 插入入代码
				editor.insertHtml( '<p><!--more--></p>' );
			}
		});

		// Create the toolbar button that executes the above command.
		editor.ui.addButton( 'more', {
			label: 'Insert More...',
			command: 'insertMore',
			toolbar: 'insert'
		});
	}
});
