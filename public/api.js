const API = {
  async getLastWorkout() {
    let res;
    try {
      res = await fetch("/api/workouts");
    } catch (err) {
      console.log(err)
    }
    const json = await res.json();    

    return json[json.length - 1];
  },
  async addExercise(data) {
    
    const id = location.search.split("=")[1];

    const res = await fetch("/api/workouts/" + id, {
      // Post not put
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },

  async createWorkout(data = {}) {
    console.log("FRONT END DATA", data);
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    return json;
  },

  async getWorkoutsInRange() {
    
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();

    return json;
  },
};
