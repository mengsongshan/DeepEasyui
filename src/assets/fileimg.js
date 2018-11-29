
var uploadPreview = function(setting) {
  var _self = this;
  _self.getObjectURL = function(file) {
      r = new FileReader();  //本地预览 转base64
      r.onload = function () {
        $('#' + setting.ImgShow).html('<span id="diaClose"><i class="glyphicon glyphicon-remove"></i></span><img src="' + r.result + '"/>');
        $('#inputFileBase64').val(r.result.split('base64,')[1])
      }
      r.readAsDataURL(file);
  }
  _self.Bind = function() {

    document.getElementById(setting.UpBtn).onchange = function() {
        var fileType = setting.fileType;
        if(fileType == null || undefined || fileType == ''){
            fileType = "zip";
        }
        var maxfileSize = setting.fileSize;
        if(maxfileSize == null || undefined || maxfileSize == ''){
            maxfileSize = 2;
        }
        // zip|rar|xxx
       var reg = new RegExp("\.("+fileType+")$")
      if (this.value) {
          var file = this.files[0];
          var filename = file.name;
          var ImgType = filename.substring(filename.lastIndexOf("."), filename.length);
          console.log(ImgType)
          var fileSize = file.size;
          var imgSize = fileSize / 1024 / 1024;
        if(setting.type == 'zip'){
            debugger
          if (imgSize > maxfileSize) {
            $.alert('不能上传超过'+maxfileSize+'M的压缩包')
            return
          }else if (!reg.test(ImgType)){
            $.alert('上传格式错误，只能上传，'+fileType+' 格式的压缩包')
            return
          }else{
            $('#' + setting.ImgUrl).val(this.files[0].name).trigger("change")
            // console.log(new FormData(this.files[0]))
            $('#inputFileBase64').val(this.files[0])
          }
        }else{
          if (imgSize > 3) {
            $.alert('不能上传超过3M的图片')
            return
          }else if (ImgType != ".png" && ImgType != ".jpeg" && ImgType != ".jpg"){
            $.alert('上传格式错误，只能上传，png,jpeg,jpg')
            return
          }else{
            $('#' + setting.ImgUrl).val(this.files[0].name).trigger("change")
            _self.getObjectURL(this.files[0])
          }
        }
        setting.callback&&setting.callback();
      }
    }
  }
  _self.Bind();
}
