// Global variable to track the current user (default is Guest)
let currentUser = "Guest";

// Complete events array (IDs 1–76)
const events = [
  // Fayetteville (IDs 1–10: Non-ticketed)
  { id: 1, verified: true, categoryIcon: "sports_football", eventTitle: "Tailgate Party", eventLocation: "Fayetteville Town Center", city: "Fayetteville", eventDate: "Sat, Sep 16 • 6:00 PM", attendeeCount: 1253, rsvpDefault: "RSVP Now", rsvpActive: "Going! ✓" },
  { id: 2, verified: false, categoryIcon: "music_note", eventTitle: "Jazz Night", eventLocation: "Downtown", city: "Fayetteville", eventDate: "Fri, Sep 15 • 8:00 PM", attendeeCount: 843, rsvpDefault: "Join Group", rsvpActive: "Going! ✓" },
  { id: 3, verified: true, categoryIcon: "palette", eventTitle: "Art Walk", eventLocation: "Historic District", city: "Fayetteville", eventDate: "Sun, Sep 18 • 3:00 PM", attendeeCount: 980, rsvpDefault: "RSVP Now", rsvpActive: "Going! ✓" },
  { id: 4, verified: true, categoryIcon: "book", eventTitle: "Book Club", eventLocation: "Central Library", city: "Fayetteville", eventDate: "Mon, Sep 19 • 5:00 PM", attendeeCount: 150, rsvpDefault: "RSVP Now", rsvpActive: "Going! ✓" },
  { id: 5, verified: false, categoryIcon: "restaurant", eventTitle: "Food Truck Rally", eventLocation: "Market Square", city: "Fayetteville", eventDate: "Sat, Sep 20 • 12:00 PM", attendeeCount: 600, rsvpDefault: "Join Group", rsvpActive: "Going! ✓" },
  { id: 6, verified: true, categoryIcon: "movie", eventTitle: "Outdoor Movie", eventLocation: "Central Park", city: "Fayetteville", eventDate: "Fri, Sep 22 • 8:30 PM", attendeeCount: 1100, rsvpDefault: "RSVP Now", rsvpActive: "Going! ✓" },
  { id: 7, verified: false, categoryIcon: "celebration", eventTitle: "Dance Party", eventLocation: "Club Arena", city: "Fayetteville", eventDate: "Sat, Sep 23 • 10:00 PM", attendeeCount: 450, rsvpDefault: "Join Group", rsvpActive: "Going! ✓" },
  { id: 8, verified: true, categoryIcon: "computer", eventTitle: "Tech Meetup", eventLocation: "Innovation Hub", city: "Fayetteville", eventDate: "Wed, Sep 27 • 6:00 PM", attendeeCount: 300, rsvpDefault: "RSVP Now", rsvpActive: "Going! ✓" },
  { id: 9, verified: true, categoryIcon: "theaters", eventTitle: "Comedy Night", eventLocation: "Laugh Factory", city: "Fayetteville", eventDate: "Thu, Sep 28 • 9:00 PM", attendeeCount: 750, rsvpDefault: "RSVP Now", rsvpActive: "Going! ✓" },
  { id: 10, verified: false, categoryIcon: "mic", eventTitle: "Open Mic", eventLocation: "Community Center", city: "Fayetteville", eventDate: "Sun, Sep 30 • 7:00 PM", attendeeCount: 320, rsvpDefault: "Join Group", rsvpActive: "Going! ✓" },
  
  // Bentonville (IDs 11–20)
  { id: 11, verified: true, categoryIcon: "emoji_events", eventTitle: "Startup Pitch", eventLocation: "Innovation Lab", city: "Bentonville", eventDate: "Mon, Oct 1 • 6:00 PM", attendeeCount: 920, rsvpDefault: "RSVP Now", rsvpActive: "Going! ✓" },
  { id: 12, verified: false, categoryIcon: "palette", eventTitle: "Art Fair", eventLocation: "Downtown", city: "Bentonville", eventDate: "Tue, Oct 2 • 2:00 PM", attendeeCount: 680, rsvpDefault: "RSVP Now", rsvpActive: "Going! ✓" },
  { id: 13, verified: true, categoryIcon: "restaurant", eventTitle: "Food Festival", eventLocation: "City Market", city: "Bentonville", eventDate: "Wed, Oct 3 • 12:00 PM", attendeeCount: 1050, rsvpDefault: "RSVP Now", rsvpActive: "Going! ✓" },
  { id: 14, verified: true, categoryIcon: "music_note", eventTitle: "Jazz Evening", eventLocation: "Jazz Club", city: "Bentonville", eventDate: "Thu, Oct 4 • 8:00 PM", attendeeCount: 500, rsvpDefault: "RSVP Now", rsvpActive: "Going! ✓" },
  { id: 15, verified: false, categoryIcon: "storefront", eventTitle: "Farmers Market", eventLocation: "Main Square", city: "Bentonville", eventDate: "Fri, Oct 5 • 9:00 AM", attendeeCount: 750, rsvpDefault: "Join Group", rsvpActive: "Going! ✓" },
  { id: 16, verified: true, categoryIcon: "computer", eventTitle: "Tech Expo", eventLocation: "Expo Center", city: "Bentonville", eventDate: "Sat, Oct 6 • 10:00 AM", attendeeCount: 1150, rsvpDefault: "Buy Tickets", rsvpActive: "Going! ✓", price: 25 },
  { id: 17, verified: false, categoryIcon: "mic", eventTitle: "Poetry Slam", eventLocation: "Cafe Verse", city: "Bentonville", eventDate: "Sun, Oct 7 • 7:00 PM", attendeeCount: 320, rsvpDefault: "Join Group", rsvpActive: "Going! ✓" },
  { id: 18, verified: true, categoryIcon: "directions_bike", eventTitle: "Night Market", eventLocation: "Downtown", city: "Bentonville", eventDate: "Mon, Oct 8 • 5:00 PM", attendeeCount: 480, rsvpDefault: "RSVP Now", rsvpActive: "Going! ✓" },
  { id: 19, verified: false, categoryIcon: "restaurant", eventTitle: "Wine Tasting", eventLocation: "Vineyard", city: "Bentonville", eventDate: "Tue, Oct 9 • 7:00 PM", attendeeCount: 550, rsvpDefault: "Join Group", rsvpActive: "Going! ✓" },
  { id: 20, verified: true, categoryIcon: "music_note", eventTitle: "Outdoor Concert", eventLocation: "Park Amphitheater", city: "Bentonville", eventDate: "Wed, Oct 10 • 8:00 PM", attendeeCount: 980, rsvpDefault: "RSVP Now", rsvpActive: "Going! ✓" },
  
  // Rogers (IDs 21–30)
  { id: 21, verified: true, categoryIcon: "directions_car", eventTitle: "Car Show", eventLocation: "Fairgrounds", city: "Rogers", eventDate: "Thu, Oct 11 • 9:00 AM", attendeeCount: 800, rsvpDefault: "RSVP Now", rsvpActive: "Going! ✓" },
  { id: 22, verified: false, categoryIcon: "movie", eventTitle: "Outdoor Movie", eventLocation: "City Park", city: "Rogers", eventDate: "Fri, Oct 12 • 8:30 PM", attendeeCount: 1100, rsvpDefault: "Join Group", rsvpActive: "Going! ✓" },
  { id: 23, verified: true, categoryIcon: "computer", eventTitle: "Startup Meetup", eventLocation: "Tech Hub", city: "Rogers", eventDate: "Sat, Oct 13 • 6:00 PM", attendeeCount: 920, rsvpDefault: "RSVP Now", rsvpActive: "Going! ✓" },
  { id: 24, verified: true, categoryIcon: "music_note", eventTitle: "Music Fest", eventLocation: "Downtown", city: "Rogers", eventDate: "Sun, Oct 14 • 4:00 PM", attendeeCount: 980, rsvpDefault: "RSVP Now", rsvpActive: "Going! ✓" },
  { id: 25, verified: false, categoryIcon: "restaurant", eventTitle: "Food Truck Rally", eventLocation: "Main Street", city: "Rogers", eventDate: "Mon, Oct 15 • 12:00 PM", attendeeCount: 760, rsvpDefault: "Join Group", rsvpActive: "Going! ✓" },
  { id: 27, verified: true, categoryIcon: "computer", eventTitle: "Tech Conference", eventLocation: "Convention Center", city: "Rogers", eventDate: "Wed, Oct 17 • 10:00 AM", attendeeCount: 1300, rsvpDefault: "Buy Tickets", rsvpActive: "Going! ✓", price: 30 },
  { id: 28, verified: false, categoryIcon: "mic", eventTitle: "Poetry Slam", eventLocation: "Open Mic Café", city: "Rogers", eventDate: "Thu, Oct 18 • 7:00 PM", attendeeCount: 350, rsvpDefault: "Join Group", rsvpActive: "Going! ✓" },
  { id: 29, verified: true, categoryIcon: "palette", eventTitle: "Art Exhibit", eventLocation: "Local Gallery", city: "Rogers", eventDate: "Fri, Oct 19 • 3:00 PM", attendeeCount: 400, rsvpDefault: "RSVP Now", rsvpActive: "Going! ✓" },
  { id: 30, verified: false, categoryIcon: "fitness_center", eventTitle: "Fitness Bootcamp", eventLocation: "Community Center", city: "Rogers", eventDate: "Sat, Oct 20 • 7:00 AM", attendeeCount: 220, rsvpDefault: "Join Group", rsvpActive: "Going! ✓" },
  
  // Springdale (IDs 31–40)
  { id: 31, verified: true, categoryIcon: "music_video", eventTitle: "Music Festival", eventLocation: "Central Park", city: "Springdale", eventDate: "Sun, Oct 21 • 2:00 PM", attendeeCount: 980, rsvpDefault: "RSVP Now", rsvpActive: "Going! ✓" },
  { id: 32, verified: false, categoryIcon: "palette", eventTitle: "Art Walk", eventLocation: "Downtown", city: "Springdale", eventDate: "Mon, Oct 22 • 5:00 PM", attendeeCount: 720, rsvpDefault: "Join Group", rsvpActive: "Going! ✓" },
  { id: 33, verified: true, categoryIcon: "restaurant", eventTitle: "Food Fair", eventLocation: "Main Square", city: "Springdale", eventDate: "Tue, Oct 23 • 12:00 PM", attendeeCount: 640, rsvpDefault: "RSVP Now", rsvpActive: "Going! ✓" },
  { id: 34, verified: true, categoryIcon: "emoji_events", eventTitle: "Startup Pitch", eventLocation: "Innovation Center", city: "Springdale", eventDate: "Wed, Oct 24 • 6:00 PM", attendeeCount: 550, rsvpDefault: "RSVP Now", rsvpActive: "Going! ✓" },
  { id: 35, verified: false, categoryIcon: "mic", eventTitle: "Open Mic", eventLocation: "Coffee House", city: "Springdale", eventDate: "Thu, Oct 25 • 8:00 PM", attendeeCount: 310, rsvpDefault: "Join Group", rsvpActive: "Going! ✓" },
  { id: 36, verified: true, categoryIcon: "celebration", eventTitle: "Dance Party", eventLocation: "Club Neon", city: "Springdale", eventDate: "Fri, Oct 26 • 10:00 PM", attendeeCount: 460, rsvpDefault: "RSVP Now", rsvpActive: "Going! ✓" },
  { id: 37, verified: false, categoryIcon: "movie", eventTitle: "Film Screening", eventLocation: "Local Theater", city: "Springdale", eventDate: "Sat, Oct 27 • 7:00 PM", attendeeCount: 400, rsvpDefault: "Join Group", rsvpActive: "Going! ✓" },
  { id: 38, verified: true, categoryIcon: "self_improvement", eventTitle: "Yoga Session", eventLocation: "Community Park", city: "Springdale", eventDate: "Sun, Oct 28 • 8:00 AM", attendeeCount: 280, rsvpDefault: "RSVP Now", rsvpActive: "Going! ✓" },
  { id: 39, verified: true, categoryIcon: "book", eventTitle: "Book Club", eventLocation: "Local Library", city: "Springdale", eventDate: "Mon, Oct 29 • 6:00 PM", attendeeCount: 200, rsvpDefault: "RSVP Now", rsvpActive: "Going! ✓" },
  { id: 40, verified: false, categoryIcon: "storefront", eventTitle: "Farmers Market", eventLocation: "Market Street", city: "Springdale", eventDate: "Tue, Oct 30 • 9:00 AM", attendeeCount: 540, rsvpDefault: "Join Group", rsvpActive: "Going! ✓" },
  
  // Siloam Springs (IDs 41–50)
  { id: 41, verified: true, categoryIcon: "music_note", eventTitle: "Outdoor Concert", eventLocation: "Central Park", city: "Siloam Springs", eventDate: "Wed, Oct 31 • 7:00 PM", attendeeCount: 450, rsvpDefault: "RSVP Now", rsvpActive: "Going! ✓" },
  { id: 42, verified: false, categoryIcon: "restaurant", eventTitle: "Food Truck Rally", eventLocation: "Market Square", city: "Siloam Springs", eventDate: "Thu, Nov 1 • 12:00 PM", attendeeCount: 380, rsvpDefault: "Join Group", rsvpActive: "Going! ✓" },
  { id: 43, verified: true, categoryIcon: "palette", eventTitle: "Art Exhibit", eventLocation: "Art Gallery", city: "Siloam Springs", eventDate: "Fri, Nov 2 • 3:00 PM", attendeeCount: 320, rsvpDefault: "RSVP Now", rsvpActive: "Going! ✓" },
  { id: 44, verified: false, categoryIcon: "celebration", eventTitle: "Community Picnic", eventLocation: "Riverfront Park", city: "Siloam Springs", eventDate: "Sat, Nov 3 • 1:00 PM", attendeeCount: 280, rsvpDefault: "Join Group", rsvpActive: "Going! ✓" },
  { id: 45, verified: true, categoryIcon: "self_improvement", eventTitle: "Yoga in the Park", eventLocation: "Oak Grove", city: "Siloam Springs", eventDate: "Sun, Nov 4 • 7:00 AM", attendeeCount: 150, rsvpDefault: "RSVP Now", rsvpActive: "Going! ✓" },
  { id: 46, verified: false, categoryIcon: "directions_bike", eventTitle: "Bike Rally", eventLocation: "City Center", city: "Siloam Springs", eventDate: "Mon, Nov 5 • 8:00 AM", attendeeCount: 210, rsvpDefault: "Join Group", rsvpActive: "Going! ✓" },
  { id: 47, verified: true, categoryIcon: "mic", eventTitle: "Poetry Slam", eventLocation: "Cafe Verse", city: "Siloam Springs", eventDate: "Tue, Nov 6 • 7:00 PM", attendeeCount: 170, rsvpDefault: "RSVP Now", rsvpActive: "Going! ✓" },
  { id: 48, verified: true, categoryIcon: "book", eventTitle: "Book Fair", eventLocation: "Community Center", city: "Siloam Springs", eventDate: "Wed, Nov 7 • 4:00 PM", attendeeCount: 240, rsvpDefault: "RSVP Now", rsvpActive: "Going! ✓" },
  { id: 49, verified: false, categoryIcon: "storefront", eventTitle: "Craft Market", eventLocation: "Main Square", city: "Siloam Springs", eventDate: "Thu, Nov 8 • 10:00 AM", attendeeCount: 260, rsvpDefault: "Join Group", rsvpActive: "Going! ✓" },
  { id: 50, verified: true, categoryIcon: "movie", eventTitle: "Indie Film Night", eventLocation: "Local Theater", city: "Siloam Springs", eventDate: "Fri, Nov 9 • 7:00 PM", attendeeCount: 300, rsvpDefault: "RSVP Now", rsvpActive: "Going! ✓" },
  
  // Bella Vista (IDs 51–60)
  { id: 51, verified: true, categoryIcon: "directions_car", eventTitle: "Car Show", eventLocation: "Fairgrounds", city: "Bella Vista", eventDate: "Sat, Nov 10 • 9:00 AM", attendeeCount: 480, rsvpDefault: "Join Group", rsvpActive: "Going! ✓" },
  { id: 52, verified: false, categoryIcon: "local_bar", eventTitle: "Craft Beer Fest", eventLocation: "Downtown", city: "Bella Vista", eventDate: "Sun, Nov 11 • 3:00 PM", attendeeCount: 650, rsvpDefault: "RSVP Now", rsvpActive: "Going! ✓" },
  { id: 53, verified: true, categoryIcon: "storefront", eventTitle: "Food Market", eventLocation: "Market Street", city: "Bella Vista", eventDate: "Mon, Nov 12 • 10:00 AM", attendeeCount: 700, rsvpDefault: "RSVP Now", rsvpActive: "Going! ✓" },
  { id: 54, verified: true, categoryIcon: "music_note", eventTitle: "Outdoor Concert", eventLocation: "Central Park", city: "Bella Vista", eventDate: "Tue, Nov 13 • 7:00 PM", attendeeCount: 800, rsvpDefault: "RSVP Now", rsvpActive: "Going! ✓" },
  { id: 55, verified: false, categoryIcon: "history_edu", eventTitle: "Historical Tour", eventLocation: "Heritage Center", city: "Bella Vista", eventDate: "Wed, Nov 14 • 2:00 PM", attendeeCount: 350, rsvpDefault: "RSVP Now", rsvpActive: "Going! ✓" },
  { id: 56, verified: true, categoryIcon: "book", eventTitle: "Book Club", eventLocation: "Community Library", city: "Bella Vista", eventDate: "Thu, Nov 15 • 6:00 PM", attendeeCount: 290, rsvpDefault: "RSVP Now", rsvpActive: "Going! ✓" },
  { id: 57, verified: false, categoryIcon: "celebration", eventTitle: "Dance Party", eventLocation: "Night Club", city: "Bella Vista", eventDate: "Fri, Nov 16 • 10:00 PM", attendeeCount: 420, rsvpDefault: "Join Group", rsvpActive: "Going! ✓" },
  { id: 58, verified: true, categoryIcon: "palette", eventTitle: "Art Exhibit", eventLocation: "Local Gallery", city: "Bella Vista", eventDate: "Sat, Nov 17 • 4:00 PM", attendeeCount: 310, rsvpDefault: "RSVP Now", rsvpActive: "Going! ✓" },
  { id: 59, verified: true, categoryIcon: "emoji_people", eventTitle: "Community Meetup", eventLocation: "Community Center", city: "Bella Vista", eventDate: "Sun, Nov 18 • 5:00 PM", attendeeCount: 390, rsvpDefault: "RSVP Now", rsvpActive: "Going! ✓" },
  { id: 60, verified: false, categoryIcon: "storefront", eventTitle: "Outdoor Market", eventLocation: "Downtown Plaza", city: "Bella Vista", eventDate: "Mon, Nov 19 • 11:00 AM", attendeeCount: 530, rsvpDefault: "Join Group", rsvpActive: "Going! ✓" },
  
  // Additional Ticketed Events
  { id: 61, verified: true, categoryIcon: "local_offer", eventTitle: "VIP Concert", eventLocation: "Fayetteville Arena", city: "Fayetteville", eventDate: "Fri, Oct 20 • 8:00 PM", attendeeCount: 1500, rsvpDefault: "Buy Tickets", rsvpActive: "Going! ✓", price: 50 },
  { id: 64, verified: true, categoryIcon: "local_offer", eventTitle: "Exclusive Gala", eventLocation: "Fayetteville Grand Hall", city: "Fayetteville", eventDate: "Sat, Oct 23 • 7:00 PM", attendeeCount: 1200, rsvpDefault: "Buy Tickets", rsvpActive: "Going! ✓", price: 45 },
  { id: 65, verified: true, categoryIcon: "local_offer", eventTitle: "Premium Dinner", eventLocation: "Fayetteville Bistro", city: "Fayetteville", eventDate: "Sun, Oct 24 • 8:00 PM", attendeeCount: 1100, rsvpDefault: "Buy Tickets", rsvpActive: "Going! ✓", price: 60 },
  { id: 66, verified: true, categoryIcon: "local_offer", eventTitle: "Bentonville Ball", eventLocation: "Bentonville Ballroom", city: "Bentonville", eventDate: "Sun, Oct 22 • 7:00 PM", attendeeCount: 850, rsvpDefault: "Buy Tickets", rsvpActive: "Going! ✓", price: 35 },
  { id: 67, verified: true, categoryIcon: "local_offer", eventTitle: "Rogers Music Fest", eventLocation: "Rogers Amphitheater", city: "Rogers", eventDate: "Mon, Oct 23 • 8:00 PM", attendeeCount: 950, rsvpDefault: "Buy Tickets", rsvpActive: "Going! ✓", price: 40 },
  { id: 68, verified: true, categoryIcon: "local_offer", eventTitle: "Springdale Expo", eventLocation: "Springdale Convention Center", city: "Springdale", eventDate: "Wed, Oct 24 • 9:00 AM", attendeeCount: 700, rsvpDefault: "Buy Tickets", rsvpActive: "Going! ✓", price: 30 },
  { id: 69, verified: true, categoryIcon: "local_offer", eventTitle: "Springdale Concert", eventLocation: "Springdale Live", city: "Springdale", eventDate: "Thu, Oct 25 • 7:00 PM", attendeeCount: 800, rsvpDefault: "Buy Tickets", rsvpActive: "Going! ✓", price: 45 },
  { id: 70, verified: true, categoryIcon: "local_offer", eventTitle: "Springdale Seminar", eventLocation: "Springdale Institute", city: "Springdale", eventDate: "Fri, Oct 26 • 3:00 PM", attendeeCount: 650, rsvpDefault: "Buy Tickets", rsvpActive: "Going! ✓", price: 35 },
  { id: 71, verified: true, categoryIcon: "local_offer", eventTitle: "Siloam Springs Fair", eventLocation: "Siloam Springs Park", city: "Siloam Springs", eventDate: "Sat, Oct 27 • 1:00 PM", attendeeCount: 500, rsvpDefault: "Buy Tickets", rsvpActive: "Going! ✓", price: 25 },
  { id: 72, verified: true, categoryIcon: "local_offer", eventTitle: "Siloam Springs Night Out", eventLocation: "Siloam Springs Club", city: "Siloam Springs", eventDate: "Sun, Oct 28 • 9:00 PM", attendeeCount: 550, rsvpDefault: "Buy Tickets", rsvpActive: "Going! ✓", price: 30 },
  { id: 73, verified: true, categoryIcon: "local_offer", eventTitle: "Siloam Springs Gala", eventLocation: "Siloam Springs Hotel", city: "Siloam Springs", eventDate: "Mon, Oct 29 • 8:00 PM", attendeeCount: 600, rsvpDefault: "Buy Tickets", rsvpActive: "Going! ✓", price: 40 },
  { id: 74, verified: true, categoryIcon: "local_offer", eventTitle: "Bella Vista Wine Tasting", eventLocation: "Bella Vista Vineyards", city: "Bella Vista", eventDate: "Tue, Oct 30 • 6:00 PM", attendeeCount: 400, rsvpDefault: "Buy Tickets", rsvpActive: "Going! ✓", price: 20 },
  { id: 75, verified: true, categoryIcon: "local_offer", eventTitle: "Bella Vista Art Show", eventLocation: "Bella Vista Gallery", city: "Bella Vista", eventDate: "Wed, Oct 31 • 7:00 PM", attendeeCount: 450, rsvpDefault: "Buy Tickets", rsvpActive: "Going! ✓", price: 35 },
  { id: 76, verified: true, categoryIcon: "local_offer", eventTitle: "Bella Vista Music Night", eventLocation: "Bella Vista Amphitheater", city: "Bella Vista", eventDate: "Thu, Nov 1 • 8:00 PM", attendeeCount: 500, rsvpDefault: "Buy Tickets", rsvpActive: "Going! ✓", price: 30 }
];

