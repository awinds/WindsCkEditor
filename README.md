# WindsCkEditor

Typecho1.2编辑器插件，集成最新CkEditor4.21编辑器。  
支持代码插入，支持图片，附件上传（使用系统集成的附件上传）。  
支持原有附件点击添加到编辑器中，建议大家使用原有附件管理，这样好管理文件，编辑器中上传的附件管理不了。
 
github：[https://github.com/awinds/WindsCkEditor](https://github.com/awinds/WindsCkEditor) 

## 使用方法  

1.下载本插件，放在 `usr/plugins/` 目录中

2.文件夹名改为 `WindsCkEditor`

3.登录管理后台，激活插件

## 配置

### 说明
- ckEditor为最新的4.21版本，已包括CodeSnippet插件，可以自定义toobar，在`WindsCkEditor/ckeditor/config.js`配置。

- 通过`WindsCkEditor/ckeditor/samples/toolbarconfigurator/index.html`可以自定义config项。  

- 后续可以自已升级ckEditor，去[https://ckeditor.com/ckeditor-4/download/](https://ckeditor.com/ckeditor-4/download/) 下载后更新到ckeditor目录。

- 图片上传使用toolbar上`图像`，附件上传使用toolbar上`插入/编辑超链接`，需要在`设置-允许上传的文件类型`中打开上传的类型。  

- v1.0.1 增加了自定义按钮插件more，可以点击插入`<!--more-->`，因为在wysiwyg模式下会插入到`<p></p>`中间，改到只能在Source模式下插入

- v1.0.2 去掉了插件中的语言包（只留了中英文）。修改实例名为`windsCkEditor`，避免用`editor`与其它冲突，其实一个页面一般不太可能有多个编辑器，我听劝。 

### 默认配置
```
{  
    language : "zh-cn",  
    width: 'auto',  
    height: 350,  
}
```
可以自己在Plugin.php修改  