export default function calculoHorario(horario, quantidade) {

  const sum = 24 / parseInt(quantidade);
  const [hour, minuts] = horario.split(":");
  let currentHour = parseInt(hour)
  const listHours = [horario]

  for (let i = 0; i < quantidade - 1; i++) {
    let nextHour = currentHour + sum
    if (nextHour > 24) {
      nextHour = nextHour - 24
    }

    listHours.push(nextHour + ":" + minuts)

    currentHour = nextHour
  }

  return listHours
}