<!-- <template>
      <toolBar/>
    <requested/>
  </template>
   -->

   <template>
    <div>
      <h1>{{ mensagem }}</h1>
    </div>
  </template>
  
  <script setup>
  // Chamada direta para o Spring Boot
  const { data: mensagem } = await useFetch('http://localhost:8080/api/mensagem')
  </script>