// Randomize attendee counts (for realism)
events.forEach(event => {
  event.attendeeCount = Math.floor(Math.random() * 1951) + 50;
});

// Helper: Parse a YYYY-MM-DD string as a local date
function parseLocalDate(dateStr) {
  const parts = dateStr.split("-");
  return new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
}

// Render events in the main stream (initial render only – order remains static)
function renderEvents(eventsToRender = events) {
  const sortedEvents = [...eventsToRender].sort((a, b) => b.attendeeCount - a.attendeeCount);
  const container = document.getElementById("eventList");
  container.innerHTML = "";
  sortedEvents.forEach(event => {
    let locationDisplay = event.eventLocation;
    if (!event.eventLocation.toLowerCase().includes(event.city.toLowerCase())) {
      locationDisplay += ", " + event.city;
    }
    const verifiedBadge = event.verified
      ? `<div class="verified-badge"><i class="material-icons verified-icon">verified</i></div>`
      : "";
    // Only add the options button if the event is not user-made
    let optionsHTML = "";
    if (!event.postedByUser) {
      optionsHTML = `<div class="options-container">
                       <button class="event-options-btn" data-event-id="${event.id}">
                         <i class="material-icons">more_vert</i>
                       </button>
                     </div>`;
    }
    let eventHTML = `
      <div class="event-card">
        ${optionsHTML}
        ${verifiedBadge}
        <div class="event-content">
          <div class="category-icon">
            <i class="material-icons ${event.verified ? "active-icon" : "inactive-icon"}">
              ${event.categoryIcon}
            </i>
          </div>
          <div class="event-details">
            <div class="event-title">${event.eventTitle}</div>
            <div class="event-location">
              <i class="material-icons small-icon ${event.verified ? "" : "inactive-icon"}">place</i>
              <span>${locationDisplay}</span>
            </div>
            <div class="event-date">${event.eventDate}</div>
            ${ event.price !== undefined ? `<div class="ticket-price">Price: $${event.price}</div>` : "" }
            <div class="attendee-row">
              <i class="material-icons small-icon ${event.verified ? "" : "inactive-icon"}">people</i>
              <span id="attendees-${event.id}">${event.attendeeCount} Going</span>
            </div>
            <!-- Copy Address Button -->
            <div class="copy-address-container">
              <button class="copy-address-btn" data-address="(event address placeholder)">Copy Address</button>
            </div>
          </div>
        </div>
        ${
          event.price !== undefined 
          ? `<div class="rsvp-button add-ticket-btn" data-event-id="${event.id}">
               <span class="rsvp-text">Add Ticket</span>
             </div>`
          : `<div class="rsvp-button" data-event-id="${event.id}">
               <span class="rsvp-text rsvp-default">${event.rsvpDefault}</span>
               <span class="rsvp-text rsvp-active">${event.rsvpActive}</span>
             </div>`
        }
      </div>
    `;
    container.insertAdjacentHTML("beforeend", eventHTML);
  });
}

