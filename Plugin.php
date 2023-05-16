<?php
/**
 * WindsCkEditor，集成最新CkEditor4编辑器，支持插入Code，支持图片上传，支持原附件插入
 * 
 * @package WindsCkEditor
 * @author 小A
 * @version 1.0.2
 * @link http://lijian.net
 */
class WindsCkEditor_Plugin implements Typecho_Plugin_Interface
{
    /**
     * 激活插件方法,如果激活失败,直接抛出异常
     * 
     * @access public
     * @return void
     * @throws Typecho_Plugin_Exception
     */
    public static function activate()
    {
        //显示
        Typecho_Plugin::factory('admin/write-post.php')->richEditor = array('WindsCkEditor_Plugin', 'render');
        Typecho_Plugin::factory('admin/write-page.php')->richEditor = array('WindsCkEditor_Plugin', 'render');
        //数据
        Typecho_Plugin::factory('Widget_Contents_Post_Edit')->write = array('WindsCkEditor_Plugin', 'filter');
        Typecho_Plugin::factory('Widget_Contents_Page_Edit')->write = array('WindsCkEditor_Plugin', 'filter');

        //重写原插入附件
        Typecho_Plugin::factory('admin/write-post.php')->bottom = array('WindsCkEditor_Plugin', 'reInsert');
        Typecho_Plugin::factory('admin/write-page.php')->bottom = array('WindsCkEditor_Plugin', 'reInsert');
    }
    
    /**
     * 禁用插件方法,如果禁用失败,直接抛出异常
     * 
     * @static
     * @access public
     * @return void
     * @throws Typecho_Plugin_Exception
     */
    public static function deactivate()
    {
    }
    
    /**
     * 获取插件配置面板
     * 
     * @access public
     * @param Typecho_Widget_Helper_Form $form 配置面板
     * @return void
     */
    public static function config(Typecho_Widget_Helper_Form $form){}
    
    /**
     * 个人用户的配置面板
     * 
     * @access public
     * @param Typecho_Widget_Helper_Form $form
     * @return void
     */
    public static function personalConfig(Typecho_Widget_Helper_Form $form){}
    
    /**
     * 读取数据
     * 
     * @access public
     * @param array $post 数据结构体
     * @return array
     */
    public static function filter($post)
    {
        $post['text'] = str_replace("\n", '', $post['text']);
        return $post;
    }

    /**
     * 重写原附件插入
     */
    public static function reInsert($post) {
        echo <<<CODE
        <script type="text/javascript">
        $(document).ready(function() {
            Typecho.insertFileToEditor = function (file, url, isImage) {
                var textHtml = isImage ? "<img src='"+url+"' alt='"+file+"' />" : 
                "<a href='"+ url +"'>" + file + "</a>";
                if(windsCkEditor && typeof windsCkEditor.insertHtml == 'function') {
                    windsCkEditor.insertHtml(textHtml);
                }
            }
        });
        </script>
CODE;
    }
    
    /**
     * 插件实现方法
     * 
     * @access public
     * @return void
     */
    public static function render($post)
    {
        $options = Helper::options();
        $ckEditor = Typecho_Common::url('WindsCkEditor/ckeditor', $options->pluginUrl);
        $manage = Typecho_Common::url('WindsCkEditor/manage', $options->pluginUrl);
        //调用编辑器
        echo <<<CODE
        <script type="text/javascript" src="{$ckEditor}/ckeditor.js"></script>
        <script type="text/javascript">
        if ( CKEDITOR.env.ie && CKEDITOR.env.version < 9 ){
			CKEDITOR.tools.enableHtml5Elements( document );
		}
        var windsCkEditor = CKEDITOR.replace('text', {
            language : "zh-cn",
            filebrowserUploadMethod: "form",
            filebrowserUploadUrl : "{$manage}/upload.php?type=Files",
            filebrowserImageUploadUrl : "{$manage}/upload.php?type=images",
            width: 'auto',
            height: 350,
        });
        </script>
CODE;
    }
}
