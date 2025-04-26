/**
 * Returns city info (latitude, longitude, timezone) for known cityName.
 * If not found, returns null.
 */
function getCityInfo(cityName) {
  const cityData = {
    'Chennai': {
      latitude: { degrees: 13, minutes: 5, direction: 'N' },
      longitude: { degrees: 80, minutes: 17, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' }
    },
    'Vellore': {
      latitude: { degrees: 12, minutes: 56, direction: 'N' },
      longitude: { degrees: 79, minutes: 8, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' }
    },
    'Salem': {
      latitude: { degrees: 11, minutes: 40, direction: 'N' },
      longitude: { degrees: 78, minutes: 9, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' }
    },
    'Coimbatore': {
      latitude: { degrees: 11, minutes: 0, direction: 'N' },
      longitude: { degrees: 76, minutes: 57, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' }
    },
    'Krishnagiri': {
      latitude: { degrees: 12, minutes: 31, direction: 'N' },
      longitude: { degrees: 78, minutes: 12, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' }
    },
    'Tirunelveli': {
      latitude: { degrees: 8, minutes: 44, direction: 'N' },
      longitude: { degrees: 77, minutes: 41, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' }
    },
    'Kanyakumari': {
      latitude: { degrees: 8, minutes: 5, direction: 'N' },
      longitude: { degrees: 77, minutes: 32, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' }
    },
    'Tiruchirappalli': {
      latitude: { degrees: 10, minutes: 49, direction: 'N' },
      longitude: { degrees: 78, minutes: 40, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' }
    },
    'Madurai': {
      latitude: { degrees: 9, minutes: 55, direction: 'N' },
      longitude: { degrees: 78, minutes: 7, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' }
    },
    'Hyderabad': {
      latitude: { degrees: 17, minutes: 23, direction: 'N' },
      longitude: { degrees: 78, minutes: 27, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' }
    },
    'Bengaluru': {
      latitude: { degrees: 12, minutes: 58, direction: 'N' },
      longitude: { degrees: 77, minutes: 36, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' }
    },
    'Thiruvananthapuram': {
      latitude: { degrees: 8, minutes: 29, direction: 'N' },
      longitude: { degrees: 76, minutes: 57, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' }
    },
    'New Delhi': {
      latitude: { degrees: 28, minutes: 38, direction: 'N' },
      longitude: { degrees: 77, minutes: 13, direction: 'E' },
      timezone: { hours: 5, minutes: 30, direction: 'E' }
    },
    'New York, NY': {
      latitude: { degrees: 40, minutes: 43, direction: 'N' },
      longitude: { degrees: 74, minutes: 0, direction: 'W' },
      timezone: { hours: 4, minutes: 0, direction: 'W' }
    },
    'Westlake, OH': {
      latitude: { degrees: 41, minutes: 27, direction: 'N' },
      longitude: { degrees: 81, minutes: 55, direction: 'W' },
      timezone: { hours: 4, minutes: 0, direction: 'W' }
    }
    // Additional cities can be added here...
  };

  return cityData[cityName] || null;
}
