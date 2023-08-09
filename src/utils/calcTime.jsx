export default function calcTime(time, amount) {

  const sum = 24 / parseInt(amount);
  const [hour, minuts] = time.split(":");
  let currentHour = parseInt(hour)
  const listHours = [time]

  for (let i = 0; i < amount - 1; i++) {
    let nextHour = currentHour + sum
    if (nextHour > 24) {
      nextHour = nextHour - 24
    }

    listHours.push(nextHour + ":" + minuts)

    currentHour = nextHour
  }

  return listHours
}