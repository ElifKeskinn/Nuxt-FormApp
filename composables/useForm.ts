import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { supabase } from '~/composables/supabase';

export const useForm = (router = useRouter()) => {
  const form = ref({
    name: '',
    linkedin: '',
    age: null as number | null,
    university: '',
    department: '',
    grade: '', 
  });

  const resetForm = () => {
    form.value = {
      name: '',
      linkedin: '',
      age: null,
      university: '',
      department: '',
      grade: '',
    };
  };

  const submitForm = async () => {
    const { data, error } = await supabase.from('memberCandidates').insert([{
      name: form.value.name,
      linkedin: form.value.linkedin,
      age: form.value.age,
      university: form.value.university,
      department: form.value.department,
      grade: form.value.grade
    }]);

    if (error) {
      console.error('Supabase Hatası:', error.message);
      return;
    }

    resetForm();  
  };

  return { form, resetForm, submitForm };
};
