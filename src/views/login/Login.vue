<template>
  <div class="login-wrap">
    <el-form
      :model="loginValidateForm"
      label-width="80px"
      class="login-form"
      @submit.prevent
      :rules="rules"
      ref="loginValidateForm"
    >
      <h2 class="login-title">用户登录</h2>
      <el-form-item prop="username">
        <el-input placeholder="请输入用户名" v-model="loginValidateForm.username" v-focus>
          <template slot="prepend">
            <span class="icon">
              <i class="el-icon-user-solid"></i>
            </span>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          placeholder="请输入密码"
          type="password"
          v-model="loginValidateForm.password"
          @keyup.enter.native="login('loginValidateForm')"
        >
          <template slot="prepend">
            <span class="icon">
              <i class="el-icon-lock"></i>
            </span>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          class="submit-btn"
          type="primary"
          @click="login('loginValidateForm')"
          :disabled="isDisabled"
        >{{loginMsg}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import request from 'network/request'
export default {
  name: "login",
  data() {
    return {
      loginValidateForm: {
        username: "",
        password: ""
      },
      //登录显示的文字
      loginMsg: "登录",
      //是否可用
      isDisabled: false,
      //配置验证规则
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 6, max: 20, message: "长度在 6 到 20 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 20, message: "长度在 6 到 20 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    //登录验证
    login(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //验证成功
          // this.loginMsg = "登录中...";
          // this.isDisabled = true;
          // this.$message.error("用户名或密码错误");
          request.get('/training/manage/term/getTermList').then(res => {
            console.log(res)
          },err => {
            console.log(err)
          })
        } else {
          //验证失败
          return false;
        }
      });
      // this.$router.replace('/home');
    }
  },
  //自定义指令
  directives: {
    //自定义文本框获取焦点指令
    focus: {
      inserted(el) {
        el.children[1].focus();
      }
    }
  },
 
};
</script>

<style scoped>
.icon {
  font-size: 25px;
}
.login-wrap {
  height: 100%;
  min-width: 100%;
  background-color: #193e53;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-wrap .login-form {
  width: 25%;
  background-color: #fff;
  border-radius: 5px;
  padding: 10px 80px 10px 0px;
}
.login-title {
  margin-left: 80px;
}
.login-wrap .submit-btn {
  width: 100%;
}
.login-message {
  margin-left: 80px;
  font-size: 10px;
  color: red;
}
/*修改系统样式 */
.el-form-item__content {
  margin-left: 10px;
}
</style>