// Initial render (the order remains static)
renderEvents();

// Render user-posted events in Profile
function renderUserEvents() {
  const userEvents = events.filter(event => event.postedByUser);
  const container = document.getElementById("userEventsList");
  container.innerHTML = "";
  if (userEvents.length === 0) {
    container.innerHTML = "<p>You haven't posted any events yet.</p>";
  } else {
    userEvents.forEach(event => {
      const eventHTML = `
         <div class="user-event-card">
            <div class="user-event-title">${event.eventTitle}</div>
            <div class="user-event-location">${event.eventLocation}, ${event.city}</div>
            <div class="user-event-date">${event.eventDate}</div>
            <div class="user-event-attendees" id="user-attendees-${event.id}">${event.attendeeCount} Going</div>
         </div>
      `;
      container.insertAdjacentHTML("beforeend", eventHTML);
    });
  }
}

// Simulation: Update each event’s attendee count in place
function scheduleSimulationForEvent(event) {
  const delay = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000;
  setTimeout(() => {
    let delta;
    // 20% chance for a big change
    if (Math.random() < 0.2) {
      delta = Math.floor(Math.random() * 41) + 10; // change between 10 and 50
      if (Math.random() < 0.5) delta = -delta;
    } else {
      delta = Math.floor(Math.random() * 7) - 3;
    }
    event.attendeeCount = Math.max(0, event.attendeeCount + delta);
    const mainSpan = document.getElementById("attendees-" + event.id);
    if (mainSpan) {
      mainSpan.textContent = `${event.attendeeCount} Going`;
    }
    const userSpan = document.getElementById("user-attendees-" + event.id);
    if (userSpan) {
      userSpan.textContent = `${event.attendeeCount} Going`;
    }
    scheduleSimulationForEvent(event);
  }, delay);
}

