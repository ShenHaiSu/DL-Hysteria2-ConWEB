import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useHy2ServserStore = defineStore('hy2Server', () => {
  // 定义
  const registeredList = ref([
    {
      address: "asd",
      domain: "asd.asd.da",
      alias: "asd1a3s"
    }, {
      address: "asd",
      domain: "asd.asd.da",
      alias: "asd1a3s2"
    }, {
      address: "asd",
      domain: "asd.asd.da",
      alias: "asd1a3s22323"
    }, {
      address: "asd",
      domain: "asd.asd.da",
      alias: "asd1a3s2232111"
    }, {
      address: "asd",
      domain: "asd.asd.da",
      alias: "asd1a3s2232111"
    }, {
      address: "asd",
      domain: "asd.asd.da",
      alias: "asd1a3s2232111"
    }, {
      address: "asd",
      domain: "asd.asd.da",
      alias: "asd1a3s2232111"
    }, {
      address: "asd",
      domain: "asd.asd.da",
      alias: "asd1a3s2232111"
    }, {
      address: "asd",
      domain: "asd.asd.da",
      alias: "asd1a3s2232111"
    }, {
      address: "asd",
      domain: "asd.asd.da",
      alias: "asd1a3s2232111"
    }, {
      address: "asd",
      domain: "asd.asd.da",
      alias: "asd1a3s2232111"
    }, {
      address: "asd",
      domain: "asd.asd.da",
      alias: "asd1a3s2232111"
    }, {
      address: "asd",
      domain: "asd.asd.da",
      alias: "asd1a3s2232111"
    }, {
      address: "asd",
      domain: "asd.asd.da",
      alias: "asd1a3s2232111asd1a3s2232111asd1a3s2232111"
    }, {
      address: "asd",
      domain: "asd.asd.da",
      alias: "asd1a3s2232111"
    }, {
      address: "asd",
      domain: "asd.asd.da",
      alias: "asd1a3s2232111"
    }, {
      address: "asd",
      domain: "asd.asd.da",
      alias: "asd1a3s2232111"
    }, {
      address: "asd",
      domain: "asd.asd.da",
      alias: "asd1a3s2232111"
    }
  ]);
  const unRegisteredList = ref([]);

  // get函数
  const getRegisteredList = () => registeredList.value;
  const getUnRegisteredList = () => unRegisteredList.value;

  // set函数



  return {
    registeredList, unRegisteredList,
    getRegisteredList, getUnRegisteredList,
  }
})
