/* "use strict"; */

const radiologia = [
  {
    HORA: "11:00:00 AM",
    ESPECIALISTA: "IGNACIO SCHULZ",
    PACIENTE: "FRANCISCA ROJAS",
    RUT: "9878782-1",
    PREVISION: "FONASA",
  },
  {
    HORA: "11:30:00 AM",
    ESPECIALISTA: "FEDERICO SUBERCASEAUX",
    PACIENTE: "PAMELA ESTRADA",
    RUT: "15345241-3",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "03:00:00 PM",
    ESPECIALISTA: "FERNANDO WURTHZ",
    PACIENTE: "ARMANDO LUNA",
    RUT: "16445345-9",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "03:30:00 PM",
    ESPECIALISTA: "ANA MARIA GODOY",
    PACIENTE: "MANUEL GODOY",
    RUT: "17666419-0",
    PREVISION: "FONASA",
  },
  {
    HORA: "04:00:00 PM",
    ESPECIALISTA: "PATRICIA SUAZO",
    PACIENTE: "RAMON ULLOA",
    RUT: "14989389-K",
    PREVISION: "FONASA",
  },
];
const traumatologia = [
  {
    HORA: "08:00:00 AM",
    ESPECIALISTA: "MARIA PAZ ALTUZARRA",
    PACIENTE: "PAULA SANCHEZ",
    RUT: "15554774-5",
    PREVISION: "FONASA",
  },
  {
    HORA: "10:00:00 AM",
    ESPECIALISTA: "RAUL ARAYA",
    PACIENTE: "ANGÉLICA NAVAS",
    RUT: "15444147-9",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "10:30:00 AM",
    ESPECIALISTA: "MARIA ARRIAGADA",
    PACIENTE: "ANA KLAPP",
    RUT: "17879423-9",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:00:00 AM",
    ESPECIALISTA: "ALEJANDRO BADILLA",
    PACIENTE: "FELIPE MARDONES",
    RUT: "1547423-6",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:30:00 AM",
    ESPECIALISTA: "CECILIA BUDNIK",
    PACIENTE: "DIEGO MARRE",
    RUT: "16554741-K",
    PREVISION: "FONASA",
  },
  {
    HORA: "12:00:00 PM",
    ESPECIALISTA: "ARTURO CAVAGNARO",
    PACIENTE: "CECILIA MENDEZ",
    RUT: "9747535-8",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "12:30:00 PM",
    ESPECIALISTA: "ANDRES KANACRI",
    PACIENTE: "MARCIAL SUAZO",
    RUT: "11254785-5",
    PREVISION: "ISAPRE",
  },
];

const dental = [
  {
    HORA: "08:30:00 AM",
    ESPECIALISTA: "ANDREA ZUÑIGA",
    PACIENTE: "MARCELA RETAMAL",
    RUT: "11123425-6",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:00:00 AM",
    ESPECIALISTA: "MARIA PIA ZAÑARTU",
    PACIENTE: "ANGEL MUÑOZ",
    RUT: "9878789-2",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:30:00 AM",
    ESPECIALISTA: "SCARLETT WITTING",
    PACIENTE: "MARIO KAST",
    RUT: "7998789-5",
    PREVISION: "FONASA",
  },
  {
    HORA: "01:00:00 PM",
    ESPECIALISTA: "FRANCISCO VON TEUBER",
    PACIENTE: "KARIN FERNANDEZ",
    RUT: "18887662-K",
    PREVISION: "FONASA",
  },
  {
    HORA: "01:30:00 PM",
    ESPECIALISTA: "EDUARDO VIÑUELA",
    PACIENTE: "HUGO SANCHEZ",
    RUT: "17665461-4",
    PREVISION: "FONASA",
  },
  {
    HORA: "02:00:00 PM",
    ESPECIALISTA: "RAQUEL VILLASECA",
    PACIENTE: "ANA SEPULVEDA",
    RUT: "14441281-0",
    PREVISION: "ISAPRE",
  },
];

let primeraAtencion = {};
let ultimaAtencion = {};

function atenciones(arg) {
  for (let el in arg) {
    console.log("argumento", arg);

    if (arg[el] == arg[0]) {
      primeraAtencion = arg[el];
    } else if (el == arg.length - 1) {
      ultimaAtencion = arg[el];
    }
  }
  return `<p> Primera atención: ${primeraAtencion.PACIENTE} - ${primeraAtencion.PREVISION} | Última atención: ${ultimaAtencion.PACIENTE} - ${ultimaAtencion.PREVISION}.</p>`;
}

document.write(`<div class="container"><h1 class="py-3" >Centro Médico Ñuñoa</h1>
<h4 class="pb-3">Estadísticas</h4>
<p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>
<p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>
<p>Cantidad de atenciones para Dental: ${dental.length}</p>
<p>
  ${atenciones(radiologia)}
</p>
<p>
  ${atenciones(traumatologia)}
</p>
<p>
  ${atenciones(dental)}
</p></div>`);