events.forEach(event => {
  scheduleSimulationForEvent(event);
});

// Populate Date and Time Dropdowns for Post Event Form
function populateDateTimeDropdowns() {
  const dateSelect = document.getElementById("eventDate");
  const timeSelect = document.getElementById("eventTime");
  dateSelect.innerHTML = '<option value="">Select Date</option>';
  timeSelect.innerHTML = '<option value="">Select Time</option>';
  const today = new Date();
  for (let i = 0; i <= 90; i++) {
    let d = new Date();
    d.setDate(today.getDate() + i);
    let options = { weekday: 'short', month: 'short', day: 'numeric' };
    let dateStr = d.toLocaleDateString('en-US', options);
    let option = document.createElement("option");
    option.value = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, '0') + "-" + String(d.getDate()).padStart(2, '0');
    option.textContent = dateStr;
    dateSelect.appendChild(option);
  }
  for (let hour = 0; hour < 24; hour++) {
    for (let min = 0; min < 60; min += 5) {
      let t = new Date();
      t.setHours(hour);
      t.setMinutes(min);
      t.setSeconds(0);
      let timeStr = t.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
      let option = document.createElement("option");
      option.value = timeStr;
      option.textContent = timeStr;
      timeSelect.appendChild(option);
    }
  }
}

// Filter functionality
function applyFilters() {
  const showVerified = document.querySelector('input[name="showVerified"]').checked;
  const showUnverified = document.querySelector('input[name="showUnverified"]').checked;
  const locationCheckboxes = document.querySelectorAll('input[name="locations"]:checked');
  const selectedCities = Array.from(locationCheckboxes).map(cb => cb.value);
  const showTicketed = document.querySelector('input[name="showTicketed"]').checked;
  const showNonTicketed = document.querySelector('input[name="showNonTicketed"]').checked;
  
  // Filter by Category
  const categoryCheckboxes = document.querySelectorAll('input[name="categories"]:checked');
  const selectedCategories = Array.from(categoryCheckboxes).map(cb => cb.value);
  
  return events.filter(event => {
    if (event.verified && !showVerified) return false;
    if (!event.verified && !showUnverified) return false;
    if (selectedCities.length && !selectedCities.includes(event.city)) return false;
    if (event.price !== undefined && !showTicketed) return false;
    if (event.price === undefined && !showNonTicketed) return false;
    // If any category filters are selected, only include events whose categoryIcon is in the list
    if (selectedCategories.length > 0 && !selectedCategories.includes(event.categoryIcon)) return false;
    return true;
  });
}

