<template>
  <div class="col-md-4 offset-md-4">
    <form class="card card-body">
      <h1 class="text-center h3 mb-3">Detalhe das Ações</h1>
      <v-col cols="12">
        <v-text-field
          v-model="currentTask.title"
          outlined
          clearable
        ></v-text-field>
        <v-text-field
          v-model="currentTask.why"
          outlined
          clearable
        ></v-text-field>
        <v-text-field
          v-model="currentTask.when"
          outlined
          clearable
        ></v-text-field>
        <v-select
          v-model="currentTask.where"
          :items="items1"
          outlined
          clearable
        ></v-select>
        <v-select
          v-model="currentTask.who"
          :items="items"
          outlined
          clearable
        ></v-select>
        <v-select
          v-model="currentTask.how"
          :items="items2"
          outlined
          clearable
        ></v-select>
        <v-text-field
          v-model="currentTask.howmuchValor"
          outlined
          clearable
        ></v-text-field>
        
        <v-text-field
          v-model="currentTask.howmuch"
          outlined
          clearable
        ></v-text-field>
        <v-select
          v-model="currentTask.priority"
          :items="items3"
          outlined
          clearable
        ></v-select>
        <v-textarea
          v-model="currentTask.description"
          outlined
          clearable
        ></v-textarea>
      </v-col>
      <v-row align="center" justify="space-around">
        <v-btn tile @click="handleUpdate()" color="success">
          <v-icon left> mdi-pencil </v-icon>
          Editar
        </v-btn>
        <v-btn color="error" @click="handleDelete()">
          <v-icon left> mdi-delete </v-icon>
          Deletar
        </v-btn>
      </v-row>
    </form>
  </div>
</template>

<script lang="ts">
import { Task } from "@/interfaces/Task";
import { deleteTask, getTask, updateTask } from "@/services/TaskService";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      items: ["Rafael", "Jhonatan", "Jose", "Carlos"],
      checkbox: false,
      items1: [
        "Administrativo",
        "Comercial",
        "Engenharia",
        "Financeiro",
        "Logística",
        "Marketing",
        "Produção",
        "Produto",
        "RH",
      ],
      items2: ["Horas", "Valor"],
      items3: ["Alta", "Média", "Baixa"],
      currentTask: {} as Task,
    };
  },
  methods: {
    async loadTask(id: string) {
      const res = await getTask(id);
      this.currentTask = res.data;
    },
    async handleUpdate() {
      if (typeof this.$route.params.id === "string") {
        const res = await updateTask(this.$route.params.id, this.currentTask);
        this.$router.push("/");
        console.log(res);
      }
    },
    async handleDelete() {
      if (typeof this.$route.params.id === "string") {
        const res = await deleteTask(this.$route.params.id);
        this.$router.push("/");
      }
    },
  },
  mounted() {
    if (typeof this.$route.params.id === "string") {
      this.loadTask(this.$route.params.id);
    }
  },
});
</script>

<style></style>
