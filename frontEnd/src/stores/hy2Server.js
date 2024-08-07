import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useHy2ServserStore = defineStore('hy2Server', () => {
  // 定义
  const registeredList = ref([]);
  const unRegisteredList = ref([]);
  const searchText = ref("");
  const editDialogShow = ref(false);
  const editDialogMode = ref("none");
  const editIndex = ref(0);
  const freshTarget = ref(0);

  // get函数
  const getRegisteredList = () => registeredList.value;
  const getUnRegisteredList = () => unRegisteredList.value;

  // set函数
  const clsoeDialog = (update = false) => {
    editDialogMode.value = "none";
    editDialogShow.value = false;
    editIndex.value = -1;
    if (update) freshTarget.value++;
  }

  return {
    registeredList, unRegisteredList, searchText, editDialogShow, editDialogMode, freshTarget, editIndex,
    getRegisteredList, getUnRegisteredList,
    clsoeDialog,
  }
})