// Attach Filter Menu event listeners
document.getElementById("filterIcon").addEventListener("click", function() {
  const filterMenu = document.getElementById("filterMenu");
  filterMenu.style.display = filterMenu.style.display === "block" ? "none" : "block";
});
document.getElementById("filterForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const filteredEvents = applyFilters();
  renderEvents(filteredEvents);
  document.getElementById("filterMenu").style.display = "none";
});
document.getElementById("closeFilter").addEventListener("click", function() {
  document.getElementById("filterMenu").style.display = "none";
});

// Map Marker Popup Functionality
document.querySelectorAll('.map-marker').forEach(marker => {
  marker.addEventListener('click', function(e) {
    if (e.target.classList.contains('close-popup')) return;
    document.querySelectorAll('.marker-popup').forEach(p => p.style.display = "none");
    const popup = marker.querySelector('.marker-popup');
    popup.style.display = (popup.style.display === "block") ? "none" : "block";
    e.stopPropagation();
  });
});
document.querySelectorAll('.close-popup').forEach(button => {
  button.addEventListener('click', function(e) {
    e.stopPropagation();
    this.parentElement.style.display = "none";
  });
});

// Post Event Form with Duplicate Prevention and Ticketed Option (for Admin)
document.getElementById("postEventForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const title = document.getElementById("eventTitle").value.trim();
  const address = document.getElementById("eventAddress").value.trim();
  const city = document.getElementById("eventCity").value;
  const dateValue = document.getElementById("eventDate").value;
  const timeValue = document.getElementById("eventTime").value;
  if (!title || !address || !city || !dateValue || !timeValue) {
    alert("Please fill in all fields.");
    return;
  }
  const chosenDate = parseLocalDate(dateValue);
  const formattedDate = chosenDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  const eventDateStr = formattedDate + " • " + timeValue;
  
  // If Admin and ticketed option is checked, validate and include the ticket price.
  let price;
  if (currentUser === "Admin") {
    const ticketedCheckbox = document.getElementById("ticketedCheckbox");
    if (ticketedCheckbox && ticketedCheckbox.checked) {
      let ticketPriceInput = document.getElementById("ticketPrice").value;
      // Remove non-numeric characters (except the decimal point)
      ticketPriceInput = ticketPriceInput.replace(/[^0-9.]/g, "");
      price = parseFloat(ticketPriceInput);
      if (isNaN(price)) {
        alert("Please enter a valid ticket price (numbers only).");
        return;
      }
    }
  }
  
  const duplicate = events.find(ev =>
    ev.postedByUser &&
    ev.eventTitle.toLowerCase() === title.toLowerCase() &&
    ev.eventLocation.toLowerCase() === address.toLowerCase() &&
    ev.city.toLowerCase() === city.toLowerCase() &&
    ev.eventDate === eventDateStr
  );
  if (duplicate) {
    alert("You have already posted an event with the same title, address, city, and time.");
    return;
  }
  const newId = Math.max(...events.map(ev => ev.id)) + 1;
  const attendeeCount = Math.floor(Math.random() * 91) + 10;
  const newEvent = {
    id: newId,
    verified: (currentUser === "Admin") ? true : false,
    postedByUser: true,
    categoryIcon: "event",
    eventTitle: title,
    eventLocation: address,
    city: city,
    eventDate: eventDateStr,
    attendeeCount: attendeeCount,
    rsvpDefault: "RSVP Now",
    rsvpActive: "Going! ✓"
  };
  if (price !== undefined) {
    newEvent.price = price;
  }
  events.push(newEvent);
  scheduleSimulationForEvent(newEvent);
  renderEvents();
  renderUserEvents();
  alert("Event posted!");
  this.reset();
});

