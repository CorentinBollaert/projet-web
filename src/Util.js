export const FilterMyEvents = (events) => {

    const filterValue = "Mon Programme".toLowerCase()

    const filter = event => 
    event.category.toLowerCase().includes(filterValue)

    return events.filter(filter)
  }