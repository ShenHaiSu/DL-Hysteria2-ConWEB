import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useHy2ServserStore = defineStore('hy2Server', () => {
  // 定义
  const registeredList = ref([]);
  const unRegisteredList = ref([]);
  const searchText = ref("");
  const editDialogShow = ref(false);
  const editDialogMode = ref("none");

  // get函数
  const getRegisteredList = () => registeredList.value;
  const getUnRegisteredList = () => unRegisteredList.value;

  // set函数



  return {
    registeredList, unRegisteredList, searchText, editDialogShow, editDialogMode,
    getRegisteredList, getUnRegisteredList,
  }
})