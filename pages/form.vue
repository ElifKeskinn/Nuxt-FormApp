<template>
    <div class="bg-gradient-to-r from-blue-200 to-green-100 min-h-screen flex items-center justify-center">
      <div class="max-w-2xl mx-auto mt-16 p-8 bg-beige shadow-lg rounded-xl">
        <h2 class="text-3xl font-extrabold mb-6 text-center text-gray-800">Üye Katılım Formu</h2>
    
        <p class="text-lg mb-8 text-center text-gray-700">
          Topluluğumuza katılmak için aşağıdaki formu doldurun. Fikirlerinizi, sorularınızı veya paylaşmak istediğiniz deneyimlerinizi bizimle paylaşarak daha büyük bir öğrenme ve yaratma sürecine katkı sağlayabilirsiniz. Hedefimiz, her bireyin özgürce öğrenebileceği ve büyüyebileceği bir ortam oluşturmak.
        </p>
    
        <form @submit.prevent="submitFormWithModal" class="space-y-6">
          <!-- Form Fields -->
          <div class="mb-4">
            <label class="block font-semibold text-gray-700">İsim Soyisim</label>
            <input v-model="form.name" type="text" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div class="mb-4">
            <label class="block font-semibold text-gray-700">LinkedIn URL</label>
            <input v-model="form.linkedin" type="url" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div class="mb-4">
            <label class="block font-semibold text-gray-700">Yaş</label>
            <input v-model="form.age" type="number" min="1" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div class="mb-4">
            <label class="block font-semibold text-gray-700">Üniversite</label>
            <input v-model="form.university" type="text" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div class="mb-4">
            <label class="block font-semibold text-gray-700">Bölüm</label>
            <input v-model="form.department" type="text" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div class="mb-6">
            <label class="block font-semibold text-gray-700">Sınıf</label>
            <select v-model="form.grade" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="Hazırlık">Hazırlık</option>
              <option value="Mezun (Lisans)">Mezun (Lisans)</option>
              <option value="Mezun (Lise)">Mezun (Lise)</option>
            </select>
          </div>
          <p>
            Formu doldurduktan sonra, sizi topluluğumuzda görmek için sabırsızlanıyoruz!
          </p>
          <div class="flex justify-between">
            <button type="submit" class="w-full px-6 py-3  bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-400 transition">
              Formu Gönder
            </button>
          </div>
        </form>
      </div>
    </div>
    
    <!-- Modal Component -->
    <Modal :show="showModal" @close="closeModal" />
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useForm } from '~/composables/useForm'; 
  import Modal from '~/components/Modal.vue';
  
  const router = useRouter();
  const { form, resetForm, submitForm } = useForm(router);
  const showModal = ref(false); 
  
  // Modal kapatmak için fonksiyon
  const closeModal = () => {
    showModal.value = false;
    router.push('/'); 
  };
  
  const submitFormWithModal = async () => {
    await submitForm(); 
    console.log("Form submitted successfully!"); // Debugging log
    showModal.value = true; 
    console.log("showModal after submit:", showModal.value); // Modal log
  };
  </script>
  
  <style scoped>
  .bg-beige {
    background-color: #d1e0e2; 
  }
  </style>
  