// Sign In Feature
document.getElementById("signInForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const usernameInput = document.getElementById("username").value.trim();
  const passwordInput = document.getElementById("password").value.trim();
  if (usernameInput === "Admin" && passwordInput === "1234") {
    currentUser = "Admin";
    updateProfileActions();
    setActiveIcon("profileIcon");
    setActivePage("profilePage");
  } else {
    alert("Incorrect username or password. Please try again.");
  }
});

// Update Profile Actions and Banner
function updateProfileActions() {
  const profileActions = document.getElementById("profileActions");
  const ticketedOptionDiv = document.getElementById("ticketedOption");
  if (currentUser === "Admin") {
    profileActions.innerHTML = `<span>Signed in as ${currentUser}</span> <button id="signOutBtn" class="sign-in-btn">Sign Out</button>`;
    ticketedOptionDiv.style.display = "block";
    document.getElementById("guestUsername").textContent = "Admin";
    document.getElementById("guestIcon").textContent = "A";
    document.getElementById("welcomeMessage").textContent = "Welcome, Admin! Enjoy your time using NWA Connect.";
  } else {
    profileActions.innerHTML = `<button id="goToSignIn" class="sign-in-btn">Sign In</button>`;
    ticketedOptionDiv.style.display = "none";
    document.getElementById("guestUsername").textContent = "Guest#" + (Math.floor(Math.random() * 90000) + 10000);
    document.getElementById("guestIcon").textContent = "G";
    document.getElementById("welcomeMessage").textContent = "Welcome, guest! Enjoy your time using NWA Connect.";
  }
}

