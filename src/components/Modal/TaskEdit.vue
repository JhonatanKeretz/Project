<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <template v-slot:activator="{ on, attrs }">
       <v-icon small class="mr-2" 
          v-bind="attrs"
          v-on="on" >
            mdi-pencil
          </v-icon>
      </template>
      <v-card>
        <v-card-title class="text-h5">
          Use Google's location service?
        </v-card-title>
        <v-card-text>
          {{ id }}
          </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Disagree
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { Task } from "@/interfaces/Task";

  export default {
    props: [
      "id"
    ],
    data () {
      return {
        dialog: false,
      }
    },
    created () {
      console.log(this.id)
    }
  }
</script>