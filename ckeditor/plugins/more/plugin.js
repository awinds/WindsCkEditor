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
			 modes: {
			 	wysiwyg: 0,
				 source: 1
			 },
			// Define the function that will be fired when the command is executed.
			exec: function( editor ) {
				// 插入入代码
				var html = "<!--more-->";
				if(editor.mode == 'wysiwyg') {
					editor.insertHtml(html);
				}
				else {
					var input = document.getElementsByClassName('cke_source cke_enable_context_menu')[0];
					input.focus();
					if(typeof input.selectionStart != 'undefined')
					{
						/* Einfügen des Formatierungscodes */
						var start = input.selectionStart;
						var end = input.selectionEnd;

						input.value = input.value.substr(0, start) + html + input.value.substr(end);
						/* Anpassen der Cursorposition */
						var pos;

						pos = start+html.length;

						input.selectionStart = pos;
						input.selectionEnd = pos;
					}
				}
				//var targetEditor = CKEDITOR.instances.idOfYourTextarea;

				//editor.insertHtml('<!--more-->','html',);
			}
		});

		// Create the toolbar button that executes the above command.
		editor.ui.addButton( 'more', {
			label: '在源码模式下插入<!--more-->',
			command: 'insertMore',
			toolbar: 'insert'
		});
	}
});