// Listen for Sign In / Sign Out clicks
document.addEventListener("click", function(e) {
  if (e.target && e.target.id === "goToSignIn") {
    setActivePage("signInPage");
  }
  if (e.target && e.target.id === "signOutBtn") {
    currentUser = "Guest";
    updateProfileActions();
  }
});

// Dedicated Event Detail Page Navigation
function openEventDetailPage(eventId) {
  const eventObj = events.find(ev => ev.id === eventId);
  if (eventObj) {
    const detailContent = document.querySelector(".event-detail-content");
    detailContent.innerHTML = `
      <h2>${eventObj.eventTitle}</h2>
      <p><strong>Date:</strong> ${eventObj.eventDate}</p>
      <p><strong>Location:</strong> ${eventObj.eventLocation}, ${eventObj.city}</p>
      <p><strong>Attending:</strong> ${eventObj.attendeeCount} people</p>
      <p><em>Event description and reviews will be added here in future updates.</em></p>
    `;
  }
  setActivePage("eventDetailPage");
}

// Back button on Event Detail Page
document.getElementById("backToHome").addEventListener("click", function() {
  setActivePage("homePage");
});

// Attach event listener for the ticketed checkbox to toggle the price input
document.addEventListener("DOMContentLoaded", function(){
  const ticketedCheckbox = document.getElementById("ticketedCheckbox");
  const ticketPriceContainer = document.getElementById("ticketPriceContainer");
  if (ticketedCheckbox) {
    ticketedCheckbox.addEventListener("change", function() {
      ticketPriceContainer.style.display = this.checked ? "block" : "none";
    });
  }
});

