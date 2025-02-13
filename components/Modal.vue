<template>
  <div v-show="show" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
    <div class="bg-blue-100 p-8 rounded-lg shadow-lg w-96">
      <h3 class="text-2xl font-bold text-center mb-4 text-gray-800">Başvurunuz başarıyla alındı!</h3>
      <p class="text-center text-gray-700 mb-6">
        Kısa sürede size dönüş yapacağız. Topluluğumuza katıldığınız için heyecanlıyız ve birlikte büyümek için sabırsızlanıyoruz!
      </p>
      <div class="flex justify-center">
        <button @click="closeModal" class="px-6 py-3 bg-blue-400 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
          Ben de!
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  show: Boolean,  
});

const emit = defineEmits<{
  (event: 'close'): void;
}>();

const closeModal = () => {
  emit('close');
};
</script>

<style scoped>
.bg-gray-600 {
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
