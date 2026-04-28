import React, { useState } from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

// Importando a modelagem TypeScript que criamos nas aulas anteriores
import { Especialidade } from "./src/types/especialidade";
import { Paciente } from "./src/types/paciente";
import { Medico } from "./src/interfaces/medico";
import { Consulta } from "./src/interfaces/consulta";

// Importando o componente reutilizável
import ConsultaCard from "./src/components/ConsultaCard";

export default function App() {
  // Dados base (simulando o que tínhamos no backend)
  const cardiologia: Especialidade = {
    id: 1,
    nome: "Cardiologia",
    descricao: "Cuidados com o coração",
  };

  const medico1: Medico = {
    id: 1,
    nome: "Dra. Jhuli Hanna",
    crm: "CRM12345",
    especialidade: cardiologia,
    ativo: true,
  };

  const paciente1: Paciente = {
    id: 1,
    nome: "Safira de Belchior",
    cpf: "123.456.789-00",
    email: "carlos@email.com",
    telefone: "(11) 98765-4321",
  };

  // Estado da consulta
  const [consulta, setConsulta] = useState<Consulta>({
    id: 1,
    medico: medico1,
    paciente: paciente1,
    data: new Date(2026, 2, 10), // 10/03/2026
    valor: 350,
    status: "agendada",
    observacoes: "Consulta de rotina",
  });

  // Funções para manipular a consulta
  function confirmarConsulta() {
    setConsulta({
      ...consulta,
      status: "confirmada",
    });
  }

  function cancelarConsulta() {
    setConsulta({
      ...consulta,
      status: "cancelada",
    });
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Cabeçalho */}
        <View style={styles.header}>
          <Text style={styles.titulo}>Sistema de Consultas</Text>
          <Text style={styles.subtitulo}>Consulta #{consulta.id}</Text>
        </View>

        <ConsultaCard
          consulta={consulta}
          onConfirmar={confirmarConsulta}
          onCancelar={cancelarConsulta}
        />

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a5a5a5",
  },
  scrollContent: {
    padding: 20,
    paddingTop: 60,
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222222",
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222222",
    opacity: 0.9,
  },
  rodape: {
    marginTop: 24,
    padding: 16,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 12,
  },
  rodapeTexto: {
    fontSize: 12,
    color: "#fff",
    textAlign: "center",
    lineHeight: 18,
    marginBottom: 4,
  },
});