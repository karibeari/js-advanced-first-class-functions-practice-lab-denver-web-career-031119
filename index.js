function logDriverNames (logDrivers) {
  logDrivers.map(function(driver) {console.log(driver.name)});
}

function logDriversByHometown (drivers, location) {
  let newDrivers = drivers.filter (function(driver) {return driver.hometown == location});
  logDriverNames(newDrivers);
}

function driversByRevenue (drivers) {
  let sortedDrivers = [...drivers]
  return sortedDrivers.sort(sortByRevenue);
}

function sortByRevenue (a, b) {
  const revenueA = a.revenue;
  const revenueB = b.revenue;

  let comparison = 0;
  if (revenueA > revenueB) {
    comparison = 1;
  } else if (revenueA < revenueB) {
    comparison = -1;
  }
  return comparison;
}

function sortByName (a,b) {
  const nameA = a.name;
  const nameB = b.name;

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
}

function driversByName (drivers) {
  let sortedDrivers= [...drivers]
  return sortedDrivers.sort(sortByName);
}

function totalRevenue (drivers) {
  return drivers.reduce(function (sum, driver) {
    sum += driver.revenue
    return sum
  }, 0)
}

function averageRevenue (drivers) {
  return drivers.reduce(function (sum, driver, index, arr) {
    return sum += driver.revenue / arr.length
  }, 0)
}
