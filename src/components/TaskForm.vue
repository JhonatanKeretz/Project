<template>
  <div class="col-md-4 offset-md-4">
    <v-form>
      <h1 class="text-center h3 mb-3">Criar Ações</h1>
      <v-container>
        <v-col>
          <v-text-flex
            xs12
            sm6
            v-model="task.title"
            autofocus
            label="What (o que será feito?)?"
          ></v-text-flex>
          <v-text-field
            v-model="task.why"
            autofocus
            label="Why (por que será feito? Quais os resultados esperados?)"
          ></v-text-field>
          <v-text-field
            v-model="task.when"
            autofocus
            label="When (quando será feito?)"
          ></v-text-field>
          <v-select
            v-model="task.where"
            autofocus
            label="Where (onde será feito?)"
            :items="area"
          ></v-select>
          <v-select
            v-model="task.who"
            autofocus
            label="Who (por quem será feito?)"
            :items="items"
          ></v-select>
          <v-text-field
            v-model="task.how"
            autofocus
            label="How (como será feito?)"
          ></v-text-field>
          <v-col cols="6">
            <v-select
              v-model="task.howmuchValor"
              autofocus
              label="How much (quanto vai custar? Qual sera o esforço?)"
              :items="valor"
            ></v-select>
            <v-text-field
              v-model="task.howmuch"
              autofocus
              label=""
            ></v-text-field>
          </v-col>
          <v-select
            v-model="task.priority"
            autofocus
            label="Prioridade (Alta / Média / Baixa)"
            :items="prioridade"
          ></v-select>
        </v-col>

        <v-col cols="12">
          <v-textarea
            v-model="task.description"
            label="Atualizado o numero de horas para atividade."
          ></v-textarea>
        </v-col>

        <v-row align="center" justify="space-around">
          <v-btn
            color="primary"
            @click="saveTask()"
            :disabled="!task.title || !task.description"
          >
            Adicionar Ação
          </v-btn>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Task } from "@/interfaces/Task";
import { createTask } from "@/services/TaskService";
//import { QuillEditor } from '@vueup/vue-quill';

export default defineComponent({
  data() {
    return {
      items: ["Rafael", "Jhonatan", "Jose", "Carlos"],
      checkbox: false,
      area: [
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
      valor: ["Horas", "Valor"],
      prioridade: ["Alta", "Média", "Baixa"],
      task: {} as Task,
    };
  },
  methods: {
    async saveTask() {
      const res = await createTask(this.task);
      console.log(res);

      this.$router.push({ name: "task" });
    },
  },
});
</script>

<style></style>