// Attach event delegation for add ticket, RSVP, copy address, and options buttons in the event stream
document.getElementById("eventList").addEventListener("click", function(e) {
  // Handle Copy Address button
  const copyBtn = e.target.closest(".copy-address-btn");
  if (copyBtn) {
    const originalText = copyBtn.innerText;
    navigator.clipboard.writeText(copyBtn.dataset.address)
      .then(() => {
        copyBtn.innerText = "Address Copied!";
        setTimeout(() => {
          copyBtn.innerText = originalText;
        }, 1500);
      })
      .catch(err => {
        console.error("Error copying address: ", err);
      });
    return;
  }
  // Handle Add Ticket button
  const addTicketBtn = e.target.closest(".add-ticket-btn");
  if (addTicketBtn) {
    const eventId = parseInt(addTicketBtn.dataset.eventId);
    addTicketToCart(eventId);
    return;
  }
  // Handle RSVP button (for non-ticketed events)
  const rsvpBtn = e.target.closest(".rsvp-button");
  if (rsvpBtn && !rsvpBtn.classList.contains("add-ticket-btn")) {
    const eventId = parseInt(rsvpBtn.dataset.eventId);
    rsvpBtn.classList.toggle("active");
    const eventObj = events.find(ev => ev.id === eventId);
    if (rsvpBtn.classList.contains("active")) {
      eventObj.attendeeCount++;
    } else {
      eventObj.attendeeCount = Math.max(0, eventObj.attendeeCount - 1);
    }
    const mainSpan = document.getElementById("attendees-" + eventId);
    if (mainSpan) {
      mainSpan.textContent = `${eventObj.attendeeCount} Going`;
    }
  }
  // Handle Options button click (only for events not user-made)
  const optionsBtn = e.target.closest(".event-options-btn");
  if (optionsBtn) {
    const eventId = parseInt(optionsBtn.dataset.eventId);
    openEventDetailPage(eventId);
  }
});

// Bottom Navigation
function setActiveIcon(clickedIconId) {
  const iconIds = ["homeIcon", "mapIcon", "ticketIcon", "profileIcon"];
  iconIds.forEach(id => {
    const icon = document.getElementById(id);
    if (id === clickedIconId) {
      icon.classList.add("active-icon");
      icon.classList.remove("inactive-icon");
    } else {
      icon.classList.remove("active-icon");
      icon.classList.add("inactive-icon");
    }
  });
}

function setActivePage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.style.display = 'none';
  });
  document.getElementById(pageId).style.display = 'block';
}

document.getElementById("homeIcon").addEventListener("click", function(){
  setActiveIcon("homeIcon");
  setActivePage("homePage");
});
document.getElementById("mapIcon").addEventListener("click", function(){
  setActiveIcon("mapIcon");
  setActivePage("liveMapPage");
});
document.getElementById("ticketIcon").addEventListener("click", function(){
  setActiveIcon("ticketIcon");
  setActivePage("ticketPage");
});
document.getElementById("profileIcon").addEventListener("click", function(){
  setActiveIcon("profileIcon");
  setActivePage("profilePage");
});

// Column Toggle for Event Stream with Mobile Detection
let columnCount = 1;
document.getElementById("columnToggle").addEventListener("click", function() {
  // Detect small screen; limit max columns to 2 on mobile, 4 on desktop
  const maxColumns = window.innerWidth < 600 ? 2 : 4;
  columnCount++;
  if (columnCount > maxColumns) {
    columnCount = 1;
  }
  document.getElementById("eventList").style.gridTemplateColumns = `repeat(${columnCount}, 1fr)`;
  this.textContent = "Columns: " + columnCount;
});

// Cart functionality
let cart = [];
function addTicketToCart(eventId) {
  const event = events.find(ev => ev.id === eventId);
  if (!event || event.price === undefined) return;
  const cartItem = cart.find(item => item.id === eventId);
  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push({
      id: event.id,
      eventTitle: event.eventTitle,
      price: event.price,
      quantity: 1
    });
  }
  renderCart();
  alert(`Added ticket for "${event.eventTitle}" to your cart.`);
}

function renderCart() {
  const cartList = document.getElementById("cartList");
  if (cart.length === 0) {
    cartList.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cartList.innerHTML = "";
    cart.forEach(item => {
      cartList.innerHTML += `
        <div class="cart-item">
          <span class="cart-event-title">${item.eventTitle}</span>
          <div class="cart-controls">
            <button class="decrease-btn" data-event-id="${item.id}">–</button>
            <span class="item-quantity">${item.quantity}</span>
            <button class="increase-btn" data-event-id="${item.id}">+</button>
            <span class="item-subtotal">Subtotal: $${(item.quantity * item.price).toFixed(2)}</span>
          </div>
        </div>
      `;
    });
  }
  let total = 0;
  cart.forEach(item => {
    total += item.quantity * item.price;
  });
  document.getElementById("totalPrice").textContent = total.toFixed(2);
}

document.getElementById("cartList").addEventListener("click", function(e) {
  if (e.target && e.target.classList.contains("increase-btn")) {
    const eventId = parseInt(e.target.getAttribute("data-event-id"));
    const cartItem = cart.find(item => item.id === eventId);
    if (cartItem) {
      cartItem.quantity++;
      renderCart();
    }
  } else if (e.target && e.target.classList.contains("decrease-btn")) {
    const eventId = parseInt(e.target.getAttribute("data-event-id"));
    const cartItem = cart.find(item => item.id === eventId);
    if (cartItem) {
      cartItem.quantity--;
      if (cartItem.quantity <= 0) {
        cart = cart.filter(item => item.id !== eventId);
      }
      renderCart();
    }
  }
});

document.addEventListener("click", function(e) {
  if (e.target && e.target.id === "checkoutButton") {
    if (cart.length === 0) {
      alert("Your cart is empty.");
    } else {
      alert("Checkout feature not implemented yet.");
    }
  }
});

// Initialize on DOMContentLoaded
document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("guestUsername").textContent = "Guest#" + (Math.floor(Math.random() * 90000) + 10000);
  document.getElementById("guestIcon").textContent = "G";
  populateDateTimeDropdowns();
  renderUserEvents();
  updateProfileActions();
});
