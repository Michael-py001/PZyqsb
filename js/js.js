$(function () {
    $('#submit').click(() => {
        formData = $("form").serialize()
        id = $('#id').val()
        pwd = $('#pwd').val()
        key = $('#key').val()
        if (!/^\d{12}$/.test(id)) {
            $('#id').focus()
            alert("学号格式错误，请核对后填入")
            return
        } else if (pwd.length < 1) {
            alert("请填写正确密码")
            return
        } else if (!/^[0-9A-Za-z]{45,60}$/.test(key)) {
            console.log("不符合");
            $('#key').val("")
            $('#key').focus()
            alert("key格式错误，请核对后填入")
            return
        } else {
            $.ajax({
                type: "GET",
                url: " http://gpq77h.natappfree.cc/add",
                data: formData,
                dataType: "jsonp",
                jsonp: "callback",
                async: true,
                success: (res) => {
                    if (res.code === 200) {
                        alert("您的信息已经提交成功！")
                    }
                },
                error: (err) => {
                    console.log("err:", err);
                    alert("提交通道已关闭！请把信息发送到邮箱")
                },
                timeout: "5000"

            })
        }

    })
})