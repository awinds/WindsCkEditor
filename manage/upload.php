<?php
/**
 * 文件上传
 */
header('Content-Type: text/html; charset=UTF-8');

$rootDir = strstr( dirname(__FILE__), 'usr', TRUE );
require_once $rootDir . 'config.inc.php';
require_once $rootDir . 'var/Typecho/Common.php';
require_once $rootDir . 'var/Typecho/Request.php';
require_once $rootDir . 'var/Widget/Upload.php';

$fileInfo = Widget_Upload::uploadHandle($_FILES['upload']);
if( false === $fileInfo ){
    echo "<script type='text/javascript'>alert('上传失败!');</script>";
}else{
    $funcNum = $_GET['CKEditorFuncNum'];
    $CKEditor = $_GET['CKEditor'];
    $langCode = $_GET['langCode'];
    $token = $_POST['ckCsrfToken'];
    $filePath = Typecho_Request::getInstance()->getUrlPrefix() . $fileInfo['path'];
    $message = "上传成功";
    echo "<script type='text/javascript'>window.parent.CKEDITOR.tools.callFunction($funcNum, '$filePath', '$message');</script>";
}
