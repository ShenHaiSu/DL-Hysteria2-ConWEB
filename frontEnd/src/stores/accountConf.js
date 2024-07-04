import { ref, computed, reactive, toRaw } from 'vue'
import { defineStore } from 'pinia'

export const useAccountConfStore = defineStore('accountConf', () => {
  // 初始定义
  const accountList = ref([]);
  const editorShow = ref(false);
  const editorMode = ref("add");

  // get函数
  const getAllAccounts = () => accountList.value;

  // action函数
  const clearAllAccounts = () => accountList.value = [];
  const addNew = (input) => accountList.value.push(input);
  const deleteOne = (userName) => {
    const targetIndex = accountList.value.findIndex(account => account.userName == userName);
    if (targetIndex == -1) return;
    accountList.value.splice(targetIndex, 1);
  }
  const updateOne = (userName, input) => {
    const targetIndex = accountList.value.findIndex(account => account.userName == userName);
    if (targetIndex == -1) return addNew(input);
    return accountList.value.splice(targetIndex, 1, input);
  }

  return {
    accountList, editorShow, editorMode,
    getAllAccounts,
    clearAllAccounts, addNew, deleteOne, updateOne,
  };
})
