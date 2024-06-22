import { ref, computed, reactive, toRaw } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  // 初始定义
  const isLogin = ref(false);
  const userName = ref("");
  const userPermission = ref("none");
  const userInfo = reactive({});

  // get函数
  const getIsLogin = () => isLogin.value;
  const getUserName = () => userName.value;
  const getUserPermission = () => userPermission.value;
  const getUserInfo = () => toRaw(userInfo);

  // action函数
  const setIsLogin = (input) => isLogin.value = Boolean(input);
  const setUserName = (input) => userName.value = input;
  const setUserPermission = (input) => userPermission.value = input;
  const setUserInfo = (input) => {
    Object.keys(getUserInfo()).forEach(key => delete userInfo[key]);
    Object.keys(input).forEach(key => userInfo[key] = input[key]);
  }
  const updateUserInfo = (key, value) => userInfo[key] = value;

  return {
    isLogin, userName, userPermission, userInfo,
    getIsLogin, getUserName, getUserPermission, getUserInfo,
    setIsLogin, setUserName, setUserPermission, setUserInfo, updateUserInfo,
  };
})
